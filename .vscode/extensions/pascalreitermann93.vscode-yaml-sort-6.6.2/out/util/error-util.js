"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUtil = void 0;
const vs_code_adapter_1 = require("../adapter/vs-code-adapter");
class ErrorUtil {
    constructor() {
        this.vscodeadapter = new vs_code_adapter_1.VsCodeAdapter();
    }
    handleError(error) {
        if (error instanceof Error) {
            this.vscodeadapter.showMessage(vs_code_adapter_1.Severity.ERROR, error.message);
        }
    }
}
exports.ErrorUtil = ErrorUtil;
//# sourceMappingURL=error-util.js.map