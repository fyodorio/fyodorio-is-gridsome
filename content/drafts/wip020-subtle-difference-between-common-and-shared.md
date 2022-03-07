---
title: Subtle difference between common and shared
date: 2021-09-01
published: false
description:
cover_image:
tags: [webdev, angular, codestyle, architecture]
canonical_url: https://fyodor.io/subtle-difference-between-common-and-shared/
series: false
---

Intro text

https://diffsense.com/diff/common/shared#:~:text=The%20difference%20between%20Common%20and,shared%20by%20more%20than%20one

app
- core // code (services, utilities, guards, interceptors, etc.) needs to be available for entire application (all parts/modules through parent module or by direct access)
- shared // code (assets/styles, components, directives, pipes, models, utilities, services, etc) used by different parts/modules of the application in on-demand basis
- modules // in a folder or just put in the root
  ---- users
  ---- tasks