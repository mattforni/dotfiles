"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelmProcessor = void 0;
const generic_processor_1 = require("./generic-processor");
class HelmProcessor extends generic_processor_1.GenericProcessor {
    constructor(text) {
        super("helm", /{{([^{]*)}}/g, text);
    }
}
exports.HelmProcessor = HelmProcessor;
//# sourceMappingURL=helm-processor.js.map