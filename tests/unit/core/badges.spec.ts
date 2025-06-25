import { buildUrl, formatTitle } from "@/core/badges";

describe("#buildUrl", () => {
  it("handles empty query params", () => {
    expect(buildUrl("http://example.com", {})).toBe("http://example.com/");
  });

  // The browser sees `foo=` and `foo` as the same - with a value of `true`.
  it("handles an empty value", () => {
    expect(buildUrl("http://example.com", { foo: "" })).toBe(
      "http://example.com/?foo="
    );
  });

  it("adds a single query param", () => {
    expect(buildUrl("http://example.com", { foo: "bar" })).toBe(
      "http://example.com/?foo=bar"
    );
  });

  it("adds two query params", () => {
    expect(buildUrl("http://example.com", { foo: "bar", bar: "bazz" })).toBe(
      "http://example.com/?foo=bar&bar=bazz"
    );
  });

  it("encodes equals sign in a value of URL param", () => {
    expect(buildUrl("http://example.com", { foo: "bar", bar: ">=1.2" })).toBe(
      "http://example.com/?foo=bar&bar=>%3D1.2"
    );
  });

  it("encodes special characters in a value of URL param", () => {
    expect(
      buildUrl("http://example.com", { foo: "abc?def", bar: ">=1.2" })
    ).toBe("http://example.com/?foo=abc%3Fdef&bar=>%3D1.2");
  });

  it("encodes a space in a value of URL param", () => {
    expect(
      buildUrl("http://example.com", { foo: "abc def", bar: ">=1.2" })
    ).toBe("http://example.com/?foo=abc+def&bar=>%3D1.2");
  });
});

describe("#formatTitle", () => {
  it("formats a message alone", () => {
    expect(formatTitle("", "foo")).toBe("foo");
  });

  it("formats a label and message together", () => {
    expect(formatTitle("bar", "foo")).toBe("bar - foo");
  });
});
