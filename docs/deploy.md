# Deploy


## CI/CD

See the GitHub Actions workflow file.

Push to `master` or a feature branch with a PR and you'll trigger a build with GitHub Actions and you'll get any errors on a bad build.

For pushes to `master` branch only, the app will build to the `gh-pages` branch. This is used to deploy to the GitHub Pages site.


## Release

Create a tag locally using the CLI.

NPM is simpler than Yarn for tagging.

```sh
$ npm version minor
```
