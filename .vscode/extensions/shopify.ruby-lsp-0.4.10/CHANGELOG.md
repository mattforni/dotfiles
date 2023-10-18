# v0.4.10
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Ignore initial requests from telemetry by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/830
### 🐛 Bug Fixes
* Use sanitized parameters for telemetry by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/827
### 🛠 Other Changes
* Include non-development gemspec dependencies in dependency check by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/814


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.9...v0.4.10

# v0.4.9
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Use general middleware to report performance and crash telemetry by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/798
* Add references configuration by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/808
### 🛠 Other Changes
* Mention a fallback for `chruby` users if project doesn't have `.ruby-version` by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/701
* Update version manager section note by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/803
* Create a CHANGELOG.md before publishing extension update by @snutij in https://github.com/Shopify/vscode-ruby-lsp/pull/810
* Update glob dependency by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/812
* Add recent features to the README by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/809


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.8...v0.4.9

# v0.4.8
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Allow configuring when to pull diagnostics by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/786


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.7...v0.4.8

# v0.4.7
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Show server version in status language item by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/771
### 🐛 Bug Fixes
* Fix debugger launch configurations when `debug` is not included in the bundle by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/779


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.6...v0.4.7

# v0.4.6
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Add workspace symbol configuration by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/765


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.5...v0.4.6

# v0.4.5
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Allow using absolute paths for custom bundle configuration by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/750
* Add configuration to specify branch for server by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/760
### 🐛 Bug Fixes
* Time out tests that don't finish under 30 seconds by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/748
* Run Ruby activation in custom bundle folder if given by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/761


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.4...v0.4.5

# v0.4.4
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🐛 Bug Fixes
* Make extension work on Windows by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/712
* Add early return when shadowenv returns an empty string by @bitwise-aiden in https://github.com/Shopify/vscode-ruby-lsp/pull/735
* Remove scheme from document selector by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/745
* Run the server with bundle exec for user defined custom bundle by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/744
### 🛠 Other Changes
* Add configuration instructions for rtx version manager by @Quintasan in https://github.com/Shopify/vscode-ruby-lsp/pull/668
* Expand test status and output by @jenny-codes in https://github.com/Shopify/vscode-ruby-lsp/pull/725

## New Contributors
* @jenny-codes made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/725
* @bitwise-aiden made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/735

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.4.3...v0.4.4

# v0.4.3
<!-- Release notes generated using configuration in .github/release.yml at main -->

# ⚠️ Breaking changes

