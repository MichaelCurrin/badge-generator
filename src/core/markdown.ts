/**
 * Markdown module.
 *
 * This deals with creating Markdown content. It is relatively simple logic,
 * so not worth relying on a 3rd-party package for.
 */
import markdownIt from "markdown-it";
import { IMdImage, IMdImageWithLink, IMdLink } from "./markdown.d";

const md = new markdownIt({ html: true });

/**
 * Create Markdown code for a link.
 *
 * @param altText Fallback text.
 * @param linkTarget Path or URL of the image to show.
 * @param hoverTitle Optional title of the link, to display on hover over.
 *   e.g. "Go to website".
 */
export function mdLink({ altText, linkTarget, hoverTitle }: IMdLink) {
  if (hoverTitle) {
    linkTarget = `${linkTarget} "${hoverTitle}"`;
  }
  return `[${altText}](${linkTarget})`;
}

/**
 * Create Markdown code for an image.
 *
 * @param altText Fallback text.
 * @param imageTarget Path or URL of the image to show.
 * @param hoverTitle Optional title of the image, to display on hover over.
 *   e.g. "Go to website".
 */
export function mdImage({ altText, imageTarget, hoverTitle }: IMdImage) {
  if (hoverTitle) {
    imageTarget = `${imageTarget} "${hoverTitle}"`;
  }
  return `![${altText}](${imageTarget})`;
}

/**
 * Create Markdown image code, with an external link.
 *
 * This performs no encoding - the inputs should be encoded already to be a URL
 * without spaces and to be a valid URL for shields.io API.
 *
 * @param altText Fallback text.
 * @param imageTarget Path or URL of the image to show.
 * @param hoverTitle Optional title of the image, to display on hover over.
 *   e.g. "Go to website".
 * @param linkTarget Path or URL destination for when the image is clicked.
 */
export function mdImageWithLink({
  altText,
  imageTarget,
  hoverTitle,
  linkTarget,
}: IMdImageWithLink) {
  const image = mdImage({ altText, imageTarget });

  if (linkTarget) {
    return mdLink({ altText: image, linkTarget, hoverTitle });
  }
  return image;
}

/**
 * Markdown to HTML.
 *
 * Render Markdown code as HTML code.
 */
export function mdToHTML(value: string): string {
  return md.render(value);
}

/**
 * Clean HTML code.
 *
 * Expect HTML code that was rendered from Markdown and convert it into more
 * typical and readable HTML.
 */
export function cleanHtml(value: String): string {
  return value
    .replaceAll("<p>", "")
    .replaceAll("</p>", "\n")
    .replaceAll("<em>", "<i>")
    .replaceAll("</em>", "</i>")
    .replaceAll("<strong>", "<b>")
    .replaceAll("</strong>", "</b>")
    .replaceAll("&amp;", "&");
}
