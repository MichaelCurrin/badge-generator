import { _formatTitle } from "./badges";
import { markdownImageWithLink } from "./markdown";
import { logoParams, _staticDashUrl, _staticParamsUrl } from "./shieldsApi";

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
/**
 * Generate markdown for generic badge.
 *
 * Everything is optional except message and color. The guard statements to prevent empty strings do
 * not prevent compile-time errors, but they can show up in nests for safety.
 *
 * See /docs/badge-notes.md doc on output formats.
 */

export function genericBadge(
  label = "",
  message: string,
  color: string,
  isLarge = false,
  target = "",
  logo = "",
  logoColor = "",
  onlyQueryParams = false
) {
  if (!message) {
    throw new Error("`message` may not be empty");
  }
  if (!color) {
    throw new Error("`color` may not be empty");
  }

  const title = _formatTitle(label, message);

  const badgeFields = { label, message, color },
    styleParams = logoParams(isLarge, logo, logoColor);

  const fullImgUrl = onlyQueryParams
    ? _staticParamsUrl(badgeFields, styleParams)
    : _staticDashUrl(badgeFields, styleParams);

  return markdownImageWithLink(title, fullImgUrl, target);
}
