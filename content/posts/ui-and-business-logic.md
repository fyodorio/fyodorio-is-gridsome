---
title: UI and business logic or the chicken and egg problem
date: 2020-12-01
published: true
description: Some pain-induced thoughts on the order of creating UI and business logic layers 
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1603352761/chicken-and-egg_pfst5b.jpg
tags: [webdev, teamwork, philosophy, software, essay]
canonical_url: https://fyodor.io/ui-and-business-logic/
series: false
---

Recently I'd faced the challenge of wiring up a newly implemented (by another developer) UI layer of a web application to the application itself. The UI solution was very complex with lots of cross-event dependencies and a fancy labyrinth of nested template references (who knows Angular can definitely relate). The reason why the author hadn't finished up that task himself was apparent: they needed to connect this UI to an already existing feature (out of his pure-UI area of responsibility) and refactor the underlying business logic layer without any domain awareness. The situation was complicated by using [dynamic reactive forms](https://angular.io/guide/dynamic-form) for this feature.

So for some reason, the idea of implementing the bare UI solution (HTML+CSS basically, through custom shared UI library) and passing it for further revitalization was considered a good one by our Product Owner. That's how I ended up in front of my IDE in complete frustration.

![I ended up in front of my IDE in complete frustration](https://res.cloudinary.com/fyodorio/image/upload/v1606538157/gifs/frustration_tvvhpl.gif)

Long story short, I had finished this tedious mind-blowing chunk of work, and it started to look and function as intended again, but with a new shiny layout and styles.

The predictable aftermaths were:
* extra time spent by the first developer to mock functionality for the newly implemented UI layer
* additional time spent by the second developer (me) to wrap his head around the new contraptions, and their mock data flow
* complication of business logic to adjust it to UI scaffolding

Needless to say, I was angry with all these consequences. This case made me think a lot about the correct and appropriate flow of developing application features, both in general and with Angular in particular.

In my humble opinion, the following summary should be added as a de-facto standard for software development processes. Probably even written down in the corresponding guidelines (documentation) of each specific project.

![Reaction to pretentious act](https://res.cloudinary.com/fyodorio/image/upload/v1606918219/gifs/pathetic_eyg13j.webp)

Okay, to not be like this, let me just suggest it as a good practice for working on existing front-end applications (i.e., refactoring).

**So here they are, three simple yet powerful rules of approaching a feature refactoring:**

1. Always compile detailed business requirements ahead of development to avoid deep rework
1. Don't separate work on interconnected layers of a single feature between different developers (unless it's pair programming)
1. Start from mechanics, finish with UI, not vice versa

![As simple as that](https://res.cloudinary.com/fyodorio/image/upload/v1606921295/gifs/swanson_aka9yg.gif)

These three rules will allow a project manager (or a team lead, a product owner, or whoever it might be) to shine and their team to be productive, efficient, and fast. Moreover, they prevent burnout and lower blood pressure, it's verified.

Software development should be a mindful process not only as a whole but also in its parts. That's how we put all these separated concerns together.

![Mic drop](https://res.cloudinary.com/fyodorio/image/upload/v1606922000/gifs/mic-drop_azlax2.gif)

_Cover photo by [Daniel Tuttle](https://unsplash.com/@danieltuttle) on Unsplash_
