# Badges

Reference for badges or shields for Github projects.

Badge sources:

- [github.com/badges/shields](https://github.com/badges/shields)
- [shields.io](https://shields.io/)

For URL encoding, see this [tool](https://www.urlencoder.org/).


## Styles

How to set the style oa badge. Based on the Styles section of the Shields site.

Modifier:

- `?style={STYLE}`

Choices:

- `plastic` - with gradient shading
- `flat` - no shading, round edges
- `flat-square` - square edges
- `for-the-badge` - large badge
- `social` - useful for [Github project](#github-project) badges.


## Use this template

```
[![Use this template](https://img.shields.io/badge/Use_this_template-green.svg)](https://github.com/<USERNAME>/<REPO_NAME>/generate)
```

## Github Actions

```
[![Actions status](https://github.com/<USERNAME>/<REPO_NAME>/workflows/<WORKFLOW_NAME>/badge.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/actions)
```

Replace fields with your own username and repo name. The workflow name must be from the name field inside the file, but URL safe. e.g. `Python%20package.`

Example of the badge itself, without link:

```
![Python package](https://github.com/MichaelCurrin/unicron/workflows/Python%20package/badge.svg)
```

Note that Github Actions now includes a tool on the right of the Actions page for creating badges. This uses the same badge syntax tas the one above, though Github's tool provides many choices on configuring the badge.


## Netlify Deploy

### Sample badge

```
[![Netlify Status](https://api.netlify.com/api/v1/badges/<APP_ID>/deploy-status)](https://app.netlify.com/sites/<APP_NAME>/deploys)
```

Replace with your own app ID and app name.

### Help

For your Netlify app, you can find a status badge under settings. Example URL:

```
https://app.netlify.com/sites/<APP_NAME>/settings/general#status-badges
```

See Netlify's Deploy Badges guide [here](https://www.netlify.com/blog/2019/01/29/sharing-the-love-with-netlify-deployment-badges/).


## Dependencies

```
[![Dependency Foo](https://img.shields.io/badge/Dependency%20-Foo-blue.svg)](https://<foo>)
```

```
[![Bar](https://img.shields.io/badge/Bar-%3E%3D1.2.3-blue.svg)](https://<bar>)
```


## Made with

Format: The badge code has the prefix, the package name and then the color. Each separated by a hyphen. The prefix and the package name can have spaces, but these must be URL encoded as `%20`.

General format for _Made with_ badge, first without and with a hyperlink added:

```
![Made with <TOOL>](https://img.shields.io/badge/Made%20with-<TOOL>-blue.svg)

[![Made with <TOOL>](https://img.shields.io/badge/Made%20with-<TOOL>-blue.svg)](<TOOL_URL>)
```

Sample badges:

```
[![Made with Bash](https://img.shields.io/badge/Made%20with-Bash-blue.svg)](https://www.gnu.org/software/bash/)

[![Made with Github Pages](https://img.shields.io/badge/Made%20with-Github%20Pages-blue.svg)](https://pages.github.com/)

[![Made with Python](https://img.shields.io/badge/Made%20with-Python-blue.svg)](https://python.org)

[![Made with Node](https://img.shields.io/badge/Made%20with-Node-blue.svg)](https://nodejs.org)

[![Made with Jekyll](https://img.shields.io/badge/Made%20with-Jekyll-blue.svg)](https://jekyllrb.com)

[![Made with Ruby](https://img.shields.io/badge/Made%20with-Ruby-blue.svg)](https://ruby-lang.org)
```

Theme badge:

```
[![Theme minima](https://img.shields.io/badge/theme-minima-blue.svg)](https://github.com/jekyll/minina)
```

You can choose better static text badge, or pull in NPM version (then link to NPM or the main site). Here the NPM version is always the _latest_.

```
[![Made with Docsify](https://img.shields.io/badge/Made%20with-Docsify-blue.svg)](https://docsify.js.org/) 

[![Made with latest Docsify](https://img.shields.io/npm/v/docsify/latest?label=docsify)](https://docsify.js.org/)
```

You can even pull in the version from your package.json file.


## Tag

```
[![GitHub tag](https://img.shields.io/github/tag/<USER_NAME>/<APP_NAME>.svg)](https://GitHub.com/<USER_NAME>/<REPO_NAME>/tags/)
```

## Release

```
[![GitHub release](https://img.shields.io/github/release/<USER_NAME>/<APP_NAME>.svg)](https://GitHub.com/<USER_NAME>/<REPO_NAME>/releases/)
```

## License

```
[![<LICENSE_TYPE> license](https://img.shields.io/badge/License-<LICENSE_TYPE>-blue.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/blob/master/LICENSE)
```

```
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/blob/master/LICENSE)
```


## Github project

These can be used in the doc page or somewhere on your website frontend.

From [Social](https://shields.io/category/social) category on [Shields.io](https://shields.io/) site.


### Stars

Use **stars** in the image URL.

```
https://img.shields.io/github/stars/<USERNAME>/<REPO_NAME>?style=social
```

### Forks

Use **forks** in the image URL.

```
https://img.shields.io/github/forks/<USERNAME>/<REPO_NAME>?style=social
```

### Add hyperlinks

Wrap the image in an anchor tag:

```
<a href="...">
    <img src= "..." >
</a>
```

Use one of the following for the link target:

- Repo homepage: `https://github.com/<USERNAME>/<REPO_NAME>`
- Repo stars list: `https://github.com/<USERNAME>/<REPO_NAME>/stargazers`
- Repo forks list: `https://github.com/<USERNAME>/<REPO_NAME>/network/members`


#### Full template

```
<a href="https://github.com/<USERNAME>/<REPO_NAME>">
    <img src="https://img.shields.io/github/stars/<USERNAME>/<REPO_NAME>?style=social">
</a>

<a href="https://github.com/<USERNAME>/<REPO_NAME>">
    <img src="https://img.shields.io/github/forks/<USERNAME>/<REPO_NAME>?style=social">
</a>
```


### Jekyll variables

In Jekyll, with a Github plugin, you use the following variables in the link and image URLs:

- Full repo URL: `site.github.owner_url`
- User name: `site.github.owner_name`
- Repo name: `site.github.project_title`
