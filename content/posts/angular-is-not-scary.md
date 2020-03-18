---
title: Angular is not scary
date: 2020-03-16
published: true
description: 
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1584173614/deleece-cook-Sbzdce7DucU-unsplash_cnwvyl.jpg
tags: [angular, frameworks, webdev, learning]
canonical_url: https://fyodor.io/angular-is-not-scary/
series: false
---

I would like to dispel a myth prevailing among web developers, especially the younger ones (I already see people shouting "OK boomer!" at me), and those who didn't work with the hero of occasion to be familiar enough with it. The myth about monstrosity of the [Angular](https://angular.io) framework.

I want to indicate from the very beginning that I'm neither an interested party here nor an opinionated Angular fan. It's not my favourite web or [front-end framework](https://fyodor.io/marvelous-frameworks/) (confession: I'm in love with [Vue.js](https://vuejs.org)). Moreover, I'm a big fan of [frameworkless movement](http://frameworklessmovement.org). But as soon as many of us (including myself) work in teams and need to use common toolsets, a framework is usually a part of our workday. 

A lot of Angular fears come from unawareness and surfaced biases, so I'm aiming to fix that with this post, at least partially.

The fear of Angular starts with confusion about its versions: Google made a bunch of [strange decisions](http://blog.angularjs.org/2016/09/angular2-final.html) when they were releasing Angular v.2 and leaving Angular(JS) 1.x live its own life. We can just cope with it. Nevertheless, today [the Angular](https://en.wikipedia.org/wiki/Angular_(web_framework) is just Angular and we're gonna talk here only about Angular 2+ version family.

So let's jump straight to the specific components of the Angular monstrosity myth and smash them to smithereens.

#### Dullness 
Angular is not a buzzwordy framework, it just works. And by the way, it works basically with any buzzword around there, but usually it doesn't need any unicorns to drive it forward. "Elm/ReasonML/Elixir/[Insert-Your-Option-Tech] is cool, Angular is not." Well, probably. But even though Elm is really cool, it's hardly a comparable pair of technologies these days, at least in terms of adoption in modern web application development.
    
#### Hugeness
Angular is a batteries-included framework. Its approach to front-end web development is providing all the tools needed to create a full-fledged web application UI/UX. That's why some people think that it's huge, in comparison with UI libraries like React or Vue. 

But essentially you can use only the stuff you need currently and you'll get a compact convenient scaffolding around your view components, just as with pure React and Vue usage examples. In another case, you can get very solid construction out of Angular's implementations of router, forms, animations, and whatnot. Moreover, you'll have a tree-shakeable solution with lazy-loadable routes, modules or even components, so you can totally go a minimalist way. Additionally, each new Angular version makes the framework and applications built with it [smaller and faster](https://medium.com/abc-software-development/angular-9-faster-and-smaller-64fc21eaf760). 

It is not Angular that makes applications monolithic and huge. It's always a developer's responsibility what he'll get from the stuff he codes.
    
#### Complexity
* Learning curve
    * easier to switch from Angular to React and Vue than vice versa
* TypeScript
    * No specific syntax like JSX ofr TSX
    * Type safety even in templates (>9)
* RxJS
* Separation of concerns 
    * Templates, stylesheets and business logic are in different files in most cases
    * Clear separation of components, template directive, services and utilities by purposes
* Angular CLI and schematics
    * Help a lot in making things right
* Good architectural patterns
* Best security approaches
* Great implementation of dynamic forms
* Great animations abstraction
* Coding best practices

#### Lack Of Demand
* Angular application development market is great for passionate problem solvers
* Lots of high-paid jobs and gigs out there (though some of them claim for high developer seniority level)
* Great for team work
    * Happy families are all alike; every unhappy family is unhappy in its own way. (Leo Tolstoy)
    * Angular developers are all alike; every React/Vue developer is a developer in its own way.
    
#### Lack of support
* Documentation is not the strongest part of it but it's getting better
* Great helpful community
    * Popular community movements play a bad role in Angular adoption, like the instance with State of JS survey
    
### Final Thoughts 
As [Rebecca West](https://en.wikipedia.org/wiki/Rebecca_West) phrased it years ago, "The trouble about man is twofold. He cannot learn truths which are too complicated; he forgets truths which are too simple.”

No framework or technology will satisfy all the different developers on that planet, be it a relatively easy-to-learn Vue, or a die-hard Angular, or whatever shiny new thing you can meet tomorrow. 

Software development is not easy actually, but Angular covers it all and helps a developer to make right decisions in hard-to-crack situations. Learn it and you're dangerous enough already to go into this cruel world and make it a little better place to consume web applications.

And in any case, pick the technology that makes you happy, and give yourself an opportunity to find it by refusing to being biased.
    
_Cover photo by [Deleece Cook](https://unsplash.com/@deleece) on Unsplash_
