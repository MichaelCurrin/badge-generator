/**
 * Handle image form.
 */

// TODO There must be cleaner way to calculate this and lay it out. Use Vue?
export function mkHtmlImg(
  src,
  alt,
  title,
  target = "",
  width,
  height,
  alignAttr
) {
  const htmlTitle = title ? ` title="${title}"` : "",
    htmlAltText = alt ? ` alt="${alt}"` : "",
    htmlWidth = width ? ` width="${width}"` : "",
    htmlHeight = height ? ` height="${height}"` : "";

  var htmlImg = `<img src="${src}"${htmlAltText}${htmlTitle}${htmlWidth}${htmlHeight} />`;
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
