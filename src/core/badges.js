/**
 * Handle rendering of each badge and all badges.
 */
import { SHIELDS_BADGE, SHIELDS_STATIC } from "./constants";

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
export function makeBadge(title, imageTarget, linkTarget) {
  return markdownImageWithLink(title, encode(imageTarget), encode(linkTarget));
}

/**
 * Convenient method to build a URL using search params as key-value pairs.
 *
 * Note the URL must have a protocol or it will be considered invalid.
 *
 * Return a string. The URL API performs encoding, so we reverse this for use in badges.
 */
function buildUrl(urlStr, params) {
  let url = new URL(urlStr);

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url.searchParams.append(key, value);
    }
  }

  return decodeURI(url.href);
}

function formatTitle(label, message) {
  return label ? [label, message].join(" - ") : message;
}

function dashShieldUrl(label, message, color) {
  label = encode(label);
  message = encode(message);

  let pieces = [message, color];
  if (label) {
    pieces.unshift(label);
  }

  const shieldPath = pieces.join("-");

  return `${SHIELDS_BADGE}/${shieldPath}`;
}

/**
 * Return key-value pairs with appropriate size and logo values.
 */
function logoParams(isLarge, logo, logoColor) {
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

  return params;
}

/**
 * Note the typical badge style with X-Y-Z formatting.
 * This is more verbose but it allows use of certain special characters
 * and also does not require encoding.
 * e.g. https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&logo=github&color=blue
 */

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
// Color must be set in the LABEL-MESSAGE-COLOR or MESSAGE-COLOR format.
export function genericBadge(
  label = "",
  message = "",
  color = "blue",
  isLarge = false,
  target = "",
  logo = "",
  logoColor = "",
  useParamApproach = true
) {
  if (!message) {
    return "";
  }
  const title = formatTitle(label, message);

  const styleParams = logoParams(isLarge, logo, logoColor);

  // TODO Toggle on frontend, and use this always on the Repo page.
  if (useParamApproach) {
    const params = { label, message, color, ...styleParams };
    const fullImgUrl = buildUrl(SHIELDS_STATIC, params);

    // No encoding. TODO simplify handling maybe encode flag, then the call happens once here.
    return markdownImageWithLink(title, fullImgUrl, target);
  }

  let imgUrl = dashShieldUrl(label, message, color);
  let fullImgUrl = buildUrl(imgUrl, styleParams);

  return makeBadge(title, fullImgUrl, target);
}
