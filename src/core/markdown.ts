// TODO combine link/target functions in a module.
export function markdownLink(altText: string, linkTarget: string) {
  return `[${altText}](${linkTarget})`;
}

export function markdownImage(
  altText: string,
  imageTarget: string,
  hoverTitle = ""
) {
  if (hoverTitle) {
    imageTarget = `${imageTarget} "${hoverTitle}"`;
  }
  return `![${altText}](${imageTarget})`;
}

// TODO: Add pre-label as social badges have.
/**
 * Create a markdown image tag with external link.
 *
 * This performs no encoding - the inputs should be encoded already to be a URL without spaces and
 * to be a valid URL for shields.io API.
 */
export function markdownImageWithLink(
  altText: string,
  imageTarget: string,
  linkTarget = "",
  hoverTitle = ""
) {
  const image = markdownImage(altText, imageTarget, hoverTitle);

  if (linkTarget) {
    return markdownLink(image, linkTarget);
  }
  return image;
}
