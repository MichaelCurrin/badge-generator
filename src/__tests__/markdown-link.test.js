const { MarkdownLink } = require('../components/markdownLink.js')

test('An ID markdown link formats correctly', () => {
    var tag = MarkdownLink('My link', '#target')
    expect(tag.md()).toBe('[My link](#target)')
})

test('An absolute markdown link formats correctly', () => {
    var tag = MarkdownLink('Absolute link', '/foo/bar.md')
    expect(tag.md()).toBe('[Absolute link](/foo/bar.md)')
})

test('A markdown URL link formats correctly', () => {
    var tag = MarkdownLink('Example link', 'https://example.com')
    expect(tag.md()).toBe('[Example link](https://example.com)')
})

test('A markdown image tag formats correctly', () => {
    var tag = MarkdownLink('Example image', 'https://example.com/image.png')
    expect(tag.image()).toBe('![Example image](https://example.com/image.png)')
})

test('A markdown image tag with target URL formats correctly', () => {
    var tag = MarkdownLink('Example image', 'https://example.com/image.png', 'https://foo.bar.com')
    expect(tag.image()).toBe('[![Example image](https://example.com/image.png)](https://foo.bar.com)')
})

test('An ID markdown link with alt text formats correctly', () => {
    var tag = MarkdownLink('My link', '#target')
    expect(tag.md("My alt test for hover")).toBe('[My link](#target "My alt test for hover")')
})

test('A markdown image tag with alt text and target URL formats correctly', () => {
    var tag = MarkdownLink('Example image', 'https://example.com/image.png', 'https://foo.bar.com')
    expect(tag.image("My alt test for hover")).toBe('[![Example image](https://example.com/image.png "My alt test for hover")](https://foo.bar.com)')
})
