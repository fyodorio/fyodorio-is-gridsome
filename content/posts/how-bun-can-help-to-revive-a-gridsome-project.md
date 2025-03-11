---
title: How Bun can help to revive a Gridsome project
date: 2025-03-11
published: true
description: Node is good and hype is bad. But sometimes alternative tools can help you in unexpected ways when you get stuck.
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto,q_auto,f_auto/v1735586201/mQJCWimuLFg_yqjvqs.jpg
tags: [gridsome, bun, netlify, webdev, experience]
canonical_url: https://fyodor.io/how-bun-can-help-to-revive-a-gridsome-project/
series: false
---

Starting from this year, builds for this website through my [Netlify](http://netlify.com) account began failing.

Frankly speaking, I'm still not quite sure why. It could be updates to the corresponding Netlify's Ubuntu image used for deployment. Or perhaps changes in the building workflows for Node (which tend to be unnecessarily extensive at times). It was hard to find the reason, and the community support there is quite slow (as with any community support — hard to blame the guys here).

Meanwhile, on the surface there were some objective reasons for this beast to fail eventually.

This website is built with [Gridsome](https://gridsome.org) — one of the oldest static site generators, which is practically not maintained anymore. It causes some troubles for working with websites based on it, specifically the necessity to use Node.js v14 which is quite obsolete and poorly supported on all the public deployment platforms, including Netlify.

I tried to [go away from Gridsome](https://fyodor.io/migration-from-gridsome-to-astro/) and migrate to something else a couple of times, but eventually decided to stick with it for now, because it's just smooth — and when something works smoothly, you shouldn't invite unwanted trouble (yeah, that's the old enterprise software developer speaking in me, I know). Moreover, there's some vintage feeling and nostalgia in using Gridsome these fancy days, especially as it is my digital shed — a place of power and not just some random website I maintain occasionally. I got some interesting letters about this site. I met some people using the same random Gridsome starter I found a million years ago. You know what I mean.

All in all, before eventually migrating to some boring modern technology, I decided to try using [Bun](https://bun.sh) with it instead of Node. I didn't come up with this idea completely out of nowhere; I had some interesting experience with Bun already, and the promise of zero-config development had proven to be a working approach for me. So I decided to test the hypothesis of letting Bun handle the obsolete Node project to see what it would yield.

Long story short, here's what I did to make it happen:

* Update Netlify settings (just in case) to use the latest available Ubuntu image for deployment
* Remove `/node_modules`, `/dist`, and `package-lock.json`
* Add `netlify.toml` file (I didn't have it before, delegating configuration to the Netlify's default dashboard settings) with the following content:
    ```toml
    [build]
    command = "bun run build"
    publish = "dist"
    ```
* Update `package.json` with proper command for `start` (if you will):
    ```diff
    "scripts": {
    -  "start": "npm run develop",
    +  "start": "bun run develop",
       "build": "gridsome build",
       "develop": "gridsome develop",
       "explore": "gridsome explore"
    }
    ```

And that's basically it. After that, you can run `bun install` and test everything locally before pushing your code to production. To my surprise, it worked perfectly, and I didn't need to do anything additional. There was some trial and error, but mostly due to my experimenting or testing the limits.

A couple of spotted tradeoffs after this update were:

* Default `http://localhost:8080/` dev server route doesn't work anymore, only the network-exposed one (`http://192.168.1.114:8080/` in my case).
* Hot reloading doesn't work very smoothly, which is bearable for content editing (which I mostly do) but probably will be annoying for code changes.

These are definitely not showstoppers but something I want to tinker with further a bit later. It's an affordable price for resurrecting the website.

In summary, I'd say that if you're a noble gentleman or a lady, you probably should go the migration route and use something like [Astro](https://astro.build) (supports Vue components) or [11ty](https://www.11ty.dev) (lightweight and simple), or basically any static site generator or [modern metaframework](https://metaframe.works/comparison/). But as a bit of a tech eccentric, I'll personally reside here for now, thanks to Bun (which I'm now quite motivated to adopt and research further).

_The cover photo by [Museums Victoria](https://unsplash.com/@museumsvictoria) from Unsplash_
