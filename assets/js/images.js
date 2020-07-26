function makeImages() {
    var src = $('input[name="src"').val(),
        alt = $('input[name="alt"').val(),
        title = $('input[name="title"').val(),
        target = $('input[name="title"').val()

    var width, height = 400;

    var mdTitle = title ? ` "${title}"` : '';
    var mdImg = `![${alt}](${src}${mdTitle})`;
    if (target) {
        mdImg = `[${mdImg}](${target})`;
    }

    var htmlTitle = title ? ` title="${title}"` : '';
    var htmlAltText = alt ? ` alt="${alt}"` : '';
    var htmlImg = `<img src=${src}${htmlAltText}${htmlTitle} />`
    if (target) {
        htmlImg = `\
<a href="${target}">
    ${htmlImg}
</a>`
    };

    return {
        htmlImg: htmlImg,
        mdImg: mdImg
    }
}
