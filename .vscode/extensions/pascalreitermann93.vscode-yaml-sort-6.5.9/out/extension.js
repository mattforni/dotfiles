"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const vs_code_adapter_1 = require("./adapter/vs-code-adapter");
const controller_1 = require("./controller/controller");
const settings_1 = require("./settings");
function activate(context) {
    const formatter = {
        provideDocumentFormattingEdits() {
            const settings = new settings_1.Settings();
            if (settings.doSortOnSave()) {
                return new controller_1.Controller().sortYamlWrapper(settings.sortOnSave);
            }
            else {
                return new controller_1.Controller().formatYamlWrapper();
            }
        }
    };
    vs_code_adapter_1.VsCodeAdapter.registerFormatter(formatter);
    context.subscriptions.push(vscode_1.commands.registerCommand("vscode-yaml-sort.sortYaml", () => {
        new controller_1.Controller().sortYamlWrapper();
    }), vscode_1.commands.registerCommand("vscode-yaml-sort.validateYaml", () => {
        new controller_1.Controller().validateYamlWrapper();
    }), vscode_1.commands.registerCommand("vscode-yaml-sort.formatYaml", () => {
        new controller_1.Controller().formatYamlWrapper();
    }), vscode_1.commands.registerCommand("vscode-yaml-sort.sortYamlFilesInDirectory", (uri) => {
        new controller_1.Controller().sortYamlFiles(uri);
    }));
    for (const index of [1, 2, 3]) {
        context.subscriptions.push(vscode_1.commands.registerCommand(`vscode-yaml-sort.customSortYaml_${index}`, () => {
            new controller_1.Controller().sortYamlWrapper(index);
        }));
    }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map