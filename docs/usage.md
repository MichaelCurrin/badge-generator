# Usage

## Run dev server

This will perform lint fixes, compile TS to JS and serve the app.

```sh
$ yarn start
$ # Or
$ make serve
```

Open in the browser:

- http:localhost:8080


## Lint

Apply ESLint and Prettier formatting fixes.

```sh
$ yarn lint:fix
$ # Or
$ make lint
```

Note that this is run as part of the `start` command above.


## Tests

Jest is the test runner and it is run using the Jest plugin for view. See [cli-plugin-unit-jest](https://cli.vuejs.org/core-plugins/unit-jest.html) in the Vue CLI docs.

Run unit tests.

```sh
$ yarn test:unit
$ # Or
$ make test
```

Note that this does need or produce any output directory. It operates directly on the `.ts` files.


## Compile

Compile TS files to JS.

```sh
$ yarn compile
```

The build and serve commands handle TypeScript as part of the Vue and Babel setup. But you can run the TypeScript compilation alone to check errors, as this is quicker to run. Notes this does not work on `.vue` files, as the Vue integration is left out here.

That commands includes specifying parameters which are only needed for this command - they are kept out of the TS config as Vue doesn't need them.

See [Deploy](deploy.md) for using the build command.
