---
title: "UmiJS: the Shaolin of web frameworks"
date: 2025-03-25
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

## What is Umi

## Tooling ecosystem

## People behind

## Project example

### Prerequisites

The code for the described project can be found [here](https://github.com/fyodorio/my-yummy-umi-thingy).

### Project scaffolding

To scaffold a template app with UmiJS you need to run:

```shell
pnpm dlx create-umi@latest
```

which results in somewhat similar CLI dialog:

![Output of the project scaffolding command](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791790/umijs/1_create_project_r2kfon.png)

By selecting the Ant Design Pro template I had implicitly opted-in to using [Umi Max](https://umijs.org/en-US/docs/max/introduce) which by itself can be considered a kind of metaframework configuration of Umi with shenanigans. This config comes with pre-installed and on-demand-enabled features like state management, analytics, charts, i18n, and [more](https://umijs.org/en-US/docs/max/introduce#how-to-use).

### Project structure

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

And then in the browser, after slight loading with

![Browser loading indicator](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742881894/umijs/2a_bundling_sikqgq.png)

You get something like that:

![Resulting default template application UI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791792/umijs/3_default_ui_lxchgx.png)

Working with default UI generated in Chinese can be a bit intimidating:

![UI for some user actions in the template application](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791793/umijs/4_some_ant_components_uevwnx.png)

No problem, we're seasoned vibe-coders, we can use Cursor to translate that!

![Using Cursor IDE to translate Chinese to English](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791795/umijs/5_translating_to_english_taybok.png)

Which helps a bit but not too much, unfortunately, as many parts come from integrated And DEsign components which require separate configuration to work with English:

![The UI translated to English](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791796/umijs/6_a_bit_better_this_way_curkdx.png)

### Working with Umi CLI

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

If you use `max` configuration (as I did during scaffolding, if you recall) you have many stuff (like linting) enabled by default, often implicitly. It provides you with some coding best practices adhering with the opinionated automated style guide. 

Interesting thing is the so-called _[microgenerators](https://umijs.org/en-US/docs/guides/generator)_ allowing you to scaffold some stuff like pages, data stores, or mocks easily. 

I had tried my luck with pages. It looked a bit awkward and not very productive to be perfectly honest (I still needed to edit a lot of stuff manually) but it's a good way to enforce project's best practices, if you apply proper conventional configuration, I assume.

![Page generation process in CLI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742885274/umijs/6-2_page_scaffolding_djyjh5.png)

### Build and deploy

The UmiJS-dedicated [tiiny.host](https://tiiny.host) deployment story is quite weird. First of all, you can deploy only by uploading your `dist` folder which neglects all the continuous deployment story. Second of all, if you replace the content of your website, it gets broken — looks like some files get cached or something. So I needed to [recreate the project](https://yummy-umi.tiiny.site) while changing it. Basically, it's just a simple one-off static site deployment service so probably it won't work for even lightly sophisticated and regularly updated scenarios. 

![tiiny.host deployment UI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791798/umijs/7_tiiny_host_ooyntx.png)

Good thing is that you can just deploy your repo to [Netlify](https://www.netlify.com) using their `pnpm` configuration which is [pretty straightforward](https://www.netlify.com/blog/how-to-use-pnpm-with-netlify-build/) and [works like a charm](https://yummy.fyodor.io).  

## My opinionated impressions

MPA mode is quite obscure.

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
