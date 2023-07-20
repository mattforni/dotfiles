"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const vscode_test_adapter_api_1 = require("vscode-test-adapter-api");
const vscode_test_adapter_util_1 = require("vscode-test-adapter-util");
const adapter_1 = require("./adapter");
async function activate(context) {
    let logWorkspaceFolder = (vscode.workspace.workspaceFolders || [])[0];
    let log = new vscode_test_adapter_util_1.Log('rubyTestExplorer', logWorkspaceFolder, 'Ruby Test Explorer Log');
    context.subscriptions.push(log);
    const testExplorerExtension = vscode.extensions.getExtension(vscode_test_adapter_api_1.testExplorerExtensionId);
    if (log.enabled) {
        log.info(`Test Explorer ${testExplorerExtension ? '' : 'not '}found`);
    }
    let testFramework = vscode.workspace.getConfiguration('rubyTestExplorer', null).get('testFramework') || 'none';
    if (testExplorerExtension && testFramework !== "none") {
        const testHub = testExplorerExtension.exports;
        context.subscriptions.push(new vscode_test_adapter_util_1.TestAdapterRegistrar(testHub, workspaceFolder => new adapter_1.RubyAdapter(workspaceFolder, log, context), log));
    }
}
exports.activate = activate;
//# sourceMappingURL=main.js.map