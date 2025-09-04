"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockProcessor = void 0;
const generic_processor_1 = require("./generic-processor");
class BlockProcessor extends generic_processor_1.GenericProcessor {
    constructor(text) {
        // option 1: match all following lines not containing a colon
        super("block", /(?!<)(?<=:\s)([|>])((?!:).|[\r\n])+(?=\n.+:)/g, text);
        // option 2: match all following lines starting with the same amount of spaces
        // super("block", /(?!<)(?<=:\s)([|>]).*\n(\s+).*(\n\2.*)+/g, text)
    }
}
exports.BlockProcessor = BlockProcessor;
//# sourceMappingURL=block-processor.js.map