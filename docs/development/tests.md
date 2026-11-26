# Tests

## Running tests

This project uses the Vue CLI unit-test plugin with Jest for unit tests. Vue single-file components are processed by Vue Jest, with a small local transform to make the generated template code compatible with Jest.

Run the unit tests:

```sh
$ yarn test:unit
```

Run the tests with coverage:

```sh
$ yarn test:coverage
```

The Makefile targets are also available:

- `make test` compiles TypeScript, then runs tests with coverage.
- `make test-quick` runs unit tests without a separate compile or coverage step.

## Why keep Jest?

TypeScript 6 does not require changing test runners. The Vue CLI 5 unit-test plugin supplies Jest 27, while this project uses Vue Jest 29, whose generated template code can retain ESM imports that Jest cannot execute. The local transform converts that output to CommonJS; the full unit suite passes with this workaround.

Moving to Vitest would remove the local transform, but it required replacing the Jest setup and adding a separate Vite-based test stack. To keep this TypeScript upgrade focused and avoid adding packages, this branch keeps Jest and the small transform instead. `ts-jest` 27 reports that TypeScript 6 is outside its tested range; it is a warning, and compilation and tests pass.

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
