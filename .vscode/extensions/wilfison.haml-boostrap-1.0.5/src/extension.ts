import * as vscode from "vscode";

import CompletionProvider from "./completion_provider";
import Bootstrap from "./bootstrap";
import SnippetsCompletion from "./snippets_completion";

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('hamlBootstrap');
  const schemaFile = { language: 'haml', scheme: 'file' };

  const bootstrap = new Bootstrap();
  const supportedVersions = ['4', '5'];

  supportedVersions.forEach((version) => {
    if (['latest', version].includes(bootstrap.majorVersion)) {
      const disposable = vscode.languages.registerCompletionItemProvider(
        schemaFile,
        new SnippetsCompletion(version),
        'bs',
      );

      context.subscriptions.push(disposable);
    }
  });

  if (config.get('enableCssClassCompletion')) {
    bootstrap.load();

    const disposable = vscode.languages.registerCompletionItemProvider(
      schemaFile,
      new CompletionProvider(bootstrap),
      '.',
      '"',
      "'",
    );

    context.subscriptions.push(disposable);
  }
}

export function deactivate() { }
