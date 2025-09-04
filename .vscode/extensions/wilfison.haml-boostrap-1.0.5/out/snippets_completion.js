"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = require("node:fs");
const vscode_1 = require("vscode");
class SnippetsCompletion {
    version;
    snippets;
    constructor(version) {
        this.version = version;
        this.snippets = this.loadSnippets();
    }
    provideCompletionItems(_document, _position, _token, _context) {
        const completionItems = Object.keys(this.snippets).map((key) => {
            const snippet = new vscode_1.CompletionItem(this.snippets[key].prefix, vscode_1.CompletionItemKind.Snippet);
            snippet.insertText = new vscode_1.SnippetString(this.snippets[key].body.join('\n'));
            snippet.detail = key;
            return snippet;
        });
        return completionItems;
    }
    loadSnippets() {
        const file = node_path_1.default.resolve(__dirname, `../snippets/bootstrap${this.version}.code-snippets`);
        const content = (0, node_fs_1.readFileSync)(file, 'utf8');
        return JSON.parse(content);
    }
}
exports.default = SnippetsCompletion;
//# sourceMappingURL=snippets_completion.js.map