# Upgrading
> How to maintain this project's dependencies


## Outdated

View outdated packages:

```sh
$ yarn outdated
```

View outdated packages around Vue CLI service and plugins.

```sh
$ npx vue outdated
```

See [vue-cli CHANGELOG.md](https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md) for details. Note that the alpha releases won't get installed with an upgrade unless you specifically install an alpha release.


## Upgrade

Upgrade all packages.

```sh
$ make upgrade
```

Upgrade outdated packages around Vue CLI service and plugins.

```sh
$ npx vue upgrade
```

For example, upgrading `@vue/cli/service` nd `@vue/cli-plugin-typescript` both to `^4.5.12`.

Upgrade a target package.

```sh
$ yarn add foo
```

Leave off a version number to get the latest. That will use the high available, but without conflicting with extant packages.
