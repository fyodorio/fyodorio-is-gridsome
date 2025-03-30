---
title: "UmiJS: the Shaolin of web frameworks"
date: 2025-03-30
published: true
description: Experience the mysterious art of UmiJS ecosystem kung fu
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto,q_auto,f_auto/v1742790799/kung-fu_gmyc0p.jpg
tags: [umijs, react, software, webdev, experience]
canonical_url: https://fyodor.io/umijs-the-shaolin-of-web-frameworks/
series: false
---

I stumbled upon [UmiJS](https://umijs.org/en-US) accidentally, when was reading about [Mako](https://makojs.dev) — a [Vite](https://vite.dev) analog built with [Rust](https://www.rust-lang.org) (_[of course](https://transitiontech.ca/random/RIIR)_) which I'm very interested in. When I started to dig, I had fallen into the whole treasure trove which I wanted to share with other people who didn't hear anything about the Umi ecosystem. Maybe it's just me living under a stone so feel free to skip it if you're already a UmiJS kung fu master. Otherwise, welcome to the ride.

## Table of Contents

- [Why Umi](#why-umi)
- [What is Umi](#what-is-umi)
- [Tooling ecosystem](#tooling-ecosystem)
- [People behind](#people-behind)
- [Project example](#project-example)
  - [Prerequisites](#prerequisites)
  - [Project scaffolding](#project-scaffolding)
  - [Project structure](#project-structure)
  - [Running the app](#running-the-app)
  - [Working with Umi CLI](#working-with-umi-cli)
  - [Build and deploy](#build-and-deploy)
- [My opinionated impressions](#my-opinionated-impressions)
- [Conclusions](#conclusions)

## Why Umi

I have a soft spot [for metaframeworks](https://metaframe.works), you know. So I eagerly dig into info related to any metaframework projects and tools. There's no shortage of that these days of course — the landscape is versatile. But some projects are quite esoteric and hidden from external eyes — either because of geographical and cultural reasons, or because of language barriers. Here it is both. UmiJS and tools around that are developed predominantly by Chinese community of commercial and non-commercial open-source contributors. However, as many Chinese technological innovations (looking at you [DeepSeek](https://deepseek.com)), this one sparks curiousity because of how rich and self-suficient the ecosystem is. So armed with this curiousity and intrigued by the original GitHub source code findings I had decided to explore it further. Consider it be a kind of "Umi for React/Vue/Angular/Swelte developers" research, often resting on the corresponding habitual analogies.

## What is Umi

UmiJS is an [extremely] pluggable enterprise-scale React-based web application [meta]framework, offering (as [many analogs](https://metaframe.works/comparison/)) routing, build tools, dedicated design system, and everything in between. From what I could see during my reconnaissance, its main market is huge enterprise monorepos for React websites and web applications (something very opposite to tools like, for instance [Waku](https://waku.gg), if you will). Umi itself is not exactly a metaframework though, as I'd say, but rather something React would be if it aimed to resemble [Angular](https://angular.dev) as of version 19 — the powerful SPA framework with optional support for SSR/SSG and a whole lot of build options making it very customizable and approachable for performance optimizations specific for each particular use case. Its plugins-driven extensibility is something resembling Vite but for more dedicated goal of building rich user interfaces. But there's more.

## Tooling ecosystem

In addition to the framework itself, the developers behind UmiJS maintain and connect the dots for the whole huge ecosystem of very clever tools and technologies, some of which got acquired some popularity even behind the Great Wall of China:

* *[Mako](https://makojs.dev).*
* *[Dumi](https://d.umijs.org).*
* *[Ant Design](https://ant.design).*
* *[Father](https://github.com/umijs/father).*
* *[Qiankun](https://qiankun.umijs.org).*
* *[Dva](https://umijs.org/en-US/docs/max/dva).*
* *[CLI](https://umijs.org/en-US/docs/api/commands).*

Moreover, with Umi you get a strong [plugin system](https://umijs.org/en-US/docs/guides/use-plugins), some of which are included by default with each project scaffolded with Umi CLI. These plugin provide, for instance, capable site analytics, rich charts, robust data storage presets, internatiolization and localization capabilities, and many other enticing (though obscure still, until you try them) things.

There's also something even more huge than Umi itself: the misterious *"Bigfish"* project (don't search for meaningful resources links, at least if you're not fluent mandarin speaker) — an enterprise-grade wrapper around UmiJS, designed to enhance the capabilities of the framework with additional predefined and finetuned configurations and plugins. It serves as an internal framework for Ant Group, owning the world's largest mobile payments platform Alipay (and if there's something requiring more security and complexity than fintech, I definitely have no idea about it).

Not surprisingly, the Umi organisation on GitHub even has a [repository for some AI tool](https://github.com/umijs/ai) which, I'd assume, will be analogous to [Vercel's AI SDK](https://sdk.vercel.ai/docs/introduction).

## People behind

The father of UmiJS and many other tools I had mentioned is [Chen Cheng](https://github.com/sorrycc), the guy leading the Ant Group's front end work. He's a very productive and insightful person and open-source entusiast, to the point of curating one of the most popular JS awesome lists — [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript). I would follow his blog or anything willingly but looks like everything he writes is behind some esoteric type of a popular Chinese paywall service so I had left my attempts. His and his team's [repositories](https://github.com/umijs) are quite popular, especially among the Chinese audience (which is fair). 

Doesn't all that mean that there is no smoke without fire? Would be too stupid not to check it.

## Project example

So I have decided to play with UmiJS CLI and generate a project with a maximum staffed setup to take a look how the results look and feel like. There will be some short tutorial-like guidings and impressions shared, but to dig deeper you can explore [the official docs (in English 🎉)](https://umijs.org/en-US/docs/guides/getting-started).

### Prerequisites

The code for the described project can be found [here](https://github.com/fyodorio/my-yummy-umi-thingy). Umi suggests (and supports) quite a bunch of build tools and package manager, but the default one is `pnpm`, for which you'll need to have Node v18+ installed.

### Project scaffolding

To scaffold a template app with UmiJS you need to run:

```shell
pnpm dlx create-umi@latest
```

which results in somewhat similar CLI dialog:

![Output of the project scaffolding command](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791790/umijs/1_create_project_r2kfon.png)

By selecting the Ant Design Pro template I had implicitly opted-in to using [Umi Max](https://umijs.org/en-US/docs/max/introduce) which by itself can be considered a kind of metaframework configuration of Umi with a ton of shenanigans. This config comes with pre-installed and on-demand-enabled features like state management, analytics, charts, i18n, and [more](https://umijs.org/en-US/docs/max/introduce#how-to-use).

### Project structure

The resulting project structure creates the impression of a well-thought-out and best-practices-based opinionated set of dedicated places for everything, starting from Ant-based components, and finishing with API mocks to help you with testing the app locally at any moment.

```shell
.
├── mock
│   └── userAPI.ts
├── src
│   ├── assets
│   ├── components
│   │   └── Guide
│   │       ├── Guide.less
│   │       ├── Guide.tsx
│   │       └── index.ts
│   ├── constants
│   │   └── index.ts
│   ├── models
│   │   └── global.ts
│   ├── pages
│   │   ├── Access
│   │   │   └── index.tsx
│   │   ├── Home
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── Table
│   │       ├── components
│   │       │   ├── CreateForm.tsx
│   │       │   └── UpdateForm.tsx
│   │       └── index.tsx
│   ├── services
│   │   └── demo
│   │       ├── UserController.ts
│   │       ├── index.ts
│   │       └── typings.d.ts
│   ├── utils
│   │   └── format.ts
│   ├── access.ts
│   └── app.ts
├── README.md
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── typings.d.ts
```

### Running the app

Running `pnpm dev` results in the following:

![Dev server run](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791791/umijs/2_run_dev_server_esziqx.png)

And then in the browser, after slight loading with a fancy dedicated animated loader:

![Browser loading indicator](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742881894/umijs/2a_bundling_sikqgq.png)

You'll get something like that:

![Resulting default template application UI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791792/umijs/3_default_ui_lxchgx.png)

Working with default UI generated in Chinese can be a bit intimidating:

![UI for some user actions in the template application](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791793/umijs/4_some_ant_components_uevwnx.png)

No problem, we're seasoned vibe-coders, we can use Cursor to translate that!

![Using Cursor IDE to translate Chinese to English](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791795/umijs/5_translating_to_english_taybok.png)

Which helps a bit but not too much, unfortunately, as many parts come from integrated [And Design components](https://ant.design/components/overview) which require separate configuration to work with English:

![The UI translated to English](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791796/umijs/6_a_bit_better_this_way_curkdx.png)

That's a starting point. But we want more, aren't we? Umi got us covered guys, with something awesome that will help us think less and move faster.

### Working with Umi CLI

The Umi CLI can be considered something similar to Angular CLI (for instance), with it's helpers and utils, but probably even much more that that. Here's what we've got:

```text
build           build app for production
config          umi config cli
dev             dev server for development
help            show commands help
lint            lint source code using eslint and stylelint
setup           setup project
deadcode        check dead code
version         show umi version
plugin          inspect umi plugins
verify-commit   verify the commit message, which is usually used with husky.
preview         locally preview production build
run             run the script commands, support for ts and zx
generate        generate code snippets quickly
```

If you use `max` configuration (as I did during scaffolding, if you recall) you have many stuff (like linting) enabled by default, often implicitly (doh!). It provides you with some coding best practices adhering with the opinionated automated style guide. 

Interesting thing is the so-called _[microgenerators](https://umijs.org/en-US/docs/guides/generator)_ allowing you to scaffold some stuff like pages, data stores, or mocks easily. 

I had tried my luck with pages. It looked a bit awkward and not very productive to be perfectly honest (I still needed to edit a lot of stuff manually) but it's a good way to enforce project's best practices, if you apply proper conventional configuration, I assume.

![Page generation process in CLI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742885274/umijs/6-2_page_scaffolding_djyjh5.png)

You can check my resulting awesome ["About" page](https://github.com/fyodorio/my-yummy-umi-thingy/blob/main/src/pages/About/index.tsx) with an inevitable counter (fancy, I know). Nothing too original but it's good to know that everything resides on its place right where you expect it to be.

### Build and deploy

As we got used to, everything we built needs deployment. I hadn't found any popular deployment adapters for Umi unfortunately from a first glance (but I'm pretty sure there are some plugins for that 🤞), but Google gave me a bunch of seemingly easy deployment options targeted directly to Umi.

Long (and painful) story short, the UmiJS-dedicated [tiiny.host](https://tiiny.host) deployment story is quite weird. First of all, you can deploy only by uploading your `dist` folder which neglects all the continuous deployment story. Second of all, if you replace the content of your website, it gets broken — looks like some files get cached or something. So I needed to [recreate the project](https://yummy-umi.tiiny.site) while changing it. Basically, it's just a simple one-off static site deployment service so probably it won't work for even lightly sophisticated and regularly updated scenarios. 

![tiiny.host deployment UI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791798/umijs/7_tiiny_host_ooyntx.png)

Good thing is that you can just deploy your repo to [Netlify](https://www.netlify.com) using their `pnpm` configuration which is [pretty straightforward](https://www.netlify.com/blog/how-to-use-pnpm-with-netlify-build/) and [works like a charm](https://yummy.fyodor.io). Well, not exactly like a charm, I'd need to correct the SPA routing quirks there definitely if I'd want to make it real serious, but that's probably for the other day.  

## My opinionated impressions

Here I come with a sheet of random thought bourne by the results of my successful UmiJS testing.

MPA mode is quite obscure.

Clever Angular/Redwood-like approach but with the same resulting level of obscurity and complexity.

Poor English support.

Plugin system is interesting.

> The essence of Umi lies in its plugin mechanism

I'd assume you could build a pretty decent metaframework mechanisms with this flexible approach.

LESS is recommended as a styles preprocessor which is a bit weird and original.

TypeScript support is quite obscure and weird. My WebStorm's language service got fed up with that from time to time (which probably can be attributed to lack of out-of-the-box support, but nevertheless).

Next.js/Redwood/Angular level complexity justified by following streamlined team project development.

No React 19 support with some expected blood in the browser console caused by corresponding deprecations. 

You can use Vue instead of React (via a dedicated configuration) even though the app becomes quite a contraption in this case.

Not very fast build time, both during development and for production even though it uses the so called [MFSU](https://umijs.org/en-US/docs/guides/mfsu) (I assume it's something like Module Federation Speed Up) under the hood. You can [use esbuild](https://umijs.org/en-US/docs/guides/mfsu#two-build-tools) as an alternative to webpack though, or even [engage Mako](https://umijs.org/en-US/docs/api/config#mako) itself (which I hadn't figured out how to use TBH), so maybe there's a space for improvement here. Also using MFSU and its overheads on smaller projects is most probably leveled out by incremental build improvements for larger monorepo projects (which obviously get a lot of enablement via MFSU).

## Conclusions

As Lao Tzu said,

> A journey of a thousand Li begins with a single step

So this was just an overview of the capabilities of this interesting tool used by lots of Chinese software industry monsters like Alibaba Cloud, Taobao, ByteDance, and many others.

The official UmiJS repository provide [the whole bunch of examples](https://github.com/umijs/umi/tree/master/examples) of using UmiJS with multiple tools and packages (figured you could actually use it with Vite, or Remix, for instance).

_The cover photo by [Thao LEE](https://unsplash.com/@h4x0r3) from Unsplash_
