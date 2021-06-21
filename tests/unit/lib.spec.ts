import { stripLeadingSlash } from "@/lib";

describe("#stripLeadingSlash", () => {
  it("removes a leading slash", () => {
    expect(stripLeadingSlash("/foo.png")).toBe("foo.png");
    expect(stripLeadingSlash("/foo/bar.png")).toBe("foo/bar.png");
  });

  it("does nothing if the string has no leading slash", () => {
    expect(stripLeadingSlash("foo.png")).toBe("foo.png");
    expect(stripLeadingSlash("foo/bar.png")).toBe("foo/bar.png");
  });
});
