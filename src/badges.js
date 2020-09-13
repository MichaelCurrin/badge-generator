/**
 * Handle rendering of each badge and all badges.
 */
/* eslint-disable */

const SHIELDS_API = 'https://img.shields.io',
    SHIELDS_BADGE = `${SHIELDS_API}/badge`,
    SHIELDS_GH = `${SHIELDS_API}/github`,
    GITHUB = 'https://github.com',
    DEFAULT_COLOR = 'blue',
    DEFAULT_BRANCH = 'master';

const STYLES = {
    FOR_THE_BADGE: '?style=for-the-badge',
    SOCIAL: '?style=social'
};

// TODO combine link/target functions in a class.

function markdownLink(altText, linkTarget) {
    return `[${altText}](${linkTarget})`;
}

function markdownImage(altText, imageTarget, hoverTitle = '') {
    if (hoverTitle) {
        imageTarget = `${imageTarget} "${hoverTitle}"`;
    }
    return `![${altText}](${imageTarget})`;
}

// TODO: Add pre-label as social badges have.
export function markdownImageWithLink(altText, imageTarget, linkTarget = '', hoverTitle = '') {
    var image = markdownImage(altText, imageTarget, hoverTitle);

    if (linkTarget) {
        return markdownLink(image, linkTarget);
    }
    return image;
}

function encode(value, spaceToUnderscore = true) {
    // In some cases like GH Actions is necessary to use %20 and not _ for a space.
    if (spaceToUnderscore) {
        value = value.replace(' ', '_');
    }
    return encodeURI(value);
}

/** Make a markdown badge for any inputs. Escapes URLs.
 *  TODO: Avoid escaping if internal URLs.
 **/
function makeBadge(title, imageTarget, linkTarget) {
    imageTarget = encode(imageTarget);
    linkTarget = encode(linkTarget);

    return markdownImageWithLink(title, imageTarget, linkTarget);
}

class Repo {
    constructor(username, repoName) {
        this.username = username;
        this.repoName = repoName;

        this.isValid = username && repoName;
    }

    ghURL() {
        return `${GITHUB}/${this.username}/${this.repoName}`;
    }

    ghPagesURL() {
        // Domain will get lower-cased by GH after a redirect so just make it lowercase now.
        // But preserve case for the comparison. Note Project page needs trailing forwardslash
        // but User page is without.

        var ghDomain = `${this.username}.github.io`;
        var fullDomain = `https://${ghDomain.toLowerCase()}`;

        if (this.repoName === ghDomain) {
            return fullDomain;
        }

        return `${fullDomain}/${this.repoName}/`;
    }

    useThisTemplateBadge(show) {
        if (show && this.isValid) {
            var text = 'Use_this_template',
                color = '2ea44f';

            var title = 'Use this template',
                imgUrl = `${SHIELDS_BADGE}/${text}-${color}${STYLES.FOR_THE_BADGE}`,
                repoUrl = this.ghURL(),
                extUrl = `${repoUrl}/generate`;

            return makeBadge(title, imgUrl, extUrl);
        }

        return '';
    }

    tagBadge(isRelease = false) {
        if (!this.isValid) {
            return '';
        }
        var type = isRelease ? 'release' : 'tag';
        // Based on example on shields.io tool. Prerelease is important for releases < v1 to not show as missing.
        // It's not so important for tags as < v1 will show, but alpha will show. Semver is preferred to sorting
        // by date (the default).
        var params = '?include_prereleases&sort=semver';

        var title = `GitHub ${type}`,
            imgUrl = `${SHIELDS_GH}/${type}/${this.username}/${this.repoName}`;

        var repoUrl = this.ghURL(),
            extUrl = `${repoUrl}/${type}s/${params}`;

        return makeBadge(title, imgUrl, extUrl);
    }

    licenseBadge(licenseType, localLicense = true) {
        if (licenseType && this.isValid) {
            var title = `License: ${licenseType}`,
                imgUrl = `${SHIELDS_BADGE}/License-${licenseType}-${DEFAULT_COLOR}`;

            if (localLicense) {
                var target = '#license';
            }
            else {
                var repoUrl = this.ghURL(),
                    target = `${repoUrl}/blob/${DEFAULT_BRANCH}/LICENSE`;
            }

            return makeBadge(title, imgUrl, target);
        }

        return '';
    }

    _ghSocialShield(type) {
        return `${SHIELDS_GH}/${type}/${this.username}/${this.repoName}${STYLES.SOCIAL}`;
    }

    ghSocial(type, usePreLabel = false) {
        if (!type && !this.isValid) {
            return '';
        }

        var shield = this._ghSocialShield(type);
        var target = this.ghURL();

        var preLabel = usePreLabel ? `${this.username}/${this.repoName} ` : '';

        return `[${preLabel}![Repo ${type}](${shield})](${target})`;
    }
}

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
function genericBadge(params) {
    const { label, message, color, isLarge, target } = params;
    if (!message) {
        return '';
    }

    var title = [
        label,
        message
    ].join(' ');

    if (label) {
        var pieces = [
            label,
            message,
            color
        ];
    }
    else {
        var pieces = [
            message,
            color
        ];
    }
    var shield = pieces.join('-').replace(' ', '_'),
        style = isLarge ? STYLES.FOR_THE_BADGE : '',
        imgUrl = `${SHIELDS_BADGE}/${shield}${style}`;

    return makeBadge(title, imgUrl, target);
}

// TODO add variation that is a docs site. And add custom text options.
function ghPagesBadge(target) {
    var params = {
        label: 'View site',
        message: 'GH Pages',
        color: 'green',
        isLarge: true,
        target: target
    };

    return genericBadge(params);
}

// TODO: alt styles:
//      - react : 1.2.3
//      - Get dynamically from package.json
//      - dependency: react
class Package {
    constructor(name, type) {
        this.name = name;
        this.type = type;

        this.isValid = name && type;
    }

    homepage() {
        if (!this.isValid) {
            return '';
        }

        var url = '';

        switch (this.type) {
            case 'python':
                url = `https://pypi.org/project/${this.name}`;
                break;
            case 'npm':
                url = `https://www.npmjs.com/package/${this.name}`;
                break;
            case 'gem':
                url = `https://rubygems.org/gems/${this.name}/`;
                break;
            default:
                console.error(`Invalid type: ${this.type}`);
        }

        return url;
    }

    badge() {
        var params = {
            label: this.type,
            message: this.name,
            color: 'blue',
            isLarge: false,
            target: this.homepage()
        };

        return genericBadge(params);
    }
}
