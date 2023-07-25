"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubyAdapter = void 0;
const vscode = require("vscode");
const childProcess = require("child_process");
const rspecTests_1 = require("./rspecTests");
const minitestTests_1 = require("./minitestTests");
const path = require("path");
class RubyAdapter {
    constructor(workspace, log, context) {
        this.workspace = workspace;
        this.log = log;
        this.context = context;
        this.disposables = [];
        this.testsEmitter = new vscode.EventEmitter();
        this.testStatesEmitter = new vscode.EventEmitter();
        this.autorunEmitter = new vscode.EventEmitter();
        this.log.info('Initializing Ruby adapter');
        this.disposables.push(this.testsEmitter);
        this.disposables.push(this.testStatesEmitter);
        this.disposables.push(this.autorunEmitter);
        this.disposables.push(this.createWatcher());
        this.disposables.push(this.configWatcher());
    }
    get tests() { return this.testsEmitter.event; }
    get testStates() { return this.testStatesEmitter.event; }
    get autorun() { return this.autorunEmitter.event; }
    async load() {
        this.log.info('Loading Ruby tests...');
        this.testsEmitter.fire({ type: 'started' });
        if (this.getTestFramework() === "rspec") {
            this.log.info('Loading RSpec tests...');
            this.testsInstance = new rspecTests_1.RspecTests(this.context, this.testStatesEmitter, this.log, this.workspace);
            const loadedTests = await this.testsInstance.loadTests();
            this.testsEmitter.fire({ type: 'finished', suite: loadedTests });
        }
        else if (this.getTestFramework() === "minitest") {
            this.log.info('Loading Minitest tests...');
            this.testsInstance = new minitestTests_1.MinitestTests(this.context, this.testStatesEmitter, this.log, this.workspace);
            const loadedTests = await this.testsInstance.loadTests();
            this.testsEmitter.fire({ type: 'finished', suite: loadedTests });
        }
        else {
            this.log.warn('No test framework detected. Configure the rubyTestExplorer.testFramework setting if you want to use the Ruby Test Explorer.');
            this.testsEmitter.fire({ type: 'finished' });
        }
    }
    async run(tests, debuggerConfig) {
        this.log.info(`Running Ruby tests ${JSON.stringify(tests)}`);
        this.testStatesEmitter.fire({ type: 'started', tests });
        if (!this.testsInstance) {
            let testFramework = this.getTestFramework();
            if (testFramework === "rspec") {
                this.testsInstance = new rspecTests_1.RspecTests(this.context, this.testStatesEmitter, this.log, this.workspace);
            }
            else if (testFramework === "minitest") {
                this.testsInstance = new minitestTests_1.MinitestTests(this.context, this.testStatesEmitter, this.log, this.workspace);
            }
        }
        if (this.testsInstance) {
            await this.testsInstance.runTests(tests, debuggerConfig);
        }
    }
    async debug(testsToRun) {
        this.log.info(`Debugging test(s) ${JSON.stringify(testsToRun)} of ${this.workspace.uri.fsPath}`);
        const config = vscode.workspace.getConfiguration('rubyTestExplorer', null);
        const debuggerConfig = {
            name: "Debug Ruby Tests",
            type: "Ruby",
            request: "attach",
            remoteHost: config.get('debuggerHost') || "127.0.0.1",
            remotePort: config.get('debuggerPort') || "1234",
            remoteWorkspaceRoot: "${workspaceRoot}"
        };
        const testRunPromise = this.run(testsToRun, debuggerConfig);
        this.log.info('Starting the debug session');
        let debugSession;
        try {
            await this.testsInstance.debugCommandStarted();
            debugSession = await this.startDebugging(debuggerConfig);
        }
        catch (err) {
            this.log.error('Failed starting the debug session - aborting', err);
            this.cancel();
            return;
        }
        const subscription = this.onDidTerminateDebugSession((session) => {
            if (debugSession != session)
                return;
            this.log.info('Debug session ended');
            this.cancel();
            subscription.dispose();
        });
        await testRunPromise;
    }
    cancel() {
        if (this.testsInstance) {
            this.log.info('Killing currently-running tests.');
            this.testsInstance.killChild();
        }
        else {
            this.log.info('No tests running currently, no process to kill.');
        }
    }
    dispose() {
        this.cancel();
        for (const disposable of this.disposables) {
            disposable.dispose();
        }
        this.disposables = [];
    }
    getTestFramework() {
        if (this.currentTestFramework !== undefined) {
            return this.currentTestFramework;
        }
        let testFramework = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('testFramework');
        if (['rspec', 'minitest', 'none'].includes(testFramework)) {
            this.currentTestFramework = testFramework;
            return testFramework;
        }
        else {
            let detectedTestFramework = this.detectTestFramework();
            this.currentTestFramework = detectedTestFramework;
            return detectedTestFramework;
        }
    }
    detectTestFramework() {
        this.log.info(`Getting a list of Bundler dependencies with 'bundle list'.`);
        const execArgs = {
            cwd: this.workspace.uri.fsPath,
            maxBuffer: 8192 * 8192
        };
        try {
            let err, stdout = childProcess.execSync('bundle list', execArgs);
            if (err) {
                this.log.error(`Error while listing Bundler dependencies: ${err}`);
                this.log.error(`Output: ${stdout}`);
                throw err;
            }
            let bundlerList = stdout.toString();
            if (bundlerList.search('rspec-core') >= 0) {
                this.log.info(`Detected RSpec test framework.`);
                return 'rspec';
            }
            else if (bundlerList.search('minitest') >= 0) {
                this.log.info(`Detected Minitest test framework.`);
                return 'minitest';
            }
            else {
                this.log.info(`Unable to automatically detect a test framework.`);
                return 'none';
            }
        }
        catch (error) {
            this.log.error(error);
            return 'none';
        }
    }
    async startDebugging(debuggerConfig) {
        const debugSessionPromise = new Promise((resolve, reject) => {
            let subscription;
            subscription = vscode.debug.onDidStartDebugSession(debugSession => {
                if ((debugSession.name === debuggerConfig.name) && subscription) {
                    resolve(debugSession);
                    subscription.dispose();
                    subscription = undefined;
                }
            });
            setTimeout(() => {
                if (subscription) {
                    reject(new Error('Debug session failed to start within 5 seconds'));
                    subscription.dispose();
                    subscription = undefined;
                }
            }, 5000);
        });
        const started = await vscode.debug.startDebugging(this.workspace, debuggerConfig);
        if (started) {
            return await debugSessionPromise;
        }
        else {
            throw new Error('Debug session couldn\'t be started');
        }
    }
    onDidTerminateDebugSession(cb) {
        return vscode.debug.onDidTerminateDebugSession(cb);
    }
    getTestDirectory() {
        let testFramework = this.getTestFramework();
        let testDirectory = '';
        if (testFramework === 'rspec') {
            testDirectory =
                vscode.workspace.getConfiguration('rubyTestExplorer', null).get('rspecDirectory')
                    || path.join('.', 'spec');
        }
        else if (testFramework === 'minitest') {
            testDirectory =
                vscode.workspace.getConfiguration('rubyTestExplorer', null).get('minitestDirectory')
                    || path.join('.', 'test');
        }
        if (testDirectory === '') {
            return undefined;
        }
        return path.join(this.workspace.uri.fsPath, testDirectory);
    }
    createWatcher() {
        return vscode.workspace.onDidSaveTextDocument(document => {
            if (this.currentTestFramework === 'none') {
                this.log.info('No test framework configured. Ignoring file change.');
                return;
            }
            const filename = document.uri.fsPath;
            this.log.info(`${filename} was saved - checking if this effects ${this.workspace.uri.fsPath}`);
            if (filename.startsWith(this.workspace.uri.fsPath)) {
                let testDirectory = this.getTestDirectory();
                if (testDirectory !== undefined && filename.startsWith(testDirectory)) {
                    this.log.info('A test file has been edited, reloading tests.');
                    this.load();
                }
                this.log.info('Sending autorun event');
                this.autorunEmitter.fire();
            }
        });
    }
    configWatcher() {
        return vscode.workspace.onDidChangeConfiguration(configChange => {
            this.log.info('Configuration changed');
            if (configChange.affectsConfiguration("rubyTestExplorer")) {
                this.cancel();
                this.currentTestFramework = undefined;
                this.load();
                this.autorunEmitter.fire();
            }
        });
    }
}
exports.RubyAdapter = RubyAdapter;
//# sourceMappingURL=adapter.js.map