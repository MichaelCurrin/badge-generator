/**
 * Handle rendering of each badge and all badges.
 */

const SHIELDS_BADGE = 'https://img.shields.io/badge',
    SHIELDS_GH = 'https://img.shields.io/github',
    SHIELDS_IMG = 'https://img.shields.io',
    GITHUB = 'https://github.com',
    DEFAULT_COLOR = 'blue',
    DEFAULT_BRANCH = 'master';

const STYLES = {
    FOR_THE_BADGE: '?style=for-the-badge',
    SOCIAL: '?style=social'
};

/** Make a markdown badge for any inputs. Escapes URLs.
 *  TODO: Avoid escaping if interal URLs.
 **/
function makeBadge(title, imgUrl, target) {
    imgUrl = encodeURI(imgUrl);
    target = encodeURI(target);

    return `[![${title}](${imgUrl})](${target})`;
}

function ghURL(username, repoName) {
    return `${GITHUB}/${username}/${repoName}`;
}

function useThisTemplateBadge(show, username, repoName) {
    if (show && username && repoName) {
        var text = 'Use_this_template',
            color = 'green';

        var title = 'Use this template',
            imgUrl = `${SHIELDS_BADGE}/${text}-${color}${STYLES.FOR_THE_BADGE}`,
            extUrl = `${GITHUB}/${username}/${repoName}/generate`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function tagBadge(username, repoName) {
    if (username && repoName) {
        var title = 'GitHub tag',
            imgUrl = `${SHIELDS_IMG}/github/tag/${username}/${repoName}`;

        var repoURL = ghURL(username, repoName),
            extUrl = `${repoURL}/tags/`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function licenseBadge(licenseType, username, repoName, localLicense = true) {
    if ((licenseType, username, repoName)) {
        var title = `${licenseType} license`,
            imgUrl = `${SHIELDS_BADGE}/License-${licenseType}-${DEFAULT_COLOR}.svg`;

        if (localLicense) {
            var target = '#license';
        }
        else {
            var target = `${GITHUB}/${username}/${repoName}/blob/${DEFAULT_BRANCH}/LICENSE`;
        }

        return makeBadge(title, imgUrl, target);
    }
    return '';
}

function _ghSocialShield(type, username, repoName) {
    return `${SHIELDS_GH}/${type}/${username}/${repoName}${STYLES.SOCIAL}`;
}

function ghSocial(username, repoName, type) {
    if (!username && !repoName && !type) {
        return '';
    }

    var shield = _ghSocialShield(type, username, repoName);
    var target = ghURL(username, repoName);

    return `[${username}/${repoName} ![Repo ${type}](${shield})](${target})`;
}

function genericBadge(generics) {
    const { preLabel, postLabel, color, isLarge, target } = generics;
    if (!postLabel) {
        return '';
    }

    var title = [
        preLabel,
        postLabel
    ].join(' ');

    if (preLabel) {
        var pieces = [
            preLabel,
            postLabel,
            color
        ];
    }
    else {
        var pieces = [
            postLabel,
            color
        ];
    }
    var shield = pieces.join('-').replace(' ', '_'),
        style = isLarge ? STYLES.FOR_THE_BADGE : '',
        imgUrl = `${SHIELDS_BADGE}/${shield}${style}`;

    return makeBadge(title, imgUrl, target);
}

// TODO: Refactor to use a class.
function makeBadges() {
    var username = $('input[name="username"').val(),
        repoName = $('input[name="repo-name"').val(),
        licenseType = $('input[name="license-type"').val(),
        useThisTemplateIsChecked = $('input[name="use-this-template"').prop('checked');

    var generics = {
        preLabel: $('input[name="generic-pre-label"]').val(),
        postLabel: $('input[name="generic-post-label"]').val(),
        color: $('input[name="generic-color"]').val(),
        isLarge: $('input[name="generic-large"]').prop('checked'),
        target: $('input[name="generic-target"]').val()
    };

    return {
        tag: tagBadge(username, repoName),
        license: licenseBadge(licenseType, username, repoName),
        useThisTemplate: useThisTemplateBadge(useThisTemplateIsChecked, username, repoName),
        stars: ghSocial(username, repoName, 'stars'),
        forks: ghSocial(username, repoName, 'forks'),
        generic: genericBadge(generics)
    };
}
