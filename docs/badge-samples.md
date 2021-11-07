# Badge samples

<!-- When this is cleaned up to be interactive, hardcoded cases here could be used as unit tests. -->

Reference for badges or shields for GitHub projects. This is somewhat of a tutorial on how the badges generated on the main site work and some badges which don't get added there could still be recorded here.

Badge sources:

- Repo: [badges/shields](https://github.com/badges/shields)
- Site: [shields.io](https://shields.io/)

For URL encoding, see this [tool](https://www.urlencoder.org/) or [percent encoding](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding) (linked from shields.io). It might be safer to always encode, though its less readable. This may not always be needed. Like `/` works fine. But `-` even encoded still breaks a badge that uses it as a separator.

Remember images can be tested as URLs directly in the browser. That view is useful for faster dev and debugging.


## Styling

### Styles

How to set the style on a badge. Based on the Styles section of the Shields site.

Modifier:

- `?style={STYLE}`

Choices:

- `plastic` - with gradient shading
- `flat` - no shading, round edges
- `flat-square` - square edges
- `for-the-badge` - large badge
- `social` - useful for [GitHub project](#github-project) badges.

### Logos

```
?logo={LOGO}
```

Examples:

- `github`
- `npm`
- `discord`
- `visual-studio-code`

See large listing:

- [simpleicons.org/](https://simpleicons.org/)

From `shields.io`:

> Insert one of the named logos from (bitcoin, dependabot, discord, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or simple-icons. Simple-icons are referenced using names as they appear on the simple-icons site. If the name includes spaces, replace them with dashes (e.g: `?logo=visual-studio-code`)


## Simple button format

Use a button with static content which just has styling.

- Spaces must be `%20` or `_` (the latter is more readable in code).
- For emojis
    - You can use unicode emoji (e.g. `🛡️`) in the shield label. Not all symbols work such as `🇬🇧`.
    - But GitHub emoji as text (`:shield:`) will not work. But you can convert from symbol to unicode - you can always test a Git emoji in your markdown file then copy the rendered unicode.
- `.svg` suffix is optional.

### Two-part label

Separate into `PRE_LABEL-MAIN_LABEL-COLOR`. Where the first part is black by default and the second part is a custom color like `blue` or `f967f9` (for `#f967f9` hex).

e.g

```
https://img.shields.io/badge/site-GitHub_Pages-blue
```

From shields.io site, you can set colors by parameters:

- Color of logo `?logoColor=violet`
- Background of right part `?color=fedcba`
- Background of label `?labelColor=abcdef`


### One-part label

Use `MAIN_LABEL-COLOR`.

e.g.

```
https://img.shields.io/badge/Foo-blue
```

Related - see [Made with](#made-with) section.


### Large button

Using style to create a large badge.

With arbitrary text here.

```markdown
[![Foo Bar](https://img.shields.io/badge/foo-Bar-green?style=for-the-badge)]()
```

[![Foo Bar](https://img.shields.io/badge/foo-Bar-green?style=for-the-badge)]()



With emojis.

```markdown
[![Foo Bar](https://img.shields.io/badge/📂_Foo-Bar_🛡️-green?style=for-the-badge)]()
```

[![Foo Bar](https://img.shields.io/badge/📂_Foo-Bar_🛡️-green?style=for-the-badge)]()


### Docs

Using `blue` is a good color here to not distract from using the template or viewing the demo site.

Link to docs `/docs` directory.

[![View Project Docs](https://img.shields.io/badge/View-Project_Docs-green?style=for-the-badge)](/docs/)

```markdown
[![View Project Docs](https://img.shields.io/badge/View-Project_Docs-green?style=for-the-badge)](/docs/)
```

Link to docs site.

[![Docs site](https://img.shields.io/badge/docs-GitHub_Pages-blue)](https://michaelcurrin.github.io/badge-generator)


```markdown
[![Docs site](https://img.shields.io/badge/docs-GitHub_Pages-blue)](https://michaelcurrin.github.io/badge-generator/)
```

Using large badge and green for stronger call-to-action for application, compared with calmer docs site blue.

```markdown
[![GitHub Pages site](https://img.shields.io/badge/site-GitHub_Pages-green?style=for-the-badge)](https://michaelcurrin.github.io/badge-generator/)

or

[![GitHub Pages site](https://img.shields.io/badge/GitHub_Pages-Badge_Generator-green?style=for-the-badge)](https://michaelcurrin.github.io/badge-generator/)

or

[![Docsify JS Template site](https://img.shields.io/badge/site-Docsify_JS_Tutorial-green?style=for-the-badge)](https://michaelcurrin.github.io/docsify-js-tutorial/#/)
```

Put the URL in the badge. Just remember a dash even encoded will break it.

[![Badge generator site](https://img.shields.io/badge/site-mysite-green)](https://michaelcurrin.github.io/badge-generator/)


Choices

```markdown
[![Online docs](https://img.shields.io/badge/Online_docs-blue.svg)](https://michaelcurrin.github.io/badge-generator/)

[![Local docs](https://img.shields.io/badge/Local_docs-blue.svg)](/docs)
```


## Use this Template badges

```
[![Use this Template](https://img.shields.io/badge/Use_this_Template-green.svg)](https://github.com/<USERNAME>/<REPO_NAME>/generate)
```


## GitHub Actions badges

Reference a workflow and its state as passing or failing.

```
[![Actions status](https://github.com/<USERNAME>/<REPO_NAME>/workflows/<WORKFLOW_NAME>/badge.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/actions)
```

Replace fields above with your own username and repo name.


The workflow is referenced by name - based on the title in a workflow file. The name of the file does not matter and is not used by the badge. But it can be if you use the filter logic.

e.g. Sample here spread over two lines for convenience even though it i

- Badge image: https://github.com/MichaelCurrin/auto-commit-msg/workflows/Node%20CI/badge.svg
- Link: https://github.com/MichaelCurrin/auto-commit-msg/actions?query=workflow%3A%22Node+CI%22

Note `+` in actions URL works instead of space. But **not** in the badge image - use `%20` instead.

The workflow name must be from the name field inside the file, but URL safe. e.g. `Python%20package` for workflow named `Python package`. NB. You cannot use an underscore for a space, as with other badges.

The target here goes to all actions.

Example of the badge itself, without a link:

```markdown
![Python package](https://github.com/MichaelCurrin/unicron/workflows/Python%20package/badge.svg)
```

Note that GitHub Actions now includes a tool on the right of the Actions page for creating badges. This uses the same badge syntax as the one above, though GitHub's tool provides many choices on configuring the badge.

### GH Pages

Unfortunately this badge does not work with GH Pages alone.

I tried a badge like this:

```markdown
![](https://github.com/MichaelCurrin/dev-cheatsheets/workflows/Page%20Build/badge.svg)
```

Based on a run:

https://github.com/MichaelCurrin/dev-cheatsheets/runs/1208501953

And the run does not have a _Create badge_ button.

So you have to use the colored dot on a commit to check GH Pages status.

Or the Environment part of the repo info or the Environment tab - https://github.com/MichaelCurrin/dev-cheatsheets/deployments


## Netlify Deploy

Dynamic badge.

### Sample badge

```
[![Netlify Status](https://api.netlify.com/api/v1/badges/<APP_ID>/deploy-status)](https://app.netlify.com/sites/<APP_NAME>/deploys)
```

Replace with your own app ID and app name.

### Help

In your Netlify app setup, you can find a status badge under Settings. Example URL:

```
https://app.netlify.com/sites/<APP_NAME>/settings/general#status-badges
```

See Netlify's Deploy Badges guide [here](https://www.netlify.com/blog/2019/01/29/sharing-the-love-with-netlify-deployment-badges/).


## Dependency badges

### Dependency

Static badges.

```
[![Dependency Foo](https://img.shields.io/badge/Dependency-Foo-blue.svg)](https://<foo>)
```

```
[![Bar](https://img.shields.io/badge/Bar-%3E%3D1.2.3-blue.svg)](https://<bar>)
```


### Made with

Static badges.


Format: The badge code has the prefix, the package name and then the color. Each separated by a hyphen.

General format for _Made with_ badge, first without and with a hyperlink added:

```
![Made with <TOOL>](https://img.shields.io/badge/Made_with-<TOOL>-blue.svg)

[![Made with <TOOL>](https://img.shields.io/badge/Made_with-<TOOL>-blue.svg)](<TOOL_URL>)
```

### Theme badge

```markdown
[![Theme minima](https://img.shields.io/badge/theme-minima-blue.svg)](https://github.com/jekyll/minina)
```

## JS / NPM dependencies

You can choose a static text badge with or without a fixed version. Or a dynamic one to pull in NPM version (then link to NPM or the main site). Here the NPM version is always the _latest_.

```markdown
[![Made with Docsify](https://img.shields.io/badge/Made_with-Docsify-blue.svg)](https://docsify.js.org/)

[![Made with latest Docsify](https://img.shields.io/npm/v/docsify/latest?label=docsify)](https://docsify.js.org/)
```


You can even pull in the version from your package.json file. Not covered here.

If the site is just a docs site and not a main site, change to _Docs: Docsify_ rather.


## Latest code

Dynamic badges.

If you have no tags or releases, the badge will still load but just say there is no tag/release. The tag badge updates easier - it will be created every time while a release badge only updates when a release is created by hand. See also the tag and release handling on the Badge Generator page, which also includes extra params not covered here.

### Latest tag

```
[![GitHub tag](https://img.shields.io/github/tag/<USER_NAME>/<APP_NAME>.svg)](https://GitHub.com/<USER_NAME>/<REPO_NAME>/tags/)
```

### Latest release

```
[![GitHub release](https://img.shields.io/github/release/<USER_NAME>/<APP_NAME>.svg)](https://GitHub.com/<USER_NAME>/<REPO_NAME>/releases/)
```

## GitHub repo

Set `logo=github` to add the GH icon to the pre-label.

Note: Using a `-` will break the pattern even if encoded. But you can pass a label as a parameter instead and then it allows a dash.

```markdown
![Repo - MichaelCurrin/badge-generator](https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&logo=github&color=blue)
```

![Repo - MichaelCurrin/badge-generator](https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&logo=github&color=blue)

That is also useful if you need to put a URL with slashes, which would fail normally.

```markdown
![GH Pages - URL](https://img.shields.io/static/v1?label=GH%20Pages&message=MichaelCurrin.github.io/coding-blog/&color=darkgreen)
```

![GH Pages - URL](https://img.shields.io/static/v1?label=GH%20Pages&message=MichaelCurrin.github.io/coding-blog/&color=darkgreen)


## GitHub social badges

Add a repo badge which shows a social counter.

The badge can be used in the doc page or somewhere on your website frontend.

From [Social](https://shields.io/category/social) category on [Shields.io](https://shields.io/) site.

### Stars

Use **stars** in the image URL, before username.

```
https://img.shields.io/github/stars/<USERNAME>/<REPO_NAME>?style=social
```

### Forks

Use **forks** in the image URL, before username.

```
https://img.shields.io/github/forks/<USERNAME>/<REPO_NAME>?style=social
```

A link to actually fork the repo.

```
https://github.com/MichaelCurrin/fork
```

### Add hyperlinks

Wrap the image in a link.

```markdown
![[Image description](image-url)](link-target)
```

Use one of the following for the link target:

- Repo homepage: `https://github.com/<USERNAME>/<REPO_NAME>`
- Repo stars list: `https://github.com/<USERNAME>/<REPO_NAME>/stargazers`
- Repo forks list: `https://github.com/<USERNAME>/<REPO_NAME>/network/members`


Examples:

```markdown
[![Repo stars](https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social)](https://github.com/MichaelCurrin/badge-generator)

[![Repo forks](https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social)](https://github.com/MichaelCurrin/badge-generator)
```

Adding the repo name first:

```markdown
[mkdocs/mkdocs ![Repo stars](https://img.shields.io/github/stars/mkdocs/mkdocs?style=social)](https://github.com/mkdocs/mkdocs)
```

Note you can also use the `social` style on a plain text shield and it will look grey as well, but it won't have the GitHub icon.


## Code style

Recommended by the [Black](https://github.com/psf/black) README - I updated to readability though like `_` for `%20` and `black` for `000000`.

```markdown
[![Code style: black](https://img.shields.io/badge/code_style-black-black)](https://github.com/psf/black)
```

[![Code style: black](https://img.shields.io/badge/code_style-black-black)](https://github.com/psf/black)


## GitHub stats

I don't know how useful these are but they can be generated easily using just a username so maybe I put them in one large string and render markdown to HTML.

```markdown
[![GitHub issues open](https://img.shields.io/github/issues-raw/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator/issues)
[![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator/pulls)

[![GitHub last commit](https://img.shields.io/github/last-commit/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator)

[![GitHub commit activity yearly](https://img.shields.io/github/commit-activity/y/michaelcurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/graphs/commit-activity)
[![GitHub commit activity monthly](https://img.shields.io/github/commit-activity/m/michaelcurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/graphs/commit-activity)
[![GitHub commit activity weekly](https://img.shields.io/github/commit-activity/w/michaelcurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/graphs/commit-activity)
```

[![GitHub issues open](https://img.shields.io/github/issues-raw/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator/issues)
[![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator/pulls)

[![GitHub last commit](https://img.shields.io/github/last-commit/MichaelCurrin/badge-generator?logo=github)](https://github.com/MichaelCurrin/badge-generator)

[![GitHub commit activity yearly](https://img.shields.io/github/commit-activity/y/michaelcurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/graphs/commit-activity)
[![GitHub commit activity monthly](https://img.shields.io/github/commit-activity/m/michaelcurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/graphs/commit-activity)
[![GitHub commit activity weekly](https://img.shields.io/github/commit-activity/w/michaelcurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/graphs/commit-activity)

### Lines of code

Choose `?category=CATEGORY` using one of: `files`,  `lines`, `code`, `blanks` or `comments`.

```markdown
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=files)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=lines)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=code)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=blanks)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=comments)
```

![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=files)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=lines)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=code)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=blanks)
![GitHub lines of code](https://tokei.rs/b1/github/MichaelCurrin/badge-generator?category=comments)

Served from https://github.com/XAMPPRocky/tokei_rs and handled by https://github.com/XAMPPRocky/tokei .

There is also something in shields.io that supports counting files (search _count_) but it says it is limited up to 1000 and also I keep getting errors.

```md
![](https://img.shields.io/github/directory-file-count/badges/shields)
```

![](https://img.shields.io/github/directory-file-count/badges/shields)


## VC Code Extension

From [vscode-taskexplorer README](https://github.com/spmeesseman/vscode-taskexplorer/blob/master/README.md).

```markdown
[![Version](https://vsmarketplacebadge.apphb.com/version-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer&ssr=false#review-details)
[![authors](https://img.shields.io/badge/authors-scott%20meesseman-6F02B5.svg?logo=visual%20studio%20code)](https://www.littlesm.com)
[![PayPalDonate](https://img.shields.io/badge/paypal-donate-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YWZXT3KE2L4BA&item_name=taskexplorer&currency_code=USD)
```

[![Version](https://vsmarketplacebadge.apphb.com/version-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/spmeesseman.vscode-taskexplorer.svg)](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer&ssr=false#review-details)
[![authors](https://img.shields.io/badge/authors-scott%20meesseman-6F02B5.svg?logo=visual%20studio%20code)](https://www.littlesm.com)
[![PayPalDonate](https://img.shields.io/badge/paypal-donate-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YWZXT3KE2L4BA&item_name=taskexplorer&currency_code=USD)


## Jekyll variables

In Jekyll, with a GitHub plugin, you use the following variables in the link and image URLs:

- Full repo URL: `site.github.owner_url`
- User name: `site.github.owner_name`
- Repo name: `site.github.project_title`


## Deploy

```md
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)
