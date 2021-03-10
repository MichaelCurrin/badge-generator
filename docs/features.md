# Features

This web app will let you customize badge input and then show you both the markdown code and an HTML preview.


## What can this tool do?

- Quickly and easily generate badges
- Preview your badges and then copy the markdown when you're happy
- Uses dynamic SVG images defined by URL - no image editing
- Professional and consistent badges
- Use pre-made generic badges or create a new one


## Where do I use the badges?

Put the badges wherever you like:

- At the top of your `README.md`.
- In your docs directory files
- In your docs site or website.
- Link to your repo from another site - like another website or GitHub repo of yours, or even post a link in a blog or forum.


## Content

- Meta badges
- Made with (OS level or important tool or package)
- Dependency badge (usually packages)
- Made for
- Call to Action - download, view docs site, view live site
- Social badges
- Custom badges
- Link maker (no badge) including optional alt text

These could also be available as JS to include in other projects and not just this project's frontend.


## How does it work?

The badges are created using URLs which are loaded as images. 

When you load the SVG image, it appears as rendered HTML - thanks to an external service like [shields.io](https://shield.io) API or the GH Actions badge service.


## Why use this tool?

- It relies mostly on sites like [shields.io](https://shields.io/) to generate professional badges that you can embed in your documentation and then add your own hyperlinks to.
- Great for new projects which have no badges yet, or updating older projects
- You don't need to learn the syntax for each badge type or worry about escaping a space character. The generator will save you time and give you just the markdown you need (you can also come back to the generator to regenerate a badge when you need to modify an existing badge).
- It aims to be more convenient and user-friendly than the generator on shields.io site.
- It focuses on the badge choices I commonly use and bundles the badges together as output, to avoid sifting through [shields.io](https://shields.io/) docs every time and to keep my projects looking consistent.
- Ideal for these topics:
    - JS, Python, Jekyll and Bash projects
    - GitHub Actions badges
    - Tags, license and Use this Template badges in the GitHub environment
- Need a badge which has custom text, color and URL? The generator can do that too.
