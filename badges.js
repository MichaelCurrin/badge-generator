/**
 * Handle rendering of each badge and all badges.
 */

/** Make a markdown badge for any inputs. Escapes URLs. **/
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
