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
 * Prepare a value for dash-baseds shields.io API based on notes on the site.
 * The builtin encodeURI function is used to handle spaces and special characters.
 *
 * Note that '>' and '<' are valid on shields.io and should not be encoded.
 *
 * e.g. 'Foo Bar_Baz-Buzz' becomes 'Foo_Bar__Baz--Buzz'.
 * Note the API itself does funny things if you do use more than one
 * occurence of dash and space or underscore and space when when this is escaped correctly.
 * e.g. 'A - B - C' converted to 'A_--_B_--_C' renders as 'A - B_- C'.
 * So just don't mix them and you'll be ok - like with 'A-B-C'.
 */
function encode(value, spaceToUnderscore = true) {
  value = value.replace(/-/g, "--").replace(/_/g, "__");

  if (spaceToUnderscore) {
    value = value.replace(/ /g, "_");
  }

  const encoded = encodeURI(value);

  return encoded.replace(/%3E/g, ">").replace(/%3C/g, "<");
}

/**
 * Make a fixed markdown badge using any given inputs.
 *
 * Escapes URLs.
 * TODO: Avoid escaping if internal URLs.
 * TODO: Maybe remove this function.
 */
export function makeBadge(title, imageTarget, linkTarget) {
  return markdownImageWithLink(title, encode(imageTarget), encode(linkTarget));
}

/**
 * Convenient method to build a URL using search params as key-value pairs.
 *
 * Note the URL must have a protocol or it will be considered invalid.
 * Any empty values will be dropped to keep the result short.
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

/**
 * Prepare path for shields.io dash-based API.
 *
 * This escapes label and message appropriately based on notes on the
 * shields.io website, so you can pass in more readable values.
 */
function dashShieldPath(label, message, color) {
  label = encode(label);
  message = encode(message);

  let pieces = [message, color];
  if (label) {
    pieces.unshift(label);
  }

  return pieces.join("-");
}

/**
 * Return key-value pairs with appropriate size and logo values.
 */
function logoParams(isLarge = false, logo = "", logoColor = "") {
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

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
/**
 * Generate markdown for generic badge.
 *
 * Everything is optional except message.
 *
 * In the dash style, result is X-Y-Z.
 * Color **must** be set as either LABEL-MESSAGE-COLOR or MESSAGE-COLOR.
 * Sample: https://img.shields.io/badge/Foo-Bar--Baz-green
 *
 * Use the params style by setting allQueryParams to be true. There result is more verbose but does not required escaping characters.
 * Sample: https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&logo=github&color=blue
 */
export function genericBadge(
  label = "",
  message = "",
  color = "blue",
  isLarge = false,
  target = "",
  logo = "",
  logoColor = "",
  onlyQueryParams = false
) {
  if (!message) {
    return "";
  }
  const title = formatTitle(label, message);

  const styleParams = logoParams(isLarge, logo, logoColor);

  let fullImgUrl;
  if (onlyQueryParams) {
    const params = { label, message, color, ...styleParams };
    fullImgUrl = buildUrl(SHIELDS_STATIC, params);
  } else {
    const imgPath = dashShieldPath(label, message, color);
    const imgUrl = `${SHIELDS_BADGE}/${imgPath}`;

    fullImgUrl = buildUrl(imgUrl, styleParams);
  }
  return markdownImageWithLink(title, fullImgUrl, target);
}
