"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsYamlAdapter = void 0;
const js_yaml_1 = require("js-yaml");
const settings_1 = require("../settings");
const sort_util_1 = require("../util/sort-util");
const yaml_util_1 = require("../util/yaml-util");
class JsYamlAdapter {
    constructor(settings = new settings_1.Settings()) {
        this.settings = settings;
    }
    /**
     * Validates a yaml document
     * @param text Yaml document
     * @returns true if yaml is valid
     */
    validateYaml(text) {
        (0, yaml_util_1.splitYaml)(text).forEach((yaml) => {
            (0, js_yaml_1.load)(yaml, { schema: this.settings.getSchema() });
        });
        return true;
    }
    load(text) {
        return (0, js_yaml_1.load)(text, this.getLoadOptions());
    }
    getLoadOptions() {
        return { schema: this.settings.getSchema() };
    }
    /**
     * Dumps a yaml with the user specific settings.
     * @param   {string}  text     Yaml document which should be dumped.
     * @param   {boolean} sortKeys If set to true, the function will sort the keys in the document. Defaults to true.
     * @returns {string}           Clean yaml document.
     */
    dumpYaml(text, sortKeys, custom) {
        if (Object.keys(text).length === 0) {
            return "";
        }
        const sort = new sort_util_1.SortUtil(this.settings, custom);
        let yaml = (0, js_yaml_1.dump)(text, {
            indent: this.settings.indent,
            forceQuotes: this.settings.forceQuotes,
            lineWidth: this.settings.lineWidth,
            noArrayIndent: this.settings.noArrayIndent,
            noCompatMode: this.settings.noCompatMode,
            quotingType: this.settings.getQuotingType(),
            schema: this.settings.getSchema(),
            sortKeys: (!(custom > 0 && this.settings.useCustomSortRecursively) ? sortKeys : (a, b) => {
                return sort.customSort(a, b);
            })
        });
        // this is neccesary to avoid linebreaks in a selection sort
        yaml = (0, yaml_util_1.removeTrailingCharacters)(yaml, 1);
        return yaml;
    }
}
exports.JsYamlAdapter = JsYamlAdapter;
//# sourceMappingURL=js-yaml-adapter.js.map