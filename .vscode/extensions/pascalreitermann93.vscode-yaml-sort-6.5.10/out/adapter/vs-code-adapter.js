"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeAdapter = exports.Severity = void 0;
const vscode_1 = require("vscode");
const settings_1 = require("../settings");
var Severity;
(function (Severity) {
    Severity[Severity["INFO"] = 0] = "INFO";
    Severity[Severity["ERROR"] = 1] = "ERROR";
})(Severity || (exports.Severity = Severity = {}));
class VsCodeAdapter {
    constructor(settings = new settings_1.Settings()) {
        this.section = "vscode-yaml-sort";
        this.settings = settings;
    }
    getProperty(property) {
        return vscode_1.workspace.getConfiguration().get(`${this.section}.${property}`);
    }
    showMessage(severity, message) {
        if (severity === Severity.ERROR) {
            vscode_1.window.showErrorMessage(message);
        }
        else {
            this.notify(message);
        }
    }
    notify(message) {
        if (this.settings.notifySuccess) {
            vscode_1.window.showInformationMessage(message);
        }
    }
    static registerFormatter(formatter) {
        vscode_1.languages.registerDocumentFormattingEditProvider("yaml", formatter);
    }
    static getText(textEditor, range) {
        return textEditor.document.getText(range);
    }
    static getFullDocumentRange(textEditor) {
        return new vscode_1.Range(new vscode_1.Position(0, 0), new vscode_1.Position(textEditor.document.lineCount + 1, 0));
    }
    static getSelectedRange(textEditor) {
        let endLine = textEditor.selection.end.line;
        // if selection ends on the first character on a new line ignore this line
        if (textEditor.selection.end.character === 0) {
            endLine--;
        }
        // ensure selection covers whole start and end line
        return new vscode_1.Selection(textEditor.selection.start.line, 0, endLine, textEditor.document.lineAt(endLine).range.end.character);
    }
    /**
    * Applys edits to a text editor
    * @param activeEditor Editor to apply the changes
    * @param edits Changes to apply
    */
    static applyEdits(edit) {
        if (vscode_1.window.activeTextEditor) {
            const workspaceEdit = new vscode_1.WorkspaceEdit();
            workspaceEdit.set(vscode_1.window.activeTextEditor.document.uri, edit);
            vscode_1.workspace.applyEdit(workspaceEdit);
        }
    }
    static getActiveDocument(textEditor) {
        return textEditor.document.getText();
    }
    static getRange(textEditor) {
        if (textEditor.selection.isEmpty) {
            return VsCodeAdapter.getFullDocumentRange(textEditor);
        }
        else {
            return VsCodeAdapter.getSelectedRange(textEditor);
        }
    }
    static getEdits(textEditor, text) {
        const range = VsCodeAdapter.getRange(textEditor);
        return vscode_1.TextEdit.replace(range, text);
    }
}
exports.VsCodeAdapter = VsCodeAdapter;
//# sourceMappingURL=vs-code-adapter.js.map