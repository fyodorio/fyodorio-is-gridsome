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

As I was documenting my actions on the go, I came up with **the checklist for the migration** I did. Probably it can be useful for some other folks but one needs to mind some _prerequisites_:

* My website is based on slightly opinionated [starter theme](https://github.com/gridsome/gridsome-starter-blog) from Gridsome authors which uses Sass for styles, and local markdown files for content population,
* I store images on [Cloudinary](https://cloudinary.com/) instead of local folders, as it allows to dynamically enhance and adjust them,
* The project structure is quite standard in my case though I use an additional folder for storing post drafts (_you can find the code for both the source Gridsome repository and the target Astro repository in the end of the post_).

So here's what one needs to do in order to migrate a Gridsome website of similar origins to Astro and get rid of inevitable blockers on the way.

<div class="checkbox-list">

- [x] Find some simple existing Astro project to use as a settings and structure reference, for instance [this one](https://github.com/littlesticks/astro-minimal-starter). It will help to match the source and the target during the process of migration.
- [x] Use [manual setup way](https://docs.astro.build/en/install/manual/) for creating a new Astro project, as it gives much more flexibility, and doesn't depend on tooling issues (I had got [some](https://github.com/withastro/astro/issues/5227#issuecomment-1368739482)) and opinionated templates. 
- [x] [Add Vue integration](https://docs.astro.build/en/guides/integrations-guide/vue/) to support smoother migration of Vue components.
- [x] [Add Sass integration](https://docs.astro.build/en/guides/styling/#sass-and-scss) (if you use Sass; alternatively you can find information about main popular CSS pre- and post-processors in [docs](https://docs.astro.build/en/guides/styling/#css-preprocessors) — Astro has great support for them).
- [x] Move `/components`, `/layouts`, and `/pages` from Gridsome project's `/src` to Astro's project `/src`. Assets are a bit trickier — I'd moved `/styles` directly from Gridsome's `src/assets` to Astro's `/src`, and as I hardly use local images (I prefer Cloudinary, as I mentioned), I had postponed `/images` migration (I'll probably need them later), as it's a quite [tricky thing in Astro](https://docs.astro.build/en/guides/images/), and I'll expand on that later. As for `/templates`, some of them go directly to `/pages`, some settle in `/layouts` — it depends on your architecture and templating approach.
- [x] Move `/posts` from `/content` to `src/pages`. I had placed my `*.md` files on the root level of `/pages` to avoid `/posts/..` prefix in slugs, but it depends on your approach to it. Astro has [file-based routing](https://docs.astro.build/en/core-concepts/routing/) so it brings some limitations.
- [x] Add `"allowJs": true` to `compilerOptions` of your `tsconfig.json`, at least if you added the TS support — as your Gridsome app is written in JS, it will be necessary.
- [x] Move necessary site metadata from `gridsome.config.js` to `src/data/config.ts` (the path/file name is arbitrary) — you may not need that at all, but most probably some metadata will require a container of a kind.
- [x] Move `index.html` content to [base layout component](https://docs.astro.build/en/core-concepts/layouts/#sample-layout). By default, your entry-point (most probably) will be `src/pages/index.astro` which in its turn should use the base layout component to abstract out all the non-content details, as a recommended practice.
- [x] Add [image integration](https://docs.astro.build/en/guides/integrations-guide/image/) (to use instead of `<g-image>`). That's a tricky point as Astro's `<Image>` component can be used only in Astro components, not in Vue, so it might not be very useful for you at the first steps. I personally just replaced `<g-image>`s with standard `<img>` tag, as most images are used inside Vue in my case. 
- [x] Replace `<g-link>` with standard anchor tag (yes, goodbye pre-fetching).
- [x] Add workaround for `timeToRead` feature (again, if you need that — I did). You can use [the same approach](https://github.com/yuehu/word-count/blob/master/index.js) Gridsome engage in their plugins.
- [x] Migrate dark/light theme toggle flow (if necessary) — working with browser APIs is not available directly in frontmatter-like Astro scripts so `<script>` tag workaround was used in my case, I'm going to simplify it later for sure.
- [x] Fix `<pre>`/`<code>` styling issues (maybe my personal actually) — change default `shiki` to `prism` [in config](https://docs.astro.build/en/reference/configuration-reference/#markdownsyntaxhighlight) to stick with Gridsome's default way.
- [x] **The hardest part of the migration** — turning [layout](https://docs.astro.build/en/core-concepts/layouts/) components to Astro components. You need to handle quite a lot of stuff here. It comes up to components decomposition (obviously you can just transfer your Vue components, but some of them may require rewriting to `*.astro`), styles handling (which will in most cases be [quite straightforward](https://docs.astro.build/en/guides/styling/)), and data management. If you're like me and use file system for writing your posts/pages with markdown, you wil need to replace your GraphQL requests (`<static-query>`, `<page-query>`) with [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths) API  for `*.md` pages and [dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) (like, for instance, some specific [tag page](https://fyodor.io/tag/meta/) for your blog), or calls to [`Astro.glob()`](https://docs.astro.build/en/reference/api-reference/#astroglob) for most of the `*.astro` pages. Components should obviously go with [props](https://fyodor.io/slots-vs-props-in-ui-components/) ([`Astro.props`](https://docs.astro.build/en/reference/api-reference/#astroprops), or with `config.ts` where you need more generic/static data.

</div>

So that's it, as "simple" as that. Though migration is never easy indeed, and turning your Gridsome website to Astro is probably the easiest way to refresh your obsolete tech stack in this regard. There are some additional steps that might be needed in your case, and there are some additional steps that are needed in mine, but the described flow is a good start and a good minimal basis for further improvements.


_Cover photo by [Benjamin Zanatta](https://unsplash.com/@benjaminzanatta) on Unsplash_