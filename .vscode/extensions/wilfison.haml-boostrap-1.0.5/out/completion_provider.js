"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const CLASS_REGEX = /\.$|class["']?\s*[:=>]+\s*["']?[\w-\s:]*$/g;
class CompletionProvider {
    bootstrap;
    constructor(bootstrap) {
        this.bootstrap = bootstrap;
    }
    provideCompletionItems(document, position, _token, _context) {
        const { shouldComplete, lastWord } = this.matchCompletion(document, position);
        if (!shouldComplete) {
            return undefined;
        }
        let classList = this.bootstrap.classList;
        if (lastWord) {
            classList = this.bootstrap.classList
                .filter((className) => className.startsWith(lastWord));
        }
        const completionItems = classList.map((className) => {
            const completionItem = new vscode_1.CompletionItem(className);
            completionItem.kind = 9;
            return completionItem;
        });
        return completionItems;
    }
    matchCompletion(document, position) {
        const lineContent = document.lineAt(position.line).text;
        const beforeCursor = lineContent.slice(0, position.character).trim();
        const matches = beforeCursor.match(CLASS_REGEX);
        if (!matches) {
            return { shouldComplete: false, lastWord: "" };
        }
        const match = matches[0];
        const lastWord = match.match(/\w+$/);
        return { shouldComplete: true, lastWord: lastWord ? lastWord[0] : "" };
    }
}
exports.default = CompletionProvider;
//# sourceMappingURL=completion_provider.js.map