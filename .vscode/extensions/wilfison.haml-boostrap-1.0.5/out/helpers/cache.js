"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheExists = cacheExists;
exports.readCache = readCache;
exports.writeCache = writeCache;
exports.deleteCache = deleteCache;
const node_fs_1 = require("node:fs");
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
function cacheExists(lib, version) {
    return (0, node_fs_1.existsSync)(cacheFileLocation(lib, version));
}
function readCache(lib, version) {
    return (0, node_fs_1.readFileSync)(cacheFileLocation(lib, version), 'utf8');
}
function writeCache(lib, version, content) {
    try {
        const fileContent = JSON.stringify(content);
        const fileLocation = cacheFileLocation(lib, version);
        return (0, node_fs_1.writeFileSync)(fileLocation, fileContent);
    }
    catch (error) {
        console.error(`Error writing cache file: ${error}`);
    }
}
function deleteCache(lib, version) {
    try {
        const fileLocation = cacheFileLocation(lib, version);
        if (cacheExists(lib, version)) {
            return (0, node_fs_1.unlinkSync)(fileLocation);
        }
    }
    catch (error) {
        console.error(`Error deleting cache file: ${error}`);
    }
}
function cacheFileLocation(lib, version) {
    return node_path_1.default.join(cacheDirectory(), `${lib}-${version}.json`);
}
function cacheDirectory() {
    let cacheDir;
    switch (process.platform) {
        case 'darwin':
            cacheDir = node_path_1.default.join(node_os_1.default.homedir(), 'Library', 'Caches', 'haml_bootstrap');
            break;
        case 'win32':
            cacheDir = node_path_1.default.join(node_os_1.default.homedir(), 'AppData', 'Local', 'haml_bootstrap');
            break;
        default:
            cacheDir = node_path_1.default.join(node_os_1.default.homedir(), '.cache', 'haml_bootstrap');
    }
    try {
        if (!(0, node_fs_1.existsSync)(cacheDir)) {
            (0, node_fs_1.mkdirSync)(cacheDir, { recursive: true });
        }
    }
    catch (error) {
        console.error(`Error creating cache directory: ${error}`);
    }
    return cacheDir;
}
//# sourceMappingURL=cache.js.map