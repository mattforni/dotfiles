"use strict";
const rubyLinter_1 = require('./features/rubyLinter');
function activate(context) {
    let linter = new rubyLinter_1.default();
    linter.activate(context.subscriptions);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map