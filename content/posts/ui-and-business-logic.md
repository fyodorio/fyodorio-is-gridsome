---
title: UI And Business Logic Or The Chicken And Egg Problem
date: 2020-10-24
published: true
description: Some Pain-Induced Thoughts On The Order Of Creating UI And Business Logic Layers 
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1603352761/chicken-and-egg_pfst5b.jpg
tags: [webdev, teamwork, frontend, software]
canonical_url: https://fyodor.io/ui-and-business-logic/
series: false
---

Recently I'd faced a challenge of wiring up a newly implemented (by another developer) UI layer of a web application to the application itself. The UI solution was very complex with lots of cross-event dependencies, and a fancy labyrinth of nested template references (who knows Angular can definitely relate). The reason why the author hadn't finished up that task himself was obvious: he needed to connect this UI to an already existing feature (out of his pure-UI area of responsibility), and refactor the underlying business logic layer. The situation was complicated by deep use of reactive forms for this feature.

So for some reason the idea of implementing the bare UI solution (HTML+CSS basically, through custom shared UI library) and passing it for further revitalization was considered a good one by our Product Owner. That's how I ended up in front of my IDE in complete frustration.



_Cover photo by [Daniel Tuttle](https://unsplash.com/@danieltuttle) on Unsplash_
