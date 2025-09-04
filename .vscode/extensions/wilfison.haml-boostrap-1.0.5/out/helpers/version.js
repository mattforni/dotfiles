"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLocalCssFile = readLocalCssFile;
exports.findVersionAndLocation = findVersionAndLocation;
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
function readLocalCssFile(rootPath) {
    return (0, node_fs_1.readFileSync)(node_path_1.default.join(rootPath, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'), 'utf8');
}
function findVersionAndLocation(lib, rootPath) {
    let bsVersion = findVersionOnNodeModules(lib, rootPath);
    const location = bsVersion ? 'local' : 'remote';
    if (!bsVersion) {
        bsVersion = findVersionOnGemfileLock(lib, rootPath);
    }
    return [bsVersion || 'latest', location];
}
function findVersionOnNodeModules(lib, rootPath) {
    try {
        const bsVersion = require(node_path_1.default.join(rootPath, 'node_modules', lib, 'package.json')).version;
        return bsVersion;
    }
    catch (error) {
        return null;
    }
}
function findVersionOnGemfileLock(lib, rootPath) {
    const regex = new RegExp(`${lib} \\((\\d+\\.\\d+\\.\\d+)\\)`);
    try {
        const fileContent = (0, node_fs_1.readFileSync)(node_path_1.default.join(rootPath, 'Gemfile.lock'), 'utf8');
        const match = fileContent.match(regex);
        return match ? match[1] : null;
    }
    catch (error) {
        return null;
    }
}
//# sourceMappingURL=version.js.map