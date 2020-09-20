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
// TODO handle as map to make it easy to add multiple params.
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
    const image = markdownImage(altText, imageTarget, hoverTitle);

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

export class Repo {
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
        // But preserve case for the comparison. Note Project page needs trailing forward slash
        // but User page is without.

        const ghDomain = `${this.username}.github.io`,
            fullDomain = `https://${ghDomain.toLowerCase()}`;

        if (this.repoName === ghDomain) {
            return fullDomain;
        }

        return `${fullDomain}/${this.repoName}/`;
    }
    // TODO add variation that has a docs site for the text. And add custom text options.
    ghPagesBadge() {
        const label = 'View site',
            message = 'GH Pages',
            color = 'green',
            isLarge = true,
            target = this.ghPagesURL();

        return genericBadge(label, message, color, isLarge, target);
    }
    useThisTemplateBadge() {
        if (this.isValid) {
            // Match the text and color of GitHub's template button.
            const text = 'Use_this_template',
                color = '2ea44f';

            const title = 'Use this template',
                imgUrl = `${SHIELDS_BADGE}/${text}-${color}${STYLES.FOR_THE_BADGE}&logo=github`,
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

        const type = isRelease ? 'release' : 'tag';
        // Based on example on shields.io tool. Prerelease is important for releases < v1 to not show as missing.
        // It's not so important for tags as < v1 will show, but alpha will show. Semver is preferred to sorting
        // by date (the default).
        const params = '?include_prereleases&sort=semver';

        const title = `GitHub ${type}`,
            imgUrl = `${SHIELDS_GH}/${type}/${this.username}/${this.repoName}`;

        const repoUrl = this.ghURL(),
            extUrl = `${repoUrl}/${type}s/${params}`;

        return makeBadge(title, imgUrl, extUrl);
    }

    licenseBadge(licenseType, localLicense = true) {
        if (licenseType && this.isValid) {
            const title = `License: ${licenseType}`,
                imgUrl = `${SHIELDS_BADGE}/License-${licenseType}-${DEFAULT_COLOR}`;

            let target;
            if (localLicense) {
                target = '#license';
            }
            else {
                const repoUrl = this.ghURL();
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

        const shield = this._ghSocialShield(type);
        const target = this.ghURL();

        const preLabel = usePreLabel ? `${this.username}/${this.repoName} ` : '';

        return `[${preLabel}![${type} - ${this.repoName}](${shield})](${target})`;
    }
}

// TODO: Split on the badge and the target as functions then combine them in a higher function like this.
export function genericBadge(label, message, color, isLarge, target) {
    if (!message) {
        return '';
    }

    const title = [
        label,
        message
    ].join(' - ');

    let pieces;
    if (label) {
        pieces = [
            label,
            message,
            color
        ];
    }
    else {
        pieces = [
            message,
            color
        ];
    }
    const shield = pieces.join('-').replace(' ', '_'),
        style = isLarge ? STYLES.FOR_THE_BADGE : '',
        imgUrl = `${SHIELDS_BADGE}/${shield}${style}`;

    return makeBadge(title, imgUrl, target);
}
const packageInfo = {
    python: {
        label: 'PyPI',
        url: 'https://pypi.org/project/'
    },
    node: {
        label: 'npm',
        url: 'https://www.npmjs.com/package/'
    },
    ruby: {
        label: 'rubygems',
        url: 'https://rubygems.org/gems/'
    }
};

// TODO: alt styles:
//      - 'react : 1.2.3'
//      - Get dynamically from package.json
//      - 'dependency: react'
// TODO add logo for Python etc.
export class Package {
    constructor(name, type) {
        this.name = name;
        this.type = type;

        this.color = 'blue';
        this.isLarge = false;

        this.metadata = packageInfo[type];
        if (!this.metadata) {
            throw new Error('Unable to find matching provider');
        }
    }

    badge() {
        return genericBadge(
            this.metadata.label,
            this.name,
            this.color,
            this.isLarge,
            this.metadata.url
        );
    }
}
