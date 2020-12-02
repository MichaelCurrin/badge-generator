# Deploy


## Build

Do a production build and output to the `dist` directory.

```sh
$ yarn build
```

The directory will always be deleted first, so a _clean_ step is not needed.

This runs `vue-cli-service build` which uses `--mode production` by default.

Note that this used TypeScript internally - you do **not** need to run a compile command as part of this command.


## Release

Create a tag locally using the CLI.

NPM is simpler than Yarn for tagging.

```sh
$ npm version minor
```


## CI/CD

See the GitHub Actions workflow file.

Push to `master` or a feature branch with a PR and you'll trigger a build with GitHub Actions and you'll get any errors on a bad build.

For pushes to `master` branch only, the app will build to the `gh-pages` branch. This is used to deploy to the GitHub Pages site.
