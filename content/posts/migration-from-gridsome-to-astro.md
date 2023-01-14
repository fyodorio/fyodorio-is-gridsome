---
title: Migration from Gridsome to Astro
date: 2023-01-14
published: true
description: Reasoning, checklist, impressions, retrospective, recommendations.
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto,q_auto,f_auto/v1673377532/benjamin-zanatta-CfhtS2nj95c-unsplash_pxchwk.jpg
tags: [astro, gridsome, jamstack, webdev, experience]
canonical_url: https://fyodor.io/migration-from-gridsome-to-astro/
series: false
---

Recently I had started to think about revamping my old blog and [turning it into a digital shed](https://fyodor.io/turning-my-abandoned-blog-into-a-digital-shed/). I wanted to give it more life, more personal touch, to make it a place where I'd love to hang out virtually.

Among other thoughts I considered a possibility of migration to a newer tech stack (because I can). Don't get me wrong, I actually love [Gridsome](https://gridsome.org/) (which is underneath this website now). But it's quite obsolete, and it's actually a dead project now.

I like the rule of not touching things that are not broken but in this case I decided to give it a try because I wanted to:

* Simplify my setup and get rid of (arguably) unnecessary GraphQL layer,
* Learn some new and fresh JAMStack tricks and compare them with older jobs,
* Get possibility of updating npm dependencies regularly with well-maintained project,
* Benefit from zero-JS-by-default approach eventually,
* Make DX and UX smoother, 
* Have some coding fun on holidays.

The scope of work didn't look too huge. I wasn't able to find any directly relevant information about migrating a static site from Gridsome to Astro, though there are [some short notes](https://docs.astro.build/en/guides/migrate-to-astro/from-gridsome/) about that on the official Astro's documentation site, which is nice. But they're not about migrating per se, rather switching by abandoning the origin and starting from scratch. It's always cool but... You know, sometimes you need to take your old granny's suitcase with you.

My plan was to try "minimal viable migration" with transferring my existing Vue components as they are, and translating layouts, templates and components from Vue to Astro where necessary. See what happens, and iterate on improvements later on if it will be worth it.

Long story short, it went better than I expected but not good enough. And here's the details.

As I was documenting my actions on the go, I came up with the checklist for the migration I did. Probably it can be useful for some other folks but one needs to mind some prerequisites:

* My website is based on slightly opinionated [starter theme](https://github.com/gridsome/gridsome-starter-blog) from Gridsome authors which uses Sass for styles, and local markdown files for content population,
* I store images on [Cloudinary](https://cloudinary.com/) instead of local folders, as it allows to dynamically enhance and adjust them,
* The project structure is quite standard in my case though I use an additional folder for storing post drafts.

So here's what one needs to do in order to migrate a Gridsome website of similar origins to Astro and get rid of inevitable blocker on the way.

<div class="checkbox-list">

- [x] Find some simple existing Astro project to use as a settings and structure reference, for instance [this one](https://github.com/littlesticks/astro-minimal-starter). It will help to match the source and the target during the process of migration.
- [x] Use [manual setup way](https://docs.astro.build/en/install/manual/) for creating a new Astro project, as it gives much more flexibility, and doesn't depend on tooling issues (I had got [some](https://github.com/withastro/astro/issues/5227#issuecomment-1368739482)) and opinionated templates. 
- [x] [Add Vue integration](https://docs.astro.build/en/guides/integrations-guide/vue/) to support smoother migration of Vue components.
- [x] [Add Sass integration](https://docs.astro.build/en/guides/styling/#sass-and-scss) (if you use Sass; alternatively you can find information about main popular CSS pre/post-processors in [docs](https://docs.astro.build/en/guides/styling/#css-preprocessors) — Astro has great support for them).
- [x] Move `/components`, `/layouts`, and `/pages` from Gridsome project's `/src` to Astro's project `/src`. Assets are a bit trickier — I'd moved `/styles` directly from Gridsome's `src/assets` to Astro's `/src`, and as I hardly use local images (I prefer Cloudinary, as I mentioned), I had postponed `/images` migration (I'll probably need them later), as it's a quite [tricky thing in Astro](https://docs.astro.build/en/guides/images/), and I'll expand on that later. As for `/templates`, some of them go directly to `/pages`, some settle in `/layouts` — it depends on your architecture and templating approach.
- 

</div>

_Cover photo by [Benjamin Zanatta](https://unsplash.com/@benjaminzanatta) on Unsplash_