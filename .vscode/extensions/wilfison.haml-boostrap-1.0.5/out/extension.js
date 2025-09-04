"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const completion_provider_1 = __importDefault(require("./completion_provider"));
const bootstrap_1 = __importDefault(require("./bootstrap"));
const snippets_completion_1 = __importDefault(require("./snippets_completion"));
function activate(context) {
    const config = vscode.workspace.getConfiguration('hamlBootstrap');
    const schemaFile = { language: 'haml', scheme: 'file' };
    const bootstrap = new bootstrap_1.default();
    const supportedVersions = ['4', '5'];
    supportedVersions.forEach((version) => {
        if (['latest', version].includes(bootstrap.majorVersion)) {
            const disposable = vscode.languages.registerCompletionItemProvider(schemaFile, new snippets_completion_1.default(version), 'bs');
            context.subscriptions.push(disposable);
        }
    });
    if (config.get('enableCssClassCompletion')) {
        bootstrap.load();
        const disposable = vscode.languages.registerCompletionItemProvider(schemaFile, new completion_provider_1.default(bootstrap), '.', '"', "'");
        context.subscriptions.push(disposable);
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map