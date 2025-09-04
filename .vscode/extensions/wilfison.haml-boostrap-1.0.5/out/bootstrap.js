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
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const version_1 = require("./helpers/version");
const cache = __importStar(require("./helpers/cache"));
class Bootstrap {
    version = 'latest';
    majorVersion = '5';
    locationType = 'remote';
    classList = [];
    constructor() {
        let [version, locationType] = (0, version_1.findVersionAndLocation)('bootstrap', this.rootPath());
        this.version = version;
        this.majorVersion = this.version.split('.')[0];
        this.locationType = locationType;
    }
    load() {
        const cached = cache.cacheExists('bootstrap', this.version);
        if (cached) {
            this.classList = JSON.parse(cache.readCache('bootstrap', this.version));
        }
        else {
            this.locationType === 'remote' ? this.loadRemote() : this.loadLocal();
        }
        this.writeCache();
    }
    async loadRemote() {
        const response = await fetch(this.remoteUrl());
        const content = await response.text();
        this.classList = this.extractClasses(content);
    }
    loadLocal() {
        const content = (0, version_1.readLocalCssFile)(this.rootPath());
        this.classList = this.extractClasses(content);
    }
    rootPath() {
        return vscode_1.workspace.workspaceFolders ? vscode_1.workspace.workspaceFolders[0].uri.fsPath : '';
    }
    remoteUrl() {
        return `https://cdn.jsdelivr.net/npm/bootstrap@${this.version}/dist/css/bootstrap.min.css`;
    }
    writeCache() {
        cache.writeCache('bootstrap', this.version, this.classList);
    }
    extractClasses(content) {
        const regex = /\}\.([\w-]+)/g;
        const classes = new Set();
        const matches = content.match(regex);
        if (matches) {
            matches.forEach(match => {
                classes.add(match.slice(2));
            });
        }
        return Array.from(classes);
    }
}
exports.default = Bootstrap;
//# sourceMappingURL=bootstrap.js.map