/**
 * Markdown module.
 *
 * This deals with creating markdown content. It is relatively simple so not worth relying on a
 * library for.
 */
import markdownIt from "markdown-it";
import { IMdImage, IMdImageWithLink } from "./markdown.d";

const md = new markdownIt({ html: true });

export function mdLink(altText: string, linkTarget: string) {
  return `[${altText}](${linkTarget})`;
}

export function mdImage({ altText, imageTarget, hoverTitle }: IMdImage) {
  if (hoverTitle) {
    imageTarget = `${imageTarget} "${hoverTitle}"`;
  }
  return `![${altText}](${imageTarget})`;
}

/**
 * Create a markdown image tag with external link.
 *
 * This performs no encoding - the inputs should be encoded already to be a URL without spaces and
 * to be a valid URL for shields.io API.
 */
export function mdImageWithLink({
  altText,
  imageTarget,
  linkTarget,
  hoverTitle,
}: IMdImageWithLink) {
  const image = mdImage({ altText, imageTarget, hoverTitle });

  if (linkTarget) {
    return mdLink(image, linkTarget);
  }
  return image;
}

/**
 * Render Markdown code as HTML text.
 */
export function mdToHTML(value: string): string {
  return md.render(value);
}

/**
 * Turn HTML generated from Markdown into more typical and readable HTML.
 */
export function cleanHtml(htmlCode: String) {
  return htmlCode
    .replaceAll("<p>", "")
    .replaceAll("</p>", "\n")
    .replaceAll("<em>", "<i>")
    .replaceAll("</em>", "</i>")
    .replaceAll("<strong>", "<b>")
    .replaceAll("</strong>", "</bold>")
    .replaceAll("&amp;", "&");
}
