function getInputs() {
    var usernameEl = document.getElementsByName('username')[0];
    var username = usernameEl ? usernameEl.value : null;

    var repoNameEl = document.getElementsByName('repo-name')[0];
    var repoName = repoNameEl ? repoNameEl.value : null;

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
