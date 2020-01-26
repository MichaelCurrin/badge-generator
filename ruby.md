# Ruby

## Gemfile


### Samples

`Gemfile`

```ruby
source 'https://rubygems.org'

gem 'jekyll', '~> 3.8.5'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
  gem 'github-pages'
end
```

Single Jekyll plugin:

```ruby
gem 'NAME', group: :jekyll_plugins
```

Plugins supported by the `github-pages` plugin - [versions](https://pages.github.com/versions/).

### Resources

- Bundler [Gemfile](https://bundler.io/v1.5/gemfile.html) doc.
- [Jekyll Plugin Installation](https://jekyllrb.com/docs/plugins/installation/) doc.
- See a fuller Gemfile with comments in one of my repos [here](https://github.com/MichaelCurrin/jekyll-blog-demo/blob/master/Gemfile).

Why the jekyll_plugins group in the samples above? The docs say:

> Jekyll gives this particular group of gems in your Gemfile a different treatment. Any gem included in this group is loaded before Jekyll starts processing the rest of your source directory.

A gem included here will be activated even if its not explicitly listed under the plugins: key in your site’s config file.

## Jekyll Plugins

### Local

Put plugins as `.rb` files in your `_plugins` directory.

Guides:
- [Your first plugin](https://jekyllrb.com/docs/plugins/your-first-plugin/)
- [Generators](https://jekyllrb.com/docs/plugins/generators/)

### External

If using Github Pages, then in addition to a _Gemfile_ you must add plugins to your `_config.yml` file as such:

```yml
plugins:
  - jekyll-gist
  - jekyll-coffeescript
  - jekyll-assets
  - another-jekyll-plugin
```
