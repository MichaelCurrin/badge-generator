# Badge notes


## Version badges
> About the tag and release version badges use in this project

## Static badges

Fixed badges on _shields.io_ which follow one of two API formats. See the `genericBadge` function and the functions it uses.

### Dashes

In the dash style, the format must be `LABEL-MESSAGE-COLOR` or `MESSAGE-COLOR`. You cannot omit color.

e.g.

- https://img.shields.io/badge/Foo-Bar--Baz-blue

### Params

A more verbose URL. The advantage is that you can use characters without encoding them, such as if have a repo title or URL which has a dash, underscore or forward slash.

e.g.

- https://img.shields.io/static/v1?label=Foo&message=Baz-Baz&color=blue

You can actually omit color but it displays better if you set it explictly.

## Tags vs releases

The tag shield shows the latest tag on GitHub. The release badge shows the latest release, which must be created by hand on the Releases tab of your repo. Therefore, showing your latest release will be **behind**
 the latest tag.

It up to you to choose - release flow of your app and if you want people to start using a tag without a release will influence which badge makes sense to you.

In the badge **target** link, I find it preferable to always link to releases page even for tag type, since all tags on are shown on that page but you get the benefit of the release titles.

### Parameters

### Pre-release flag

`?include_prereleases` or `?include_prereleases=`

Including prereleases is done based on example on _shields.io_ tool.

If you have any releases before v1, they will appear as **missing** unless you add this flag.

The tags before v1 will show even if you omit the flag. But with the flag, any alpha tags will show too, so you may not actually want the flag there.

### Sort flag

If you omit the flag, the default behavior is to sort by date. Which means tags added to  old commits can show up as the latest tag when you don't want them to.

Set the value to `semvar`. This does natural sorting using semantic versioning. It also makes a `0.X` version orange to show it is a prerelease.


## Type for fixed badge values

For [badgeValues.d.ts](/src/constants/badgeValues.d.ts)

There are some fields that are required in `GenericBadge` function, so when you create an object matching the type below you need to use `!` at the end of the value.

e.g. in [package.ts](/src/core/packages.ts).

```
STATIC_DEPENDENCY.COLOR!,
```

Otherwise you get error:

```
Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
```

This changed is needed for the fields which have default values or are optional.
