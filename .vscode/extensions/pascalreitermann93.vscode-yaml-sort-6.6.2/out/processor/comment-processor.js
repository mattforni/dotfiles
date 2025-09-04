"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentProcessor = void 0;
class CommentProcessor {
    constructor(text) {
        this.store = [];
        this.text = text.trim();
        this.lines = this.text.split("\n");
    }
    /**
     * Finds all full line comments in a given yaml (ignoring comments in the same line with code).
     * @param text Yaml document
     */
    findComments() {
        this.lines.forEach((line, index) => {
            if (CommentProcessor.isLineComment(line)) {
                this.addLineToComments(index);
            }
        });
    }
    static isLineComment(line) {
        return /^ *#/.test(line);
    }
    addLineToComments(index) {
        if (index < this.lines.length - 1) {
            this.store.push([this.lines[index], this.lines[index + 1]]);
        }
        else {
            this.store.push([this.lines[index], "vscode-yaml-sort.lastLine"]);
        }
    }
    postprocess() {
        this.reverseComments();
        this.store.forEach(comment => {
            this.applyComment(comment);
        });
        return this.text;
    }
    reverseComments() {
        this.store.reverse();
    }
    applyComment(comment) {
        if (comment[1] === "vscode-yaml-sort.lastLine") {
            this.append(comment[0]);
        }
        else {
            this.insert(comment);
        }
    }
    append(line) {
        this.text = `${this.text}\n${line}`;
    }
    insert(comment) {
        const indexOfComment = this.getIndexOfString(comment[1]);
        if (CommentProcessor.isCommentFound(indexOfComment)) {
            this.insertIfNotContained(comment);
        }
    }
    insertIfNotContained(comment) {
        const indexOfComment = this.getIndexOfString(comment[1]);
        const textAfter = this.text.slice(indexOfComment);
        const textBefore = this.text.slice(0, indexOfComment);
        if (!textBefore.endsWith(`${comment[0]}\n`)) {
            this.text = `${textBefore}${comment[0]}\n${textAfter.trimEnd()}`;
        }
    }
    getIndexOfString(text) {
        if (text === "vscode-yaml-sort.lastLine") {
            return this.text.length;
        }
        else {
            return this.search(text);
        }
    }
    search(text) {
        let result = this.searchExactMatch(text);
        if (CommentProcessor.isCommentFound(result)) {
            return result;
        }
        result = this.searchFuzzyForTrimmedText(text);
        if (CommentProcessor.isCommentFound(result)) {
            return result;
        }
        return this.searchFuzzyForKeyword(text);
    }
    searchExactMatch(text) {
        return this.text.lastIndexOf(text);
    }
    searchFuzzyForTrimmedText(text) {
        return this.searchExactMatch(text.trim());
    }
    searchFuzzyForKeyword(text) {
        return this.searchExactMatch(text.split(":")[0]);
    }
    static isCommentFound(index) {
        return index !== -1;
    }
}
exports.CommentProcessor = CommentProcessor;
//# sourceMappingURL=comment-processor.js.map