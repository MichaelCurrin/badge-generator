/**
 * Images module.
 *
 * This was attempted using a Vue component instead of with templating. But
 * rendering proved an issue as the finished element was shown even inside of
 * `pre` and `code` tags.
 *
 * The indentation here is not smart because of the nested rendering, but, it
 * works well enough to use it. Maybe there is a function in the Markdown
 * library or similar to handle indenting.
 */
export function mkHtmlImg(
  src: string,
  alt: string,
  title: string,
  target = "",
  width: string,
  height: string
) {
  const htmlTitle = title ? ` title="${title}"` : "",
    htmlAltText = alt ? ` alt="${alt}"` : "",
    htmlWidth = width ? ` width="${width}"` : "",
    htmlHeight = height ? ` height="${height}"` : "";

  let htmlImg = `<img src="${src}"${htmlAltText}${htmlTitle}${htmlWidth}${htmlHeight}/>`;

  if (target) {
    htmlImg = `\
<a href="${target}">
    ${htmlImg}
</a>`;
  }

  return htmlImg;
}
