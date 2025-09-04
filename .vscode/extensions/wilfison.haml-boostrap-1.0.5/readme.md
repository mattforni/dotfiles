# HAML Bootstrap Snippets & Class Autocomplete for VS Code

![preview](https://github.com/wilfison/vscode-haml-bootstrap-snippets/raw/HEAD/images/preview.gif)

## How to use Snippets

| Version       | Prefix |
| ------------- | ------ |
| bootstrap 4.x | bs4-   |
| bootstrap 5.x | bs5-   |

**Example**

bootstrap 5 button

```haml
-# bs5-button

%button.btn.btn-primary{type: 'button'}
  My Button
```


## CSS Class completion

Enable/disable CSS class completion in the settings.

```json
{
  "hamlBootstrap.enableCssClassCompletion": true
}
```

The current bootstrap version is determined by:

1. The version of the `bootstrap` package in the `node_modules` folder.
2. The version of the `bootstrap` gem in the `Gemfile.lock` file.
3. Latest version of the `bootstrap` package on CDN.
