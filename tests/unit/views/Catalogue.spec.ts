import { renderBadges } from "@/core/catalogue";

describe("Catalogue.vue", () => {
  describe("#renderBadges", () => {
    it("converts all configured catalogue badges to markdown without error", () => {
      const badges = renderBadges();

      expect(badges[0]).toEqual(
        "[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/)"
      );
    });
  });
});
