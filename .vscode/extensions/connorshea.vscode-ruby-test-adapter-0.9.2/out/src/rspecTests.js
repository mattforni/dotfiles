"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RspecTests = void 0;
const vscode = require("vscode");
const childProcess = require("child_process");
const tests_1 = require("./tests");
class RspecTests extends tests_1.Tests {
    constructor() {
        super(...arguments);
        this.testFrameworkName = 'RSpec';
        this.tests = async () => new Promise((resolve, reject) => {
            try {
                let rspecTests = this.testSuite ? this.testSuite : this.loadTests();
                return resolve(rspecTests);
            }
            catch (err) {
                if (err instanceof Error) {
                    this.log.error(`Error while attempting to load RSpec tests: ${err.message}`);
                    return reject(err);
                }
            }
        });
        this.initTests = async () => new Promise((resolve, reject) => {
            let cmd = `${this.getTestCommandWithFilePattern()} --require ${this.getCustomFormatterLocation()}`
                + ` --format CustomFormatter --order defined --dry-run`;
            this.log.info(`Running dry-run of RSpec test suite with the following command: ${cmd}`);
            const execArgs = {
                cwd: this.workspace.uri.fsPath,
                maxBuffer: 8192 * 8192
            };
            childProcess.exec(cmd, execArgs, (err, stdout) => {
                if (err) {
                    this.log.error(`Error while finding RSpec test suite: ${err.message}`);
                    vscode.window.showWarningMessage("Ruby Test Explorer failed to find an RSpec test suite. Make sure RSpec is installed and your configured RSpec command is correct.", "View error message").then(selection => {
                        if (selection === "View error message") {
                            let outputJson = JSON.parse(tests_1.Tests.getJsonFromOutput(stdout));
                            let outputChannel = vscode.window.createOutputChannel('Ruby Test Explorer Error Message');
                            if (outputJson.messages.length > 0) {
                                let outputJsonString = outputJson.messages.join("\n\n");
                                let outputJsonArray = outputJsonString.split("\n");
                                outputJsonArray.forEach((line) => {
                                    outputChannel.appendLine(line);
                                });
                            }
                            else {
                                outputChannel.append(err.message);
                            }
                            outputChannel.show(false);
                        }
                    });
                    throw err;
                }
                resolve(stdout);
            });
        });
        this.runSingleTest = async (testLocation, debuggerConfig) => new Promise(async (resolve, reject) => {
            this.log.info(`Running single test: ${testLocation}`);
            const spawnArgs = {
                cwd: this.workspace.uri.fsPath,
                shell: true,
                env: this.getProcessEnv()
            };
            let testCommand = `${this.testCommandWithFormatterAndDebugger(debuggerConfig)} '${testLocation}'`;
            this.log.info(`Running command: ${testCommand}`);
            let testProcess = childProcess.spawn(testCommand, spawnArgs);
            resolve(await this.handleChildProcess(testProcess));
        });
        this.runTestFile = async (testFile, debuggerConfig) => new Promise(async (resolve, reject) => {
            this.log.info(`Running test file: ${testFile}`);
            const spawnArgs = {
                cwd: this.workspace.uri.fsPath,
                shell: true
            };
            let testCommand = `${this.testCommandWithFormatterAndDebugger(debuggerConfig)} '${testFile}'`;
            this.log.info(`Running command: ${testCommand}`);
            let testProcess = childProcess.spawn(testCommand, spawnArgs);
            resolve(await this.handleChildProcess(testProcess));
        });
        this.runFullTestSuite = async (debuggerConfig) => new Promise(async (resolve, reject) => {
            this.log.info(`Running full test suite.`);
            const spawnArgs = {
                cwd: this.workspace.uri.fsPath,
                shell: true
            };
            let testCommand = this.testCommandWithFormatterAndDebugger(debuggerConfig);
            this.log.info(`Running command: ${testCommand}`);
            let testProcess = childProcess.spawn(testCommand, spawnArgs);
            resolve(await this.handleChildProcess(testProcess));
        });
    }
    getTestCommand() {
        let command = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('rspecCommand');
        return command || `bundle exec rspec`;
    }
    getDebugCommand(debuggerConfig, args) {
        let command = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('debugCommand') ||
            'rdebug-ide';
        return (`${command} --host ${debuggerConfig.remoteHost} --port ${debuggerConfig.remotePort}` +
            ` -- ${process.platform == 'win32' ? '%EXT_DIR%' : '$EXT_DIR'}/debug_rspec.rb ${args}`);
    }
    getTestCommandWithFilePattern() {
        let command = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('rspecCommand');
        const dir = this.getTestDirectory();
        let pattern = this.getFilePattern().map(p => `${dir}/**/${p}`).join(',');
        command = command || `bundle exec rspec`;
        return `${command} --pattern '${pattern}'`;
    }
    getTestDirectory() {
        let directory = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('rspecDirectory');
        return directory || './spec/';
    }
    getCustomFormatterLocation() {
        return this.context.asAbsolutePath('./custom_formatter.rb');
    }
    testCommandWithFormatterAndDebugger(debuggerConfig) {
        let args = `--require ${this.getCustomFormatterLocation()} --format CustomFormatter`;
        let cmd = `${this.getTestCommand()} ${args}`;
        if (debuggerConfig) {
            cmd = this.getDebugCommand(debuggerConfig, args);
        }
        return cmd;
    }
    getProcessEnv() {
        return Object.assign({}, process.env, {
            "EXT_DIR": this.getRubyScriptsLocation(),
        });
    }
    handleStatus(test) {
        this.log.debug(`Handling status of test: ${JSON.stringify(test)}`);
        if (test.status === "passed") {
            this.testStatesEmitter.fire({ type: 'test', test: test.id, state: 'passed' });
        }
        else if (test.status === "failed" && test.pending_message === null) {
            let errorMessageNoLinebreaks = test.exception.message.replace(/(\r\n|\n|\r)/, ' ');
            let errorMessage = `${test.exception.class}:\n${errorMessageNoLinebreaks}`;
            let fileBacktraceLineNumber;
            let filePath = test.file_path.replace('./', '');
            if (test.exception.backtrace) {
                errorMessage += `\n\nBacktrace:\n`;
                test.exception.backtrace.forEach((line) => {
                    errorMessage += `${line}\n`;
                    if (line.includes(filePath)) {
                        let filePathArray = filePath.split('/');
                        let fileName = filePathArray[filePathArray.length - 1];
                        let regex = new RegExp(`${fileName}\:(\\d+)`);
                        let match = line.match(regex);
                        if (match && match[1]) {
                            fileBacktraceLineNumber = parseInt(match[1]);
                        }
                    }
                });
            }
            this.testStatesEmitter.fire({
                type: 'test',
                test: test.id,
                state: 'failed',
                message: errorMessage,
                decorations: [{
                        message: errorMessageNoLinebreaks,
                        line: (fileBacktraceLineNumber ? fileBacktraceLineNumber : test.line_number) - 1
                    }]
            });
        }
        else if (test.status === "failed" && test.pending_message !== null) {
            this.testStatesEmitter.fire({ type: 'test', test: test.id, state: 'skipped', message: test.pending_message });
        }
    }
    ;
}
exports.RspecTests = RspecTests;
//# sourceMappingURL=rspecTests.js.map