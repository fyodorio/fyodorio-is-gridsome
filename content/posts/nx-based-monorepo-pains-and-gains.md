---
title: Nx-based monorepo — pains and gains
date: 2020-03-02
published: true
description: Each useful tool has its flaws that one needs to know about when starting to use it
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1582693872/sucrebrut-xpeyC6vdDdc-unsplash_kyfvih.jpg
tags: [nx, angular, react, monorepo, opinion]
canonical_url: https://fyodor.io/nx-based-monorepo-pains-and-gains/
series: false
---

## Overview

[Nx toolset](https://github.com/nrwl/nx) is a well-known beast, especially in [Angular](https://angular.io) world. It helps developers work in teams efficiently and share reusable code (data models, business-logic services, utilities, presentational components, and whatnot) between several applications (both back-end and front-end). It enforces best practices, code documentation, and separation of concerns approaches (at least) and suggests robust, trusted tooling as an opinionated way to solve software development problems.

> Nx is a set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft.
>
> <div style="text-align: right"><i>Source: <a href="https://nx.dev">nx.dev</a></i></div>
>
<p></p>

So Nx is a go-to solution if you have a big to giant size application that also needs to share code among its parts. You can scaffold the monorepo architecture in just a couple of commands, or migrate your existing application to Nx architecture [using the corresponding schematics](https://nx.dev/angular/guides/transition-to-nx) without any significant efforts (at least at first sight).

But, as you might guess, there are some underwater rocks that one should take into account when switching to this approach or starting to build a new application with it. 

This post is somewhat opinionated, but it's based on real-life experiences of working with Nx, both for brown-field and for green-field projects.

## Case study

It's always easier to describe something on a particular example. So let's assume that we have a large enterprise project that consists of two applications:

* Web application for a manager dashboard (Angular)
* Mobile application for employee access and in-field updates (Ionic + Angular)

An engineer takes these two applications and combines them into a monorepo. He successfully runs transition scripts, and the last step he needs to make is to extract reusable parts of both applications and arrange the code into a maintainable system. This way, his team gets all the perks of the monorepo approach and a starting point for further development and maintenance processes.

In short, his monorepo is a workspace consisting of projects having a blueprint configuration. Projects can be applications (top-level scaffolding code for a distinct piece of work) and libraries (application-specific or shared chunks of functionality).  

```
my-awesome-nx-monorepo/
├── apps/
│   ├── manager-app/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── assets/
│   │   │   ├── environments/
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── polyfills.ts
│   │   │   └── styles.css
│   │   ├── browserslist
│   │   ├── jest.config.js
│   │   ├── README.md
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
│   │   └── tslint.json
│   ├── manager-app-e2e/
│   └── employee-app/
│   └── employee-app-e2e/
├── libs/
│   └── manager-app/
│   │   ├── feature-dashboard/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   └── dashboard.ts
│   │   │   │   └── index.ts
│   │   │   ├── jest.config.js
│   │   │   ├── README.md
│   │   │   ├── tsconfig.lib.json
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.spec.json
│   │   │   └── tslint.json
│   │   └── util-time-tracking/
│   └── employee-app/
│   │   ├── feature-dashboard/
│   │   └── util-geolocation/
├── tools/
├── .editorconfig
├── .gitignore
├── .prettierignore
├── .prettierrc
├── angular.json
├── capacitor.config.json
├── ionic.config.json
├── jest.config.js
├── nx.json
├── package.json
├── README.md
└── tsconfig.json
```

He would have a smaller checklist if he'd start a project from scratch, but with this scenario, we can take a look at a broader range of challenges one can have starting to work with Nx. So let's dive straight into details.

## Gains

So the main PROs of switching to Nx are rather obvious and are common for many use cases. Any project would undeniably benefit from Nx transition because it provides:

* A solid architectural approach [implementation](https://github.com/nrwl/nx-examples) (enforcing clear separation of concerns between all application parts) and tools for maintaining it, pre-defined code organization and naming conventions
* Possibility to build a full-stack codebase in a single repository (web front end, Node.js back end, hybrid mobile apps, Electron desktop apps)
* A set of modern auxiliary web development tools, like [Jest](https://jestjs.io), [Cypress](https://www.cypress.io), [Prettier](https://prettier.io), [Storybook](https://storybook.js.org)
* Several configurable workspace commands ([Nx CLI](https://nx.dev/web/guides/cli)) and a GUI tool ([Nx Console](https://nx.dev/nx-console)) for working with monorepo code in a fast and convenient way 
* An automation pipeline helping to work faster on tedious tasks, visualize and analyze changes in a more thorough way (including dependency graphs and selective command running, catching more bugs at build time using additional linter restrictions
* CI/CD integration providing [faster ways](https://blog.nrwl.io/blazing-fast-distributed-ci-with-nx-a1f5974f7393?gi=fecb2a5313b3) to build production-ready applications
* A set of [best practices](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book) to enforce in a development team and a great living documentation resources ([official site](https://nx.dev) and [Nrwl Connect](http://connect.nrwl.io)) 

So the more populous the team, the more rate of time investment return we get from transitioning to Nx architecture and combining our application into a single monolith with clear paths of internal workspace communication. 

## Pains

At first sight there are hardly any CONs of using Nx and one could dive into it with open arms. But after some time from migration start, one can face (and should prepare to) a noticeable row of issues.

* Nx introduces an additional set of rather strict opinions over already extensive Angular's one. The mental burden can be quite heavy, though bearable if you have a decent project documentation
* Your projects would need to have a decent documentation or things can get out of control very fast. Code review processes should be well-established and as detailed as possible
* Even though there are regulating guidelines and conventions, some details depend on the project and team specifics. You need to spend time within your team to agree on naming and pipelines for working with the codebase. And a separate box of time to get used to the agreed approaches
* Ridiculously deep nesting can get a developer confused and angry quite often. As each application and library has extensive configuration and a separate place for everything your code traveling distance in an IDE or editor rises significantly
* A vast number of project files overload a developer machine. IDE indexing can get quite slow, as well as code analysis and all the similar processes. If you'll need to make a global refactoring, get some popcorn prepared
* One needs to keep in mind several types of configuration files 
    * Project (application or library) refactoring (even simple rename) can be tricky and causes manual updating of the whole bunch of dependant files and configs
    * A multiple points of updates make git conflicts a daily routine
* Nrwl provides Nx Console (greatly simplifying getting familiarity with Nx) [only as a VS Code plugin](https://blog.nrwl.io/brand-new-ui-custom-vscode-task-support-more-in-angular-console-9-0-5e4d3a109fb9) which is not very fun if you used to work with other IDEs or editors
* There are some issues with updating Nx dependencies (there's a bunch of them as you might guess) so if you prefer tighter update cycles, you need to be aware of some possible delays
* Switching to alternative tooling inside Nx architecture can be a decent [PITA](https://www.urbandictionary.com/define.php?term=pita)
* Work with hybrid mobile development requires an additional setup or engaging additional tools, like [xplat](https://nstudio.io/xplat)

The list is not complete, but these are the main issues you could face in the mentioned scenario. 

It all looks quite scary, though, in practice, time pays efforts off by streamlining the development routine. Nevertheless, it all depends on team size, project size, and also on the skill and motivation level of a particular developer. 

## Conclusions

There's a bunch of advanced web development and teamwork tools that make our life more comfortable and help to collaborate on code efficient and time-saving ways. Nx is one of them, and it proved to be a reliable solution for big Angular monorepos and gains momentum in the React ecosystem. Though as with many things in this cruel world, there are always some caveats one should consider before getting his hands dirty and engaging a whole team in a complex heavy solution. You would definitely like Nx's power, but I recommend to think twice before using it in your projects without any specific need, and probably consider building thorough team coding best practices, collaboration, and documentation traditions instead.

_Cover photo by [Sucrebrut](https://unsplash.com/@sucrebrut) on Unsplash_
