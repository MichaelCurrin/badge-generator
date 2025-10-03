/**
 * Repo badge module.
 *
 * This could be refactored to return data rather than the actual badges, but
 * this is intended as a high-level interface in the Vue frontend so you just
 * need one method call to get a badge on a repo, without passing to another
 * function.
 */
import {
  GH_BADGE,
  GH_PAGES_BADGE,
  LICENSE_BADGE,
  PYTHON_QUERY_TYPES,
  PYTHON_VERSION_BADGE,
  TEMPLATE_BADGE,
} from "@/constants/badgeValues";
import { BADGE_DEFAULTS, DOCUMENTATION_BADGE } from "@/constants/catalogue";
import {
  DEFAULT_BRANCH,
  GITHUB_DOMAIN,
  GITHUB_IO,
  LICENSE_PATH,
  SHIELDS_API,
  VERSION_PARAMS,
} from "@/constants/urls";
import { TagTypes } from "./Repo.d";
import { buildUrl } from "./badges";
import { genericBadge } from "./genericBadge";
import { mdImageWithLink, mdLink } from "./markdown";
import { ghCounterShieldUrl } from "./shieldsApi";
import { RepoMetric, StrMap } from "./types.d";

const LICENSE_EL_ID = "#license";

// TODO: Make dynamic. User provides a link or chooses to use GH Pages auto link
// For now just a flat badge.
export function _documentationSectionMd() {
  const docsBadge = genericBadge(
    DOCUMENTATION_BADGE.label,
    DOCUMENTATION_BADGE.message,
    BADGE_DEFAULTS.COLOR,
    DOCUMENTATION_BADGE.isLarge,
    DOCUMENTATION_BADGE.target,
    DOCUMENTATION_BADGE.logo,
    "",
    false,
    DOCUMENTATION_BADGE.altText,
    DOCUMENTATION_BADGE.hoverTitle
  );

  return `\
## Documentation

<div align="center">

${docsBadge}

</div>
`;
}

export function _licenseSectionMd(license: string, user: string) {
  return `\
## License

Released under ${license} by ${user}.`;
}

export class Repo {
  /**
   * Initialize Repo.
   *
   * @param username GitHub repo owner's username.
   * @param repoName GitHub repo name.
   * @param licenseType The type of the repo's LICENSE. e.g. 'MIT'. The value
   *   is not validated as there are a lot of possible values. See
   *   `https://choosealicense.com/` for more info.
   * @param badgeColor Color keyword or hex. It would be possible to fallback
   *   to a default color if none is given, but that would add an extra param
   *   to the URL which takes up space and does nothing (Shields.io defaults
   *   to blue for most badges if no color is given).
   */
  constructor(
    public username: string,
    public repoName: string,
    public licenseType?: string,
    public badgeColor?: string
  ) {
    if (!username) {
      throw new Error("`username` cannot be empty");
    }
    if (!repoName) {
      throw new Error("`repoName` cannot be empty");
    }
  }

  /**
   * Identifier for a repo using only username and repo name.
   */
  _nameWithOwner() {
    return `${this.username}/${this.repoName}`;
  }

  /**
   * URL for a repo on GitHub.
   */
  ghURL() {
    return `${GITHUB_DOMAIN}/${this._nameWithOwner()}`;
  }

  /**
   * URL for a GitHub Pages site.
   */
  _ghPagesURL() {
    // Domain will get lower-cased by GH after a redirect so just make it
    // lowercase now. But preserve case for the comparison. Note Project page
    // needs trailing forward slash but User page is without.
    const ghDomain = `${this.username}.${GITHUB_IO}`,
      fullDomain = `https://${ghDomain.toLowerCase()}`;

    if (this.repoName === ghDomain) {
      return fullDomain;
    }

    return `${fullDomain}/${this.repoName}/`;
  }

  // TODO: add variation that has a docs site for the text. And add custom text
  // options.
  /**
   * Create badge pointing at a GitHub Pages site.
   */
  ghPagesBadge() {
    const linkTarget = this._ghPagesURL();

    return genericBadge(
      GH_PAGES_BADGE.label!,
      GH_PAGES_BADGE.message!,
      GH_PAGES_BADGE.color!,
      GH_PAGES_BADGE.isLarge,
      linkTarget
    );
  }

  /**
   * Return URL for issues on the GitHub repo.
   */
  _issuesURL() {
    return `${this.ghURL()}/issues`;
  }

  /**
   * Return URL for using the current GitHub repo as a template.
   */
  _templateURL() {
    return `${this.ghURL()}/generate`;
  }

  /**
   * Badge for "Use this template" button including link.
   */
  useThisTemplateBadge() {
    const linkTarget = this._templateURL();

    const logoColor = "";
    const onlyQueryParams = false;

    return genericBadge(
      TEMPLATE_BADGE.label!,
      TEMPLATE_BADGE.message!,
      TEMPLATE_BADGE.color!,
      TEMPLATE_BADGE.isLarge,
      linkTarget,
      TEMPLATE_BADGE.logo,
      logoColor,
      onlyQueryParams,
      TEMPLATE_BADGE.altText
    );
  }

