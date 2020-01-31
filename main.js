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

function makeBadge(title, imgUrl, extUrl) {
    return `[![${title}](${imgUrl})](${extUrl})`;
}

function getInputs() {
    var username = $("input[name='username'").val(),
        repoName = $("input[name='repo-name'").val(),
        licenseType = $("input[name='license-type'").val();

    return {
        USERNAME: username,
        REPO_NAME: repoName,
        LICENSE_TYPE: licenseType,
        tag: function() {
            if (this.USERNAME && this.REPO_NAME) {
                var title = 'GitHub tag',
                    imgUrl = `https://img.shields.io/github/tag/${this.USERNAME}/${this.REPO_NAME}.svg`,
                    extUrl = `https://GitHub.com/${this.USERNAME}/${this.REPO_NAME}/tags/`;

                return makeBadge(title, imgUrl, extUrl);
            }
            return '';
        },
        license: function() {
            if (this.LICENSE_TYPE && this.USERNAME && this.REPO_NAME) {
                var color = 'blue',
                    branch = 'master';

                var title = `${this.LICENSE_TYPE} license`,
                    imgUrl = `https://img.shields.io/badge/License-${this.LICENSE_TYPE}-${color}.svg`,
                    extUrl = `https://github.com/${this.USERNAME}/${this.REPO_NAME}/blob/${branch}/LICENSE`;

                return makeBadge(title, imgUrl, extUrl);
            }
            return '';
        }
    };
}

function mdToHtml(markdown) {
    var reader = new commonmark.Parser(),
        writer = new commonmark.HtmlRenderer(),
        parsed = reader.parse(markdown);

    return writer.render(parsed);
}

function renderTemplate(templateID, outputId, data) {
    var template = $(templateID).html(),
        resultHtml = Mustache.to_html(template, data),
        resultMd = mdToHtml(resultHtml);

    $(outputId).html(resultMd);
}

function renderAll() {
    var data = getInputs();

    renderTemplate('#badges', '#target-output', data);
    renderTemplate('#badges-md', '#target-output-md', data);
}
