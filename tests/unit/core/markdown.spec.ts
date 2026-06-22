import {
  cleanHtml,
  mdImage,
  mdImageWithLink,
  mdLink,
  mdToHTML,
} from "@/core/markdown";

describe("#mdLink", () => {
  it("returns a valid markdown link", () => {
    expect(mdLink({ altText: "Alt text", linkTarget: "foo.md" })).toBe(
      "[Alt text](foo.md)"
    );

    expect(
      mdLink({ altText: "Example", linkTarget: "https://example.com" })
    ).toBe("[Example](https://example.com)");
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

describe("#mdToHTML", () => {
  it("renders markdown headings as HTML", () => {
    expect(mdToHTML("# Hello")).toContain("<h1>Hello</h1>");
  });

  it("renders markdown links as HTML", () => {
    expect(mdToHTML("[Example](https://example.com)")).toContain(
      '<a href="https://example.com">Example</a>'
    );
  });
});

describe("#cleanHtml", () => {
  it("converts emphasis and strong tags to i and b", () => {
    const html = mdToHTML("*emphasis* and **strong**");
    const cleaned = cleanHtml(html);

    expect(cleaned).toContain("<i>emphasis</i>");
    expect(cleaned).toContain("<b>strong</b>");
  });

  it("removes paragraph tags and decodes ampersands", () => {
    const cleaned = cleanHtml("<p>Tom &amp; Jerry</p>");

    expect(cleaned).toBe("Tom & Jerry\n");
  });
});
