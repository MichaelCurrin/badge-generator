

## Linting and formatting

This topic has a few pieces relevant for maintaining this project.

- TS and JS Language Features in VS Code
    - Appears builtin - not an extension.
    - Applies formatting on save.
- ESLint extension in VS Code
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) on VS Code marketplace.
    - Applies formatting on save - but the TS and JS part seems to take precedence over this.
    - Applies formatting on command-prompt - "ESLint: Fix all...".
    - Shows warnings in the file editor.
- ESLint CLI
    - This can be run through a Yarn command setup in `package.json`.
    - Applies formatting and warns of items that need attention like unused variables.
    - I tried configuring like this, but ran into issues as covered next in Prettier, where the IDE removes a comma (with ESLint and Prettier removed or disabled) but running ESLint on the CLI puts it back. Also, a function as `{}` becomes `{ }`. It was easiest just to leave these out of the config.
        ```javascript
        {
          rules: {
            semi: [2, "always"],
            "comma-dangle": [2, "always-multiline"],
            quotes: [2, "double"],
          }
        }
        ```
    - The semicolon and double quotes are set like this by default anyway (maybe by a Vue / ESLint plugin or ESLint) and the comma-dangle issue only affects two files and it not worth hassling over. Note that even with ESLint rules left out, it is still necessary to put `// eslint-disable-next-line prettier/prettier` in two files to avoid the CLI tool from adding a comma back.
- Prettier CLI formatter
    - Configured as the formatter for ESLint. This means that Prettier is used when running ESLint through either approach above and so it doesn't have to be run as a standalone CLI command.
    - A `.prettier` JSON config was added in an attempt to be explicit. But it didn't help so was removed. Also, having it meant markdown files got seen as 2 spaces by VS Code (maybe this is fixed with `.editorconfig` now).
        - There were conflicts before this was setup.
            - The trailing comma (only for imports, not for variables) was _removed_ by the IDE extension and _added_ back by the CLI. Setting the config to have `"trailingComma": "all"` didn't help as the "JavaScript and TypeScript Languages Features" extension (not ESLint extension, which asks for the comma) removes the comma each time. So the only options are using an ignore statement above the import as `// eslint-disable-next-line prettier/prettier` so that it remains without a comma, or configure as `"none"` which affects the whole project. The whole issue is confusing - the extension doesn't want trailing commands on imports and function definitions or calls but keeps them on object definitions. And ESLint without Prettier configured only differs from the extension on the import part.
            - Also, indentation for comma-separated `const` variables also differed when the first item is an associative array. It's easiest just to use `const` for the second item.
                ```javascript
                const badgeMakers = {
                  node: nodeVersionBadge,
                },
                  badgeMaker = badgeMakers[pkgType];
                ```

Therefore formatting rules can be set at a few levels, which makes things confusing and can cause conflicts.

- The IDE settings for extensions.
- Configured ESLint settings in a config file.
- Configured Prettier settings in a config file.
- Editor Config file (for indentation at least.)
