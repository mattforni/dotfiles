import path from "node:path";
import { readFileSync } from "node:fs";
import { CompletionItem, CompletionItemKind, CompletionItemProvider, SnippetString } from "vscode";

class SnippetsCompletion implements CompletionItemProvider {
  private version: string;
  private snippets: any;

  constructor(version: string) {
    this.version = version;
    this.snippets = this.loadSnippets();
  }

  public provideCompletionItems(_document: any, _position: any, _token: any, _context: any) {
    const completionItems = Object.keys(this.snippets).map((key) => {
      const snippet = new CompletionItem(this.snippets[key].prefix, CompletionItemKind.Snippet);
      snippet.insertText = new SnippetString(this.snippets[key].body.join('\n'));
      snippet.detail = key;

      return snippet;
    });

    return completionItems;
  }

  private loadSnippets() {
    const file = path.resolve(__dirname, `../snippets/bootstrap${this.version}.code-snippets`);
    const content = readFileSync(file, 'utf8');

    return JSON.parse(content);
  }
}

export default SnippetsCompletion;
