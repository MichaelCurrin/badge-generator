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

### Keeping assets across deploys

A flag was added to the GH Actions workflow to keep existing files on `gh-pages` branch on each deploy

This is because there was an issue after deploy when viewing a cached HTML page in the browser. It gave a blank page as hashed JS script was not found.

Occasionally, we may want to delete old files on the `gh-pages` branch, especially after a few deploys where it is more likely that the latest page has been viewed and newer assets requested.

#### Alternative approaches

The approach above is simple but it takes up some extra storage space and doesn't get the user to reload.

This is fine for me because I know I deployed, but maybe I can push users to reload another way. Especially as navigating with the app when assets are valid does not actually refresh the HTML page.

Maybe if the scripts on the page do all run top to bottom, an alternative fix would be a script last on the page which checks if the app `div` element is empty and if so then it forces a page reload, which will get the latest HTML and JS.

This script must only run _after_ the Vue script runs and succeeds, to avoid running too soon.

I also experienced a related issue when if the page is kept open during a deploy, then viewing the page later it does not work an a reload is needed. I need to check what scripts load and run here if any, so I can add another script.
