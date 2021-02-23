import { genericBadge } from "@/core/genericBadge";

/**
 * Test that the UI defaults and common choices associated with the Generic view are working.
 */
describe("#genericBadge", () => {
  describe("Label, message and color", () => {
    it("gives an error if `message` is empty", () => {
      expect(() => genericBadge("", "", "green")).toThrow();
    });

    it("gives an error if `color` is empty", () => {
      expect(() => genericBadge("", "Bar", "")).toThrow();
    });

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

    it("displays a badge pointing to external link", () => {
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

    describe("Size", () => {
      it("displays a large badge", () => {
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
  });

  describe("Logo", () => {
    it("displays a logo", () => {
      const logo = "github";

      expect(genericBadge("", "Bar", "green", false, "", logo)).toBe(
        "![Bar](https://img.shields.io/badge/Bar-green?logo=github)"
      );

      expect(genericBadge("", "Bar", "green", false, "", logo, "", true)).toBe(
        "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green&logo=github)"
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
        "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green&logo=github&logoColor=yellow)"
      );
    });
  });
});

// TODO: Currently used in catalogue. This can be added to Generic page if needed.
describe("Alt text", () => {
  it("displays creates default alt text if not supplied", () => {
    expect(genericBadge("", "Bar", "green", false, "", "", "", true, "")).toBe(
      "![Bar](https://img.shields.io/static/v1?label=&message=Bar&color=green)"
    );

    expect(
      genericBadge("Foo", "Bar", "green", false, "", "", "", true, "")
    ).toBe(
      "![Foo - Bar](https://img.shields.io/static/v1?label=Foo&message=Bar&color=green)"
    );
  });

  it("displays uses custom alt text when supplied", () => {
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
