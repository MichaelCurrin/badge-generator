/**
 * Main script.
 *
 * We use the approach here to render markdown to HTML, but after Moustache is run.
 *  https://stackoverflow.com/questions/52562508/using-markdown-in-javascript-template-engine
 */

function getInputs() {
    var username = $('#username-input').one().val();
    var repoName = $('#repo-name-input').one().val();
    var licenseType = $('#license-type-input').one().val();

    return {
        USERNAME: username,
        REPO_NAME: repoName,
        LICENSE_TYPE: licenseType
    };
}

function mdToHtml(markdown) {
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(markdown);

    return writer.render(parsed);
}

function render() {
    var data = getInputs();
    var template = $('#badges').html();
    var result = Mustache.to_html(template, data);
    result = mdToHtml(result);
    $('#target-output').html(result);
}
