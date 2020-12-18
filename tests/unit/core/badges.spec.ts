import {
  buildUrl,

  genericBadge,
  markdownImage,
  markdownImageWithLink,
  markdownLink,
  _decodeAngleBrackets,
  _encodeParam,
  _encodeSeparators, _formatTitle
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

    expect(
      markdownImageWithLink("My title", "/example.png", "https://example.com")
    ).toBe("[![My title](/example.png)](https://example.com)");
  });
  it("Does not encode special characters", () => {
    expect(
      markdownImageWithLink(
        "My title",
        "/example.png",
        "https://example.com?foo=bar&fizz_buzz=baz&x>=2"
      )
    ).toBe(
      "[![My title](/example.png)](https://example.com?foo=bar&fizz_buzz=baz&x>=2)"
    );
  });
});

describe("#_encodeSeparators", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeSeparators("Foo Bar", true)).toBe("Foo_Bar");
  });
  it("will ignore transforming a space", () => {
    expect(_encodeSeparators("Foo Bar", false)).toBe("Foo Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeSeparators("Foo-Bar", true)).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeSeparators("Foo_Bar", true)).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeSeparators("Foo Bar_Baz-Buzz", true)).toBe("Foo_Bar__Baz--Buzz");
  });
});

describe("#_decodeAngleBrackets", () => {
  it("decodes a left angle bracket", () => {
    expect(_decodeAngleBrackets("%3E%3D1")).toBe(">%3D1");
  });

  it("decodes a right angle bracket", () => {
    expect(_decodeAngleBrackets("foo%3C1")).toBe("foo<1");
  });
})

describe("#_encodeParam", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeParam("Foo Bar")).toBe("Foo_Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeParam("Foo-Bar")).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeParam("Foo_Bar")).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeParam("Foo Bar_Baz-Buzz")).toBe("Foo_Bar__Baz--Buzz");
  });

  // These could appear when putting a URL as a value in the path, so need to be escaped.
  it("encodes special characters correctly", () => {
    expect(_encodeParam("&")).toBe("%26");
    expect(_encodeParam("/")).toBe("%2F");
    expect(_encodeParam("?")).toBe("%3F");
  });

  it("encodes a string correctly without converting angle brackets", () => {
    expect(_encodeParam(">=3")).toBe(">%3D3");
    expect(_encodeParam("<2")).toBe("<2");
  });
});


describe("#buildUrl", () => {
  it("handles empty query params", () => {
    expect(
      buildUrl(
        "http://example.com", {}
      )
    ).toBe("http://example.com/");
  });

  it("ignores a param which is null", () => {
    expect(
      buildUrl(
        "http://example.com", { "foo": "" }
      )
    ).toBe("http://example.com/");
  });

  it("adds a single query param", () => {
    expect(
      buildUrl(
        "http://example.com", { "foo": "bar" }
      )
    ).toBe("http://example.com/?foo=bar");
  });


  it("adds two query params", () => {
    expect(
      buildUrl(
        "http://example.com", { "foo": "bar", "bar": 'bazz' }
      )
    ).toBe("http://example.com/?foo=bar&bar=bazz");
  });
});

describe("#_formatTitle", () => {
  it("formats a message alone", () => {
    expect(
      _formatTitle(
        "", "foo"
      )
    ).toBe("foo");
  });

  it("formats a label and message together", () => {
    expect(
      _formatTitle(
        "bar", "foo"
      )
    ).toBe("bar - foo");
  });
});

// These cases are based on the common choices and defaults in the UI, to simulate testing the
// frontend.
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
