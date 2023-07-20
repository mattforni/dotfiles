'use strict';
const vscode_1 = require('vscode');
const lintingProvider_1 = require('./utils/lintingProvider');
class RubyLintingProvider {
    constructor() {
        this.languageId = 'ruby';
    }
    activate(subscriptions) {
        let provider = new lintingProvider_1.LintingProvider(this);
        provider.activate(subscriptions);
    }
    loadConfiguration() {
        let section = vscode_1.workspace.getConfiguration(this.languageId);
        if (!section)
            return;
        return {
            executable: section.get('linter.executablePath', 'ruby'),
            fileArgs: ['-wc'],
            bufferArgs: ['-wc'],
            extraArgs: [],
            runTrigger: section.get('linter.run', 'onType')
        };
    }
    process(lines) {
        let diagnostics = [];
        lines.forEach(function (line) {
            const regex = /.+:(\d+):\s*(.+?)[,:]\s(.+)/;
            const matches = regex.exec(line);
            if (matches === null) {
                return;
            }
            diagnostics.push({
                range: new vscode_1.Range(parseInt(matches[1]) - 1, 0, parseInt(matches[1]) - 1, Number.MAX_VALUE),
                severity: matches[2].toLowerCase().includes("error") ? vscode_1.DiagnosticSeverity.Error : vscode_1.DiagnosticSeverity.Warning,
                message: matches[3],
                code: null,
                source: ''
            });
        });
        return diagnostics;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RubyLintingProvider;
//# sourceMappingURL=rubyLinter.js.map