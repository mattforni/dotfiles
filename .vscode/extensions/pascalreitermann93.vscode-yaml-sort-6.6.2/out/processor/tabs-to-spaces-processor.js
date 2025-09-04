"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsToSpacesProcessor = void 0;
const settings_1 = require("../settings");
class TabsToSpacesProcessor {
    constructor(text) {
        this.settings = new settings_1.Settings();
        this.text = text;
    }
    preprocess() {
        const spaces = " ".repeat(this.settings.indent);
        this.text = this.text.replace(/\t/mg, spaces);
    }
}
exports.TabsToSpacesProcessor = TabsToSpacesProcessor;
//# sourceMappingURL=tabs-to-spaces-processor.js.map