/**
 * Repo badge module.
 */
import {
  SHIELDS_GH,
  GITHUB,
  DEFAULT_COLOR,
  GITHUB_GREEN,
  DEFAULT_BRANCH,
  STYLES,
} from "./constants";
import { genericBadge, markdownImageWithLink } from "./badges";

export class Repo {
  constructor(username, repoName) {
    this.username = username;
    this.repoName = repoName;
    this.isValid = username && repoName;
  }

  ghURL() {
    return `${GITHUB}/${this.username}/${this.repoName}`;
  }

  ghPagesURL() {
    // Domain will get lower-cased by GH after a redirect so just make it lowercase now.
    // But preserve case for the comparison. Note Project page needs trailing forward slash
    // but User page is without.
    const ghDomain = `${this.username}.github.io`,
      fullDomain = `https://${ghDomain.toLowerCase()}`;

    if (this.repoName === ghDomain) {
      return fullDomain;
    }

    return `${fullDomain}/${this.repoName}/`;
  }
  // TODO add variation that has a docs site for the text. And add custom text options.
  ghPagesBadge() {
    const label = "View site",
      message = "GH Pages",
      color = "green",
      isLarge = true,
      target = this.ghPagesURL();

    return genericBadge(label, message, color, isLarge, target);
  }

  useThisTemplateBadge() {
    if (!this.isValid) {
      return "";
    }
    const label = '',
      message = "Use this template",
      color = GITHUB_GREEN,
      isLarge = false,
      target = `${this.ghURL()}/generate`;

    return genericBadge(label, message, color, isLarge, target)
  }

  /**
   * Create badge that dynamically shows a tag or release and links to releases.
   *
   * TODO move these to the docs and link from there. It is useful for maintaining built badges.
   *
   * The tag shield shows the latest tag. The shield badge shows the latest release,
   * which must be created by hand on the Releases tab of your repo. Therefore, showing
   * releases will be behind the latest tag. The release flow of your app and if you want
   * people to start using a tag without a release influences which badge makes sense to yu.
   *
   * Notes on setting of the badge params:
   * - It is best to always link to releases page, since all tags on are shown on that page
   *   but you get the benefit of the release titles.
   * - Including pre-released is done based on example on shields.io tool.
   *   If you have a releases before v1, they will not appear as missing unless you add the flag.
   *   The tags before v1 will show either way, but with the flag the alpha tags will show too,
   *   so you may not want the flag.
   * - Use semvar for natural sorting. The default is to sort by date, which means tags added to
   *   old commits can show up as the latest tag when you don't want them to.
   */
  tagBadge(isRelease = false) {
    if (!this.isValid) {
      return "";
    }

    const type = isRelease ? "release" : "tag",
      title = `GitHub ${type}`,
      params = "?include_prereleases&sort=semver",
      imgUrl = `${SHIELDS_GH}/${type}/${this.username}/${this.repoName}${params}`;

    const repoUrl = this.ghURL(),
      target = `${repoUrl}/releases/`;

    return markdownImageWithLink(title, imgUrl, target);
  }

  licenseBadge(licenseType, localLicense = true) {
    if (!licenseType && !this.isValid) {
      return "";
    }
    const label = "License",
      message = licenseType,
      color = DEFAULT_COLOR,
      isLarge = false;

    let target;
    if (localLicense) {
      target = "#license";
    } else {
      const repoUrl = this.ghURL();
      target = `${repoUrl}/blob/${DEFAULT_BRANCH}/LICENSE`;
    }

    return genericBadge(label, message, color, isLarge, target);
  }

  _ghSocialShield(type) {
    return `${SHIELDS_GH}/${type}/${this.username}/${this.repoName}${STYLES.SOCIAL}`;
  }

  ghSocial(type, usePreLabel = false) {
    if (!type && !this.isValid) {
      return "";
    }

    const shield = this._ghSocialShield(type);
    const target = this.ghURL();

    const preLabel = usePreLabel ? `${this.username}/${this.repoName} ` : "";

    return `[${preLabel}![${type} - ${this.repoName}](${shield})](${target})`;
  }
}
