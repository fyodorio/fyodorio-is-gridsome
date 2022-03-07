---
title: Angular is not scary
date: 2020-03-18
published: true
description: There are many scary things in the world today. Angular framework is not one of them, and here is why.
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1584173614/deleece-cook-Sbzdce7DucU-unsplash_cnwvyl.jpg
tags: [angular, frameworks, webdev, learning, essay]
canonical_url: https://fyodor.io/angular-is-not-scary/
series: false
---

I want to dispel a myth prevailing among web developers, especially the younger ones (I already see people shouting "OK boomer" at me), and those who didn't work with the hero of occasion to be familiar enough with it — the myth about the monstrosity of the [Angular](https://angular.io) framework.

I want to indicate from the very beginning that I'm neither an interested party here nor an opinionated Angular fan. It's not my favourite web or [front-end framework](https://fyodor.io/marvelous-frameworks/) (confession: I'm in love with [Vue.js](https://vuejs.org)). Moreover, I'm a big fan of [frameworkless movement](http://frameworklessmovement.org). But many of us (including myself) work in teams and need to use common toolsets, and a framework is usually a significant part of our workday. 

A lot of Angular fears come from unawareness and surfaced biases, so I'm aiming to fix that with this post, at least partially.

The fear of Angular starts with confusion about its versions: Google made a bunch of [strange decisions](http://blog.angularjs.org/2016/09/angular2-final.html) when they were releasing Angular v.2 and leaving Angular(JS) 1.x live [its own life](https://angularjs.org). We can just cope with it. Nevertheless, today [the Angular](https://en.wikipedia.org/wiki/Angular_(web_framework)) is just Angular, and we're going to talk here only about Angular 2+ version family.

So let's jump straight to the specific components of the Angular monstrosity myth and smash them to smithereens.

#### Dullness 

Angular is not a buzzwordy framework; it just works. And by the way, it works basically with any buzzword around there, but usually, it doesn't need any unicorns to drive it forward. "Elm/ReasonML/Elixir/[Insert-Your-Option-Tech] is cool, Angular is not." Well, probably. But even though Elm is definitely cool, it's hardly a comparable pair of technologies these days, at least in terms of adoption in modern web application development.
 
#### Hugeness

Angular is a batteries-included framework. Its approach to front-end web development is providing all the tools needed to create a full-fledged web application UI/UX. That's why some people think that it's huge, in comparison with UI libraries like [React](https://reactjs.org) or Vue. 

But essentially you can use only the stuff you need currently, and you'll get a convenient compact scaffolding around your view components, just as with pure React and Vue usage examples. In another case, you can get substantial construction out of Angular's implementations of a router, forms (excellent dynamic and declarative approach), animations (comprehensive abstractions and tools), and whatnot. Moreover, you'll have a tree-shakeable solution with lazy-loadable routes, modules, or even components, so you can go a minimalist way. Additionally, each new Angular version makes the framework and applications built with it [smaller and faster](https://medium.com/abc-software-development/angular-9-faster-and-smaller-64fc21eaf760). 

Another significant benefit of such a full-scale solution is security best practices integrated deeply into Angular parts. [Some experts](https://twitter.com/PhilippeDeRyck) call Angular the best framework in terms of out-of-the-box front-end vulnerabilities coverage.

So apparently it is not Angular that makes applications monolithic and massive. It's always a developer's responsibility what he'll get from the stuff he codes.
 
#### Complexity

I would lie if I said that Angular is easy to learn. It probably has the steepest learning curve, among other front-end web frameworks. But there are some points that flatten this curve and make Angular a competitive option for a first framework to learn.

[Angular CLI](https://cli.angular.io) helps developers to avoid shooting in their legs and start with legit default decisions on compiling application UI components and business logic. The boilerplate it generates and [documentation](https://angular.io/docs) examples are great resources to learn many important web development concepts. For instance, separation of concerns, event handling, unit testing, not mentioning a bunch of trusted architectural patterns laying on the background of Angular counterparts.

You'll need to learn all of that having chosen React or Vue paths, in any case, and Angular gives it a deeper context and an aproachable ecosystem. So in many cases switching to React or Vue development from Angular is much easier than vice versa.

Another challenge developers seen in Angular up until recent times is [TypeScript](https://www.typescriptlang.org), which is a mandatory tool here. But today, more and more applications embrace TypeScript power, and many React and Vue applications use it and happy with possibilities strict typing (and additional language tools) provides. Angular's plus is that it doesn't use any fancy syntax (like `jsx`), which is a decent torture for some developers. At the same time Angular provides clear separation of components, template directives, services and utilities by purposes. Both approaches are different sides of the front-end development coin, and it's a matter of developer preferences.

Probably the most significant pain for Angular newcomers is [RxJS](https://rxjs.dev). It is used by default and really can be a show stopper. However, this way of working with asynchronous data (and events, and forms, and whatever else) using a [pub-sub pattern](https://en.wikipedia.org/wiki/Publish–subscribe_pattern) proved to be very handy, especially when you dive deeper. And other frameworks [recognize that](https://www.youtube.com/watch?v=rr4z4e83-Og) as well these days.

People call Angular opinionated. But the opinions Angular promotes provide teams of developers with a consistent approach to coding best practices, which are proven by years of large scale application development. So this is not a part that considered a con these days, rather a great helper.

#### Lack of demand

Some people say that React developers are in demand on the job market worldwide. But the truth is that JavaScript/TypeScript developers, in general, are actually in demand, and managers start to understand that the real value is not in particular framework experience but skills of web development problem-solving.

The Angular application development market is great for passionate problem solvers, for getting a really valuable experience. In most cases, Angular applications are large and challenging. They engage different computer science areas, like working with big data and data visualization, complex dynamic forms and tricky animations, intricate state management, and many other stuff. So having such experience under the belt, you'll never be lost in unemployment. As for salaries, it greatly depends on the country, but in general, compensation is comparable for different specializations, so you are not going to lose in this money game.

On top of that, Angular is great for teamwork. [Leo Tolstoy](https://en.wikipedia.org/wiki/Leo_Tolstoy) once said, _"Happy families are all alike; every unhappy family is unhappy in its own way."_ I would rephrase that to _"Angular developers are all alike; every React/Vue developer is a developer in its own way."_ So if you are working with Angular, you find a common ground easier with your peers than in case of any other framework. I've already mentioned this opinionated best practices approach, and it shows off very well, especially the larger the team is.
 
#### Lack of support

Documentation is (arguably) not the strongest part of Angular. It's complicated, in many cases, going deeper away from the basic tutorial, especially for beginners. But it's getting better, new chapters and walkthroughs are added each year, and [SO](https://stackoverflow.com/questions/tagged/angular) and [Angular-In-Depth](https://indepth.dev) are helpful in understanding it more when you're stuck. 

Talking about help from peer developers, you cannot ignore the great vibrant [Angular community](https://dev.to/angular). Its members are really open for help, conferences and courses bring high value. It's a big friendly family, and it's a big thing that stops me personally from entirely switching to other frameworks and technologies.
 
### Final thoughts 
As [Rebecca West](https://en.wikipedia.org/wiki/Rebecca_West) phrased it years ago, _"The trouble about man is twofold. He cannot learn truths which are too complicated; he forgets truths which are too simple."_

No framework or technology is going to satisfy all the different developers on that planet, be it a relatively easy-to-learn Vue, or a die-hard Angular, or whatever shiny new thing you can meet tomorrow. 

Software development is not an effortless venture actually, but Angular covers it all and helps a developer to make the right decisions in hard-to-crack situations. Learn it, and you're dangerous enough already to go into this cruel world and make it a little better place to consume web applications.

I hadn't described all the features and possibilities you get with Angular, only shown why it's not this hard to learn and use it today, as well as any other web development tool.

In any case, pick the technology that makes you happy and allow yourself to find it by refusing to be biased.
 
_Cover photo by [Deleece Cook](https://unsplash.com/@deleece) on Unsplash_

