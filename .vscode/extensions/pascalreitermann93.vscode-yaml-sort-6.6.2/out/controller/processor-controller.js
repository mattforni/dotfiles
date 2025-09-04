"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessorController = void 0;
const array_processor_1 = require("../processor/array-processor");
const block_processor_1 = require("../processor/block-processor");
const comment_processor_1 = require("../processor/comment-processor");
const helm_processor_1 = require("../processor/helm-processor");
const octal_processor_1 = require("../processor/octal-processor");
const spacing_processor_1 = require("../processor/spacing-processor");
const tabs_to_spaces_processor_1 = require("../processor/tabs-to-spaces-processor");
const settings_1 = require("../settings");
class ProcessorController {
    constructor(text, settings = new settings_1.Settings()) {
        this.text = text;
        this.settings = settings;
    }
    preprocess() {
        this.tabstospacespreprocessor = new tabs_to_spaces_processor_1.TabsToSpacesProcessor(this.text);
        this.tabstospacespreprocessor.preprocess();
        this.text = this.tabstospacespreprocessor.text;
        if (this.settings.useBlockProcessor) {
            this.blockprocessor = new block_processor_1.BlockProcessor(this.text);
            this.blockprocessor.preprocess();
            this.text = this.blockprocessor.text;
        }
        if (this.settings.useArrayProcessor) {
            this.arrayprocessor = new array_processor_1.ArrayProcessor(this.text);
            this.arrayprocessor.preprocess();
            this.text = this.arrayprocessor.text;
        }
        if (this.settings.useHelmProcessor) {
            this.helmprocessor = new helm_processor_1.HelmProcessor(this.text);
            this.helmprocessor.preprocess();
            this.text = this.helmprocessor.text;
        }
        if (this.settings.useOctalProcessor) {
            this.octalprocessor = new octal_processor_1.OctalProcessor(this.text);
            this.octalprocessor.preprocess();
            this.text = this.octalprocessor.text;
        }
        if (this.settings.useCommentProcessor) {
            this.commentprocessor = new comment_processor_1.CommentProcessor(this.text);
            this.commentprocessor.findComments();
            this.text = this.commentprocessor.text;
        }
    }
    postprocess() {
        if (this.settings.useCommentProcessor) {
            this.commentprocessor.text = this.text;
            this.commentprocessor.postprocess();
            this.text = this.commentprocessor.text;
        }
        if (this.settings.useOctalProcessor) {
            this.octalprocessor.text = this.text;
            this.octalprocessor.postprocess();
            this.text = this.octalprocessor.text;
        }
        if (this.settings.useHelmProcessor) {
            this.helmprocessor.text = this.text;
            this.helmprocessor.postprocess();
            this.text = this.helmprocessor.text;
        }
        if (this.settings.useArrayProcessor) {
            this.arrayprocessor.text = this.text;
            this.arrayprocessor.postprocess();
            this.text = this.arrayprocessor.text;
        }
        if (this.settings.useBlockProcessor) {
            this.blockprocessor.text = this.text;
            this.blockprocessor.postprocess();
            this.text = this.blockprocessor.text;
        }
        this.spacingprocessor = new spacing_processor_1.SpacingProcessor(this.text);
        this.spacingprocessor.postprocess();
        this.text = this.spacingprocessor.text;
    }
}
exports.ProcessorController = ProcessorController;
//# sourceMappingURL=processor-controller.js.map