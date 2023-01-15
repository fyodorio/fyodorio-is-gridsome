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

## Problem

Recently I had started to think about revamping my old blog and [turning it into a digital shed](https://fyodor.io/turning-my-abandoned-blog-into-a-digital-shed/). I wanted to give it more life, more personal touch, to make it a place where I'd love to hang out virtually.

Among other thoughts, I considered a possibility of migration to a newer tech stack (because I can). Don't get me wrong, I actually love [Gridsome](https://gridsome.org/) (which is underneath this website now). But it's quite obsolete, and it's actually a dead project now.

I like the rule of not touching things that are not broken but in this case I decided to give it a try because I wanted to:

* Simplify my setup and get rid of (arguably) unnecessary [GraphQL layer](https://gridsome.org/docs/data-layer/),
* Learn some new and fresh JAMStack tricks and compare them with older jobs,
* Get possibility of updating npm dependencies regularly with well-maintained project,
* Benefit from zero-JS-by-default approach eventually,
* Make DX and UX smoother, 
* Have some coding fun on holidays.

I had chosen [Astro](https://astro.build/) for the target tech stack, as I heard a lot of [good things](https://docs.astro.build/en/concepts/why-astro/) about their approach to static site generation, using [interactivity islands](https://docs.astro.build/en/concepts/islands/), and emphasizing performance by default. Of course, [Vue](https://vuejs.org/) support was crucial as well to make migration more gradual and less painful, as Gridsome is exclusively Vue-based.

The scope of work didn't look too huge. I wasn't able to find any directly relevant information about migrating a static site from Gridsome to Astro, though there are [some short notes](https://docs.astro.build/en/guides/migrate-to-astro/from-gridsome/) about that on the official Astro's documentation site, which is nice. But they're not about migrating per se, rather switching by abandoning the origin and starting from scratch. It's always cool but... You know, sometimes you need to take your old granny's suitcase with you.

My plan was to try "minimal viable migration" with transferring my existing Vue components as they are, and translating layouts, templates and components from Vue to Astro where necessary. See what happens, and iterate on improvements later on if it will be worth it.

## Solution

Long story short, it went better than I expected but not good enough. And here's the details.

As I was documenting my actions on the go, I came up with **the checklist for the migration** I did. Probably it can be useful for some other folks but one needs to mind some _prerequisites_:

* My website is based on slightly opinionated [starter theme](https://github.com/gridsome/gridsome-starter-blog) from Gridsome authors which uses [Sass](https://sass-lang.com/) for styles, and local markdown files for content population,
* I store images on [Cloudinary](https://cloudinary.com/) instead of local folders, as it allows to dynamically enhance and adjust them,
* The project structure is quite standard in my case though I use an additional folder for storing post drafts (_you can find the code for both the source Gridsome repository and the target Astro repository in the end of the post_).

So here's what one needs to do in order to migrate a Gridsome website of similar origin to Astro and get rid of inevitable blockers on the way.

<div class="checkbox-list">

- [x] Find some simple existing Astro project to use as a settings and structure reference, for instance [this one](https://github.com/littlesticks/astro-minimal-starter). It will help to match the source and the target during the process of migration.
- [x] Use [manual setup way](https://docs.astro.build/en/install/manual/) for creating a new Astro project, as it gives much more flexibility, and doesn't depend on tooling issues (I had got [some](https://github.com/withastro/astro/issues/5227#issuecomment-1368739482)) and/or opinionated templates. 
- [x] [Add Vue integration](https://docs.astro.build/en/guides/integrations-guide/vue/) to support smoother migration of Vue components.
- [x] [Add Sass integration](https://docs.astro.build/en/guides/styling/#sass-and-scss) (if you use Sass; alternatively you can find information about main popular CSS pre- and post-processors in [docs](https://docs.astro.build/en/guides/styling/#css-preprocessors) — Astro has great support for them).
- [x] Move `/components`, `/layouts`, and `/pages` from Gridsome project's `/src` to Astro's project `/src`. Assets are a bit trickier — I'd moved `/styles` directly from Gridsome's `src/assets` to Astro's `/src`, and as I hardly use local images (I prefer Cloudinary, as I mentioned), I had postponed `/images` migration (I'll probably need them later), as it's a quite [tricky thing in Astro](https://docs.astro.build/en/guides/images/), and I'll expand on that later. As for `/templates`, some of them go directly to `/pages`, some settle in `/layouts` — it depends on your architecture and templating approach.
- [x] Move `/posts` from `/content` to `src/pages`. I had placed my `*.md` files on the root level of `/pages` to avoid `/posts/..` prefix in slugs, but it depends on your approach to it. Astro has [file-based routing](https://docs.astro.build/en/core-concepts/routing/) so it brings some limitations.
- [x] Add `"allowJs": true` to `compilerOptions` of your `tsconfig.json`, at least if you added the TS support — as your Gridsome app is written in JS, it will be necessary.
- [x] Move necessary site metadata from `gridsome.config.js` to `src/data/config.ts` (the path/file name is arbitrary) — you may not need that at all, but most probably some metadata will require a container of a kind.
- [x] Move `index.html` content to [base layout component](https://docs.astro.build/en/core-concepts/layouts/#sample-layout). By default, your entry-point (most probably) will be `src/pages/index.astro` which in its turn should use the base layout component to abstract out all the non-content details, as a recommended practice.
- [x] Add [image integration](https://docs.astro.build/en/guides/integrations-guide/image/) (to use instead of `<g-image>`). That's a tricky point as Astro's `<Image>` component can be used only in Astro components, not in Vue, so it might not be very useful for you at the first steps. I personally just replaced `<g-image>`s with standard `<img>` tag, as most images are used inside Vue in my case. 
- [x] Replace `<g-link>` with standard anchor tag (yes, goodbye [pre-fetching](https://gridsome.org/docs/linking/#how-it-works)).
- [x] Add workaround for `timeToRead` feature (again, if you need that — I did). You can use [the same approach](https://github.com/yuehu/word-count/blob/master/index.js) Gridsome engage in their plugins.
- [x] Migrate dark/light theme toggle flow (if necessary) — working with browser APIs is not available directly in frontmatter-like Astro scripts so `<script>` tag workaround was used in my case, I'm going to simplify it later for sure.
- [x] Fix `<pre>`/`<code>` styling issues (maybe my personal actually) — change default `shiki` to `prism` [in config](https://docs.astro.build/en/reference/configuration-reference/#markdownsyntaxhighlight) to stick with Gridsome's default way.
- [x] **The hardest part of the migration** — turning [layout](https://docs.astro.build/en/core-concepts/layouts/) components to Astro components. You need to handle quite a lot of stuff here. It comes up to components decomposition (obviously you can just transfer your Vue components, but some of them may require rewriting to `*.astro`), styles handling (which will in most cases be [quite straightforward](https://docs.astro.build/en/guides/styling/)), and data management. If you're like me and use file system for writing your posts/pages with markdown, you wil need to replace your GraphQL requests (`<static-query>`, `<page-query>`) with [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths) API  for `*.md` pages and [dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) (like, for instance, some specific [tag page](https://fyodor.io/tag/meta/) for your blog), or calls to [`Astro.glob()`](https://docs.astro.build/en/reference/api-reference/#astroglob) for most of the `*.astro` pages. Components should obviously go with [props](https://fyodor.io/slots-vs-props-in-ui-components/) ([`Astro.props`](https://docs.astro.build/en/reference/api-reference/#astroprops), or with `config.ts` where you need more generic/static data.

</div>

So that's it, as "simple" as that. Though migration is never easy indeed, and turning your Gridsome website to _Astro_ specifically is probably the easiest way to refresh your obsolete tech stack in this regard. There are some additional steps that might be needed in your case, and there are some additional steps that are needed in mine, but the described flow is a good start and a good minimal basis for further improvements.

## Findings

It would lie if I said everything was smooth and fun. And I cannot say I'm fully satisfied with results, as I mentioned already. It was a quick run, and there's still a lot of stuff to do. But I actually liked the way it went, and I like the resulting codebase which became more clean and comprehensive in my opinion, not to say that I got rid of obsolete dependencies and switched to new and well-maintained and supported technology (with very friendly and active [community](https://astro.build/chat)). 

Well, not fully switched yet actually... I had got into some blockers, some of them quite stupid (I'm sure), but anyway, like:

* When navigating between my "About" and "Home" pages, I see slight page blink caused (I guess) by default light theme trigger and then switching to preferred dark theme. In Gridsome it's seamless (as in SPA apparently) but I'm sure there should be a way around it.
* Favicon is not visible on sub-pages, only on the main page. I didn't spend too much time on that, but as I use the common base layout everywhere, the issue is unexpected to me.
* Issues with managing styles of dynamically generated HTML pages — I had handled that by moving some styles from components to global stylesheets, but I'm sure it's possible to make it another (better) way.
* Confusing image processing depending on source: dev and build commands output different results with regard to locally-stored images, so it's not very clear to me still, should one keep them in `/public` or `/src` assets (or both).
* Necessity to have a separate scoping slug for tags (and all similar kids of dynamic "scoping" pages). Currently, with gridsome, I don't use such approach, and all the pages have straightforward root-based URLs/slugs. Looks like it's not possible (without some hacks) in Astro.
* Necessity to have additional [layout stuff in frontmatter](https://docs.astro.build/en/guides/markdown-content/#frontmatter-layout) or in post's `*.md`/`*.mdx` body — I don't like it very much in terms of separation of concerns (a content should be just a content), probably there's some way to generalize this part on layout level, but I hadn't found it yet.
* I had noticed discrepancy in header fonts styles and wasn't able to debug it well yet. Probably this issues comes from Gridsome side, actually. But anyway, I still have some styles questions anyway, and will try to figure this out step by step.
* [IDE support](https://docs.astro.build/en/editor-setup) for Astro component syntax is slightly limited yet (though it's growing gradually). So I needed to switch from [Webstorm](https://www.jetbrains.com/webstorm/) (which I personally love and prefer) to [VS Code](https://code.visualstudio.com/) which not a big deal but, you know, a slight inconvenience.

The last thing is performance. I didn't expect much from this and had just run the generic integrated [Lighthouse performance checker](https://developer.chrome.com/docs/lighthouse/overview/) (my network connection is not ideal, but the test was clean and made at the same conditions). 

So to compare, that's what I have for [Gridsome version](https://fyodor.io/):

![Gridsome site perfomance stats (higher)](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1673720808/astro-migration/Screenshot_2023-01-14_at_23.25.43_klsor8.png)

And here's what I got for [Astro rebuild](https://fyodorio.netlify.app/):

![Astro site perfomance stats (higher)](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1673720808/astro-migration/Screenshot_2023-01-14_at_23.25.35_cdl7hk.png)

I'm pretty sure there's a good reason for that and the problems most probably come from my side and the fast and surfaced migration. But I did expect slightly better outcome, as the site is very small and static.

## Summary

I did tag [the milestone for the source code](https://github.com/fyodorio/fyodorio-is-gridsome/releases/tag/state_freeze_for_astro_migration) I used for migration in my Gridsome version repository. And I did tag [the first results for Astro migration](https://github.com/fyodorio/fyodor.io/releases/tag/first_migration_iteration) in the corresponding output repository. You can compare and clearly see pros and cons of both, and some specific aspects and differences of these awesome technologies on a working blog example.

I had decided to stay with Gridsome for now. The experiment was successful and pleasant, but it hadn't ended as "brilliantly" as I expected. There's still a lot to be done, the last 10% which, as usual, take 90% of time. I'm not a kind of tech geek which changes technologies each year. I had chosen Gridsome many years ago as it was very easy to start and just write a blog. Today I'd probably go with Astro. And I probably will, but later, and starting from scratch instead of trying to fit triangular shape into square container.

But anyway, this holiday project had shown that Astro is very nice to work with (I actually like [Astro components](https://docs.astro.build/en/core-concepts/astro-components/) much more than any other component syntax I saw, and I saw them all probably), and not this hard to migrate to, with its flexibility and great support for different integrations and frameworks. The data handling here is just perfect and straigtforward, it's just JS, so this part is 10 out of 10, especially when you have a content website and no fancy web-app-like behaviours.

I'll go and proceed polishing by [digital shed](https://fyodor.io/turning-my-abandoned-blog-into-a-digital-shed/) and see, where would be the best place and time to delegate the chores to Astro. I'm sure I'll end up there eventually.

_Cover photo by [Benjamin Zanatta](https://unsplash.com/@benjaminzanatta) on Unsplash_