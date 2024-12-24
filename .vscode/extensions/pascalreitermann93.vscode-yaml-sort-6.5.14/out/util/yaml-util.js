"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitYaml = exports.validateTextRange = exports.removeTrailingCharacters = exports.YamlUtil = exports.compareObjects = void 0;
const error_util_1 = require("./error-util");
const js_yaml_adapter_1 = require("../adapter/js-yaml-adapter");
const vs_code_adapter_1 = require("../adapter/vs-code-adapter");
const processor_controller_1 = require("../controller/processor-controller");
const lib_1 = require("../lib");
const settings_1 = require("../settings");
const sortArrays = (obj) => {
    if (!obj || typeof obj !== "object") {
        return;
    }
    else if (Array.isArray(obj)) {
        obj.sort((a, b) => compareObjects(a, b));
    }
    Object.keys(obj).forEach(key => {
        const object = obj[key];
        if (typeof object === "object") {
            if (Array.isArray(object)) {
                Object.entries(object).sort((a, b) => compareObjects(a, b));
            }
            sortArrays(object);
        }
    });
};
function compareObjects(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}
exports.compareObjects = compareObjects;
class YamlUtil {
    constructor(settings = new settings_1.Settings()) {
        this.errorutil = new error_util_1.ErrorUtil();
        this.settings = settings;
        this.jsyamladapter = new js_yaml_adapter_1.JsYamlAdapter(settings);
    }
    static getNumberOfLeadingSpaces(text) {
        if (!text.startsWith(" ")) {
            return 0;
        }
        else {
            return text.search(/\S/);
        }
    }
    static isValueMultiline(text) {
        return (!text.startsWith("|") && text.includes(":")) || text.startsWith("-");
    }
    setLeadingDashes(text) {
        if (this.settings.useLeadingDashes) {
            return `---\n${text}`;
        }
        return text;
    }
    transformMultilineValue(text) {
        let result = (0, lib_1.prependWhitespacesOnEachLine)(text, this.settings.indent);
        if (text.endsWith("\n")) {
            result = removeTrailingCharacters(result, this.settings.indent);
        }
        return result;
    }
    sortYaml(unsortedYaml, customSort = 0) {
        try {
            const processor = new processor_controller_1.ProcessorController(unsortedYaml);
            processor.preprocess();
            const unsortedYamlWithoutTabs = processor.text;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const doc = this.jsyamladapter.load(unsortedYamlWithoutTabs);
            if (this.settings.sortArrays) {
                sortArrays(doc);
            }
            let sortedYaml = "";
            if (customSort > 0 && !this.settings.useCustomSortRecursively) {
                const keywords = this.settings.getCustomSortKeywords(customSort);
                keywords.forEach(key => {
                    if (doc[key]) {
                        let sortedSubYaml = this.jsyamladapter.dumpYaml(doc[key], true, customSort);
                        if (YamlUtil.isValueMultiline(sortedSubYaml)) {
                            sortedSubYaml = this.transformMultilineValue(sortedSubYaml);
                            sortedYaml += `${key}:\n${sortedSubYaml}\n`;
                        }
                        else {
                            sortedYaml += `${key}: ${sortedSubYaml}\n`;
                        }
                        // delete key from yaml
                        delete doc[key];
                    }
                });
            }
            // either sort whole yaml or sort the rest of the yaml (which can be empty) and add it to the sortedYaml
            sortedYaml += this.jsyamladapter.dumpYaml(doc, true, customSort);
            processor.text = sortedYaml;
            processor.postprocess();
            return processor.text;
        }
        catch (error) {
            this.errorutil.handleError(error);
            return null;
        }
    }
    /**
     * Formats a yaml document (without sorting).
     * @param   {string} yaml Yaml to be formatted.
     * @returns {string} Formatted yaml.
     */
    formatYaml(yaml, useLeadingDashes) {
        try {
            const processor = new processor_controller_1.ProcessorController(yaml);
            processor.preprocess();
            let doc = new js_yaml_adapter_1.JsYamlAdapter().dumpYaml(this.jsyamladapter.load(processor.text), false, 0);
            processor.text = doc;
            processor.postprocess();
            doc = processor.text;
            if (useLeadingDashes) {
                doc = `---\n${doc}`;
            }
            new vs_code_adapter_1.VsCodeAdapter().showMessage(vs_code_adapter_1.Severity.INFO, "Yaml formatted successfully");
            return doc;
        }
        catch (error) {
            this.errorutil.handleError(error);
            return null;
        }
    }
    /**
     * Returns all delimiters with comments.
     * @param   {string}  multipleYamls String which contains multiple yaml documents.
     * @param   {boolean} isSelectionEmpty Specify if the text is an selection
     * @param   {boolean} useLeadingDashes Specify if the documents should have a leading delimiter.
     *                                   If set to false, it will add an empty array element at the beginning of the output.
     * @returns {[string]} Array of yaml delimiters.
     */
    getDelimiters(yamls, isSelectionEmpty) {
        // remove empty lines
        let multipleYamls = yamls.trim();
        multipleYamls = multipleYamls.replace(/^\n/, "");
        let delimiters = multipleYamls.match(/^---.*/gm);
        if (!delimiters) {
            return [""];
        }
        // append line break to every delimiter
        delimiters = delimiters.map((delimiter) => `\n${delimiter}\n`);
        if (delimiters) {
            if (isSelectionEmpty) {
                if (!this.settings.useLeadingDashes && multipleYamls.startsWith("---")) {
                    delimiters.shift();
                    delimiters.unshift("");
                }
                else if (this.settings.useLeadingDashes && !multipleYamls.startsWith("---")) {
                    delimiters.unshift("---\n");
                }
                else {
                    delimiters.unshift("");
                }
            }
            else {
                if (!multipleYamls.startsWith("---")) {
                    delimiters.unshift("");
                }
                else {
                    let firstDelimiter = delimiters.shift();
                    if (firstDelimiter) {
                        firstDelimiter = firstDelimiter.replace(/^\n/, "");
                        delimiters.unshift(firstDelimiter);
                    }
                }
            }
        }
        return delimiters;
    }
}
exports.YamlUtil = YamlUtil;
/**
 * Removes a given count of characters from a string.
 * @param   {string} text  String for processing.
 * @param   {number} count The number of characters to remove from the end of the returned string.
 * @returns {string} Input text with removed trailing characters.
 */
function removeTrailingCharacters(text, count = 1) {
    if (count >= 0 && count <= text.length) {
        return text.substring(0, text.length - count);
    }
    else {
        throw new Error("The count parameter is not in a valid range");
    }
}
exports.removeTrailingCharacters = removeTrailingCharacters;
function validateTextRange(textRange) {
    // remove trailing whitespaces, to check for things like 'text:  '
    const text = textRange.trim();
    const notValidEndingCharacters = [":", "|", ">"];
    if (notValidEndingCharacters.includes(text.charAt(text.length - 1))) {
        throw new Error("YAML selection is invalid. Check the ending of your selection.");
    }
}
exports.validateTextRange = validateTextRange;
/**
 * Splits a string, which contains multiple yaml documents.
 * @param   {string}   multipleYamls String which contains multiple yaml documents.
 * @returns {[string]} Array of yaml documents.
 */
function splitYaml(multipleYamls) {
    return multipleYamls.split(/^---.*/m).filter((obj) => obj);
}
exports.splitYaml = splitYaml;
//# sourceMappingURL=yaml-util.js.map