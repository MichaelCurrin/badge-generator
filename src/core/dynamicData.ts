import { mdImageWithLink } from "./markdown";
import { dynamicParamsUrl } from "./shieldsApi";

/**
 * Dynamic data badge.
 *
 * Generate a live-updating badge that references a value in a data file.
 * Only JSON is supported.
 */
export function dynamicBadge(
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
