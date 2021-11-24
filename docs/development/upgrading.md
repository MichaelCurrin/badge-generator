# Upgrading
> How to maintain this project's dependencies

See this projects [Dependency graph](https://github.com/MichaelCurrin/badge-generator/network/dependencies) on GitHub.


## Outdated

View outdated packages:

```sh
$ yarn outdated
```


## Upgrade

Upgrade all packages.

```sh
$ make upgrade
```

Upgrade a target package.

```sh
$ yarn add PACKAGE_NAME
```

Leave off the version number to get the highest available, but without conflicting with extant packages.

### CI

See [upgrade-packages.yml](https://github.com/MichaelCurrin/badge-generator/blob/master/.github/workflows/upgrade-packages.yml) as a GH Actions workflow to upgrade packages manually or on schedule, within semver restrictions.


## ESLint

See issue [#15175](https://github.com/eslint/eslint/issues/15175) in the `eslint` repo.

Vue is not compatible yet with ESLint 8, so stick to 7.


## Vue CLI

This deals with packages around Vue CLI service and plugins.

For example, upgrading `@vue/cli/service` nd `@vue/cli-plugin-typescript` which can both be upgraded to `^4.5.12`.

See [vue-cli CHANGELOG.md](https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md) for details. Note that the alpha releases won't get installed with an upgrade unless you specifically install an alpha release.

### Outdated

View outdated Vue-relaated packages.

```sh
$ npx vue outdated
```

### Upgrade Vue-related packages

```sh
$ npx vue upgrade
```

### Force upgrading min version

Note that even if the lockfile reflects upgrades, the minimum versions in [package.json](/package.json) can go out of sync. The Vue outdated check can't help here.

So you should **manually** keep them at the same number in `package.json` if they drift.

e.g.

```diff
    "@vue/cli-plugin-babel": "^4.5.12",
-   "@vue/cli-plugin-eslint": "^4.5.9",
+   "@vue/cli-plugin-eslint": "^4.5.12",
```

Here is a command to help with that:

```sh
$ yarn add -D @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-plugin-router \
    @vue/cli-plugin-typescript @vue/cli-plugin-unit-jest @vue/cli-service
$ git commit package.json yarn.lock \
    -m 'build: Upgrade Vue CLI service and plugins'
```
