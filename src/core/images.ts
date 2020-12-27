/**
 * Image module.
 *
 * This was attempted using a Vue compontent instead with templating. But rendering proved an issue
 * as the finished element was shown even inside pre and code tags.
 *
 * The indentation here is not smart because of the nested rendering but it works well enough to use
 * it.
 */

export function mkHtmlImg(
  src: string,
  alt: string,
  title: string,
  target = "",
  width: string,
  height: string,
  alignAttr: string
) {
  const htmlTitle = title ? ` title="${title}"` : "",
    htmlAltText = alt ? ` alt="${alt}"` : "",
    htmlWidth = width ? ` width="${width}"` : "",
    htmlHeight = height ? ` height="${height}"` : "";

  let htmlImg = `<img src="${src}"${htmlAltText}${htmlTitle}${htmlWidth}${htmlHeight} />`;
  if (target) {
    htmlImg = `\
<a href="${target}">
    ${htmlImg}
</a>`;
  }

  if (alignAttr) {
    htmlImg = `\
<div align="${alignAttr}">
${htmlImg}
</div>`;
  }
  return htmlImg;
}
