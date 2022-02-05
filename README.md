# Fyodor On Software

> A personal blog based on customized [Gridsome Blog Starter](https://github.com/gridsome/gridsome-starter-blog) - a simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.

## Getting started

* `npm install`
* `npm start`
* Happy coding 🚀

## Folder structure

### ./content/posts

Markdown files with blog posts. Files from this folder are accessible publicly. Images can be added to an internal folder here (for instance, `./content/posts/images`). 

### ./content/drafts

Markdown files with drafts for future blog posts. Files from this folder are _not_ accessible publicly.

### ./static

Add static files here. Files in this directory will be copied directly to `dist` folder during build. For example, /static/robots.txt will be located at https://yoursite.com/robots.txt.

### ./src/assets

Globally-accessed assets.

### ./src/components

Add components that will be imported to Pages and Layouts to this folder. Learn more about components here: https://gridsome.org/docs/components/.

### ./src/layouts

Layout components are used to wrap pages and templates. Layouts should contain components like headers, footers or sidebars that will be used across the site. Learn more about Layouts: https://gridsome.org/docs/layouts/.

### ./src/pages

Pages are usually used for normal pages or for listing items from a GraphQL collection. Add .vue files here to create pages. For example **About.vue** will be **site.com/about**. Learn more about pages: https://gridsome.org/docs/pages/.

### ./src/templates

Templates for **GraphQL collections** should be added here. To create a template for a collection called `WordPressPost`
create a file named `WordPressPost.vue` in this folder. Learn more: https://gridsome.org/docs/templates/