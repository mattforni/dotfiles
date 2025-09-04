"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
const cloudformation_js_yaml_schema_1 = require("cloudformation-js-yaml-schema");
const homeassistant_js_yaml_schema_1 = require("homeassistant-js-yaml-schema");
const js_yaml_1 = require("js-yaml");
const vscode_1 = require("vscode");
class Settings {
    constructor() {
        this.filter = "vscode-yaml-sort";
        this.workspace = vscode_1.workspace;
        this.customSortKeywords1 = this.getCustomSortKeywords(1);
        this.customSortKeywords2 = this.getCustomSortKeywords(2);
        this.customSortKeywords3 = this.getCustomSortKeywords(3);
        this.emptyLinesUntilLevel = this.getNumber("emptyLinesUntilLevel");
        this.forceQuotes = this.getBoolean("forceQuotes");
        this.indent = this.getNumber("indent");
        this.lineWidth = this.getNumber("lineWidth");
        this.locale = this.getString("locale");
        this.noArrayIndent = this.getBoolean("noArrayIndent");
        this.noCompatMode = this.getBoolean("noCompatMode");
        this.notifySuccess = this.getBoolean("notifySuccess");
        this.quotingType = this.getQuotingType();
        this.schema = this.getSchema();
        this.sortArrays = this.getBoolean("sortArrays");
        this.sortOnSave = this.getNumber("sortOnSave");
        this.sortOrderReverse = this.getBoolean("sortOrderReverse");
        this.useCustomSortRecursively = this.getBoolean("useCustomSortRecursively");
        this.useLeadingDashes = this.getBoolean("useLeadingDashes");
        this.useArrayProcessor = this.getBoolean("useArrayProcessor");
        this.useBlockProcessor = this.getBoolean("useBlockProcessor");
        this.useCommentProcessor = this.getBoolean("useCommentProcessor");
        this.useHelmProcessor = this.getBoolean("useHelmProcessor");
        this.useOctalProcessor = this.getBoolean("useOctalProcessor");
    }
    getBoolean(name) {
        return this.workspace.getConfiguration().get(`${this.filter}.${name}`);
    }
    getNumber(name) {
        return this.workspace.getConfiguration().get(`${this.filter}.${name}`);
    }
    getString(name) {
        return this.workspace.getConfiguration().get(`${this.filter}.${name}`);
    }
    getCustomSortKeywords(index) {
        if ([1, 2, 3].includes(index))
            return this.workspace.getConfiguration().get(`${this.filter}.customSortKeywords_${index}`);
        return [];
    }
    getExtensions() {
        return this.workspace.getConfiguration().get(`${this.filter}.extensions`);
    }
    getQuotingType() {
        return this.workspace.getConfiguration().get(`${this.filter}.quotingType`);
    }
    getSchema() {
        const schema = this.workspace.getConfiguration().get(`${this.filter}.schema`);
        return Settings.getJsYamlSchemaFromString(schema);
    }
    static getJsYamlSchemaFromString(schema) {
        switch (schema) {
            case "HOMEASSISTANT_SCHEMA":
                return homeassistant_js_yaml_schema_1.HOMEASSISTANT_SCHEMA;
            case "CLOUDFORMATION_SCHEMA":
                return cloudformation_js_yaml_schema_1.CLOUDFORMATION_SCHEMA;
            case "CORE_SCHEMA":
                return js_yaml_1.CORE_SCHEMA;
            case "FAILSAFE_SCHEMA":
                return js_yaml_1.FAILSAFE_SCHEMA;
            case "JSON_SCHEMA":
                return js_yaml_1.JSON_SCHEMA;
            default:
                return js_yaml_1.DEFAULT_SCHEMA;
        }
    }
    doSortOnSave() {
        return (this.sortOnSave >= 0 && this.sortOnSave <= 3);
    }
}
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map