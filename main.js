/**
 * Main script.
 *
 * We use the approach here to render markdown to HTML, but after Moustache is run.
 *  https://stackoverflow.com/questions/52562508/using-markdown-in-javascript-template-engine
 */

// Turn off escaping so markdown in templates is preserved.
Mustache.escape = function(text) {
    return text;
};

/** Create badge as markdown, with URLs escaped. **/
function makeBadge(title, imgUrl, extUrl) {
    imgUrl = encodeURI(imgUrl);
    extUrl = encodeURI(extUrl);

    return `[![${title}](${imgUrl})](${extUrl})`;
}

function useThisTemplateBadge(show, username, repoName) {
    if (show && username && repoName) {
        var text = 'Use_this_template',
            color = 'green';

        var title = 'Use this template',
            imgUrl = `https://img.shields.io/badge/${text}-${color}.svg`,
            extUrl = `https://github.com/${username}/${repoName}/generate`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function tagBadge(username, repoName) {
    if (username && repoName) {
        var title = 'GitHub tag',
            imgUrl = `https://img.shields.io/github/tag/${username}/${repoName}.svg`,
            extUrl = `https://GitHub.com/${username}/${repoName}/tags/`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function licenseBadge(licenseType, username, repoName) {
    if ((licenseType, username, repoName)) {
        var color = 'blue',
            branch = 'master';

        var title = `${licenseType} license`,
            imgUrl = `https://img.shields.io/badge/License-${licenseType}-${color}.svg`,
            extUrl = `https://github.com/${username}/${repoName}/blob/${branch}/LICENSE`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function makeBadges() {
    var useThisTemplateIsChecked = $('input[name="use-this-template"').prop('checked'),
        username = $('input[name="username"').val(),
        repoName = $('input[name="repo-name"').val(),
        licenseType = $('input[name="license-type"').val();

    return {
        use: useThisTemplateBadge(useThisTemplateIsChecked, username, repoName),
        tag: tagBadge(username, repoName),
        license: licenseBadge(licenseType, username, repoName)
    };
}

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
