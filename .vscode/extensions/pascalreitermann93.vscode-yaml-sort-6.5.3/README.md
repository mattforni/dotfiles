# YAML Sort
YAML Sort extends VS Code to sort, format and validate YAML files.

[![Coverage Status](https://coveralls.io/repos/github/pascalre/vscode-yaml-sort/badge.svg?branch=master)](https://coveralls.io/github/pascalre/vscode-yaml-sort?branch=master)
[![GitHub issues open](https://img.shields.io/github/issues/pascalre/vscode-yaml-sort.svg)](https://github.com/pascalre/vscode-yaml-sort/issues)

## Preview
![Preview](https://github.com/pascalre/vscode-yaml-sort/raw/HEAD/images/preview.gif)

# 💬 Commands
This extension contributes the following commands:

| Command                                        | Description                                                                                                           |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `Custom Sort 1`                                | This command will sort a given YAML with custom order. If some of the keys of `customSortKeywords_1` will be found at the top level of the YAML, these will be put at the beginning of the YAML file (in the given order). You can use this e. g. to sort Kubernetes configmaps. |
| `Custom Sort 2`                                | Same as `Custom Sort 1`                                                                                               |
| `Custom Sort 3`                                | Same as `Custom Sort 1`                                                                                               |
| `Format Document`                              | Formats a yaml document without sorting it. Also possible using the shortcut (⇧⌥F on Mac). |
| `Recursively sort YAML files`                  | Sorts all `.yaml` and `.yml` files in a directory and all its subdirectories.                                         |
| `Sort YAML`                                    | Sorts a given YAML. You can either sort the whole YAML document or sort only a selection of the text.                 |
| `Validate YAML`                                | Validates a given YAML.                                                                                               |

# ⚙️ Configuration
This extension contributes the following settings:

| Setting                    | Description                                                                                                                                                      | Default          |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------| ---------------- |
| `emptyLinesUntilLevel`     | When bigger than `0`, will add a new line before each keyword on level n.                                                                                        | `0`              |
| `customSortKeywords_1`     | List of keywords for `Custom Sort 1`                                                                                                                             | `["apiVersion", "kind", "metadata", "spec", "data"]`|
| `customSortKeywords_2`     | List of keywords for `Custom Sort 2`                                                                                                                             | -                |
| `customSortKeywords_3`     | List of keywords for `Custom Sort 3`                                                                                                                             | -                |
| `extensions`               | Extensions to be processed with command `Recursively sort YAML files`                                                                                            | `["yaml", "yml"]` |
| `forceQuotes`              | When `true`, all non-key strings will be quoted even if they normally don't need to.                                                                             | `false`          |
| `indent`                   | Indentation width in spaces                                                                                                                                      | `2`              |
| `lineWidth`                | Maximum line width for YAML files                                                                                                                                | `500`            |
| `locale`                   | Language whose sort order should be used                                                                                                                         | `en`             |
| `noArrayIndent`            | When `true`, will not add an indentation level to array elements.                                                                                                | `false`          |
| `noCompatMode`             | When `true`, don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1                         | `false`          |
| `notifySuccess`            | When `true`, will notify on successfully performed tasks.                                                                                                        | `true`           |
| `quotingType`              | Strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters.                    | `'`              |
| `schema`                   | Schema to use. Possible values are `HOMEASSISTANT_SCHEMA`, `CLOUDFORMATION_SCHEMA`, `CORE_SCHEMA`, `DEFAULT_SCHEMA`, `FAILSAFE_SCHEMA`, `JSON_SCHEMA`.           | `DEFAULT_SCHEMA` |
| `sortArrays`               | When `true`, will sort arrays                                                                                                                                   | `false`          |
| `sortOnSave`               | When `0`, will sort files when saving document. When `1`, `2` or `3`, will use customSortKeywords. Set to negative value to disable sortOnSave. Only works in combination with `editor.formatOnSave` set to `true`. | `0`           |
| `useAsFormatter`           | When `true`, will enable default YAML formatter (requires restart).                                                                                              | `false`          |
| `useCustomSortRecursively` | When `true`, will use the custom sort keywords recursively on a file, when using custom sort.                                                                    | `false`          |
| `useLeadingDashes`         | When `true`, sorted YAML files begin with leading dashes.                                                                                                        | `true`           |
| `useArrayProcessor`        | When `true`, will activate ArrayProcessor.                                                                                                                       | `true`           |
| `useBlockProcessor`        | When `true`, will activate BlockProcessor.                                                                                                                       | `true`           |
| `useCommentProcessor`      | When `true`, will activate CommentProcessor.                                                                                                                     | `true`           |
| `useHelmProcessor`         | When `true`, will activate HelmProcessor.                                                                                                                        | `true`           |
| `useOctalProcessor`        | When `true`, will activate OctalProcessor.                                                                                                                       | `true`           |

# ❓ FAQ
## How to sort on save?
Register this extension as VS Code formatter. Also configure VS Code to format files on save. Caution: This setting will apply for all files. Changes will require a restart of VS Code. If you wish to also sort (not only format) the file on saving, set `sortOnSave` to `0`. Use `1`, `2` or `3` for custom sort.

#### **`.vscode/settings.json`**
```json
{    
    "editor.formatOnSave": true,
    "vscode-yaml-sort.sortOnSave": 0
}
```

## What are the processors doing and how do I use them?
There are different types of processors. If you experience any issues with them, or just don't want to use them, you can turn them off.

### ArrayProcessor
The ArrayProcessor will not add linebreaks to single-line array structures.

<table width="100%">
    <tr>
        <th width="33.3%">Original Document</th>
        <th width="33.3%">Sorted with<br><code>useArrayProcessor: true</code></th>
        <th width="33.3%">Sorted with<br><code>useArrayProcessor: false</code></th>
    </tr>
    <tr>
        <td><code>test: [ "CMD", "pg_isready"]</code></td>
        <td><code>test: [ "CMD", "pg_isready"]</code></td>
        <td><code>test:<br>- "CMD"<br>- "pg_isready"</code></td>
    </tr>
</table>

### BlockProcessor
The BlockProcessor will keep block sequences.

<table width="100%">
    <tr>
        <th width="33.3%">Original Document</th>
        <th width="33.3%">Sorted with<br><code>useBlockProcessor: true</code></th>
        <th width="33.3%">Sorted with<br><code>useBlockProcessor: false</code></th>
    </tr>
    <tr>
        <td><code>hello: |-<br>&nbsp;&nbsp;World</code></td>
        <td><code>hello: |-<br>&nbsp;&nbsp;World</code></td>
        <td><code>hello: World</code></td>
    </tr>
</table>

### Comment Processor
An activated Comment Processor will keep comments while sorting.

<table width="100%">
    <tr>
        <th width="33.3%">Original Document</th>
        <th width="33.3%">Sorted with<br><code>useCommentProcessor: true</code></th>
        <th width="33.3%">Sorted with<br><code>useCommentProcessor: false</code></th>
    </tr>
    <tr>
        <td><code># comment<br>foo: bar</code></td>
        <td><code># comment<br>foo: bar</code></td>
        <td><code>foo: bar</code></td>
    </tr>
</table>

### Helm Processor
The Helm Processor makes the extension compatible with Helm charts.

<table width="100%">
    <tr>
        <th width="33.3%">Original Document</th>
        <th width="33.3%">Sorted with<br><code>useHelmProcessor: true</code></th>
        <th width="33.3%">Sorted with<br><code>useHelmProcessor: false</code></th>
    </tr>
    <tr>
        <td><code>foo: {{ .value }}</code></td>
        <td><code>foo: {{ .value }}</code></td>
        <td><code>foo:<br>  '[object Object]': null</code></td>
    </tr>
</table>

### Spacing Processor
The Spacing Processor will add spacing between keywords.

<table width="100%">
    <tr>
        <th width="33.3%">Original Document</th>
        <th width="33.3%">Sorted with<br><code>emptyLinesUntilLevel: 0</code></th>
        <th width="33.3%">Sorted with<br><code>emptyLinesUntilLevel: 1</code></th>
    </tr>
    <tr>
        <td><code>foo: bar<br>baz: bar</code></td>
        <td><code>foo: bar<br>baz: bar</code></td>
        <td><code>foo: bar<br><br>baz: bar</code></td>
    </tr>
</table>

### Octal Processor
The Octal Processor makes the extension keeping octal value like 0744.

<table width="100%">
    <tr>
        <th width="33.3%">Original Document</th>
        <th width="33.3%">Sorted with<br><code>useOctalProcessor: true</code></th>
        <th width="33.3%">Sorted with<br><code>useOctalProcessor: false</code></th>
    </tr>
    <tr>
        <td><code>foo: 0744</code></td>
        <td><code>foo: 0744</code></td>
        <td><code>foo: 484</code></td>
    </tr>
</table>

# 🎉 Support

If you like YAML Sort, please feel free to [rate it](https://marketplace.visualstudio.com/items?itemName=PascalReitermann93.vscode-yaml-sort&ssr=false#review-details) on the marketplace.

If you miss something or found a bug, please let me know and [open an issue](https://github.com/pascalre/vscode-yaml-sort/issues/new) on this project on GitHub. Do not hesitate to open a pull request with your changes.

Check [open issues](https://github.com/pascalre/vscode-yaml-sort/issues) on GitHub.

## Known problems

Be careful with anchors and references, these don't work very well in this extension.

# 📝 License

YAML Sort is licensed under the [MIT License](https://raw.githubusercontent.com/pascalre/vscode-yaml-sort/master/LICENSE).
