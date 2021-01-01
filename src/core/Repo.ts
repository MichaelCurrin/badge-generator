/**
 * Repo badge module.
 */
import { STYLES } from "../constants/appearance";
import {
  GH_BADGE,
  GH_PAGES_BADGE,
  LICENSE_BADGE,
  TEMPLATE_BADGE,
} from "../constants/badgeValues";
import {
  DEFAULT_BRANCH,
  GITHUB_DOMAIN,
  GITHUB_IO,
  LICENSE_PATH,
  SHIELDS_API,
  VERSION_PARAMS,
} from "../constants/urls";
import {
  buildUrl,
  genericBadge,
  markdownImageWithLink,
  markdownLink,
} from "./badges";
import { TagTypes } from "./Repo.d";

export class Repo {
  constructor(
    public username: string,
    public repoName: string,
    public licenseType?: string
  ) {
    if (!username) {
      throw new Error("`username` cannot be empty");
    }
    if (!repoName) {
      throw new Error("`repoName` cannot be empty");
    }
  }

  ghURL() {
    return `${GITHUB_DOMAIN}/${this.username}/${this.repoName}`;
  }

  ghPagesURL() {
    // Domain will get lower-cased by GH after a redirect so just make it lowercase now.
    // But preserve case for the comparison. Note Project page needs trailing forward slash
    // but User page is without.
    const ghDomain = `${this.username}.${GITHUB_IO}`,
      fullDomain = `https://${ghDomain.toLowerCase()}`;

    if (this.repoName === ghDomain) {
      return fullDomain;
    }

    return `${fullDomain}/${this.repoName}/`;
  }

  // TODO add variation that has a docs site for the text. And add custom text options.
  ghPagesBadge() {
    const target = this.ghPagesURL();

    return genericBadge(
      GH_PAGES_BADGE.LABEL,
      GH_PAGES_BADGE.MESSAGE,
      GH_PAGES_BADGE.COLOR,
      GH_PAGES_BADGE.IS_LARGE,
      target
    );
  }

  _templateURL() {
    return `${this.ghURL()}/generate`;
  }

  useThisTemplateBadge() {
    const target = this._templateURL();

    return genericBadge(
      TEMPLATE_BADGE.LABEL,
      TEMPLATE_BADGE.MESSAGE,
      TEMPLATE_BADGE.COLOR,
      TEMPLATE_BADGE.IS_LARGE,
      target,
      TEMPLATE_BADGE.LOGO
    );
  }

  _tagBadgeUrl(type: string) {
    const url = `${SHIELDS_API.GH}/${type}/${this.username}/${this.repoName}`;

    return buildUrl(url, VERSION_PARAMS);
  }

  /**
   * Create a badge that dynamically shows a tag or release and links to releases.
   *
   * See Tag badges section of the /docs/badge-notes.md doc.
   */
  tagBadge(type: TagTypes) {
    const title = `GitHub ${type}`,
      imgUrl = this._tagBadgeUrl(type);

    const target = `${this.ghURL()}/releases/`;

    return markdownImageWithLink(title, imgUrl, target);
  }

  _licenseTarget(localLicense: boolean) {
    if (localLicense) {
      return "#license";
    }
    const repoUrl = this.ghURL();

    return `${repoUrl}/blob/${DEFAULT_BRANCH}/LICENSE`;
  }

  licenseBadge(localLicense: boolean) {
    if (!this.licenseType) {
      return "";
    }

    return genericBadge(
      LICENSE_BADGE.LABEL,
      this.licenseType,
      LICENSE_BADGE.COLOR,
      LICENSE_BADGE.IS_LARGE,
      this._licenseTarget(localLicense)
    );
  }

  licenseMessage() {
    if (!this.licenseType) {
      return "";
    }

    const license = markdownLink(this.licenseType, LICENSE_PATH);
    const user = markdownLink(
      `@${this.username}`,
      `${GITHUB_DOMAIN}/${this.username}`
    );

    return `\
## License

Released under ${license} by ${user}.
`;
  }

  gh() {
    const label = this.username,
      message = this.repoName,
      target = this.ghURL(),
      onlyQueryParams = true;

    return genericBadge(
      label,
      message,
      GH_BADGE.COLOR,
      GH_BADGE.IS_LARGE,
      target,
      GH_BADGE.LOGO,
      GH_BADGE.LOGO_COLOR,
      onlyQueryParams
    );
  }

  _ghSocialShield(type: string) {
    return `${SHIELDS_API.GH}/${type}/${this.username}/${this.repoName}?style=${STYLES.SOCIAL}`;
  }

  /* Counter for stars or forks. */
  ghSocial(type: string, usePreLabel = false) {
    if (!type) {
      return "";
    }
    if (!(type === "stars" || type === "forks")) {
      throw new Error(`Invalid type - must stars or forks. Got: ${type}`);
    }

    const preLabel = usePreLabel ? `${this.username}/${this.repoName} ` : "",
      shield = this._ghSocialShield(type),
      target = this.ghURL();

    return `[${preLabel}![${type} - ${this.repoName}](${shield})](${target})`;
  }
}
