import { markdownImage, markdownLink } from "@/core/badges";

describe("#markdownLink", () => {
  it("returns a valid markdown link", () => {
    expect(markdownLink("Alt text", "foo.md")).toMatch("[Alt text](foo.md)");

    expect(markdownLink("Example", "https://example.com")).toMatch(
      "[Example](https://example.com)"
    );
  });
});

describe("#markdownImage", () => {
  it("returns a valid markdown image", () => {
    expect(markdownImage("Alt text", "foo.md")).toEqual("![Alt text](foo.md)");

    expect(markdownImage("Example", "https://example.com")).toEqual(
      "![Example](https://example.com)"
    );
  });

  it("returns a valid markdown image with hover text", () => {
    expect(markdownImage("Alt text", "foo.md", "My hover text")).toEqual(
      '![Alt text](foo.md "My hover text")'
    );

    expect(
      markdownImage("Example", "https://example.com", "Go to example")
    ).toEqual('![Example](https://example.com "Go to example")');
  });
});
