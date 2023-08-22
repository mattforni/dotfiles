"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericProcessor = void 0;
class GenericProcessor {
    constructor(filter, matcher, text) {
        this.store = new Map();
        this.filter = filter;
        this.matcher = matcher;
        this.text = text;
    }
    preprocess() {
        const matches = this.findMatches();
        if (matches) {
            for (const match of matches) {
                this.replaceValueWithSubstitue(match);
            }
        }
    }
    findMatches() {
        return this.text.match(this.matcher);
    }
    replaceValueWithSubstitue(value) {
        const substitue = `vscode-yaml-sort.${this.filter}.${this.store.size}`;
        this.store.set(substitue, value);
        this.text = this.text.replace(value, substitue);
    }
    postprocess() {
        this.store.forEach((value, key) => {
            this.replaceSubstituteWithValue(key, value);
        });
    }
    replaceSubstituteWithValue(substitue, value) {
        const match = new RegExp(`('|")?${substitue}('|")?`);
        this.text = this.text.replace(match, value);
    }
}
exports.GenericProcessor = GenericProcessor;
//# sourceMappingURL=generic-processor.js.map