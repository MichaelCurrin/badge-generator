# Types


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
