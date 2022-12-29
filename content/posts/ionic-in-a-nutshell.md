---
title: Ionic in a nutshell
date: 2020-01-11
published: true
description: What is Ionic Framework? Get into cross-platform development with web technologies
cover_image: https://ionicframework.com/img/meta/ionic-framework-og.png
tags: [ionic, angular, react, vue, opinion]
canonical_url: https://fyodor.io/ionic-in-a-nutshell/
series: false
---

[Ionic](https://ionicframework.com) is around for a long time (from 2013), people started to build applications with that long before [React Native](https://facebook.github.io/react-native/) or [Flutter](https://flutter.dev) or [NativeScript](https://www.nativescript.org) were born. But even today, not a lot of web developers know what it is, what it is used for, why it is better or worse than anything, and so on.
I needed to compile an Ionic questionnaire recently for corresponding position candidates at the company I work for and decided to convert it to a blog post with a kind of bird-eye overview of the framework and its tooling ecosystem. So it resulted in this FAQ format, which I hope would be useful to future Ionic engineers.

1. ### What exactly is Ionic?
A framework for building cross-platform applications using web technology (HTML, CSS, JavaScript). It includes a pretty _light-weight_ component library and provides a set of tools (such as routing and navigation, data handling and binding, template population, native API access plugins, auxiliary CLI) and approaches for building rich UI/UX applications.

1. ### What kinds of applications can you build with Ionic?
    * Hybrid mobile applications
    * Web applications, including progressive web applications (PWA)
    * Desktop applications (using Electron)

1. ### Is Ionic a standalone framework, or it *needs* some other frameworks to build applications on top of? What frameworks *can* be used with Ionic?
Ionic framework can be used as a standalone library of web components with vanilla JS applications. At the same time, it has integrations with (support for) all the major UI frameworks (Angular, React, Vue) and can be used with them 

1. ### What possibilities does Ionic CLI give to a developer?
    * Create an application
    * Serve/build an application
    * Configure an application
    * Generate code for different application parts (pages, components, services, and such)

1. ### What is Capacitor? What are alternatives to it, and what are the pros/cons of using one or another?
    * A mobile application development framework optimized for using with Ionic and providing native mobile runtime and API layer for web apps
    * The alternative to Capacitor is the Apache Cordova project
    * Cordova is more mature and has a vast plugin ecosystem, though Capacitor aims to be a more performant, more convenient, and faster option. Capacitor is officially recommended and supported by the Ionic team and is the default option for building Ionic apps with the latest framework versions. Capacitor supports existing Cordova plugins and provides a smooth migration path.

1. ### What is StencilJS, and how is it related to Ionic?
It's the tool that the Ionic team uses to build their web components comprising the Ionic component library

1. ### What are the pros/cons of using Ionic, as compared with other cross-platform solutions (e.g., Flutter, React Native, NativeScript) or native development? 

    PROS
    * Easy to learn and use for web developers
    * Can be used for different platforms: iOS, Android, Windows, Web, Desktop
    * Cross-platform applications can be developed much faster by reusing the same codebase for different platforms
    * Supports all the major frameworks (Angular, React, Vue)
    * Great out-of-the-box library of components and native theming support
    * Open source solution

    CONS
    * Runs on the WebView, so it has corresponding performance caveats, though its comparable with other hybrid mobile development frameworks-competitors
    * Poor choice for graphics-intensive or data-heavy applications
    * Not the best choice for applications with highly customized UI because default components are not customizable enough

1. ### How are Ionic versions different from each other? What were some breaking changes introduced with the 4th version of Ionic?
Previous versions of Ionic were built to be used with (AngularJS and then) Angular framework. Ionic 4 became framework-agnostic by using web components for its library and delegating all the logic and routing to other UI frameworks, or even vanilla-JS solutions and tools. So now, you can use it with React and Vue or import its components to your application as is.

1. ### How to get more information about Ionic?
    * [Official site](https://ionicframework.com)
    * [Community forum](https://forum.ionicframework.com)
    * [Slack channel](http://ionicworldwide.herokuapp.com)
        
*If you have any additional questions about the framework or its tools, feel free to [ask in comments](https://dev.to/fyodorio/ionic-in-a-nutshell-pm8). I'll try to answer them and add the info to the post so it could help potential Ionic developers to get a solid grasp on the technology and move further with the learning process. Also please feel free to correct me if I'd made any mistakes in explanation, or I could formulate it in a better way.*
