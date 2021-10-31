<div align="center">

# Badge Generator <br> :shield: :badger: :mage:

> Magically generate Markdown badges for your docs

[![GH Pages Deploy](https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg)](https://github.com/MichaelCurrin/badge-generator/actions/workflows/main.yml "GitHub Actions workflow status")
[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/releases/?include_prereleases&sort=semver "View GitHub releases")
[![License](https://img.shields.io/badge/License-MIT-blue)](#license "Go to license section")

[![CodeQL](https://github.com/MichaelCurrin/badge-generator/workflows/CodeQL/badge.svg)](https://github.com/MichaelCurrin/badge-generator/actions?query=workflow%3ACodeQL "Code quality workflow status")
[![Known Vulnerabilities](https://snyk.io/test/github/MichaelCurrin/badge-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/MichaelCurrin/badge-generator?targetFile=package.json "Snyk vulnerabilities")
[![LGTM](https://img.shields.io/lgtm/grade/javascript/github/MichaelCurrin/badge-generator?logo=lgtm)](https://lgtm.com/projects/g/MichaelCurrin/badge-generator/context:javascript "View Code Quality checks on LGTM.com")

[![Made with Node](https://img.shields.io/badge/dynamic/json?label=node&query=%24.engines%5B%22node%22%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fbadge-generator%2Fmaster%2Fpackage.json)](https://nodejs.org "Go to Node.js homepage")
[![Package - Yarn](https://img.shields.io/badge/yarn->=1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com "Go to Yarn classic homepage")
[![Package - Vue](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue "Go to Vue on NPM")
[![Package - Typescript](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript?logo=typescript&logoColor=white)](https://www.npmjs.com/package/typescript "Go to TypeScript on NPM")

[Website](https://michaelcurrin.github.io/badge-generator/) — [Sample badges](#sample) — [Documentation](/docs/#readme)

</div>


## Overview

A convenience tool that makes it easy to generate custom Markdown for badges to put on your documentation or website.

Choose a page, enter your details, and click _Submit_ to generate some Markdown code for you to copy and paste.

External tools are used to actually render badges - mostly using [shields.io](https://shields.io).


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/badge-generator/">
        <img src="/docs/_media/sample.png"
            alt="Sample screenshot"
            title="Go to website"
            width="600" >
    </a>
</div>


## Open the web app

Start creating badges for your docs.

<div align="center">

[![Site](https://img.shields.io/badge/View_site-Badge_Generator-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/badge-generator/)

</div>


## Sample

Examples of a few badges generated with the app and rendered here on a markdown doc

Note that most of the badges at the top of this `README.md` file were also generated using this app.

### Social badges

Link to your project. From another project - even paste these in an online forum or your blog.

<div align="center">

[![MichaelCurrin - badge-generator](https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&color=blue&logo=github)](https://github.com/MichaelCurrin/badge-generator)
[![stars - badge-generator](https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social)](https://github.com/MichaelCurrin/badge-generator)
[![forks - badge-generator](https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social)](https://github.com/MichaelCurrin/badge-generator)

</div>

### Repo metadata

Add to the top of your `README.md` file. These are tied to your specific repo.

<div align="center">

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/badge-generator/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - badge-generator](https://img.shields.io/github/issues/MichaelCurrin/badge-generator)](https://github.com/MichaelCurrin/badge-generator/issues)

</div>

### Generic

Put whatever text you want in this static badge, which is independent of a repo. You can change the color, logo and destination link.

<div align="center">

[![Foo - Bar](https://img.shields.io/badge/Foo-Bar-2ea44f)](#)
![Maintained - yes](https://img.shields.io/badge/Maintained-yes-green)
![Contributions - welcome](https://img.shields.io/badge/Contributions-welcome-blueviolet)

</div>

### Dynamic data

Create a badge that references any value you want in a given JSON file and it will always stay up to date. Badge inputs are the text label, the JSON query, and URL for a JSON file (e.g. a `package.json` file on a GitHub repo or a JSON file on your REST API server).

In the example below, we look-up the required VS Code version for a VS Code extension by using the `$.engines["vscode"]` query against this [package.json](https://github.com/MichaelCurrin/auto-commit-msg/blob/master/package.json) file on a GitHub repo.

<div align="center">

![](https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)

</div>


### Packages

An NPM package badge that changes magically when your `package.json` file is updated.

<div align="center">

[![package - vue](https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue)

</div>

### Catalogue

Pre-made badges around languages and tools. Just copy and paste. If you can't find a badge you're looking for, use the Generic badge option to make your own.

<div align="center">

[![OS - Linux](https://img.shields.io/badge/OS-Linux-blue?logo=linux&logoColor=white)](https://www.linux.org/ "Go to Linux homepage")
[![Made with Node.js](https://img.shields.io/badge/Node.js->%3D12-blue?logo=node.js&logoColor=white)](https://nodejs.org "Go to node.js homepage)

</div>


## Documentation
> User guide for using the app and how setup and run the app yourself

<div align="center">

[!view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/#readme)

</div>


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).

- You can freely modify and reuse.
- The _original license_ must be included with copies of this software.
- Please _link back_ to this repo if you use a significant portion the source code.
