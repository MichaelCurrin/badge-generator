# Tests

## Running tests

This project uses Vitest with Vite's Vue plugin and a jsdom environment to test Vue single-file components.

Run the unit tests:

```sh
$ yarn test:unit
```

Run the tests with V8 coverage:

```sh
$ yarn test:coverage
```

The Makefile targets are also available:

- `make test` compiles TypeScript, then runs tests with coverage.
- `make test-quick` runs unit tests without a separate compile or coverage step.

## Why Vitest instead of Jest?

The switch was a test-tooling choice made during the TypeScript 6 upgrade; TypeScript 6 does not require Vitest.

The existing Vue CLI 5 unit-test plugin uses Jest 27, while this project had Vue Jest 29, which targets Jest 29. The mismatch surfaced as Vue template code retaining ESM imports that Jest could not execute. Upgrading Jest to 29 alone did not resolve that transform issue. Jest could be kept working with a custom CommonJS transformer, and that workaround passed the tests, but it added project-specific transform code and left the Jest/ts-jest stack to maintain.

Vitest was chosen to use Vite's Vue SFC transform directly and remove the custom transformer and Jest-specific packages. This is a maintainability trade-off, not a requirement of the TypeScript upgrade; keeping Jest with the transformer was a viable alternative.

## Test layout

A template for new tests:

```javascript
describe("#foo", () => {
  it("", () => {
    expect(foo("")).toBe("");
  });
});
```

## Exporting

All functions tested need to be exported so they can be imported. A leading underscore is used to indicate functions are private - intended for use only within a module and not to be called directly (except in tests). The `private` keyword is not used as that prevents tests from running.
