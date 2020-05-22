/**
 * Main script.
 */

// Turn off escaping so markdown in templates is preserved.
Mustache.escape = function(text) {
    return text;
};

function mdToHtml(markdown) {
    var reader = new commonmark.Parser(),
        writer = new commonmark.HtmlRenderer(),
        parsed = reader.parse(markdown);

    return writer.render(parsed);
}

function toCodeBlock(text) {
    return ['```', text, '```'].join("\n");
}

/** Place HTML inside target template, but respecting markdown. **/
function renderTemplate(templateID, outputId, data, asCodeBlock = false) {
    var template = $(templateID).html();

    if (asCodeBlock) {
        template = toCodeBlock(template);
    }
    var resultHtml = Mustache.to_html(template, data)
    // Remove empty lines of result.
    resultHtml = resultHtml.replace(/^\n/gm, '');

    resultMd = mdToHtml(resultHtml);
    $(outputId).html(resultMd);
}

/** Use inputs and templates to render badges. **/
function renderAll() {
    var badgeData = makeBadges();

    renderTemplate('#badges', '#target-output', badgeData);
    renderTemplate('#badges', '#target-output-md', badgeData, true);
}
