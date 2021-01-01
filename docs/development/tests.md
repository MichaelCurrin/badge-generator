# Tests

All functions tested needed `export` so they can be imported. A leading underscore is used to indicate functions are private - intended for use only within a module and not to be called directly (except in tests). The `private` keyword is not used as that prevents tests from running.

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
