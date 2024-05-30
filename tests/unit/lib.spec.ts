import { slugify, stripLeadingSlash } from "@/lib";

describe("#stripLeadingSlash", () => {
  it("removes a leading slash", () => {
    expect(stripLeadingSlash("/foo.png")).toBe("foo.png");
    expect(stripLeadingSlash("/foo/bar.png")).toBe("foo/bar.png");
  });

  it("does nothing if the string has no leading slash", () => {
    expect(stripLeadingSlash("foo.png")).toBe("foo.png");
    expect(stripLeadingSlash("foo/bar.png")).toBe("foo/bar.png");
  });

  it("removes multiple leading slashes", () => {
    expect(stripLeadingSlash("///foo.png")).toBe("foo.png");
    expect(stripLeadingSlash("///foo/bar.png")).toBe("foo/bar.png");
  });

  it("returns an empty string if the input is an empty string", () => {
    expect(stripLeadingSlash("")).toBe("");
  });

  it("returns an empty string if the input is only slashes", () => {
    expect(stripLeadingSlash("/")).toBe("");
    expect(stripLeadingSlash("//")).toBe("");
    expect(stripLeadingSlash("///")).toBe("");
  });

  it("handles strings with slashes in the middle or end", () => {
    expect(stripLeadingSlash("foo/bar/")).toBe("foo/bar/");
    expect(stripLeadingSlash("foo/bar//")).toBe("foo/bar//");
  });
});

describe("#slugify", () => {
  describe("converts a single value to a slug correctly", () => {
    it("trims", () => {
      expect(slugify(" abcdef ")).toBe("abcdef");
    });

    it("downcases", () => {
      expect(slugify("ABCDEF")).toBe("abcdef");
    });

    it("removes non-alphanumeric characters", () => {
      expect(slugify("!@#$%123")).toBe("123");
    });

    it("collapses whitespaces into a single dash", () => {
      expect(slugify("a b")).toBe("a-b");
      expect(slugify("a   b")).toBe("a-b");
    });

    it("collapses dashes into a single dash", () => {
      expect(slugify("a--b")).toBe("a-b");
    });

    it("handles a mix of cases", () => {
      expect(slugify("ABC DEF ? 123 xyz")).toBe("abc-def-123-xyz");
    });
  });

  describe("combines multiple values into a single slug", () => {
    it("handles spaced words in uppercase", () => {
      expect(slugify("ABC DEF", "MNOP")).toBe("abc-def-mnop");
    });

    it("handles a mix of cases", () => {
      expect(slugify("ABC DEF ? 123 xyz", "mnop 78#$")).toBe(
        "abc-def-123-xyz-mnop-78"
      );
    });
  });
});
