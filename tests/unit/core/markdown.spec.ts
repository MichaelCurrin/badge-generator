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
  it("returns a valid markdown image", () => {
    expect(mdImage({ altText: "Alt text", imageTarget: "foo.png" })).toBe(
      "![Alt text](foo.png)"
    );

    expect(
      mdImage({
        altText: "Example",
        imageTarget: "https://example.com/foo.png",
      })
    ).toBe("![Example](https://example.com/foo.png)");
  });

  it("returns a valid markdown image with hover text", () => {
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
  it("returns a valid tag using all parameters set", () => {
    expect(
      mdImageWithLink({
        altText: "Alt text",
        imageTarget: "foo.png",
        linkTarget: "https://example.com",
        hoverTitle: "My foo",
      })
    ).toBe('[![Alt text](foo.png "My foo")](https://example.com)');

    expect(
      mdImageWithLink({
        altText: "My title",
        imageTarget: "/example.png",
        linkTarget: "https://example.com",
      })
    ).toBe("[![My title](/example.png)](https://example.com)");
  });
  it("Does not encode special characters", () => {
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
