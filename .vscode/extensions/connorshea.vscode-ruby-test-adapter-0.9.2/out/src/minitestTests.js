"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinitestTests = void 0;
const vscode = require("vscode");
const childProcess = require("child_process");
const tests_1 = require("./tests");
class MinitestTests extends tests_1.Tests {
    constructor() {
        super(...arguments);
        this.testFrameworkName = 'Minitest';
        this.tests = async () => new Promise((resolve, reject) => {
            try {
                let minitestTests = this.testSuite ? this.testSuite : this.loadTests();
                return resolve(minitestTests);
            }
            catch (err) {
                if (err instanceof Error) {
                    this.log.error(`Error while attempting to load Minitest tests: ${err.message}`);
                    return reject(err);
                }
            }
        });
        this.initTests = async () => new Promise((resolve, reject) => {
            let cmd = `${this.getTestCommand()} vscode:minitest:list`;
            const execArgs = {
                cwd: this.workspace.uri.fsPath,
                maxBuffer: 8192 * 8192,
                env: this.getProcessEnv()
            };
            this.log.info(`Getting a list of Minitest tests in suite with the following command: ${cmd}`);
            childProcess.exec(cmd, execArgs, (err, stdout) => {
                if (err) {
                    this.log.error(`Error while finding Minitest test suite: ${err.message}`);
                    this.log.error(`Output: ${stdout}`);
                    vscode.window.showWarningMessage("Ruby Test Explorer failed to find a Minitest test suite. Make sure Minitest is installed and your configured Minitest command is correct.");
                    vscode.window.showErrorMessage(err.message);
                    throw err;
                }
                resolve(stdout);
            });
        });
        this.runSingleTest = async (testLocation, debuggerConfig) => new Promise(async (resolve, reject) => {
            this.log.info(`Running single test: ${testLocation}`);
            let line = testLocation.split(':').pop();
            let relativeLocation = testLocation.split(/:\d+$/)[0].replace(`${this.workspace.uri.fsPath}/`, "");
            const spawnArgs = {
                cwd: this.workspace.uri.fsPath,
                shell: true,
                env: this.getProcessEnv()
            };
            let testCommand = `${this.testCommandWithDebugger(debuggerConfig)} '${relativeLocation}:${line}'`;
            this.log.info(`Running command: ${testCommand}`);
            let testProcess = childProcess.spawn(testCommand, spawnArgs);
            resolve(await this.handleChildProcess(testProcess));
        });
        this.runTestFile = async (testFile, debuggerConfig) => new Promise(async (resolve, reject) => {
            this.log.info(`Running test file: ${testFile}`);
            let relativeFile = testFile.replace(`${this.workspace.uri.fsPath}/`, "").replace(`./`, "");
            const spawnArgs = {
                cwd: this.workspace.uri.fsPath,
                shell: true,
                env: this.getProcessEnv()
            };
            let testCommand = `${this.testCommandWithDebugger(debuggerConfig)} '${relativeFile}'`;
            this.log.info(`Running command: ${testCommand}`);
            let testProcess = childProcess.spawn(testCommand, spawnArgs);
            resolve(await this.handleChildProcess(testProcess));
        });
        this.runFullTestSuite = async (debuggerConfig) => new Promise(async (resolve, reject) => {
            this.log.info(`Running full test suite.`);
            const spawnArgs = {
                cwd: this.workspace.uri.fsPath,
                shell: true,
                env: this.getProcessEnv()
            };
            let testCommand = this.testCommandWithDebugger(debuggerConfig);
            this.log.info(`Running command: ${testCommand}`);
            let testProcess = childProcess.spawn(testCommand, spawnArgs);
            resolve(await this.handleChildProcess(testProcess));
        });
    }
    getTestCommand() {
        let command = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('minitestCommand') || 'bundle exec rake';
        return `${command} -R ${(process.platform == 'win32') ? '%EXT_DIR%' : '$EXT_DIR'}`;
    }
    getDebugCommand(debuggerConfig) {
        let command = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('debugCommand') ||
            'rdebug-ide';
        return (`${command}  --host ${debuggerConfig.remoteHost} --port ${debuggerConfig.remotePort}` +
            ` -- ${process.platform == 'win32' ? '%EXT_DIR%' : '$EXT_DIR'}/debug_minitest.rb`);
    }
    getTestDirectory() {
        let directory = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('minitestDirectory');
        return directory || './test/';
    }
    getRubyScriptsLocation() {
        return this.context.asAbsolutePath('./ruby');
    }
    getProcessEnv() {
        return Object.assign({}, process.env, {
            "RAILS_ENV": "test",
            "EXT_DIR": this.getRubyScriptsLocation(),
            "TESTS_DIR": this.getTestDirectory(),
            "TESTS_PATTERN": this.getFilePattern().join(',')
        });
    }
    testCommandWithDebugger(debuggerConfig) {
        let cmd = `${this.getTestCommand()} vscode:minitest:run`;
        if (debuggerConfig) {
            cmd = this.getDebugCommand(debuggerConfig);
        }
        return cmd;
    }
    handleStatus(test) {
        this.log.debug(`Handling status of test: ${JSON.stringify(test)}`);
        if (test.status === "passed") {
            this.testStatesEmitter.fire({ type: 'test', test: test.id, state: 'passed' });
        }
        else if (test.status === "failed" && test.pending_message === null) {
            let errorMessageShort = test.exception.message;
            let errorMessageLine = test.line_number;
            let errorMessage = test.exception.message;
            if (test.exception.position) {
                errorMessageLine = test.exception.position;
            }
            if (test.exception.backtrace) {
                errorMessage += `\n\nBacktrace:\n`;
                test.exception.backtrace.forEach((line) => {
                    errorMessage += `${line}\n`;
                });
                errorMessage += `\n\nFull Backtrace:\n`;
                test.exception.full_backtrace.forEach((line) => {
                    errorMessage += `${line}\n`;
                });
            }
            this.testStatesEmitter.fire({
                type: 'test',
                test: test.id,
                state: 'failed',
                message: errorMessage,
                decorations: [{
                        message: errorMessageShort,
                        line: errorMessageLine - 1
                    }]
            });
        }
        else if (test.status === "failed" && test.pending_message !== null) {
            this.testStatesEmitter.fire({ type: 'test', test: test.id, state: 'skipped', message: test.pending_message });
        }
    }
    ;
}
exports.MinitestTests = MinitestTests;
//# sourceMappingURL=minitestTests.js.map