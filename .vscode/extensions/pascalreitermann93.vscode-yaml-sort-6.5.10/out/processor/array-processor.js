"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayProcessor = void 0;
const generic_processor_1 = require("./generic-processor");
class ArrayProcessor extends generic_processor_1.GenericProcessor {
    constructor(text) {
        super("array", /(?<=:\s)\[([^[]*)\]/g, text);
    }
}
exports.ArrayProcessor = ArrayProcessor;
//# sourceMappingURL=array-processor.js.map