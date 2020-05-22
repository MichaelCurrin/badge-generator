/**
 * Handle rendering of each badge and all badges.
 */

const SHIELDS_API = 'https://img.shields.io/badge',
    SHIELDS_IMG = 'https://img.shields.io',
    GITHUB = 'https://github.com';

const STYLES = {
    FOR_THE_BADGE: '?style=for-the-badge',
    SOCIAL: '?style=for-the-badge'
}

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
            imgUrl = `${SHIELDS_API}/${text}-${color}${STYLES.FOR_THE_BADGE}`,
            extUrl = `${GITHUB}/${username}/${repoName}/generate`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function tagBadge(username, repoName) {
    if (username && repoName) {
        var title = 'GitHub tag',
            imgUrl = `${SHIELDS_IMG}/github/tag/${username}/${repoName}`,
            extUrl = `${GITHUB}/${username}/${repoName}/tags/`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function licenseBadge(licenseType, username, repoName) {
    if ((licenseType, username, repoName)) {
        var color = 'blue',
            branch = 'master';

        var title = `${licenseType} license`,
            imgUrl = `${SHIELDS_API}/License-${licenseType}-${color}.svg`,
            extUrl = `${GITHUB}/${username}/${repoName}/blob/${branch}/LICENSE`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

// TODO: Refactor to use a class.
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
