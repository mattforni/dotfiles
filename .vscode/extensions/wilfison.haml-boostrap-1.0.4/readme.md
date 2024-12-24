# HAML bootstrap 4 & 5 Snippets for VS Code

![preview](https://github.com/wilfison/vscode-haml-bootstrap-snippets/raw/HEAD/images/preview.gif)

## How to use

| Version     | Prefix |
| ----------- | ------ |
| bootstrap 4 | bs4-   |
| bootstrap 5 | bs5-   |

## Start new html5 file with bootstrap 5

```haml
-# !bs5-html5

!!!
%html{lang: 'en'}
  %head
    %meta{content: 'text/html; charset=UTF-8', 'http-equiv': 'Content-Type'}/
    %meta{charset: 'UTF-8'}/
    %meta{content: 'IE=edge', 'http-equiv': 'X-UA-Compatible'}/
    %meta{content: 'width=device-width, initial-scale=1.0', name: 'viewport'}/

    %title Title

    %link{crossorigin: 'anonymous', href: '...', integrity: '...', rel: 'stylesheet'}/

  %body
    = yield

    -# include Popper if needed positioning dropdowns, poppers, and tooltips
    -# %script{crossorigin: 'anonymous', integrity: '...', src: '...'}
    %script{crossorigin: 'anonymous', integrity: '...', src: 'bootstrap.min.js'}
```

## Example

bootstrap 5 button

```haml
-# bs5-button

%button.btn.btn-primary{type: 'button'}
  My Button
```
