/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(1);
function makeSorter(algorithm) {
    return function (lines) {
        return lines.sort(algorithm);
    };
}
function sortActiveSelection(transformers) {
    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
        return undefined;
    }
    const selection = textEditor.selection;
    if (selection.isEmpty && vscode.workspace.getConfiguration('sortLines').get('sortEntireFile') === true) {
        return sortLines(textEditor, 0, textEditor.document.lineCount - 1, transformers);
    }
    if (selection.isSingleLine) {
        return undefined;
    }
    return sortLines(textEditor, selection.start.line, selection.end.line, transformers);
}
function sortLines(textEditor, startLine, endLine, transformers) {
    let lines = [];
    for (let i = startLine; i <= endLine; i++) {
        lines.push(textEditor.document.lineAt(i).text);
    }
    // Remove blank lines in selection
    if (vscode.workspace.getConfiguration('sortLines').get('filterBlankLines') === true) {
        removeBlanks(lines);
    }
    lines = transformers.reduce((currentLines, transform) => transform(currentLines), lines);
    return textEditor.edit(editBuilder => {
        const range = new vscode.Range(startLine, 0, endLine, textEditor.document.lineAt(endLine).text.length);
        editBuilder.replace(range, lines.join('\n'));
    });
}
function removeDuplicates(lines) {
    return Array.from(new Set(lines));
}
function keepOnlyDuplicates(lines) {
    return Array.from(new Set(lines.filter((element, index, array) => array.indexOf(element) !== index)));
}
function removeBlanks(lines) {
    for (let i = 0; i < lines.length; ++i) {
        if (lines[i].trim() === '') {
            lines.splice(i, 1);
            i--;
        }
    }
}
function reverseCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? 1 : -1;
}
function caseInsensitiveCompare(a, b) {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
}
function lineLengthCompare(a, b) {
    // Use Array.from so that multi-char characters count as 1 each
    const aLength = Array.from(a).length;
    const bLength = Array.from(b).length;
    if (aLength === bLength) {
        return 0;
    }
    return aLength > bLength ? 1 : -1;
}
function lineLengthReverseCompare(a, b) {
    return lineLengthCompare(a, b) * -1;
}
function variableLengthCompare(a, b) {
    return lineLengthCompare(getVariableCharacters(a), getVariableCharacters(b));
}
function variableLengthReverseCompare(a, b) {
    return variableLengthCompare(a, b) * -1;
}
let intlCollator;
function naturalCompare(a, b) {
    if (!intlCollator) {
        intlCollator = new Intl.Collator(undefined, { numeric: true });
    }
    return intlCollator.compare(a, b);
}
function getVariableCharacters(line) {
    const match = line.match(/(.*)=/);
    if (!match) {
        return line;
    }
    const last = match.pop();
    if (!last) {
        return line;
    }
    return last;
}
function shuffleSorter(lines) {
    for (let i = lines.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[rand]] = [lines[rand], lines[i]];
    }
    return lines;
}
const transformerSequences = {
    sortNormal: [makeSorter()],
    sortUnique: [makeSorter(), removeDuplicates],
    sortReverse: [makeSorter(reverseCompare)],
    sortCaseInsensitive: [makeSorter(caseInsensitiveCompare)],
    sortCaseInsensitiveUnique: [makeSorter(caseInsensitiveCompare), removeDuplicates],
    sortLineLength: [makeSorter(lineLengthCompare)],
    sortLineLengthReverse: [makeSorter(lineLengthReverseCompare)],
    sortVariableLength: [makeSorter(variableLengthCompare)],
    sortVariableLengthReverse: [makeSorter(variableLengthReverseCompare)],
    sortNatural: [makeSorter(naturalCompare)],
    sortShuffle: [shuffleSorter],
    removeDuplicateLines: [removeDuplicates],
    keepOnlyDuplicateLines: [keepOnlyDuplicates]
};
exports.sortNormal = () => sortActiveSelection(transformerSequences.sortNormal);
exports.sortUnique = () => sortActiveSelection(transformerSequences.sortUnique);
exports.sortReverse = () => sortActiveSelection(transformerSequences.sortReverse);
exports.sortCaseInsensitive = () => sortActiveSelection(transformerSequences.sortCaseInsensitive);
exports.sortCaseInsensitiveUnique = () => sortActiveSelection(transformerSequences.sortCaseInsensitiveUnique);
exports.sortLineLength = () => sortActiveSelection(transformerSequences.sortLineLength);
exports.sortLineLengthReverse = () => sortActiveSelection(transformerSequences.sortLineLengthReverse);
exports.sortVariableLength = () => sortActiveSelection(transformerSequences.sortVariableLength);
exports.sortVariableLengthReverse = () => sortActiveSelection(transformerSequences.sortVariableLengthReverse);
exports.sortNatural = () => sortActiveSelection(transformerSequences.sortNatural);
exports.sortShuffle = () => sortActiveSelection(transformerSequences.sortShuffle);
exports.removeDuplicateLines = () => sortActiveSelection(transformerSequences.removeDuplicateLines);
exports.keepOnlyDuplicateLines = () => sortActiveSelection(transformerSequences.keepOnlyDuplicateLines);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(1);
const sortLines = __webpack_require__(2);
function activate(context) {
    const commands = [
        vscode.commands.registerCommand('sortLines.sortLines', sortLines.sortNormal),
        vscode.commands.registerCommand('sortLines.sortLinesReverse', sortLines.sortReverse),
        vscode.commands.registerCommand('sortLines.sortLinesCaseInsensitive', sortLines.sortCaseInsensitive),
        vscode.commands.registerCommand('sortLines.sortLinesCaseInsensitiveUnique', sortLines.sortCaseInsensitiveUnique),
        vscode.commands.registerCommand('sortLines.sortLinesLineLength', sortLines.sortLineLength),
        vscode.commands.registerCommand('sortLines.sortLinesLineLengthReverse', sortLines.sortLineLengthReverse),
        vscode.commands.registerCommand('sortLines.sortLinesVariableLength', sortLines.sortVariableLength),
        vscode.commands.registerCommand('sortLines.sortLinesVariableLengthReverse', sortLines.sortVariableLengthReverse),
        vscode.commands.registerCommand('sortLines.sortLinesNatural', sortLines.sortNatural),
        vscode.commands.registerCommand('sortLines.sortLinesUnique', sortLines.sortUnique),
        vscode.commands.registerCommand('sortLines.sortLinesShuffle', sortLines.sortShuffle),
        vscode.commands.registerCommand('sortLines.removeDuplicateLines', sortLines.removeDuplicateLines),
        vscode.commands.registerCommand('sortLines.keepOnlyDuplicateLines', sortLines.keepOnlyDuplicateLines),
    ];
    commands.forEach(command => context.subscriptions.push(command));
}
exports.activate = activate;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=extension.js.map