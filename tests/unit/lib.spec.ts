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
});


describe("#slugify", () => {
  describe("creates a slug correctly", () => {
    it("trims", () => {
      expect(slugify(' abcdef ')).toBe("abcdef")
    })

    it("downcases", () => {
      expect(slugify('ABCDEF')).toBe("abcdef")
    })

    it("removes non-alphanumeric characters", () => {
      expect(slugify('!@#$%123')).toBe("123")
    })

    it("collapses whitespaces into a single dash", () => {
      expect(slugify('a b')).toBe("a-b")
      expect(slugify('a   b')).toBe("a-b")
    })

    it("collapses dashes into a single dash", () => {
      expect(slugify('a--b')).toBe("a-b")
    })

    it("handles a mix", () => {
      expect(slugify('ABC DEF ? 123 xyz')).toBe("abc-def-123-xyz")
    })
  })
})
