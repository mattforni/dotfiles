'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureShell = void 0;
const vscode_1 = require("vscode");
const os_1 = require("os");
const os = function () {
    switch ((0, os_1.platform)()) {
        case 'darwin':
            return 'osx';
        case 'linux':
            return 'linux';
    }
    return null;
}();
function configureShell() {
    if (os) {
        let shellConfig = vscode_1.workspace.getConfiguration('terminal.integrated.automationShell').get(os);
        if (shellConfig) {
            return [shellConfig, vscode_1.workspace.getConfiguration('terminal.integrated.automationShellArgs').get(os)];
        }
        else {
            let profileConfig = vscode_1.workspace.getConfiguration(`terminal.integrated.automationProfile.${os}`);
            return [profileConfig.get('path'), profileConfig.get('args')];
        }
    }
    else {
        return [null, null];
    }
}
exports.configureShell = configureShell;
//# sourceMappingURL=configure-shell.js.map