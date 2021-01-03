# Shields.io
> Notes on URLs for shields.io


## Separators warning

Note the shields.io API itself does funny things if you do use more than one occurence of dash and space, or underscore and space, even when they are escaped correctly.

e.g. `A - B - C` converted to `A_--_B_--_C` unfortunately then renders in the SVG result as `A - B_- C`

So just don't mix them and you'll be ok. Like do `A-B-C`.
