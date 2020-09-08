/**
 * Handle image form.
 */

// Use markdownImageWithLink rather.
function mkMdImg(src, alt, title, target = '') {
    var mdTitle = title ? ` "${title}"` : '';

    var mdImg = `![${alt}](${src}${mdTitle})`;
    if (target) {
        mdImg = `[${mdImg}](${target})`;
    }

    return mdImg;
}

// TODO There must be cleaner way to calculate this and lay it out. Use Vue?
function mkHtmlImg(src, alt, title, target = '', width, height, alignAttr) {
    var htmlTitle = title ? ` title="${title}"` : '',
        htmlAltText = alt ? ` alt="${alt}"` : '',
        htmlWidth = width ? ` width="${width}"` : '',
        htmlHeight = height ? ` height="${height}"` : '';

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

/** Find inputs and return finished markdown and HTML code. */
function makeImages() {
    var src = $('input[name="src"').val(),
        alt = $('input[name="alt"').val(),
        title = $('input[name="title"').val(),
        target = $('input[name="target"').val();

    var width = $('input[name="width"').val(),
        height = $('input[name="height"').val();

    var alignAttr = $('input[name="alignAttr"').val();

    // TODO Check badges.js
    const mdImg = mkMdImg(src, alt, title, target);
    const htmlImg = mkHtmlImg(src, alt, title, target, width, height, alignAttr);

    return {
        htmlImg: htmlImg,
        mdImg: mdImg
    };
}
