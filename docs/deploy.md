# Deploy


## Build

Do a production build and output to the `dist` directory.

```sh
$ make build
```

This runs Vue's build command including cleaning the output directory. This can be done locally to preview a build.

Note that this used TypeScript internally - you do **not** need to run a compile command as part of this command.

The command uses the `--mode production` by default.


## Release

Increment the tag using NPM CLI. This includes fetching and pushing.

```sh
$ make tag
```


## CI/CD

See the GitHub Actions workflow file.

Push to `master` or a feature branch with a PR and you'll trigger a build with GitHub Actions and you'll get any errors on a bad build.

For pushes to `master` branch only, the app will build to the `gh-pages` branch. This is used to deploy to the GitHub Pages site.

### Selective cleaning

There was an issue where viewing a cached HTML page in the browser where it a blank page when a hashed JS script is not found, after a push and deploy to master.

The Vue build command covered under [Build](#build) above automatically deletes the output directory each time.

So to stop cleaning and keep hashed assets persisted across builds, we add a flag to the one build command in [package.json](/package.json). This is done along with a setting on an Action in the workflow to ensure assets persist on `gh-pages` branch across deploys.
. There is no actual browser trigger like a page load to watch for.

Though, maybe if the scripts on the page do all run top to bottom, an alternative fix would be a script last on the page which checks if the app `div` element is empty and if so then it forces a page reload, which will get the latest HTML and JS. This script must only run _after_ the Vue script runs and succeeds, to avoid running to soon.

Occasionally, we may want to delete old files on the `gh-pages` branch, especially after a few deploys where it is more likely that the latest page has been viewed and newer assets requested.
