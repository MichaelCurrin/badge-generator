import { mkHtmlImg } from "@/core/images";

describe("#mkHtmlImg", () => {
  it("returns a bare img tag when optional attrs are empty", () => {
    expect(mkHtmlImg("foo.png", "", "", "", "", "")).toBe(
      '<img src="foo.png"/>'
    );
  });

  it("includes alt, title, width, and height when provided", () => {
    expect(
      mkHtmlImg("foo.png", "Alt text", "Title text", "", "100", "50")
    ).toBe(
      '<img src="foo.png" alt="Alt text" title="Title text" width="100" height="50"/>'
    );
  });

  it("omits alt and title attributes when those values are empty", () => {
    expect(mkHtmlImg("foo.png", "", "", "", "100", "50")).toBe(
      '<img src="foo.png" width="100" height="50"/>'
    );
  });

  it("wraps img in anchor when target is provided", () => {
    expect(mkHtmlImg("foo.png", "Alt", "", "https://example.com", "", ""))
      .toBe(`<a href="https://example.com">
    <img src="foo.png" alt="Alt"/>
</a>`);
  });

  it("wraps a fully attributed img in anchor when target is provided", () => {
    expect(
      mkHtmlImg(
        "https://example.com/badge.svg",
        "Badge",
        "My badge",
        "https://example.com",
        "120",
        "20"
      )
    ).toBe(`<a href="https://example.com">
    <img src="https://example.com/badge.svg" alt="Badge" title="My badge" width="120" height="20"/>
</a>`);
  });
});
