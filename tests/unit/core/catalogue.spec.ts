import { renderBadges } from "@/core/catalogue";

describe("#renderBadges", () => {
  it("converts configured catalogue badges to expected markdown badges", () => {
    const badges = renderBadges();

    expect(badges[0]).toEqual(
      "[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/)"
    );
  });
});
