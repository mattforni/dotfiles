'use strict';
const cp = require('child_process');
const vscode = require('vscode');
const async_1 = require('./async');
const lineDecoder_1 = require('./lineDecoder');
var RunTrigger;
(function (RunTrigger) {
    RunTrigger[RunTrigger["onSave"] = 0] = "onSave";
    RunTrigger[RunTrigger["onType"] = 1] = "onType";
    RunTrigger[RunTrigger["off"] = 2] = "off";
})(RunTrigger || (RunTrigger = {}));
var RunTrigger;
(function (RunTrigger) {
    RunTrigger.strings = {
        onSave: 'onSave',
        onType: 'onType',
        off: 'off'
    };
    RunTrigger.from = function (value) {
        if (value === 'onType') {
            return RunTrigger.onType;
        }
        else if (value === 'onSave') {
            return RunTrigger.onSave;
        }
        else {
            return RunTrigger.off;
        }
    };
})(RunTrigger || (RunTrigger = {}));
class LintingProvider {
    constructor(linter) {
        this.linter = linter;
        this.executableNotFound = false;
    }
    activate(subscriptions) {
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection();
        subscriptions.push(this);
        vscode.workspace.onDidChangeConfiguration(this.loadConfiguration, this, subscriptions);
        this.loadConfiguration();
        vscode.workspace.onDidOpenTextDocument(this.triggerLint, this, subscriptions);
        vscode.workspace.onDidCloseTextDocument((textDocument) => {
            this.diagnosticCollection.delete(textDocument.uri);
            delete this.delayers[textDocument.uri.toString()];
        }, null, subscriptions);
        // Lint all open documents documents
        vscode.workspace.textDocuments.forEach(this.triggerLint, this);
    }
    dispose() {
        this.diagnosticCollection.clear();
        this.diagnosticCollection.dispose();
    }
    loadConfiguration() {
        let oldExecutable = this.linterConfiguration && this.linterConfiguration.executable;
        this.linterConfiguration = this.linter.loadConfiguration();
        this.delayers = Object.create(null);
        if (this.executableNotFound) {
            this.executableNotFound = oldExecutable === this.linterConfiguration.executable;
        }
        if (this.documentListener) {
            this.documentListener.dispose();
        }
        if (RunTrigger.from(this.linterConfiguration.runTrigger) === RunTrigger.onType) {
            this.documentListener = vscode.workspace.onDidChangeTextDocument((e) => {
                this.triggerLint(e.document);
            });
        }
        else {
            this.documentListener = vscode.workspace.onDidSaveTextDocument(this.triggerLint, this);
        }
        this.documentListener = vscode.workspace.onDidSaveTextDocument(this.triggerLint, this);
        // Configuration has changed. Reevaluate all documents.
        vscode.workspace.textDocuments.forEach(this.triggerLint, this);
    }
    triggerLint(textDocument) {
        if (textDocument.languageId !== this.linter.languageId || this.executableNotFound || RunTrigger.from(this.linterConfiguration.runTrigger) === RunTrigger.off) {
            return;
        }
        let key = textDocument.uri.toString();
        let delayer = this.delayers[key];
        if (!delayer) {
            delayer = new async_1.ThrottledDelayer(RunTrigger.from(this.linterConfiguration.runTrigger) === RunTrigger.onType ? 250 : 0);
            this.delayers[key] = delayer;
        }
        delayer.trigger(() => this.doLint(textDocument));
    }
    doLint(textDocument) {
        return new Promise((resolve, reject) => {
            let executable = this.linterConfiguration.executable;
            let filePath = textDocument.fileName;
            let decoder = new lineDecoder_1.LineDecoder();
            let decoded = [];
            let diagnostics = [];
            let options = vscode.workspace.rootPath ? { cwd: vscode.workspace.rootPath } : undefined;
            let args;
            if (RunTrigger.from(this.linterConfiguration.runTrigger) === RunTrigger.onSave) {
                args = this.linterConfiguration.fileArgs.slice(0);
                args.push(textDocument.fileName);
            }
            else {
                args = this.linterConfiguration.bufferArgs;
            }
            args = args.concat(this.linterConfiguration.extraArgs);
            let childProcess = cp.spawn(executable, args, options);
            childProcess.on('error', (error) => {
                if (this.executableNotFound) {
                    resolve();
                    return;
                }
                let message = null;
                if (error.code === 'ENOENT') {
                    message = `Cannot lint ${textDocument.fileName}. The executable was not found. Use the '${this.linter.languageId}.executablePath' setting to configure the location of the executable`;
                }
                else {
                    message = error.message ? error.message : `Failed to run executable using path: ${executable}. Reason is unknown.`;
                }
                vscode.window.showInformationMessage(message);
                this.executableNotFound = true;
                resolve();
            });
            let onDataEvent = (data) => { decoder.write(data); };
            let onEndEvent = () => {
                decoder.end();
                let lines = decoder.getLines();
                if (lines && lines.length > 0) {
                    diagnostics = this.linter.process(lines);
                }
                this.diagnosticCollection.set(textDocument.uri, diagnostics);
                resolve();
            };
            if (childProcess.pid) {
                if (RunTrigger.from(this.linterConfiguration.runTrigger) === RunTrigger.onType) {
                    childProcess.stdin.write(textDocument.getText());
                    childProcess.stdin.end();
                }
                childProcess.stderr.on('data', onDataEvent);
                childProcess.stderr.on('end', onEndEvent);
                childProcess.stdout.on('data', onDataEvent);
                childProcess.stdout.on('end', onEndEvent);
            }
            else {
                resolve();
            }
        });
    }
}
exports.LintingProvider = LintingProvider;
//# sourceMappingURL=lintingProvider.js.map