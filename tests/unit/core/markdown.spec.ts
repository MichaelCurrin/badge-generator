import { mdImage, mdImageWithLink, mdLink } from "@/core/markdown";

describe("#mdLink", () => {
  it("returns a valid markdown link", () => {
    expect(mdLink("Alt text", "foo.md")).toBe("[Alt text](foo.md)");

    expect(mdLink("Example", "https://example.com")).toBe(
      "[Example](https://example.com)"
    );
  });
});

describe("#mdImage", () => {
  it("returns a valid Markdown image element", () => {
    {
      const result = mdImage({ altText: "Alt text", imageTarget: "foo.png" });
      expect(result).toBe("![Alt text](foo.png)");
    }
    {
      const result = mdImage({
        altText: "Example",
        imageTarget: "https://example.com/foo.png",
      });
      expect(result).toBe("![Example](https://example.com/foo.png)");
    }
  });

  it("returns a valid Markdown image with hover title set", () => {
    expect(
      mdImage({
        altText: "Alt text",
        imageTarget: "foo.png",
        hoverTitle: "My hover text",
      })
    ).toBe('![Alt text](foo.png "My hover text")');

    expect(
      mdImage({
        altText: "Example",
        imageTarget: "https://example.com",
        hoverTitle: "My example",
      })
    ).toBe('![Example](https://example.com "My example")');
  });
});

describe("#mdImageWithLink", () => {
  it("returns a valid element using required parameters set", () => {
    expect(
      mdImageWithLink({
        altText: "My alt text",
        imageTarget: "foo.png",
        linkTarget: "https://example.com",
      })
    ).toBe("[![My alt text](foo.png)](https://example.com)");

    expect(
      mdImageWithLink({
        altText: "My title",
        imageTarget: "/example.png",
        linkTarget: "https://example.com",
      })
    ).toBe("[![My title](/example.png)](https://example.com)");
  });

  it("returns a valid element using hover title set", () => {
    expect(
      mdImageWithLink({
        altText: "My alt text",
        imageTarget: "foo.png",
        linkTarget: "https://example.com",
        hoverTitle: "My hover title",
      })
    ).toBe('[![My alt text](foo.png)](https://example.com "My hover title")');

    expect(
      mdImageWithLink({
        altText: "My title",
        imageTarget: "/example.png",
        linkTarget: "https://example.com",
        hoverTitle: "My hover title",
      })
    ).toBe('[![My title](/example.png)](https://example.com "My hover title")');
  });

  it("Returns a valid element with special characters preserved", () => {
    expect(
      mdImageWithLink({
        altText: "My title",
        imageTarget: "/example.png",
        linkTarget: "https://example.com?foo=bar&fizz_buzz=baz&x>=2",
      })
    ).toBe(
      "[![My title](/example.png)](https://example.com?foo=bar&fizz_buzz=baz&x>=2)"
    );
  });
});
