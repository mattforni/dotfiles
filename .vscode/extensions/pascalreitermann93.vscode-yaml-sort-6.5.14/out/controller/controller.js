"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const vscode_1 = require("vscode");
const js_yaml_adapter_1 = require("../adapter/js-yaml-adapter");
const vs_code_adapter_1 = require("../adapter/vs-code-adapter");
const lib_1 = require("../lib");
const settings_1 = require("../settings");
const error_util_1 = require("../util/error-util");
const file_util_1 = require("../util/file-util");
const yaml_util_1 = require("../util/yaml-util");
class Controller {
    constructor() {
        this.fileutil = new file_util_1.FileUtil();
        this.yamlutil = new yaml_util_1.YamlUtil();
        this.jsyamladapter = new js_yaml_adapter_1.JsYamlAdapter();
        this.vscodeadapter = new vs_code_adapter_1.VsCodeAdapter();
        this.errorutil = new error_util_1.ErrorUtil();
        this.settings = new settings_1.Settings();
        if (vscode_1.window.activeTextEditor) {
            this.editor = vscode_1.window.activeTextEditor;
        }
        else {
            throw new Error("No texteditor is active");
        }
    }
    validateYamlWrapper() {
        const text = vs_code_adapter_1.VsCodeAdapter.getActiveDocument(this.editor);
        try {
            this.jsyamladapter.validateYaml(text);
            this.vscodeadapter.showMessage(vs_code_adapter_1.Severity.INFO, "YAML is valid.");
            return true;
        }
        catch (error) {
            this.errorutil.handleError(error);
        }
        return false;
    }
    /**
     * Sorts all yaml files in a directory
     * @param {Uri} uri Base URI
     */
    sortYamlFiles(uri) {
        const files = this.fileutil.getFiles(uri.fsPath);
        files.forEach((file) => {
            this.sortFile(file);
        });
    }
    sortFile(file) {
        try {
            this.fileutil.sortFile(file);
        }
        catch (error) {
            this.errorutil.handleError(error);
        }
    }
    formatYamlWrapper() {
        let doc = vs_code_adapter_1.VsCodeAdapter.getActiveDocument(this.editor);
        let delimiters = this.yamlutil.getDelimiters(doc, true);
        // remove yaml metadata tags
        const matchMetadata = /^%.*\n/gm;
        // set metadata tags, if there is no metadata tag it should be an emtpy array
        if (matchMetadata.test(doc)) {
            delimiters.shift();
            delimiters = (0, lib_1.removeLeadingLineBreakOfFirstElement)(delimiters);
        }
        doc = doc.replace(matchMetadata, "");
        doc = doc.replace(/^\n/, "");
        const yamls = (0, yaml_util_1.splitYaml)(doc);
        let newText = "";
        for (const unformattedYaml of yamls) {
            const formattedYaml = this.yamlutil.formatYaml(unformattedYaml, false);
            if (formattedYaml) {
                newText += delimiters.shift() + formattedYaml;
            }
            else {
                return [];
            }
        }
        newText = this.yamlutil.setLeadingDashes(newText);
        return this.applyEdits(newText);
    }
    applyEdits(text) {
        const edits = vs_code_adapter_1.VsCodeAdapter.getEdits(this.editor, text);
        vs_code_adapter_1.VsCodeAdapter.applyEdits([edits]);
        return [edits];
    }
    sortYamlWrapper(customSort = 0) {
        const textRange = vs_code_adapter_1.VsCodeAdapter.getRange(this.editor);
        let text = vs_code_adapter_1.VsCodeAdapter.getText(this.editor, textRange);
        try {
            (0, yaml_util_1.validateTextRange)(text);
            this.jsyamladapter.validateYaml(text);
        }
        catch (error) {
            this.errorutil.handleError(error);
            return [];
        }
        let delimiters = this.yamlutil.getDelimiters(text, this.editor.selection.isEmpty);
        // remove yaml metadata tags
        const matchMetadata = /^%.*\n/gm;
        // set metadata tags, if there is no metadata tag it should be an emtpy array
        if (matchMetadata.test(text)) {
            delimiters.shift();
            delimiters = (0, lib_1.removeLeadingLineBreakOfFirstElement)(delimiters);
        }
        text = text.replace(matchMetadata, "");
        text = text.replace(/^\n/, "");
        // sort yaml
        let newText = "";
        (0, yaml_util_1.splitYaml)(text).forEach((unsortedYaml) => {
            let sortedYaml = this.yamlutil.sortYaml(unsortedYaml, customSort);
            if (sortedYaml) {
                if (!this.editor.selection.isEmpty) {
                    // get number of leading whitespaces, these whitespaces will be used for indentation
                    const indentation = yaml_util_1.YamlUtil.getNumberOfLeadingSpaces(unsortedYaml);
                    sortedYaml = (0, lib_1.prependWhitespacesOnEachLine)(sortedYaml, indentation);
                }
                newText += delimiters.shift() + sortedYaml;
            }
            else {
                return [];
            }
        });
        if (this.editor.selection.isEmpty) {
            newText = this.yamlutil.setLeadingDashes(newText);
        }
        this.vscodeadapter.showMessage(vs_code_adapter_1.Severity.INFO, "Keys resorted successfully");
        return this.applyEdits(newText);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map