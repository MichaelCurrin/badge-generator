import { Repo, _documentationSectionMd, _licenseSectionMd } from "@/core/Repo";

describe("Markdown section snippets", () => {
  describe("#_documentationSectionMd", () => {
    it("returns the correct Markdown snippet about documentation", () => {
      const result = _documentationSectionMd();

      const expected = `\
## Documentation

<div align="center">

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/ "Go to project documentation")

</div>
`;

      expect(result).toBe(expected);
    });
  });

  describe("#_licenseSectionMd", () => {
    it("returns the correct Markdown snippet about license, for license and user links", () => {
      const result = _licenseSectionMd(
        "[MIT](/LICENSE)",
        "[@MichaelCurrin](https://github.com/MichaelCurrin)"
      );

      const expected = `\
## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).`;

      expect(result).toBe(expected);
    });
  });
});

describe("#Repo", () => {
  const repoNoLicense = new Repo("MichaelCurrin", "badge-generator");
  const repoWithLicense = new Repo("MichaelCurrin", "badge-generator", "MIT");

  describe("Error handling on initialization", () => {
    it("throws an error on empty username", () => {
      expect(() => new Repo("", "badge-generator")).toThrow();
    });

    it("throws an error on empty repo name", () => {
      expect(() => new Repo("MichaelCurrin", "")).toThrow();
    });
  });

  describe("#ghURL", () => {
    it("returns a valid GitHub repo URL", () => {
      expect(repoNoLicense.ghURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator"
      );
    });
  });

  describe("#_ghPagesURL", () => {
    it("returns a valid GitHub Pages project URL", () => {
      expect(repoNoLicense._ghPagesURL()).toBe(
        "https://michaelcurrin.github.io/badge-generator/"
      );
    });

    it("returns a valid GitHub Pages user URL", () => {
      const repoNoLicense = new Repo(
        "MichaelCurrin",
        "MichaelCurrin.github.io"
      );

      expect(repoNoLicense._ghPagesURL()).toBe(
        "https://michaelcurrin.github.io"
      );
    });
  });

  describe("#ghPagesBadge", () => {
    it("returns a valid GitHub Pages badge", () => {
      const badgeUrl =
        "https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge";
      const linkTarget = "https://michaelcurrin.github.io/badge-generator/";
      const expectedBadge = `[![View site - GH Pages](${badgeUrl})](${linkTarget})`;

      expect(repoNoLicense.ghPagesBadge()).toBe(expectedBadge);
    });
  });

  describe("#_issuesURL", () => {
    it("returns a valid generate issues URL", () => {
      expect(repoNoLicense._issuesURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator/issues"
      );
    });
  });

  describe("#_templateURL", () => {
    it("returns a valid generate template URL", () => {
      expect(repoNoLicense._templateURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator/generate"
      );
    });
  });

  describe("#_releaseAssetURL", () => {
    it("returns a URL for a named asset on a specific release", () => {
      expect(repoNoLicense._releaseAssetURL("v1.2.3", "hello world.zip")).toBe(
        "https://github.com/MichaelCurrin/badge-generator/releases/download/v1.2.3/hello%20world.zip"
      );
    });
  });

  describe("#useThisTemplateBadge", () => {
    it("returns a valid generate template badge", () => {
      const badgeUrl =
        "https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/generate";

      expect(repoNoLicense.useThisTemplateBadge()).toBe(
        `[![Use this template](${badgeUrl})](${target})`
      );
    });
  });

  describe("#_tagBadgeUrl", () => {
    it("returns a correct tag badge URL", () => {
      expect(repoNoLicense._tagBadgeUrl("tag")).toBe(
        "https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver"
      );
    });

    it("returns a correct release badge URL", () => {
      expect(repoNoLicense._tagBadgeUrl("release")).toBe(
        "https://img.shields.io/github/release/MichaelCurrin/badge-generator?include_prereleases=&sort=semver"
      );
    });

    it("includes custom color when configured", () => {
      const repoWithColor = new Repo(
        "MichaelCurrin",
        "badge-generator",
        "MIT",
        "orange"
      );

      expect(repoWithColor._tagBadgeUrl("tag")).toBe(
        "https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver&color=orange"
      );
    });
  });

  describe("#tagBadge", () => {
    it("returns a correct tag badge", () => {
      const badgeUrl =
        "https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/releases/";

      expect(repoNoLicense.tagBadge("tag")).toBe(
        `[![GitHub tag](${badgeUrl})](${target})`
      );
    });

    it("returns a correct release badge", () => {
      const badgeUrl =
        "https://img.shields.io/github/release/MichaelCurrin/badge-generator?include_prereleases=&sort=semver";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/releases/";

      expect(repoNoLicense.tagBadge("release")).toBe(
        `[![GitHub release](${badgeUrl})](${target})`
      );
    });
  });

  describe("#_licenseTarget", () => {
    it("returns a URL for a license in a repo", () => {
      const target =
        "https://github.com/MichaelCurrin/badge-generator/blob/main/LICENSE";

      expect(repoWithLicense._licenseTarget()).toBe(target);
    });
  });

  describe("#licenseBadge", () => {
    it("returns a null string when there is no license set", () => {
      const localLicense = true;

      expect(repoNoLicense.licenseBadge(localLicense)).toBe("");
    });

    it("returns a badge for a local license", () => {
      const localLicense = true;

      expect(repoWithLicense.licenseBadge(localLicense)).toBe(
        "[![License](https://img.shields.io/badge/License-MIT-blue)](#license)"
      );
    });

    it("return a badge for a remote license", () => {
      const localLicense = false;

      const badgeUrl = "https://img.shields.io/badge/License-MIT-blue";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/blob/main/LICENSE";

      expect(repoWithLicense.licenseBadge(localLicense)).toBe(
        `[![License](${badgeUrl})](${target})`
      );
    });
  });

  describe("#licenseMessage", () => {
    it("return a correct license message for a known license type and local file", () => {
      const result = `\
## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).`;

      expect(repoWithLicense.licenseMessage()).toBe(result);
    });

    it("return an empty license message for no license type", () => {
      expect(repoNoLicense.licenseMessage()).toBe("");
    });
  });

  describe("#documentationMessage", () => {
    it("returns the same snippet as the documentation section helper", () => {
      expect(repoNoLicense.documentationMessage()).toBe(
        _documentationSectionMd()
      );
    });
  });

  describe("#ghBadge", () => {
    it("return a valid GitHub repo badge", () => {
      const badgeUrl =
        "https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&color=blue&logo=github";
      const linkTarget = "https://github.com/MichaelCurrin/badge-generator";

      const expected = `[![MichaelCurrin - badge-generator](${badgeUrl})](${linkTarget} "Go to GitHub repo")`;
      expect(repoNoLicense.ghBadge()).toBe(expected);
    });
  });

  describe("#ghCounterBadge", () => {
    it("return a valid stars shield", () => {
      const badgeUrl =
        "https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social";
      const linkTarget = "https://github.com/MichaelCurrin/badge-generator";

      expect(repoNoLicense.ghCounterBadge("stars")).toBe(
        `[![stars - badge-generator](${badgeUrl})](${linkTarget})`
      );
    });

    it("return a valid forks shield", () => {
      const badgeUrl =
        "https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social";
      const linkTarget = "https://github.com/MichaelCurrin/badge-generator";

      expect(repoNoLicense.ghCounterBadge("forks")).toBe(
        `[![forks - badge-generator](${badgeUrl})](${linkTarget})`
      );
    });

    it("return a valid issues shield", () => {
      const badgeUrl =
        "https://img.shields.io/github/issues/MichaelCurrin/badge-generator";
      const linkTarget =
        "https://github.com/MichaelCurrin/badge-generator/issues";

      expect(repoNoLicense.ghCounterBadge("issues")).toBe(
        `[![issues - badge-generator](${badgeUrl})](${linkTarget})`
      );
    });
  });

  describe("#pythonVersionBadge", () => {
    describe("Project query type", () => {
      it("returns a valid Python version badge with default branch and Project query", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge("main", "PROJECT");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2Fmain%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("returns a valid Python version badge with custom branch and Project query", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge("develop", "PROJECT");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2Fdevelop%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("handles repo names with special characters using Project", () => {
        const repo = new Repo("user-name", "repo.name");
        const result = repo.pythonVersionBadge("feature-branch", "PROJECT");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fuser-name%2Frepo.name%2Frefs%2Fheads%2Ffeature-branch%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });
    });

    describe("Tool Poetry query type", () => {
      it("returns a valid Python version badge with default branch and Tool Poetry query", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge("main", "TOOL_POETRY");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2Fmain%2Fpyproject.toml&query=tool.poetry.dependencies.python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("returns a valid Python version badge with custom branch and Tool Poetry query", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge("develop", "TOOL_POETRY");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2Fdevelop%2Fpyproject.toml&query=tool.poetry.dependencies.python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("handles repo names with special characters using Tool Poetry", () => {
        const repo = new Repo("user-name", "repo.name");
        const result = repo.pythonVersionBadge("feature-branch", "TOOL_POETRY");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fuser-name%2Frepo.name%2Frefs%2Fheads%2Ffeature-branch%2Fpyproject.toml&query=tool.poetry.dependencies.python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });
    });

    describe("Edge cases", () => {
      it("handles branch names with special characters", () => {
        const repo = new Repo("MyOrg", "MyProject");
        const result = repo.pythonVersionBadge(
          "feature/update-deps",
          "PROJECT"
        );

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyOrg%2FMyProject%2Frefs%2Fheads%2Ffeature%2Fupdate-deps%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("handles empty branch name", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge("", "PROJECT");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2F%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("uses default parameters when none provided", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge("main", "PROJECT");

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2Fmain%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });

      it("uses the default branch when branch is undefined", () => {
        const repo = new Repo("MyUser", "my-repo");
        const result = repo.pythonVersionBadge(
          undefined as unknown as string,
          "PROJECT"
        );

        const expectedImageUrl =
          "https://img.shields.io/badge/dynamic/toml?url=https%3A%2F%2Fraw.githubusercontent.com%2FMyUser%2Fmy-repo%2Frefs%2Fheads%2Fmain%2Fpyproject.toml&query=project.requires-python&label=python&logo=python&logoColor=white";
        const expectedLinkTarget = "https://python.org";
        const expected = `[![Go to Python website](${expectedImageUrl})](${expectedLinkTarget})`;

        expect(result).toBe(expected);
      });
    });
  });

  describe("#downloadBadges", () => {
    const repo = new Repo("octocat", "hello-world");

    it("generates a source archive badge for a branch in either format", () => {
      expect(repo.sourceArchiveBadge("main", "zip")).toBe(
        "[![Download code as zip | main](https://img.shields.io/badge/Download_code_as_zip-main-blue?style=for-the-badge)](https://github.com/octocat/hello-world/archive/main.zip)"
      );
      expect(repo.sourceArchiveBadge("master", "tar.gz")).toBe(
        "[![Download code as tar.gz | master](https://img.shields.io/badge/Download_code_as_tar.gz-master-blue?style=for-the-badge)](https://github.com/octocat/hello-world/archive/master.tar.gz)"
      );
    });

    it("generates a badge linking to an asset on the specified release", () => {
      expect(repo.releaseAssetBadge("v1.2.3", "helloworld.abc")).toBe(
        "[![Download | helloworld.abc](https://img.shields.io/badge/Download-helloworld.abc-blue?style=for-the-badge)](https://github.com/octocat/hello-world/releases/download/v1.2.3/helloworld.abc)"
      );
    });

    it("combines only the requested source and asset badges", () => {
      expect(
        repo.downloadBadges({
          source: {
            branch: "main",
            format: "zip",
          },
          releaseAsset: {
            releaseName: "v1.2.3",
            filename: "helloworld.abc",
          },
        })
      ).toEqual([
        {
          kind: "source",
          branch: "main",
          format: "zip",
          markdown:
            "[![Download code as zip | main](https://img.shields.io/badge/Download_code_as_zip-main-blue?style=for-the-badge)](https://github.com/octocat/hello-world/archive/main.zip)",
        },
        {
          kind: "releaseAsset",
          releaseName: "v1.2.3",
          filename: "helloworld.abc",
          markdown:
            "[![Download | helloworld.abc](https://img.shields.io/badge/Download-helloworld.abc-blue?style=for-the-badge)](https://github.com/octocat/hello-world/releases/download/v1.2.3/helloworld.abc)",
        },
      ]);
      expect(repo.downloadBadges({})).toEqual([]);
    });

    it("rejects empty branch, release name, and release asset filename", () => {
      expect(() => repo.sourceArchiveBadge(" ", "zip")).toThrow(
        "Branch cannot be empty."
      );
      expect(() => repo.releaseAssetBadge("", "helloworld.abc")).toThrow(
        "Release name cannot be empty."
      );
      expect(() => repo.releaseAssetBadge("v1.2.3", "")).toThrow(
        "Asset filename cannot be empty."
      );
    });
  });
});
