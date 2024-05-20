import { genericBadge } from "@/core/genericBadge";

/**
 * Test that the UI defaults and common choices associated with the Generic view
 * are working.
 */
describe("#genericBadge", () => {
  describe("Label, message and color", () => {
    it("displays a badge with given a message and color", () => {
      expect(genericBadge("", "Bar", "green")).toBe(
        "![Bar](https://img.shields.io/badge/Bar-green)"
      );
    });

    it("displays a badge with a given label, message and a color", () => {
      expect(genericBadge("Foo", "Bar", "green")).toBe(
        "![Foo - Bar](https://img.shields.io/badge/Foo-Bar-green)"
      );

      expect(genericBadge("Foo", ">=1.2", "green")).toBe(
        "![Foo - >=1.2](https://img.shields.io/badge/Foo->=1.2-green)"
      );
    });

    it("throws an error if `message` is empty", () => {
      expect(() => genericBadge("", "", "green")).toThrow();
    });

    it("displays a badge pointing to an external link, when provided", () => {
      const linkTarget = "https://example.com";

      expect(genericBadge("", "Bar", "green", false, linkTarget)).toBe(
        "[![Bar](https://img.shields.io/badge/Bar-green)](https://example.com)"
      );

      expect(
        genericBadge("", "Bar", "green", false, linkTarget, "", "", true)
      ).toBe(
        "[![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green)](https://example.com)"
      );
    });

    it("displays a badge with link hover title, when link and hover title are provided", () => {
      const linkTarget = "https://example.com";
      const hoverTitle = "Go to Example homepage";

      expect(
        genericBadge(
          "",
          "Bar",
          "green",
          false,
          linkTarget,
          undefined,
          undefined,
          undefined,
          undefined,
          hoverTitle
        )
      ).toBe(
        '[![Bar](https://img.shields.io/badge/Bar-green)](https://example.com "Go to Example homepage")'
      );

      expect(
        genericBadge(
          "",
          "Bar",
          "green",
          false,
          linkTarget,
          "",
          "",
          true,
          undefined,
          hoverTitle
        )
      ).toBe(
        '[![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green)](https://example.com "Go to Example homepage")'
      );
    });
  });

  describe("Size", () => {
    it("displays a large badge when requested", () => {
      const displayLarge = true;

      expect(genericBadge("", "Bar", "green", displayLarge)).toBe(
        "![Bar](https://img.shields.io/badge/Bar-green?style=for-the-badge)"
      );

      expect(
        genericBadge("", "Bar", "green", displayLarge, "", "", "", true)
      ).toBe(
        "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green&style=for-the-badge)"
      );
    });
  });

  describe("Logo", () => {
    it("displays a given logo", () => {
      const logo = "github";

      expect(genericBadge("", "Bar", "green", false, "", logo)).toBe(
        "![Bar](https://img.shields.io/badge/Bar-green?logo=github)"
      );

      expect(genericBadge("", "Bar", "green", false, "", logo, "", true)).toBe(
        "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green&logo=github)"
      );
    });

    it("displays a given logo and logo color", () => {
      const logo = "github",
        logoColor = "yellow";

      expect(genericBadge("", "Bar", "green", false, "", logo, logoColor)).toBe(
        "![Bar](https://img.shields.io/badge/Bar-green?logo=github&logoColor=yellow)"
      );

      expect(
        genericBadge("", "Bar", "green", false, "", logo, logoColor, true)
      ).toBe(
        "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green&logo=github&logoColor=yellow)"
      );
    });
  });

  // TODO: Currently used in Catalogue. This can be added to Generic page if needed.
  describe("Alt text", () => {
    it("displays default alt text if not supplied", () => {
      expect(
        genericBadge("", "Bar", "green", false, "", "", "", true, "")
      ).toBe(
        "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green)"
      );

      expect(
        genericBadge("Foo", "Bar", "green", false, "", "", "", true, "")
      ).toBe(
        "![Foo - Bar](https://img.shields.io/static/v1?label=Foo&message=Bar&color=green)"
      );
    });

    it("displays custom alt text when given", () => {
      expect(
        genericBadge(
          "Python",
          "3.9",
          "green",
          false,
          "",
          "",
          "",
          true,
          "Made with Python"
        )
      ).toBe(
        "![Made with Python](https://img.shields.io/static/v1?label=Python&message=3.9&color=green)"
      );

      expect(
        genericBadge(
          "License",
          "MIT",
          "green",
          false,
          "",
          "",
          "",
          true,
          "License"
        )
      ).toBe(
        "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=green)"
      );
    });
  });
});
