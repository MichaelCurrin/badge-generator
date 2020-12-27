

## Tests

All functions tested needed `export` so they can be imported. A leading underscore is used to indicate functions are private - intended for use only within a module and not to be called directly (except in tests).

A template for new tests:

```
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
