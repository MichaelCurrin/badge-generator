import { mdImage, mdImageWithLink } from "./markdown";
import { dynamicParamsUrl } from "./shieldsApi";

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

  const badgeFields = { label, url, query };

  const imageTarget = dynamicParamsUrl(badgeFields);

  return mdImageWithLink({
    altText,
    imageTarget,
    linkTarget,
  });
}
