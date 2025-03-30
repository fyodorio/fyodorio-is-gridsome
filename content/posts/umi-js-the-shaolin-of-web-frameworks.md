---
title: "UmiJS: the Shaolin of web frameworks"
date: 2025-03-30
published: true
description: Experience the mysterious art of UmiJS ecosystem kung fu
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto,q_auto,f_auto/v1742790799/kung-fu_gmyc0p.jpg
tags: [umijs, react, software, webdev, experience]
canonical_url: https://fyodor.io/umi-js-the-shaolin-of-web-frameworks/
series: false
---

I stumbled upon [UmiJS](https://umijs.org/en-US) accidentally when reading about [Mako](https://makojs.dev) — a [Vite](https://vite.dev) analog built with [Rust](https://www.rust-lang.org) (_[of course](https://transitiontech.ca/random/RIIR)_) which I'm very interested in. When I started to dig, I had fallen into a whole treasure trove which I wanted to share with other people who hadn't heard anything about the Umi ecosystem. Maybe it's just me living under a stone, so feel free to skip it if you're already a UmiJS kung fu master. Otherwise, welcome to the ride.

(_And just in case someone may consider this journey somewhat derogatory in terms of China and its culture — it's not. I'm a big fan of everything related to this part of the world, and the Shaolin and kung fu reference is not arbitrary — I am myself a certified oriental martial arts instructor, and this philosophy is not an empty phrase for me._)

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

I have a soft spot [for metaframeworks](https://metaframe.works), you know. So I eagerly dig into info related to any metaframework projects and tools. There's no shortage of that these days, of course — the landscape is versatile. But some projects are quite esoteric and hidden from external eyes — either because of geographical and cultural reasons, or because of language barriers. Here it is both. UmiJS and tools around that are developed predominantly by the Chinese community of commercial and non-commercial open-source contributors. However, as with many Chinese technological innovations (_looking at you [DeepSeek](https://deepseek.com)_), this one sparks curiosity because of how rich and self-sufficient the ecosystem is. So armed with this curiosity and intrigued by the original GitHub [source code](https://github.com/umijs/umi) findings, I had decided to explore it further. Consider it a kind of "Umi for React/Vue/Angular/Svelte developers" research, often resting on the corresponding habitual analogies.

## What is Umi

UmiJS is an [extremely] pluggable enterprise-scale React-based web application [meta]framework, offering (_as [many analogs](https://metaframe.works/comparison/)_) routing, build tools, dedicated design system, and everything in between. From what I could see during my reconnaissance, its main market is huge enterprise monorepos for React websites and web applications (_something very opposite to tools like, for instance [Waku](https://waku.gg), if you will_). Umi itself is not exactly a metaframework though, as I'd say, but rather something React would be if it aimed to resemble [Angular](https://angular.dev) as of version 19 — the powerful SPA framework with optional support for SSR/SSG and a whole lot of build options making it very customizable and approachable for performance optimizations specific to each particular use case. Its plugins-driven extensibility is something resembling Vite but for a more dedicated goal of building rich user interfaces. And there's more.

## Tooling ecosystem

In addition to the framework itself, the developers behind UmiJS maintain and connect the dots for a whole huge ecosystem of very clever tools and technologies, some of which have gained popularity even behind the Great Wall of China:

* **[Mako](https://makojs.dev).** A bundler and web server — a kind of [Vite](https://vite.dev) for the UmiJS web apps. It's a fresh development among other tools (_as far as I understand, the team used mostly Webpack and Vite before this in-house tool got up to speed_). Built with Rust and declared to be even faster than other Rust-based analogs, not to mention the lame tools like Webpack and such (_just kidding, I ❤️ Webpack forever!_).
* **[Dumi](https://d.umijs.org).** A static site generator specifically designed for component library development. Look at it as something between [Storybook](https://storybook.js.org) and [Docusaurus](https://docusaurus.io) inside the Umi world (_but much better integrated between each other, presumably_).
* **[Ant Design](https://ant.design).** A top-level UI component library that provides a set of high-quality React components. Quite popular even outside of the Umi toolset and can be used independently, but integrated beautifully with Umi — to the extent I had a hard time figuring out where to find the actual components (_see below, in the project section_).
* **[Father](https://github.com/umijs/father).** A tool designed specifically for building libraries. Used widely by all other tools and from the first look it's hard to find any analog in the world I got used to. Very often dev teams develop some custom approaches for that, but here it's a good set of best practices combined into a decently looking (_and functioning_) craftsman's hammer.
* **[Qiankun](https://qiankun.umijs.org).** An implementation of [micro frontends](https://en.wikipedia.org/wiki/Micro_frontend) for easier and painless building of production-ready microfront-end architecture system.
* **[Dva](https://umijs.org/en-US/docs/max/dva).** A plugin-based state management solution ([Redux](https://redux.js.org) + [Sagas](https://redux-saga.js.org)). Also quite popular in narrow communities outside of the Umi world.
* **[CLI](https://umijs.org/en-US/docs/api/commands).** An interesting DX booster for Umi I'll talk about in detail a bit later.

Moreover, with Umi you get a strong [plugin system](https://umijs.org/en-US/docs/guides/use-plugins), some of which are included by default with each project scaffolded with Umi CLI. These plugin provide, for instance, capable site analytics, rich charts, robust data storage presets, internatiolization and localization capabilities, and many other enticing (_though obscure still, until you try them_) things.

There's also something even more huge than Umi itself: the misterious **"Bigfish"** project (_don't search for meaningful resources links, at least if you're not fluent mandarin speaker_) — an enterprise-grade wrapper around UmiJS, designed to enhance the capabilities of the framework with additional predefined and finetuned configurations and plugins. It serves as an internal framework for [Ant Group](https://www.antgroup.com/en), owning the world's largest mobile payments platform Alipay (_and if there's something requiring more security and complexity than fintech, I definitely have no idea about it_).

Not surprisingly, the Umi organisation on GitHub even has a [repository for some AI tool](https://github.com/umijs/ai) which, I'd assume, will be analogous to [Vercel's AI SDK](https://sdk.vercel.ai/docs/introduction).

## People behind

The father of UmiJS and many other tools I mentioned is [Chen Cheng](https://github.com/sorrycc), the person leading the Ant Group's front-end work. They're a very productive and insightful person and open-source enthusiast, to the point of curating one of the most popular JS awesome lists — [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript). I would follow their blog or anything willingly but looks like everything they write is behind some esoteric type of a popular Chinese paywall service so I had left my attempts. Their and their team's [repositories](https://github.com/umijs) are quite popular, especially among the Chinese audience (_which is fair_). 

Doesn't all that mean that there is no smoke without fire? Would be too stupid not to check it.

## Project example

So I have decided to play with UmiJS CLI and generate a project with a maximum staffed setup to take a look how the results look and feel like. There will be some short tutorial-like guidings and impressions shared, but to dig deeper you can explore [the official docs (in English 🎉)](https://umijs.org/en-US/docs/guides/getting-started).

### Prerequisites

The code for the described project can be found [here](https://github.com/fyodorio/my-yummy-umi-thingy). Umi suggests (_and supports_) quite a bunch of build tools and package managers, but the default one is [`pnpm`](https://pnpm.io), for which you'll need to have [Node.js](https://nodejs.org/en) v18+ installed.

### Project scaffolding

To scaffold a template app with UmiJS you need to run:

```shell
pnpm dlx create-umi@latest
```

which results in somewhat similar CLI dialog:

![Output of the project scaffolding command](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791790/umijs/1_create_project_r2kfon.png)

By selecting the Ant Design Pro template I had implicitly opted-in to using [Umi Max](https://umijs.org/en-US/docs/max/introduce) which by itself can be considered a kind of metaframework configuration of Umi with a ton of shenanigans. This config comes with pre-installed and on-demand-enabled features like state management, analytics, charts, [i18n](https://umijs.org/en-US/docs/max/i18n), and [more](https://umijs.org/en-US/docs/max/introduce#how-to-use).

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

(_A bit more about the ubiquitous MFSU thingy later..._) And then in the browser, after slight loading with a fancy dedicated animated loader:

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

The Umi CLI can be considered something similar to Angular CLI (_for instance_), with it's helpers and utils, but probably even much more that that. Here's what we've got:

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

If you use `max` configuration (_as I did during scaffolding, if you recall_) you have many stuff (_like linting_) enabled by default, often implicitly (_doh!_ 😖). It provides you with some coding best practices adhering with the opinionated automated style guide. 

Interesting thing is the so-called _[microgenerators](https://umijs.org/en-US/docs/guides/generator)_ allowing you to scaffold some stuff like pages, data stores, or mocks easily. 

I had tried my luck with pages. It looked a bit awkward and not very productive to be perfectly honest (_I still needed to edit a lot of stuff manually_) but it's a good way to enforce project's best practices, if you apply proper conventional configuration, I assume.

![Page generation process in CLI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742885274/umijs/6-2_page_scaffolding_djyjh5.png)

You can check my resulting awesome ["About" page](https://github.com/fyodorio/my-yummy-umi-thingy/blob/main/src/pages/About/index.tsx) with an inevitable counter (_fancy, I know_ 😎). Nothing too original but it's good to know that everything resides on its place right where you expect it to be.

### Build and deploy

As we got used to, everything we built needs deployment. I hadn't found any popular deployment adapters for Umi unfortunately from a first glance (_but I'm pretty sure there are some plugins for that_ 🤞), but Google gave me a bunch of seemingly easy deployment options targeted directly to Umi.

Long (_and painful_) story short, the UmiJS-dedicated [tiiny.host](https://tiiny.host) deployment story is quite weird. First of all, you can deploy only by uploading your `dist` folder which neglects all the continuous deployment story. Second of all, if you replace the content of your website, it gets broken — looks like some files get cached or something. So I needed to [recreate the project](https://yummy-umi.tiiny.site) while changing it. Basically, it's just a simple one-off static site deployment service so probably it won't work for even lightly sophisticated and regularly updated scenarios. 

![tiiny.host deployment UI](https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1742791798/umijs/7_tiiny_host_ooyntx.png)

Good thing is that you can just deploy your repo to [Netlify](https://www.netlify.com) using their `pnpm` configuration which is [pretty straightforward](https://www.netlify.com/blog/how-to-use-pnpm-with-netlify-build/) and [works like a charm](https://yummy.fyodor.io). Well, not exactly like a charm, I'd need to correct the SPA routing quirks there definitely if I'd want to make it real serious, but that's probably for the other day.  

## My opinionated impressions

Here I come with a sheet of random thoughts borne by the results of my successful UmiJS testing.

🧙 In general, UmiJS provides developers with a clever Angular/[RedwoodJS](https://redwoodjs.com)-like approach with out-of-the-box tools and scripts for streamlined web development in big teams. The corresponding inevitably huge amount of abstractions and hidden complexity brings a decent level of obscurity and magic, which might be good or bad, depending on the number of dedicated wizards of high level in your team.

㊙️ One problem these wizards will face though will be poor ~~wizarding library~~ documentation in English because all the development happens to be in Chinese and English support is quite secondary and lacking. However, you'll have a sufficient amount of general documentation in English anyway, and you'll always have access to the source code — because that's what them wizards do, right?

🏗️ The Umi's plugin system and API is quite interesting. You can do a lot with that. The approach is quite common for dev tools and in this case resembles both Vite and [Nx](https://nx.dev) with their extensibility and community orientation. There's a huge ecosystem of plugins of all sorts, and you can always complement them with your own (_which is quite important for sophisticated enterprise development_). I'd assume you could build pretty decent metaframework mechanisms with this flexible approach. At least, as I mentioned already, you have a bunch of thoughtful building blocks for that.

🎨 [LESS](https://lesscss.org) is recommended by the Umi team officially as a styles preprocessor which is a bit weird and original. I didn't see it often (_never, actually_) in other tools (_which doesn't lessen LESS's awesomeness, of course_) and it creates some vibe of exclusivity and rebellion (_as everything in Umi, TBH_).

🗃️ MPA mode is quite obscure here. I wasn't able to quickly turn my demo app to an MPA as I planned, but I believe digging into configuration and plugins deeper would provide a solution. It's just it's a bit tough, meaning the focus is actually SPAs (_though as I mentioned, the client-side routing has runtime quirks too requiring some further unsolicited setup which everyone likes, right?_).

😶‍🌫️ TypeScript support is quite obscure and weird. My [WebStorm](https://www.jetbrains.com/webstorm/)'s language service got fed up with that from time to time (_which probably can be attributed to lack of out-of-the-box support for Umi in particular, but nevertheless_). Again, the matter of configuration, but you know — we, spoiled-with-zero-config-tools developers of 2025, totally forgot what it actually means (_along with the dirty words like "Webpack" and such_).

🚫 The linting and formatting capabilities are quite cool in Umi — the default config provides you with a predefined strict and opinionated set of rules which of course can be extended (_or limited_) but which would be a good foundation for any developer team from the get-go. Not to mention the possibility to start your CI/CD pipeline from the very beginning and enhance it further on.

🔞 No [React 19](https://react.dev/blog/2024/12/05/react-19) support (_yet?_) with some expected "blood" in the browser console caused by corresponding deprecations. It's not a big deal, and I can imagine how harsh the potential migration may get, but still. If you're into shiny and new, that's probably not for you. But hey, what are you doing here then, on this chapter?!

💚 You can use Vue instead of React (_via a dedicated [configuration](https://umijs.org/en-US/docs/guides/use-vue)_) even though the app becomes quite a contraption in this case. Vue is quite loved in the oriental web development tradition so it's not a surprise, and I'm really glad that, as opposed to many other metaframeworks, here you can have options, similar to the loved and only [Astro](https://astro.build).

⏳ Not very fast build time, both during development and for production even though it uses the so-called [MFSU](https://umijs.org/en-US/docs/guides/mfsu) (_I assume it's something like **Module Federation Speed Up**_) under the hood. You can [use esbuild](https://umijs.org/en-US/docs/guides/mfsu#two-build-tools) as an alternative to webpack though, or even [engage Mako](https://umijs.org/en-US/docs/api/config#mako) itself (_which I hadn't figured out how to use directly in Umi TBH — though there's a short note on it in the CLI, as you could see above_), so maybe there's space for improvement here. Also using MFSU and its overheads on smaller projects is most probably leveled out by incremental build improvements for larger monorepo projects (which obviously get a lot of enablement via MFSU, as we saw).

🎓 Lack of learning resources around is definitely a problem for Umi. The only comparatively meaningful article about that I found worth attention was [this LogRocket's writeup](https://blog.logrocket.com/rapid-enterprise-class-development-umijs/) from 2020 (_which validates the age of existence of the framework but confirms the limited adoption in the English-speaking world_).

❓ The ideal target market (_or ideal customer profile, as the startup bros say_) for Umi is probably the folks who use tools like Angular or Next.js in production for huge enterprise apps built by huge multi-squad teams. The capabilities of opinionated project control the Umi ecosystem and plugins provide is exciting but probably a bit overwhelming for smaller teams and less demanding projects.

## Conclusions

So this was just an overview (_and a test drive, FWIW!_) of the capabilities of this interesting tool used by lots of Chinese software industry monsters like Alibaba Cloud, Taobao, ByteDance, and many others.

The official UmiJS repository provides [a whole bunch of examples](https://github.com/umijs/umi/tree/master/examples) of using UmiJS with multiple tools and packages (_figured you could actually use it with Vite itself, or [Remix](https://remix.run), for instance_). Check them out and decide for yourself. 

Umi is definitely not a tool for everyone, but it's obviously a labor of love of many talented developers and I was really excited to dig deeper and get my hands dirty with that. Who knows, maybe one day I'll need to cheat on my other favorite tools and come back to this dragon — I'll be ready and glad to proceed tinkering with that. Because as Lao Tzu said,

> A journey of a thousand Li begins with a single step

_The cover photo by [Thao LEE](https://unsplash.com/@h4x0r3) from Unsplash_
