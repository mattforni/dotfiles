"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockProcessor = void 0;
const generic_processor_1 = require("./generic-processor");
class BlockProcessor extends generic_processor_1.GenericProcessor {
    constructor(text) {
        super("block", /(?!<)(?<=:\s)([|>])((?!:).|[\r\n])+/g, text);
    }
}
exports.BlockProcessor = BlockProcessor;
//# sourceMappingURL=block-processor.js.map