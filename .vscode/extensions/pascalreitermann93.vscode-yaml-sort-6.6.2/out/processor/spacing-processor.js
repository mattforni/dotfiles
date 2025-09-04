"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacingProcessor = void 0;
const settings_1 = require("../settings");
class SpacingProcessor {
    constructor(text) {
        this.settings = new settings_1.Settings();
        this.text = text;
    }
    postprocess() {
        let level = 0;
        let result = this.text;
        while (level < this.settings.emptyLinesUntilLevel) {
            if (level === 0) {
                result = result.replace(/\n[^\s].*:/g, "\n$&");
            }
            else {
                const matcher = this.getMatcher(level);
                result = result.replace(matcher, "\n$&");
            }
            level++;
        }
        this.text = result;
    }
    getMatcher(level) {
        const spaces = this.settings.indent * level;
        return new RegExp(`\\n {${spaces}}[\\w-]*:`, "g");
    }
}
exports.SpacingProcessor = SpacingProcessor;
//# sourceMappingURL=spacing-processor.js.map