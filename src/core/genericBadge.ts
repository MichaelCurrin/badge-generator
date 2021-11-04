import { formatTitle } from "./badges";
import { mdImageWithLink } from "./markdown";
import { logoQueryParams, staticDashUrl, staticParamsUrl } from "./shieldsApi";

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
// TODO: Use `badgeFields: GenericBadge` and `logoAppearance: TLogoAppearance`.
/**
 * Generate markdown for generic badge.
 *
 * The guard statements to prevent empty strings do not prevent compile-time
 * errors, but they can show up in nests for safety. The label is fine empty
 * string though.
 *
 * See `/docs/badge-notes.md` doc on output formats.
 *
 * The strings with null string defaults could be converted to optional with `?`
 * and tests pass, but that means actually `string | undefined` and it is more
 * natural to keep everything as a string.
 *
 * The args could be converted to a destructured argument (VS Code does this
 * easily), maybe even multiple types to capture first few values separately.
 *
 * Use of altText argument allows the generated value to be overridden. This is
 * useful if you want alt text that won't go out of date. e.g. Use "Made with
 * Python" instead This is useful if you want to avoid generated a badge which
 * is harder to maintain because of using the same value in two places. Like
 * having "3.9" as the version in the alt text and the badge message.
 */
export function genericBadge(
  label: string,
  message: string,
  color: string,
  isLarge = false,
  linkTarget = "",
  logo = "",
  logoColor = "",
  onlyQueryParams = false,
  altText = ""
) {
  if (!message) {
    throw new Error("`message` may not be empty");
  }

  altText = altText || formatTitle(label, message);

  const badgeFields = { label, message, color },
    styleParams = logoQueryParams({ isLarge, logo, logoColor });

  const imageTarget = onlyQueryParams
    ? staticParamsUrl(badgeFields, styleParams)
    : staticDashUrl(badgeFields, styleParams);

  return mdImageWithLink({
    altText,
    imageTarget,
    linkTarget,
  });
}
