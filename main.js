function getInputs() {
    var username = $('#username-input').one().val();
    var repoName = $('#repo-name-input').one().val();

    return {
        username: username,
        repoName: repoName
    };
}

function render() {
    var data = getInputs();
    var template = $('#badges').html();
    var html = Mustache.to_html(template, data);

    $('#target-output').html(html);
}
