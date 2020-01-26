# Ruby

## Gemfile

See the Bundler [Gemfile](https://bundler.io/v1.5/gemfile.html) doc.

`Gemfile`

```ruby
source 'https://rubygems.org'

gem 'jekyll', '~> 3.8.5'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
end
```

See a fuller Gemfile with comments in one of my repos [here](https://github.com/MichaelCurrin/jekyll-blog-demo/blob/master/Gemfile).
