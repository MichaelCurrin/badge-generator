# Usage


## Start a dev server

This will compile TS to JS and serve the app. Tests are left out so the app can still be used without passing tests.

```sh
$ make serve
```

Then open in the browser at:

- http://localhost:8080

That commands applies [Lint](#lint) fixes before starting the app - if you prefer to skip that linting, just run:

```sh
$ yarn start
```

If you need to check that the site works on a subpath, run this:

```sh
$ make serve-prod
```

Then open in the browser at:

- http://localhost:8080/badge-generator/

See use of `baseUrl` in the codebase.


## Lint

Apply ESLint and Prettier formatting fixes.

```sh
$ make lint
```


## Tests

Jest is the test runner and it is run using the Jest plugin for view. See [cli-plugin-unit-jest](https://cli.vuejs.org/core-plugins/unit-jest.html) in the Vue CLI docs.

Run unit tests.

```sh
$ make test
```

That includes a step to compile to TypeScript to give validation.

The compiled JS is not actually needed. If you need to run tests alone you can do:

```sh
$ yarn test:unit
```

The IDE should also give TypeScript errors as hints.


## Compile

Compile TS files to JS.

```sh
$ yarn compile
```

The build and serve commands handle TypeScript as part of the Vue and Babel setup. But you can run the TypeScript compilation alone to check errors, as this is quicker to run. Notes this does not work on `.vue` files, as the Vue integration is left out here.

That commands includes specifying parameters which are only needed for this command - they are kept out of the TS config as Vue doesn't need them.

See [Deploy](deploy.md) for using the build command.
