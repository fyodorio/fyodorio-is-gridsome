# Fyodor's digital shed
[![Netlify Status](https://api.netlify.com/api/v1/badges/bb6a8dda-6431-477f-a926-1cfec38333a2/deploy-status)](https://app.netlify.com/sites/fyodor-io/deploys)

> A personal blog based on customized [Gridsome Blog Starter](https://github.com/gridsome/gridsome-starter-blog) - a simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.

## Getting started

* Install Bun<sup>*</sup> (see [the official docs](https://bun.sh/docs/installation))
* `bun install`
* `bun run develop`
* Happy coding 🚀

_<sup>*</sup>I use `bun` not because it's hip but because Gridsome is not maintained anymore and in the latest available version it requires older `Node.js` versions (`v14.x.x`) in order to make `npm` work, and these versions are poorly supported at Netlify, which I use for deployment._

## Folder structure

### ./content/posts

Markdown files with blog posts. Files from this folder are accessible publicly. Images can be added to an internal folder here (for instance, `./content/posts/images`). 

### ./content/the-drafts

Markdown files with _drafts_ for future blog posts (work in progress). These are intended to become new blog posts [soon]. Files from this folder are _not_ accessible publicly.

### ./content/the-ideas

Markdown files with _ideas_ for future blog posts. These might not make it to the eventual content but are nice to work on. Files from this folder are also _not_ accessible publicly.

### ./content/the-ideas/projects

Planned posts or pages about side projects.

### ./content/the-ideas/deprecates

Old ideas, drafts, and whatnot marked for deletion.

### ./static

Add static files here. Files in this directory will be copied directly to `dist` folder during build. For example, /static/robots.txt will be located at https://yoursite.com/robots.txt. (Not used, removed now.)

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

## Content population

The [frontmatter](https://cloudcannon.com/tutorials/jekyll-tutorial/introduction-to-front-matter-and-yaml/) for the posts of this blog follow closely the structure provided at dev.to blog editor interface, to improve compatibility and reposting. Here's what we have:

```yaml
---
title: My awesome title
date: 2020-03-02 # which is YYYY-MM-DD
updatedOn: 2023-10-03 # which is also YYYY-MM-DD
published: true # not listed and shown at the compiled website if `false`
description: Sometimes we need that — as a details text for previews and such 
cover_image: # that should be a URL
tags: [webdev, angular, react, software, opinion] # up to five, the last is a category, and the last is not added on dev.to
canonical_url: https://fyodor.io/my-awesome-title/ # matches the file name
series: false # used on dev.to, not implemented here yet
---
```