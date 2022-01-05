import { mdImageWithLink } from "./markdown";
import { dynamicParamsUrl } from "./shieldsApi";

/**
 * Dynamic data badge.
 *
 * Generate a badge that references a value in a data file - useful for both
 * static values and for values that change.
 *
 * Only JSON is supported here or now but Shields.io also supports YAML and XML.
 */
export function dynamicDataBadge(
  label: string,
  url: string,
  query: string,
  linkTarget = "",
  altText = ""
) {
  if (!label) {
    throw new Error("`label` may not be empty");
  }
  if (!url) {
    throw new Error("`url` may not be empty");
  }
  if (!query) {
    throw new Error("`query` may not be empty");
  }
  if (!altText) {
    altText = label;
  }

  const imageTarget = dynamicParamsUrl({ label, url, query });

  return mdImageWithLink({
    altText,
    imageTarget,
    linkTarget,
  });
}
