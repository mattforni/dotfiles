"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
let terminals = {};
let TERMINAL_NAME = 'RSpec Run File';
let lastExecuted = '';
const SETTINGS_RSPEC_COMMAND_KEY = 'vscode-run-rspec-file.custom-command';
const SETTINGS_RSPEC_FOLDER = 'vscode-run-rspec-file.folder';
const SETTINGS_SUFFIX_FILE = 'vscode-run-rspec-file.suffix';
function getWorkspacePath() {
    const folderPaths = vscode.workspace.workspaceFolders.map((workspaceFolder) => workspaceFolder.uri.path);
    return folderPaths.find((path) => getFilename().includes(path));
}
function getAsRelativePath() {
    const workspaceProjectPath = getWorkspacePath();
    const rootFile = getFilename().replace(workspaceProjectPath, '');
    const isApp = /^\/app\//.test(rootFile);
    const isSpec = /^\/spec\//.test(rootFile);
    const isLib = /^\/lib\//.test(rootFile);
    if (isApp) {
        const indexOfAppFolder = rootFile.indexOf('/app/');
        return rootFile.substr(indexOfAppFolder + 1);
    }
    else if (isSpec) {
        const indexOfSpecFolder = rootFile.indexOf('/spec/');
        return rootFile.substr(indexOfSpecFolder + 1);
    }
    else if (isLib) {
        const indexOfLibFolder = rootFile.indexOf('/lib/');
        return rootFile.substr(indexOfLibFolder + 1);
    }
    return '';
}
function getFilePath(path) {
    let regex = /^(app\/)|(\.rb)|(_spec.rb)|(spec\/)/gi;
    let value = (path || getAsRelativePath()).replace(regex, '');
    return value;
}
function getCurrentFilePath() {
    let filepath = '';
    let filename = getOriginalFile();
    if (isSpecFolder()) {
        if (isLibFolder()) {
            filepath = filename;
        }
        else {
            filepath = `app/${filename}`;
        }
    }
    else {
        filepath = getSpecFilePath();
    }
    return filepath;
}
function getOriginalFile() {
    return getSpecFilePath()
        .replace(/spec\//g, '')
        .replace(/(_spec|_test)?.rb$/, '.rb');
}
function getSpecFilePath(path) {
    return `${getRSpecFolder()}/${getFilePath(path)}_${getSuffixFile()}.rb`;
}
function isSpecFolder() {
    return getFilename().indexOf('/spec/') !== -1;
}
function isLibFolder() {
    return getFilename().indexOf('/lib/') !== -1;
}
function getTerminal() {
    let currentTerminal = terminals[TERMINAL_NAME];
    if (!currentTerminal) {
        terminals[TERMINAL_NAME] = vscode.window.createTerminal(TERMINAL_NAME);
    }
    return terminals[TERMINAL_NAME];
}
function getFilename() {
    return vscode.window.activeTextEditor.document.uri.path;
}
function getActiveLine() {
    return vscode.window.activeTextEditor.selection.active.line + 1;
}
function execCommand(commandText) {
    let terminal = getTerminal();
    terminal.sendText(commandText);
    terminal.show();
    lastExecuted = commandText;
}
function bundleRspecAll() {
    execCommand(getRSpecCommand());
}
function bundleRspecFile() {
    let specFilename = getSpecFilePath();
    let commandText = `${getRSpecCommand()} ${specFilename}`;
    execCommand(commandText);
}
function bundleRspecLine() {
    let specFilename = getSpecFilePath();
    let commandText = `${getRSpecCommand()} ${specFilename}:${getActiveLine()}`;
    execCommand(commandText);
}
function bundleRspecLastExecuted() {
    if (lastExecuted) {
        execCommand(lastExecuted);
    }
    else {
        vscode.window.showWarningMessage('RSpec : Not found last command executed');
    }
}
function bundleRspecOpenedFiles() {
    let documents = vscode.workspace.textDocuments;
    const workspacePath = getWorkspacePath();
    let cache = {};
    let filePathsUri = documents.map((o) => {
        if (o.uri.path.endsWith('.rb')) {
            let file = o.uri.path.replace(workspacePath, '');
            if (file.startsWith('/')) {
                file = file.substring(1);
            }
            let uri = getSpecFilePath(file);
            cache[uri] = uri;
            return uri;
        }
    });
    filePathsUri = Object.keys(cache).filter((o) => !!o);
    if (filePathsUri.length <= 0) {
        return vscode.window.showInformationMessage('Not found opened spec files');
    }
    let specFilename = filePathsUri.join(' ');
    let commandText = `${getRSpecCommand()} ${specFilename}`;
    execCommand(commandText);
}
function getRSpecCommand() {
    return vscode.workspace.getConfiguration().get(SETTINGS_RSPEC_COMMAND_KEY);
}
function getRSpecFolder() {
    return vscode.workspace.getConfiguration().get(SETTINGS_RSPEC_FOLDER) || 'spec';
}
function getSuffixFile() {
    return vscode.workspace.getConfiguration().get(SETTINGS_SUFFIX_FILE) || 'spec';
}
function clearTerminal() {
    vscode.window.activeTextEditor.document.save();
    return vscode.commands.executeCommand('workbench.action.terminal.clear');
}
function bundleRspecFolder() {
    vscode.window.showWarningMessage('RSpec: Run all files this folder!');
}
function toggleFile() {
    return __awaiter(this, void 0, void 0, function* () {
        let uri = vscode.Uri.file(`${vscode.workspace.rootPath}/${getCurrentFilePath()}`);
        return vscode.commands.executeCommand('vscode.open', uri);
    });
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.runOpenSpec', toggleFile));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runAllFilesFolder', () => {
        clearTerminal().then(() => bundleRspecFolder());
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runAllOpenedFiles', () => {
        clearTerminal().then(() => bundleRspecOpenedFiles());
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runAllFilesOnRspec', () => {
        clearTerminal().then(() => bundleRspecAll());
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runFileOnRspec', () => {
        clearTerminal().then(() => bundleRspecFile());
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runLineOnRspec', () => {
        clearTerminal().then(() => {
            if (isSpecFolder()) {
                bundleRspecLine();
            }
            else {
                vscode.window.showWarningMessage('RSpec Line: only spec folder');
            }
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.runOnLastSpec', () => {
        clearTerminal().then(() => bundleRspecLastExecuted());
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
vscode.window.onDidCloseTerminal((terminal) => {
    if (terminals[terminal.name]) {
        delete terminals[terminal.name];
    }
});
//# sourceMappingURL=extension.js.map