"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prependWhitespacesOnEachLine = prependWhitespacesOnEachLine;
exports.removeLeadingLineBreakOfFirstElement = removeLeadingLineBreakOfFirstElement;
exports.addNewLineBeforeRootKeywords = addNewLineBeforeRootKeywords;
/**
 * Prepends a given count of whitespaces to every single line in a text.
 * Lines with yaml seperators (---) will not be indented
 * @param   {string} text  Text which should get some leading whitespaces on each line.
 * @param   {number} count The number of whitesspaces to prepend on each line of the returned string.
 * @returns {string} Input Text, which has the given count of whitespaces prepended on each single line.
 */
function prependWhitespacesOnEachLine(text, count) {
    if (count < 0) {
        throw new Error("The count parameter is not a positive number");
    }
    const spaces = " ".repeat(count);
    return text.replace(/^(?!---)/mg, spaces);
}
/**
 * Removes the leading line break of the first element of an array.
 * @param   {RegExpMatchArray} delimiters Array for processing.
 * @returns {RegExpMatchArray}
 */
function removeLeadingLineBreakOfFirstElement(delimiters) {
    let firstDelimiter = delimiters.shift();
    if (firstDelimiter) {
        firstDelimiter = firstDelimiter.replace(/^\n/, "");
        delimiters.unshift(firstDelimiter);
    }
    return delimiters;
}
/**
 * Add a new line before each occurence of a top level keyword after a new line
 * @param   {string} text Text to be processed
 * @returns {string} processed text
 */
function addNewLineBeforeRootKeywords(text) {
    return text.replace(/\n[^\s]*:/g, "\n$&");
}
//# sourceMappingURL=lib.js.map