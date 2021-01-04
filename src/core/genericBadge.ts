import { formatTitle } from "./badges";
import { mdImageWithLink } from "./markdown";
import { logoParams, staticDashUrl, _staticParamsUrl } from "./shieldsApi";

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
/**
 * Generate markdown for generic badge.
 *
 * The guard statements to prevent empty strings do not prevent compile-time errors, but they can
 * show up in nests for safety. The label is fine empty string though.
 *
 * See /docs/badge-notes.md doc on output formats.
 *
 * The strings with null string defaults could be converted to optional with `?` and tests pass, but
 * that means actually `string | undefined` and it is more natural to keep everything as a string.
 *
 * The args could be converted to a destructured argument (VS Code does this easily), maybe even
 * multiple typses to capture first few values separately.
 */
export function genericBadge(
  label: string,
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

  const title = formatTitle(label, message);

  const badgeFields = { label, message, color },
    styleParams = logoParams(isLarge, logo, logoColor);

  const fullImgUrl = onlyQueryParams
    ? _staticParamsUrl(badgeFields, styleParams)
    : staticDashUrl(badgeFields, styleParams);

  return mdImageWithLink(title, fullImgUrl, target);
}
