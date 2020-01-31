/**
 * Main script.
 *
 * We use the approach here to render markdown to HTML, but after Moustache is run.
 *  https://stackoverflow.com/questions/52562508/using-markdown-in-javascript-template-engine
 */

// Don't escape HTML.
Mustache.escape = function(text) {
    return text;
};

function getInputs() {
    var username = $("input[name='username'").val();
    var repoName = $("input[name='username'").val();
    var licenseType = $("input[name='username'").val();

    return {
        USERNAME: username,
        REPO_NAME: repoName,
        LICENSE_TYPE: licenseType,
        tag: function() {
            if (this.USERNAME && this.REPO_NAME) {
                return `[![GitHub tag](https://img.shields.io/github/tag/${this.USERNAME}/${this
                    .REPO_NAME}.svg)](https://GitHub.com/${this.USERNAME}/${this.REPO_NAME}/tags/)`;
            }
            return '';
        },
        license: function() {
            if (this.LICENSE_TYPE && this.USERNAME && this.REPO_NAME) {
                return `[![${this.LICENSE_TYPE} license](https://img.shields.io/badge/License-${this
                    .LICENSE_TYPE}-blue.svg)](https://github.com/${this.USERNAME}/${this
                    .REPO_NAME}/blob/master/LICENSE)`;
            }
            return '';
        }
    };
}

function mdToHtml(markdown) {
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(markdown);

    return writer.render(parsed);
}

function renderTemplate(templateID, outputId, data) {
    var template = $(templateID).html();
    var result = Mustache.to_html(template, data);
    result = mdToHtml(result);
    $(outputId).html(result);
}

function renderAll() {
    var data = getInputs();

    renderTemplate('#badges', '#target-output', data);
    renderTemplate('#badges-md', '#target-output-md', data);
}
