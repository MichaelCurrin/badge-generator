import { renderBadges } from "@/core/catalogue";

describe("#renderBadges", () => {
  it("converts configured catalogue badges to expected markdown badges", () => {
    const badges = renderBadges();

    expect(badges[0]).toBe(
      "[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/)"
    );

    expect(badges[1]).toBe(
      "[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/)"
    );

  });
});
