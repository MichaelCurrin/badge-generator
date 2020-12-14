import {
  encodeParam,
  genericBadge,

  markdownImage,
  markdownImageWithLink,
  markdownLink
} from "@/core/badges";

describe("#markdownLink", () => {
  it("returns a valid markdown link", () => {
    expect(markdownLink("Alt text", "foo.md")).toBe("[Alt text](foo.md)");

    expect(markdownLink("Example", "https://example.com")).toBe(
      "[Example](https://example.com)"
    );
  });
});

describe("#markdownImage", () => {
  it("returns a valid markdown image", () => {
    expect(markdownImage("Alt text", "foo.png")).toBe("![Alt text](foo.png)");

    expect(markdownImage("Example", "https://example.com/foo.png")).toBe(
      "![Example](https://example.com/foo.png)"
    );
  });

  it("returns a valid markdown image with hover text", () => {
    expect(markdownImage("Alt text", "foo.png", "My hover text")).toBe(
      '![Alt text](foo.png "My hover text")'
    );

    expect(markdownImage("Example", "https://example.com", "My example")).toBe(
      '![Example](https://example.com "My example")'
    );
  });
});

describe("#markdownImageWithLink", () => {
  it("returns a valid tag using all parameters set", () => {
    expect(
      markdownImageWithLink(
        "Alt text",
        "foo.png",
        "https://example.com",
        "My foo"
      )
    ).toBe('[![Alt text](foo.png "My foo")](https://example.com)');
  });
});

describe("#encodeParam", () => {
  it("convert a space to an underscore", () => {
    expect(encodeParam("Foo Bar")).toBe("Foo_Bar");
  });

  it("converts a single dash to two", () => {
    expect(encodeParam("Foo-Bar")).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(encodeParam("Foo_Bar")).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(encodeParam("Foo Bar_Baz-Buzz")).toBe("Foo_Bar__Baz--Buzz");
  });

  // These could appear when putting a URL as a value in the path, so need to be escaped.
  it("encodes special characters correctly", () => {
    expect(encodeParam("&")).toBe("%26");
    expect(encodeParam("/")).toBe("%2F");
    expect(encodeParam("?")).toBe("%3F");
  });

  // Note that '>' and '<' are valid on shields.io and should not be encoded.
  it("encodes a string correctly without converting angle brackets", () => {
    expect(encodeParam(">=3")).toBe(">%3D3");

    expect(encodeParam("<2")).toBe("<2");
  });
});

// These cases are based on the common choices and defaults in the UI, which approximates testing the frontend.
describe("#genericBadge", () => {
  it("displays a badge given a message and a color", () => {
    expect(genericBadge("", "Bar", "green")).toBe(
      "![Bar](https://img.shields.io/badge/Bar-green)"
    );
  });

  it("displays a badge given label, message and a color", () => {
    expect(genericBadge("Foo", "Bar", "green")).toBe(
      "![Foo - Bar](https://img.shields.io/badge/Foo-Bar-green)"
    );
  });

  it("displays a badge point to external link", () => {
    const target = "https://example.com";

    expect(genericBadge("", "Bar", "green", false, target)).toBe(
      "[![Bar](https://img.shields.io/badge/Bar-green)](https://example.com)"
    );

    expect(genericBadge("", "Bar", "green", false, target, "", "", true)).toBe(
      "[![Bar](https://img.shields.io/static/v1?message=Bar&color=green)](https://example.com)"
    );
  });

  it("displays a large badge", () => {
    const displayLarge = true;

    expect(genericBadge("", "Bar", "green", displayLarge)).toBe(
      "![Bar](https://img.shields.io/badge/Bar-green?style=for-the-badge)"
    );

    expect(
      genericBadge("", "Bar", "green", displayLarge, "", "", "", true)
    ).toBe(
      "![Bar](https://img.shields.io/static/v1?message=Bar&color=green&style=for-the-badge)"
    );
  });

  it("displays a logo", () => {
    const logo = "github";

    expect(genericBadge("", "Bar", "green", false, "", logo)).toBe(
      "![Bar](https://img.shields.io/badge/Bar-green?logo=github)"
    );

    expect(genericBadge("", "Bar", "green", false, "", logo, "", true)).toBe(
      "![Bar](https://img.shields.io/static/v1?message=Bar&color=green&logo=github)"
    );
  });

  it("displays a logo with a custom logo color", () => {
    const logo = "github",
      logoColor = "yellow";

    expect(genericBadge("", "Bar", "green", false, "", logo, logoColor)).toBe(
      "![Bar](https://img.shields.io/badge/Bar-green?logo=github&logoColor=yellow)"
    );

    expect(
      genericBadge("", "Bar", "green", false, "", logo, logoColor, true)
    ).toBe(
      "![Bar](https://img.shields.io/static/v1?message=Bar&color=green&logo=github&logoColor=yellow)"
    );
  });
});
