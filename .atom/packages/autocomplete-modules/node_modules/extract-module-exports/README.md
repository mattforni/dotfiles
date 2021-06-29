# extract-module-exports

Extracts the export objects of a [NodeJS module][module].

This will provide you a list of the properties available when you [import a module][require].

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![formatter: unibeautify](https://img.shields.io/badge/formatter-unibeautify-388ede.svg?style=flat-square)](https://unibeautify.com)
[![CircleCI](https://circleci.com/gh/jonyeezs/extract-module-exports/tree/master.svg?style=shield)](https://circleci.com/gh/jonyeezs/extract-module-exports/tree/master) [![Greenkeeper badge](https://badges.greenkeeper.io/jonyeezs/extract-module-exports.svg)](https://greenkeeper.io/)

## Installation

```sh
npm i extract-module-exports
```

## Usage

```js
// file that exports
// some-file.js

const features = {
  feature1: function() {},
  feature2: {}
};

module.exports = features;
```

```js
const extractExports = require("extract-module-exports");

extractExports("dir-to-file/some-file.js").then(results => {
  console.log(results);
  // [{ name: "feature1", default: false },
  // 	{ name: "feature2", default: false }]
});
```

[module]: https://nodejs.org/api/modules.html#modules_the_module_object
[require]: https://nodejs.org/api/modules.html#modules_require_id
