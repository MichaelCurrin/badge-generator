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

If you need to check that the site works on a GitHub Pages subpath, run this:

```sh
$ make serve-subpath
```

Then open in the browser at:

- http://localhost:8080/badge-generator/

The Vue Router package handles navigation for us. For links outside of the navbar, search for use of `baseUrl` in the codebase.


## Fix

Apply formatting fixes (with Prettier) and lint fixes (with ESLint). Show any errors that could not be fixed.

```sh
$ make fix
```


## Tests

Jest is the test runner and it is run using the Jest plugin for view. See [cli-plugin-unit-jest](https://cli.vuejs.org/core-plugins/unit-jest.html) in the Vue CLI docs.

Run unit tests.

```sh
$ make test
```

That includes a step to compile to TypeScript, to give validation. Though the compiled output JS is not actually needed.

To run tests without compilation and without code coverage, just run:

```sh
$ yarn test:unit
```

The IDE should also give TypeScript errors as hints.


## Check types

Validate that TS compiles without errors. This does not persist anything.

```sh
$ yarn compile
```

This step is optional as the `build` or `serve` commands handle TypeScript internally. But running this compile step alone is much faster. See also use in [Makefile](/Makefile).

Note that does **not** check the `.vue` files, as the Vue integration is left out here.

See [Deploy](deploy.md) for using the build command.
