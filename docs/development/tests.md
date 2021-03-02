# Tests


## Test command

This project uses Jest as a test runner.

This can be added with:

```sh
$ npx vue add unit-test
```

The original script setup for testing in this app was:

```sh
$ vue-cli-service test:unit
```

For more info see [@vue/cli-plugin-unit-jest](https://cli.vuejs.org/core-plugins/unit-jest.html).

### Customization

Note that from the CLI help, that _all jest command line options are supported_.

To add test coverage:

```sh
$ vue-cli-service test:unit --coverage
```

Unrelated to a coverage, a warning requested `--detectOpenHandles` flag to be added.

> A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with `--detectOpenHandles` to find leaks.

### Running test directly

You're supposed to the Vue CLI approach according to the docs.

> Note that directly running jest will fail because the Babel preset requires hints to make your code work in Node.js, so you must run your tests with vue-cli-service test:unit.

Though, I found this _did_ actually work.

```sh
$ jest --coverage
```

Perhaps because I only have unit tests on JS files and not on Vue files, which would need transpilation with Babel.


## Test layout

A template for new tests:

```javascript
describe("#foo", () => {
  it("", () => {
    expect(
      foo(
        ""
      )
    ).toBe("");
  });
});
```


## Exporting

All functions tested needed `export` so they can be imported. A leading underscore is used to indicate functions are private - intended for use only within a module and not to be called directly (except in tests). The `private` keyword is not used as that prevents tests from running.
