import { renderBadges } from "@/core/catalogue";

describe("#renderBadges", () => {
  // Just a sample of catalogue badges need to be tested for a variety of
  // features. Not all badges. There are already tests for the `genericBadge`
  // function.
  describe("convert configured catalogue badges to expected markdown badges", () => {
    const badges = renderBadges();

    it("renders a docs badge", () => {
      expect(badges[0]).toBe(
        '[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/ "Go to project documentation")'
      );
    });

    it("renders a Linux badge", () => {
      expect(badges[3]).toBe(
        '[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/ "Go to Linux homepage")'
      );
    });

    it("renders a Bash badge", () => {
      expect(badges[9]).toBe(
        '[![Made with Bash](https://img.shields.io/badge/Bash->=3-blue?logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/ "Go to Bash homepage")'
      );
    });

    it("renders a Python badge", () => {
      expect(badges[10]).toBe(
        '[![Made with Python](https://img.shields.io/badge/Python->=3.10-blue?logo=python&logoColor=white)](https://python.org "Go to Python homepage")'
      );
    });
  });
});