This release moves the custom bundle logic from the extension to the server and fully drops support for Ruby 2.7. If you encounter issues related to the custom bundle, please report them [here](https://github.com/Shopify/ruby-lsp/issues/new?assignees=&labels=bug&projects=&template=bug_template.yml).

## What's Changed
### 🚧 Breaking Changes
* Remove custom bundle logic by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/664
### ✨ Enhancements
* Expose test runner commands by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/696
* Manually activate shadow env instead of depending on extension by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/699
* Add selection support for show syntax tree by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/691
### 🐛 Bug Fixes
* Avoid using --disable-gems by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/710
* Avoid running bundler commands before running custom bundle logic by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/721
* Recover from custom bundle failures by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/731
### 🛠 Other Changes
* Expose more commands by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/702
* Add stalebot for issues & pull requests by @KaanOzkan in https://github.com/Shopify/vscode-ruby-lsp/pull/711
* Add stale messages by @KaanOzkan in https://github.com/Shopify/vscode-ruby-lsp/pull/713
* Add information about CLA to README.me by @Quintasan in https://github.com/Shopify/vscode-ruby-lsp/pull/724

## New Contributors
* @KaanOzkan made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/711
* @Quintasan made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/724

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.7...v0.4.3

# v0.4.2
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🚧 Breaking Changes
* Remove custom bundle logic by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/664
### ✨ Enhancements
* Expose test runner commands by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/696
* Manually activate shadow env instead of depending on extension by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/699
* Add selection support for show syntax tree by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/691
### 🐛 Bug Fixes
* Avoid using --disable-gems by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/710
* Avoid running bundler commands before running custom bundle logic by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/721
### 🛠 Other Changes
* Expose more commands by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/702
* Add stalebot for issues & pull requests by @KaanOzkan in https://github.com/Shopify/vscode-ruby-lsp/pull/711
* Add stale messages by @KaanOzkan in https://github.com/Shopify/vscode-ruby-lsp/pull/713

## New Contributors
* @KaanOzkan made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/711

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.7...v0.4.2

# v0.4.1
<!-- Release notes generated using configuration in .github/release.yml at vs/remove_custom_bundle_logic -->

## What's Changed
### ✨ Enhancements
* Remove custom bundle logic from the extension. Use the custom bundle logic from the server https://github.com/Shopify/vscode-ruby-lsp/pull/664
* Expose test runner commands by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/696
* Manually activate shadow env instead of depending on extension by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/699
* Expose more commands by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/702


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.7...v0.4.1

# v0.4.0
<!-- Release notes generated using configuration in .github/release.yml at vs/remove_custom_bundle_logic -->

- Remove custom bundle logic from the extension. Use the custom bundle logic from the server https://github.com/Shopify/vscode-ruby-lsp/pull/664

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.7...v0.4.0

# v0.3.7
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Add definition config by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/678
* Show errors when working on ruby-lsp and ruby-lsp-rails by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/680
* Add show syntax tree request by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/684
* Add `workbench.action.terminal.runSelectedText` command to context menu by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/695
* Enable code lens by default by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/669
### 🐛 Bug Fixes
* Find run test terminal if we lose the in-memory reference by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/693
### 🛠 Other Changes
* Stop manually prefixing commands with category by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/697
* Add 'Testing' category for extension by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/698


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.6...v0.3.7

# v0.3.6
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🐛 Bug Fixes
* Fix fetching server version for configured bundle path by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/677


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.5...v0.3.6

# v0.3.5
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🐛 Bug Fixes
* Prefer custom bundle when checking server version by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/670


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.4...v0.3.5

# v0.3.4
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Send configuration telemetry by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/649
* Send code lens telemetry by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/650
### 🛠 Other Changes
* Add debugging support to the list of LSP features by @rafaelfranca in https://github.com/Shopify/vscode-ruby-lsp/pull/666


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.3...v0.3.4

# v0.3.3
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🐛 Bug Fixes
* Disable spring on debug code lens by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/658


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.2...v0.3.3

# v0.3.2
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Integrate debug with test controller by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/623
* Add gem actions in the Gemfile by @snutij in https://github.com/Shopify/vscode-ruby-lsp/pull/605
* Support env on debug launch configurations by @rafaelfranca in https://github.com/Shopify/vscode-ruby-lsp/pull/631
### 🛠 Other Changes
* Add devcontainer configuration by @rafaelfranca in https://github.com/Shopify/vscode-ruby-lsp/pull/632
* Use testItem `kind` to determine if running single test or test file by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/639

## New Contributors
* @rafaelfranca made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/631

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.1...v0.3.2

# v0.3.1
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Add formatter status item by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/549
* Add `Run In Terminal` code lens by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/596


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.3.0...v0.3.1

# v0.3.0
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Support debugging tests with code lens by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/584
* Add test controller implementation by @adisonlampert in https://github.com/Shopify/vscode-ruby-lsp/pull/562
* Add custom Ruby activation by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/583
### 🛠 Other Changes
* doc(readme): use bug template on troubleshooting section by @snutij in https://github.com/Shopify/vscode-ruby-lsp/pull/574

## New Contributors
* @snutij made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/574

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.2.5...v0.3.0

# v0.2.5
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🐛 Bug Fixes
* Avoid using shell when undefined by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/563
* Avoid restarting the client during a rebase by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/568
* Fix debug client launch by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/570
* vscode-ruby-lsp: Update updateServer to handle missing top-level Gemfile.lock by @jayanth-kumar-morem in https://github.com/Shopify/vscode-ruby-lsp/pull/561
### 🛠 Other Changes
* Add bug and feature issue templates by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/548
* Remove none from bug template by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/559

## New Contributors
* @jayanth-kumar-morem made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/561

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.2.4...v0.2.5

# v0.2.4
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Allow specifying a custom bundle gemfile path by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/520
* Add Ruby debug client by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/539
### 🐛 Bug Fixes
* Do not attempt to run server on old rubies by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/511
* Abort existing bundle install if another restart is triggered by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/515
* Source shell configuration using non-login mode by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/526
* Prevent accidental double restart by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/541
### 🛠 Other Changes
* Detect `ruby-lsp` being in the `Gemfile` through `Bundler` by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/513
* Run entire test class in terminal by @adisonlampert in https://github.com/Shopify/vscode-ruby-lsp/pull/506
* Improve Ruby test robustness by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/540
* Also "activate" ruby if `VersionManager.none` was specified by @kemchenj in https://github.com/Shopify/vscode-ruby-lsp/pull/507
* Use valid paths for Ruby test by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/544

## New Contributors
* @kemchenj made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/507

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.2.3...v0.2.4

# v0.2.3
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🐛 Bug Fixes
* Use path.basename instead of endsWith to check project folders by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/480
* Update server status when the server is running by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/490
* Remove bundle migration message by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/499
### 🛠 Other Changes
* Add link to Ruby DX Slack workspace by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/491
* Add badges to readme by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/492


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.2.2...v0.2.3

# v0.2.2
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed

## ⚠️ BREAKING CHANGES

With this release, the `ruby-lsp` gem no longer needs to be a part of the bundle. Please follow the [migration instructions](https://github.com/Shopify/vscode-ruby-lsp#migrating-from-bundle).

### ✨ Enhancements
* Run the Ruby LSP from a generated custom Gemfile by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/419
* Allow selecting version manager next to Ruby version by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/422
* Introduce `auto` option for version manager by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/437
* Add status item for feature management by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/441
* Only bundle install when necessary by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/443
* Allow users to choose formatter by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/451
* Contribute config defaults to exclude .ruby-lsp from search and file tree by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/475
* Show current manager when configuring by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/465
### 🐛 Bug Fixes
* Fix setup when there's no Gemfile.lock by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/436
* Allow marking features as experimental by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/445
* Use absolute path to for eval_gemfile by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/455
* Pass `env` to ruby invocation by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/456
* Bundle install automatically when working in the Ruby LSP by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/458
* Fail gracefully on ruby activation errors by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/459
* Always use the system bundler path by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/478
### 🛠 Other Changes
* Add ability to publish previews by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/423
* Improve ESLint rules by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/434
* Clarify note about migrating from bundle by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/435
* Fix ZSH string interpolation issue by @fnordfish in https://github.com/Shopify/vscode-ruby-lsp/pull/413
* Refactor status items into separate classes by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/438
* Move environment manipulation completely to the Ruby object by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/440
* Use the core `chruby` script for activation by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/453
* Match `.ruby-version` behaviour of `chruby-auto` by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/454
* Update to Node 18.15.0 by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/457
* Fix infinite recursion detecting ruby version if no file exists by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/460
* Create a debug executable for running the server with debugger by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/452
* Refactor `client` members for more encapsulation by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/461
* Improve `bundle install` experience by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/462
* Reorganize readme by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/474

## New Contributors
* @fnordfish made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/413

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.1.4...v0.2.2

# v0.2.1-beta
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Introduce `auto` option for version manager by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/437
* Add status item for feature management by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/441
* Only bundle install when necessary by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/443
* Allow users to choose formatter by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/451
### 🐛 Bug Fixes
* Fix setup when there's no Gemfile.lock by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/436
* Allow marking features as experimental by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/445
* Use absolute path to for eval_gemfile by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/455
* Pass `env` to ruby invocation by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/456
* Bundle install automatically when working in the Ruby LSP by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/458
* Fail gracefully on ruby activation errors by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/459
### 🛠 Other Changes
* Improve ESLint rules by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/434
* Clarify note about migrating from bundle by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/435
* Fix ZSH string interpolation issue by @fnordfish in https://github.com/Shopify/vscode-ruby-lsp/pull/413
* Refactor status items into separate classes by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/438
* Move environment manipulation completely to the Ruby object by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/440
* Use the core `chruby` script for activation by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/453
* Match `.ruby-version` behaviour of `chruby-auto` by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/454
* Update to Node 18.15.0 by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/457
* Fix infinite recursion detecting ruby version if no file exists by @paracycle in https://github.com/Shopify/vscode-ruby-lsp/pull/460
* Create a debug executable for running the server with debugger by @st0012 in https://github.com/Shopify/vscode-ruby-lsp/pull/452

## New Contributors
* @fnordfish made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/413

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.2.0-beta...v0.2.1-beta

# v0.2.0-beta
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed

With this release, the Ruby LSP no longer needs to be a part of the bundle. Please refer to https://github.com/Shopify/vscode-ruby-lsp#migrating-from-bundle for instructions on how to migrate.

### ✨ Enhancements
* Run the Ruby LSP from a generated custom Gemfile by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/419
* Allow selecting version manager next to Ruby version by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/422
### 🛠 Other Changes
* Add ability to publish previews by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/423


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.1.4...v0.2.0-beta

# v0.1.4
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Add "none" as option for Ruby Version Manager by @tmaier in https://github.com/Shopify/vscode-ruby-lsp/pull/336

### 🐛 Bug Fixes
* Avoid mutating the environment with RUBYOPT by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/429

## New Contributors
* @tmaier made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/336

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.1.3...v0.1.4

# v0.1.3
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🛠 Other Changes
* Document how to enable logging by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/411
* Send Ruby version and YJIT status as part of telemetry by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/412
* Allow restart command to fail gracefully by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/420


**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.1.2...v0.1.3

# v0.1.2
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Added missing completion configuration default https://github.com/Shopify/vscode-ruby-lsp/commit/d13f538a502331e2f22610047bc7b17b3c5ec458

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.1.1...v0.1.2

# v0.1.1
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Added completion configuration https://github.com/Shopify/vscode-ruby-lsp/commit/5b64a328bec7519025f1528914f26278d961ead7

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.1.0...v0.1.1

# v0.1.0
<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### ✨ Enhancements
* Add experimental features configuration to enable all features at once by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/383
* Create status items by @adisonlampert in https://github.com/Shopify/vscode-ruby-lsp/pull/320
* Delete GC tuning variables from the environment by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/386
* Generalize how we remove Ruby GC variables by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/389

### 🐛 Bug Fixes
* Await start, restart and stop commands by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/385
* Instantiate the client before performing bundler checks by @vinistock in https://github.com/Shopify/vscode-ruby-lsp/pull/384
* Wrap env JSON in delimiter by @andyw8 in https://github.com/Shopify/vscode-ruby-lsp/pull/390

### 🛠 Other Changes
* Clarify purpose of the rubyLsp.rubyVersionManager setting in README by @jg23497 in https://github.com/Shopify/vscode-ruby-lsp/pull/373

## New Contributors
* @andyw8 made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/371
* @adisonlampert made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/320
* @jg23497 made their first contribution in https://github.com/Shopify/vscode-ruby-lsp/pull/373

**Full Changelog**: https://github.com/Shopify/vscode-ruby-lsp/compare/v0.0.13...v0.1.0
