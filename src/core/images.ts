/**
 * Handle image form.
 */

// TODO There must be cleaner way to calculate this and lay it out. Use Vue?
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
