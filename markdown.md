# Markdown

Cheatsheet for content of `.md` or `.markdown` files. This is not meant to be complete but rather useful as a quick reference for the things I need look up occasionally, so it excludes some basics such as headers.

Some content comes from [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## Links

### File

```
[link text](file.txt)
[link text](/app/file.txt)
[link text](../file.txt)
```

### URL

```
[link text](https://example.com)
```

### Alt text

Add alt text. Hover over the link to see the alt text.

```
[link text](files/path/to/file "alt text")
```

### Reference-style links

### Text

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[arbitrary case-insensitive reference text]: https://www.mozilla.org

```
[I'm a reference-style link][Arbitrary case-insensitive reference text]

[arbitrary case-insensitive reference text]: https://www.mozilla.org
```

### Number

[You can use numbers for reference-style link definitions][1]

[1]: http://slashdot.org

```
[You can use numbers for reference-style link definitions][1]

[1]: http://slashdot.org
```

### Link text

Or leave it empty and use the [link text itself].

[link text itself]: http://www.reddit.com

```
Or leave it empty and use the [link text itself].

[link text itself]: http://www.reddit.com
```


## Images

### Inline-style

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

```
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
```

### Reference-style

![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

```
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```

### Plain HTML


```html
<img src="image.png">
```

### Styled HTML

Resize and center an image.

```html
<p align="center">
    <img width="250" src="image.png">
</p>
```
