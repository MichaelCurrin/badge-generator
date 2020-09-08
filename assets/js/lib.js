/**
 * Lib script.
 *
 * Handle rendering of badge or image elements.
 * Elements come in as markdown strings and must be rendered both literal values in
 * a code block and as display values (after being converted to HTML).
 *
 * Requires commonmark and mustache scripts to be loaded.
 */

// Turn off escaping so markdown in templates is preserved.
Mustache.escape = function (text) {
    return text;
};

/** Render markdown input as HTML */
function mdToHtml(markdown) {
    var reader = new commonmark.Parser(),
        writer = new commonmark.HtmlRenderer(),
        parsed = reader.parse(markdown);

    return writer.render(parsed);
}

/** Place text inside triple backtick codeblock. */
function toCodeBlock(text) {
    return [
        '```',
        text,
        '```'
    ].join('\n');
}

/** Place HTML inside target template, but respecting markdown. **/
function renderTemplate(templateID, outputId, data, asCodeBlock = false) {
    var template = $(templateID).html();
    // Strip whitespace on the outside.
    template = template.replace(/^\s+|\s+$/g, '');

    if (asCodeBlock) {
        template = toCodeBlock(template);
    }
    var resultHtml = Mustache.to_html(template, data);

    resultMd = mdToHtml(resultHtml);
    $(outputId).html(resultMd);
}
