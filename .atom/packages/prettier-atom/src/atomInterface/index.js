// @flow
const path = require('path');
const _ = require('lodash/fp');

// constants
const LINTER_LINT_COMMAND = 'linter:lint';

// local helpers
const getConfigOption = (key: string) => atom.config.get(`prettier-atom.${key}`);

const setConfigOption = (key: string, value: any) => atom.config.set(`prettier-atom.${key}`, value);

const isLinterLintCommandDefined = (editor: TextEditor) =>
  atom.commands
    .findCommands({ target: atom.views.getView(editor) })
    .some((command) => command.name === LINTER_LINT_COMMAND);

// public
const isLinterEslintAutofixEnabled = () =>
  atom.packages.isPackageActive('linter-eslint') && atom.config.get('linter-eslint.fixOnSave');

const shouldUseEslint = () => getConfigOption('useEslint');

const shouldUseStylelint = () => getConfigOption('useStylelint');

const shouldUseEditorConfig = () => getConfigOption('useEditorConfig');

const isFormatOnSaveEnabled = () => getConfigOption('formatOnSaveOptions.enabled');

const isDisabledIfNotInPackageJson = () =>
  getConfigOption('formatOnSaveOptions.isDisabledIfNotInPackageJson');

const isDisabledIfNoConfigFile = () => getConfigOption('formatOnSaveOptions.isDisabledIfNoConfigFile');

const shouldRespectEslintignore = () => getConfigOption('formatOnSaveOptions.respectEslintignore');

const shouldIgnoreNodeModules = () => getConfigOption('formatOnSaveOptions.ignoreNodeModules');

const toggleFormatOnSave = () => setConfigOption('formatOnSaveOptions.enabled', !isFormatOnSaveEnabled());

const getPrettierEslintOptions = () => getConfigOption('prettierEslintOptions');

const getAtomVersion = () => atom.getVersion();

const getPrettierAtomConfig = () => atom.config.get('prettier-atom');

const getWhitelistedGlobs = () => getConfigOption('formatOnSaveOptions.whitelistedGlobs');

const getExcludedGlobs = () => getConfigOption('formatOnSaveOptions.excludedGlobs');

const addTooltip = (element: HTMLElement, options: Atom$Tooltips$Options) =>
  atom.tooltips.add(element, options);

const addInfoNotification = (message: string, options?: Atom$Notifications$Options) =>
  atom.notifications.addInfo(message, options);

const addWarningNotification = (message: string, options?: Atom$Notifications$Options) =>
  atom.notifications.addWarning(message, options);

const addErrorNotification = (message: string, options?: Atom$Notifications$Options) =>
  atom.notifications.addError(message, options);

const attemptWithErrorNotification = async (func: Function, ...args: Array<any>) => {
  try {
    await func(...args);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    addErrorNotification(e.message, { dismissable: true, stack: e.stack });
  }
};

const runLinter = (editor: TextEditor) =>
  isLinterLintCommandDefined(editor) &&
  atom.commands.dispatch(atom.views.getView(editor), LINTER_LINT_COMMAND);

const invokeAtomRelativizePath = _.flow(
  (filePath) => atom.project.relativizePath(filePath), // NOTE: fat arrow necessary for `this`
  _.get('[1]'),
);

const relativizePathToDirname = (filePath: string) => path.relative(path.dirname(filePath), filePath);

const relativizePathFromAtomProject: (filePath: ?string) => ?string = _.cond([
  [_.isNil, _.constant(null)],
  [_.flow(invokeAtomRelativizePath, path.isAbsolute), relativizePathToDirname],
  [_.stubTrue, invokeAtomRelativizePath],
]);

module.exports = {
  addErrorNotification,
  addInfoNotification,
  addTooltip,
  addWarningNotification,
  getAtomVersion,
  getPrettierAtomConfig,
  getPrettierEslintOptions,
  getWhitelistedGlobs,
  getExcludedGlobs,
  isDisabledIfNotInPackageJson,
  isDisabledIfNoConfigFile,
  isFormatOnSaveEnabled,
  isLinterEslintAutofixEnabled,
  relativizePathFromAtomProject,
  runLinter,
  shouldIgnoreNodeModules,
  shouldRespectEslintignore,
  shouldUseEslint,
  shouldUseStylelint,
  shouldUseEditorConfig,
  toggleFormatOnSave,
  attemptWithErrorNotification,
};
