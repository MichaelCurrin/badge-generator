/**
 * Handle rendering of each badge and all badges.
 */
import {
  SHIELDS_BADGE,
  SHIELDS_GH,
  GITHUB,
  DEFAULT_COLOR,
  DEFAULT_BRANCH,
  STYLES,
  PACKAGE_INFO,
} from "./constants";

// TODO combine link/target functions in a class.
function markdownLink(altText, linkTarget) {
  return `[${altText}](${linkTarget})`;
}

function markdownImage(altText, imageTarget, hoverTitle = "") {
  if (hoverTitle) {
    imageTarget = `${imageTarget} "${hoverTitle}"`;
  }
  return `![${altText}](${imageTarget})`;
}

// TODO: Add pre-label as social badges have.
export function markdownImageWithLink(
  altText,
  imageTarget,
  linkTarget = "",
  hoverTitle = ""
) {
  const image = markdownImage(altText, imageTarget, hoverTitle);

  if (linkTarget) {
    return markdownLink(image, linkTarget);
  }
  return image;
}

/**
 * Encode a value to safe as a param in a URL.
 *
 * Specifically for this shields.io API, convert spaces to underscores to prevent
 * them be converted to '%20' and so keep them readable. A '+' sign might work too.
 * Note that GH Actions needs a '%20' and not an underscore.
 * Note that '>' and '<' are valid on shields.io and should not be encoded.
 */
function encode(value, spaceToUnderscore = true) {
  if (spaceToUnderscore) {
    value = value.replace(" ", "_");
  }
  const encoded = encodeURI(value);

  return encoded.replace("%3E", ">").replace("%3C", "<");
}

/**
 * Make a fixed markdown badge using any given inputs.
 *
 * Escapes URLs.
 * TODO: Avoid escaping if internal URLs.
 */
function makeBadge(title, imageTarget, linkTarget) {
  return markdownImageWithLink(title, encode(imageTarget), encode(linkTarget));
}

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
    if (this.isValid) {
      // Match the text and color of GitHub's template button.
      const text = "Use_this_template",
        color = "2ea44f";

      const title = "Use this template",
        imgUrl = `${SHIELDS_BADGE}/${text}-${color}${STYLES.FOR_THE_BADGE}&logo=github`,
        repoUrl = this.ghURL(),
        extUrl = `${repoUrl}/generate`;

      return makeBadge(title, imgUrl, extUrl);
    }

    return "";
  }
  
  /**
   * Create badge that dynamically shows a tag or release and links to releases.
   *
   * TODO move these to the docs and link from there. It is useful for maintaining built badges.
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

    const type = isRelease ? "release" : "tag";
    const params = "?include_prereleases&sort=semver";

    const title = `GitHub ${type}`,
      imgUrl = `${SHIELDS_GH}/${type}/${this.username}/${this.repoName}`;

    const repoUrl = this.ghURL(),
      extUrl = `${repoUrl}/releases/${params}`;

    return makeBadge(title, imgUrl, extUrl);
  }

  licenseBadge(licenseType, localLicense = true) {
    if (licenseType && this.isValid) {
      const title = `License: ${licenseType}`,
        imgUrl = `${SHIELDS_BADGE}/License-${licenseType}-${DEFAULT_COLOR}`;

      let target;
      if (localLicense) {
        target = "#license";
      } else {
        const repoUrl = this.ghURL();
        target = `${repoUrl}/blob/${DEFAULT_BRANCH}/LICENSE`;
      }

      return makeBadge(title, imgUrl, target);
    }

    return "";
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

/**
 * Convenience method to build a URL with search params.
 *
 * Note the URL must have a protocol or it will be considered invalid.
 *
 * Returns as a string. The URL API encodes, so reverse this for badges.
 */
function buildUrl(urlStr, params) {
  let url = new URL(urlStr);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }

  return decodeURI(url.href);
}

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
// Color must be set in the label-message-color or message-color format.
export function genericBadge(
  label = "",
  message = "",
  color = "blue",
  isLarge = false,
  target = "",
  logo = "",
  logoColor = ""
) {
  if (!message) {
    return "";
  }
  const title = label ? [label, message].join(" - ") : message;
  label = encode(label);
  message = encode(message);

  let pieces = [message, color];
  if (label) {
    pieces.unshift(label);
  }
  const shield = pieces.join("-");

  const imgUrl = `${SHIELDS_BADGE}/${shield}`;

  let params = {};
  if (isLarge) {
    params.style = "for-the-badge";
  }
  if (logo) {
    params.logo = logo;
    if (logoColor) {
      params.logoColor = logoColor;
    }
  }
  const fullImgUrl = buildUrl(imgUrl, params);

  return makeBadge(title, fullImgUrl, target);
}

// TODO: alt styles:
//      - 'react : 1.2.3'
//      - Get dynamically from package.json
//      - 'dependency: react'
// TODO add logo for Python etc.
export class Package {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    this.color = "blue";
    this.isLarge = false;

    this.metadata = PACKAGE_INFO[type];
    if (!this.metadata) {
      throw new Error("Unable to find matching provider");
    }
  }

  badge() {
    return genericBadge(
      this.metadata.label,
      this.name,
      this.color,
      this.isLarge,
      this.metadata.url
    );
  }
}
