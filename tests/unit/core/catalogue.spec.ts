import { renderBadges } from "@/core/catalogue";

describe("#renderBadges", () => {
  // Just a sample of catalogue badges need to be tested for a variety of features. Not all badges.
  // There are already tests for genericBadge function.
  it("converts configured catalogue badges to expected markdown badges", () => {
    const badges = renderBadges();

    expect(badges[0]).toBe(
      "[![View - Documentation](https://img.shields.io/badge/View-Documentation-blue?style=for-the-badge)](/docs/)"
    );

    expect(badges[1]).toBe(
      "[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/)"
    );

    expect(badges[8]).toBe(
      "[![Made with Python](https://img.shields.io/badge/Python->=3.6-blue?logo=python&logoColor=white)](https://python.org)"
    );

    expect(badges[7]).toBe(
      "[![Made with Bash](https://img.shields.io/badge/Bash->=3-blue?logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/)"
    );
  });
});
