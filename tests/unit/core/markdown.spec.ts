import {
  markdownImage,
  markdownImageWithLink,
  markdownLink,
} from "@/core/markdown";

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
