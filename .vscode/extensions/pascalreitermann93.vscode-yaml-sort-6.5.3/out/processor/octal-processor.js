"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctalProcessor = void 0;
const generic_processor_1 = require("./generic-processor");
class OctalProcessor extends generic_processor_1.GenericProcessor {
    constructor(text) {
        super("octal", /0[0-7]{3}/g, text);
    }
}
exports.OctalProcessor = OctalProcessor;
//# sourceMappingURL=octal-processor.js.map