  /**
   * Return a URL for a badge which displays the latest tag or release number.
   */
  _tagBadgeUrl(tagType: TagTypes) {
    const path = `${tagType}/${this._nameWithOwner()}`;
    const url = `${SHIELDS_API.GH}/${path}`;

    const queryParams: StrMap = { ...VERSION_PARAMS };
    if (this.badgeColor) {
      queryParams.color = this.badgeColor;
    }

    return buildUrl(url, queryParams);
  }

  /**
   * Create a badge that dynamically shows a tag or release number and links to
   * releases.
   *
   * See Tag badges section of the /docs/badge-notes.md doc.
   */
  tagBadge(tagType: TagTypes) {
    const altText = `GitHub ${tagType}`;
    const imageTarget = this._tagBadgeUrl(tagType);

    const linkTarget = `${this.ghURL()}/releases/`;

    return mdImageWithLink({
      altText,
      imageTarget,
      linkTarget,
    });
  }

  /**
   * Return absolute URL pointing to the repo's license file.
   * This will work from anywhere such as from a docs site.
   */
  _licenseTarget() {
    const repoUrl = this.ghURL();

    return `${repoUrl}/blob/${DEFAULT_BRANCH}/LICENSE`;
  }

  /**
   * Create badge for a license including link.
   *
   * @param localLicense If true, then use a short URL pointing to the file
   *   relative the repo root. If false, use a full URL.
   */
  licenseBadge(localLicense: boolean) {
    if (!this.licenseType) {
      return "";
    }

    const badgeColor = this.badgeColor || LICENSE_BADGE.color!;
    const linkTarget = localLicense ? LICENSE_EL_ID : this._licenseTarget();
    const logo = "";
    const logoColor = "";
    const onlyQueryParams = false;

    return genericBadge(
      LICENSE_BADGE.label!,
      this.licenseType,
      badgeColor,
      LICENSE_BADGE.isLarge,
      linkTarget,
      logo,
      logoColor,
      onlyQueryParams,
      LICENSE_BADGE.altText
    );
  }

  /**
   * Return Markdown text for a documentation heading and content.
   */
  documentationMessage() {
    return _documentationSectionMd();
  }

  /**
   * Return Markdown text for a license heading and content.
   */
  licenseMessage() {
    if (!this.licenseType) {
      return "";
    }

    const license = mdLink({
      altText: this.licenseType,
      linkTarget: LICENSE_PATH,
    });
    const user = mdLink({
      altText: `@${this.username}`,
      linkTarget: `${GITHUB_DOMAIN}/${this.username}`,
    });

    return _licenseSectionMd(license, user);
  }

  /**
   * Create badge URL for a GitHub repo.
   */
  ghBadge() {
    const label = this.username,
      message = this.repoName,
      target = this.ghURL(),
      onlyQueryParams = true;

    const badgeColorResult = this.badgeColor;

    return genericBadge(
      label,
      message,
      badgeColorResult!,
      GH_BADGE.isLarge,
      target,
      GH_BADGE.logo,
      GH_BADGE.logoColor,
      onlyQueryParams,
      undefined,
      GH_BADGE.hoverTitle
    );
  }

  /**
   * Create social counter badge for indicating repo popularity - stars or
   * forks.
   */
  ghCounterBadge(type: RepoMetric) {
    const altText = `${type} - ${this.repoName}`;
    const imageTarget = ghCounterShieldUrl(type, {
      username: this.username,
      repoName: this.repoName,
    });
    const linkTarget = type === "issues" ? this._issuesURL() : this.ghURL();

    return mdImageWithLink({ altText, imageTarget, linkTarget });
  }

  /**
   * Create a Python version badge that shows the Python version from
   * pyproject.toml file in the repository using dynamic Shields.io format.
   */
  pythonVersionBadge(
    branch: string = "main",
    queryType: keyof typeof PYTHON_QUERY_TYPES
  ) {
    const altText = PYTHON_VERSION_BADGE.altText;
    const linkTarget = PYTHON_VERSION_BADGE.linkTarget;

    const rawUrl = `https://raw.githubusercontent.com/${this._nameWithOwner()}/refs/heads/${branch}/pyproject.toml`;
    const encodedUrl = encodeURIComponent(rawUrl);

    const query = PYTHON_QUERY_TYPES[queryType];

    const imageTarget = `https://img.shields.io/badge/dynamic/toml?url=${encodedUrl}&query=${encodeURIComponent(
      query
    )}&label=python&logo=python&logoColor=white`;

    return mdImageWithLink({
      altText,
      imageTarget,
      linkTarget,
    });
  }
}
