"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tests = void 0;
const vscode = require("vscode");
const split2 = require("split2");
class Tests {
    constructor(context, testStatesEmitter, log, workspace) {
        this.handleChildProcess = async (process) => new Promise((resolve, reject) => {
            this.currentChildProcess = process;
            this.currentChildProcess.on('exit', () => {
                this.log.info('Child process has exited. Sending test run finish event.');
                this.currentChildProcess = undefined;
                this.testStatesEmitter.fire({ type: 'finished' });
                resolve('{}');
            });
            this.currentChildProcess.stderr.pipe(split2()).on('data', (data) => {
                data = data.toString();
                this.log.debug(`[CHILD PROCESS OUTPUT] ${data}`);
                if (data.startsWith('Fast Debugger') && this.debugCommandStartedResolver) {
                    this.debugCommandStartedResolver();
                }
            });
            this.currentChildProcess.stdout.pipe(split2()).on('data', (data) => {
                data = data.toString();
                this.log.debug(`[CHILD PROCESS OUTPUT] ${data}`);
                if (data.startsWith('PASSED:')) {
                    data = data.replace('PASSED: ', '');
                    this.testStatesEmitter.fire({ type: 'test', test: data, state: 'passed' });
                }
                else if (data.startsWith('FAILED:')) {
                    data = data.replace('FAILED: ', '');
                    this.testStatesEmitter.fire({ type: 'test', test: data, state: 'failed' });
                }
                else if (data.startsWith('RUNNING:')) {
                    data = data.replace('RUNNING: ', '');
                    this.testStatesEmitter.fire({ type: 'test', test: data, state: 'running' });
                }
                else if (data.startsWith('PENDING:')) {
                    data = data.replace('PENDING: ', '');
                    this.testStatesEmitter.fire({ type: 'test', test: data, state: 'skipped' });
                }
                if (data.includes('START_OF_TEST_JSON')) {
                    resolve(data);
                }
            });
        });
        this.runTests = async (tests, debuggerConfig) => {
            let testSuite = await this.tests();
            for (const suiteOrTestId of tests) {
                const node = this.findNode(testSuite, suiteOrTestId);
                if (node) {
                    await this.runNode(node, debuggerConfig);
                }
            }
        };
        this.context = context;
        this.testStatesEmitter = testStatesEmitter;
        this.log = log;
        this.workspace = workspace;
    }
    async loadTests() {
        let output = await this.initTests();
        this.log.debug('Passing raw output from dry-run into getJsonFromOutput.');
        this.log.debug(`${output}`);
        output = Tests.getJsonFromOutput(output);
        this.log.debug('Parsing the below JSON:');
        this.log.debug(`${output}`);
        let testMetadata;
        try {
            testMetadata = JSON.parse(output);
        }
        catch (error) {
            this.log.error(`JSON parsing failed: ${error}`);
        }
        let tests = [];
        testMetadata.examples.forEach((test) => {
            let test_location_array = test.id.substring(test.id.indexOf("[") + 1, test.id.lastIndexOf("]")).split(':');
            let test_location_string = test_location_array.join('');
            test.location = parseInt(test_location_string);
            tests.push(test);
        });
        let testSuite = await this.getBaseTestSuite(tests);
        testSuite.children.forEach((suite) => {
            suite.children.sort((a, b) => {
                if (a.type === "test" && b.type === "test") {
                    let aLocation = this.getTestLocation(a);
                    let bLocation = this.getTestLocation(b);
                    return aLocation - bLocation;
                }
                else {
                    return 0;
                }
            });
        });
        this.testSuite = testSuite;
        return Promise.resolve(testSuite);
    }
    killChild() {
        if (this.currentChildProcess) {
            this.currentChildProcess.kill();
        }
    }
    getFilePattern() {
        let pattern = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('filePattern');
        return pattern || ['*_test.rb', 'test_*.rb'];
    }
    static getJsonFromOutput(output) {
        output = output.substring(output.indexOf('START_OF_TEST_JSON{'), output.lastIndexOf('}END_OF_TEST_JSON') + 1);
        return output.substring(output.indexOf("{"), output.lastIndexOf("}") + 1);
    }
    getTestLocation(test) {
        return parseInt(test.id.substring(test.id.indexOf("[") + 1, test.id.lastIndexOf("]")).split(':').join(''));
    }
    snakeToPascalCase(string) {
        if (string.includes('/')) {
            return string;
        }
        return string.split("_").map(substr => substr.charAt(0).toUpperCase() + substr.slice(1)).join("");
    }
    sortTestSuiteChildren(testSuiteChildren) {
        testSuiteChildren = testSuiteChildren.sort((a, b) => {
            let comparison = 0;
            if (a.label > b.label) {
                comparison = 1;
            }
            else if (a.label < b.label) {
                comparison = -1;
            }
            return comparison;
        });
        return testSuiteChildren;
    }
    getTestSuiteForFile({ tests, currentFile, directory }) {
        let currentFileTests = tests.filter(test => {
            return test.file_path === currentFile;
        });
        let currentFileTestsInfo = currentFileTests;
        currentFileTestsInfo.forEach((test) => {
            test.type = 'test';
            test.label = '';
        });
        let currentFileLabel = '';
        if (directory) {
            currentFileLabel = currentFile.replace(`${this.getTestDirectory()}${directory}/`, '');
        }
        else {
            currentFileLabel = currentFile.replace(`${this.getTestDirectory()}`, '');
        }
        let pascalCurrentFileLabel = this.snakeToPascalCase(currentFileLabel.replace('_spec.rb', ''));
        let currentFileTestInfoArray = currentFileTests.map((test) => {
            let filePath = `${this.workspace.uri.fsPath}${test.file_path.substr(1)}`;
            let testLocationArray = test.id.substring(test.id.indexOf("[") + 1, test.id.lastIndexOf("]")).split(':').map((x) => {
                return parseInt(x);
            });
            let testNumber = testLocationArray[testLocationArray.length - 1];
            let description = test.description.startsWith('example at ') ? `${test.full_description}test #${testNumber}` : test.full_description;
            if (!pascalCurrentFileLabel.includes('/') && description.startsWith(pascalCurrentFileLabel)) {
                let regexString = `${pascalCurrentFileLabel}[ ]?`;
                let regex = new RegExp(regexString, "g");
                description = description.replace(regex, '');
            }
            let testInfo = {
                type: 'test',
                id: test.id,
                label: description,
                file: filePath,
                line: test.line_number - 1
            };
            return testInfo;
        });
        let currentFileAsAbsolutePath = `${this.workspace.uri.fsPath}${currentFile.substr(1)}`;
        let currentFileTestSuite = {
            type: 'suite',
            id: currentFile,
            label: currentFileLabel,
            file: currentFileAsAbsolutePath,
            children: currentFileTestInfoArray
        };
        return currentFileTestSuite;
    }
    async getBaseTestSuite(tests) {
        let rootTestSuite = {
            type: 'suite',
            id: 'root',
            label: `${this.workspace.name} ${this.testFrameworkName}`,
            children: []
        };
        let uniqueFiles = [...new Set(tests.map((test) => test.file_path))];
        let splitFilesArray = [];
        uniqueFiles.forEach((file) => {
            splitFilesArray.push(file.replace(`${this.getTestDirectory()}`, "").split('/'));
        });
        let subdirectories = [];
        splitFilesArray.forEach((splitFile) => {
            if (splitFile.length > 1) {
                subdirectories.push(splitFile[0]);
            }
        });
        subdirectories = [...new Set(subdirectories)];
        subdirectories.forEach((directory) => {
            let filesInDirectory = [];
            let uniqueFilesInDirectory = uniqueFiles.filter((file) => {
                return file.startsWith(`${this.getTestDirectory()}${directory}/`);
            });
            uniqueFilesInDirectory.forEach((currentFile) => {
                let currentFileTestSuite = this.getTestSuiteForFile({ tests, currentFile, directory });
                filesInDirectory.push(currentFileTestSuite);
            });
            let directoryTestSuite = {
                type: 'suite',
                id: directory,
                label: directory,
                children: filesInDirectory
            };
            rootTestSuite.children.push(directoryTestSuite);
        });
        rootTestSuite.children = this.sortTestSuiteChildren(rootTestSuite.children);
        let topDirectoryFiles = uniqueFiles.filter((filePath) => {
            return filePath.replace(`${this.getTestDirectory()}`, "").split('/').length === 1;
        });
        topDirectoryFiles.forEach((currentFile) => {
            let currentFileTestSuite = this.getTestSuiteForFile({ tests, currentFile });
            rootTestSuite.children.push(currentFileTestSuite);
        });
        return rootTestSuite;
    }
    findNode(searchNode, id) {
        if (searchNode.id === id) {
            return searchNode;
        }
        else if (searchNode.type === 'suite') {
            for (const child of searchNode.children) {
                const found = this.findNode(child, id);
                if (found)
                    return found;
            }
        }
        return undefined;
    }
    async runNode(node, debuggerConfig) {
        if (node.type === 'suite' && node.id === 'root') {
            this.testStatesEmitter.fire({ type: 'test', test: node.id, state: 'running' });
            let testOutput = await this.runFullTestSuite(debuggerConfig);
            testOutput = Tests.getJsonFromOutput(testOutput);
            this.log.debug('Parsing the below JSON:');
            this.log.debug(`${testOutput}`);
            let testMetadata = JSON.parse(testOutput);
            let tests = testMetadata.examples;
            if (tests && tests.length > 0) {
                tests.forEach((test) => {
                    this.handleStatus(test);
                });
            }
            this.testStatesEmitter.fire({ type: 'suite', suite: node.id, state: 'completed' });
        }
        else if (node.type === 'suite' && node.label.endsWith('.rb')) {
            this.testStatesEmitter.fire({ type: 'suite', suite: node.id, state: 'running' });
            let testOutput = await this.runTestFile(`${node.file}`, debuggerConfig);
            testOutput = Tests.getJsonFromOutput(testOutput);
            this.log.debug('Parsing the below JSON:');
            this.log.debug(`${testOutput}`);
            let testMetadata = JSON.parse(testOutput);
            let tests = testMetadata.examples;
            if (tests && tests.length > 0) {
                tests.forEach((test) => {
                    this.handleStatus(test);
                });
            }
            this.testStatesEmitter.fire({ type: 'suite', suite: node.id, state: 'completed' });
        }
        else if (node.type === 'suite') {
            this.testStatesEmitter.fire({ type: 'suite', suite: node.id, state: 'running' });
            for (const child of node.children) {
                await this.runNode(child, debuggerConfig);
            }
            this.testStatesEmitter.fire({ type: 'suite', suite: node.id, state: 'completed' });
        }
        else if (node.type === 'test') {
            if (node.file !== undefined && node.line !== undefined) {
                this.testStatesEmitter.fire({ type: 'test', test: node.id, state: 'running' });
                let testOutput = await this.runSingleTest(`${node.file}:${node.line + 1}`, debuggerConfig);
                testOutput = Tests.getJsonFromOutput(testOutput);
                this.log.debug('Parsing the below JSON:');
                this.log.debug(`${testOutput}`);
                let testMetadata = JSON.parse(testOutput);
                let currentTest = testMetadata.examples[0];
                this.handleStatus(currentTest);
            }
        }
    }
    async debugCommandStarted() {
        return new Promise(async (resolve, reject) => {
            this.debugCommandStartedResolver = resolve;
            setTimeout(() => { reject("debugCommandStarted timed out"); }, 10000);
        });
    }
    getRubyScriptsLocation() {
        return this.context.asAbsolutePath('./ruby');
    }
}
exports.Tests = Tests;
//# sourceMappingURL=tests.js.map