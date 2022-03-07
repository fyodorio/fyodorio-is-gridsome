---
title: Nested form components in Angular with ControlValueAccessor
date: 2020-12-12
published: false
description: Implement simple scalable dynamic nested reactive form solution without 3rd-party libraries
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1593323829/john-marvin-de-jose-vvPCT8Ghai0-unsplash_dcegjm.jpg
tags: [angular, forms, typescript, webdev]
canonical_url: https://fyodor.io/nested-form-components-in-angular/
series: [Dynamic Nested Reactive Forms in Angular]
---

> This is the *second* part of the series describing the way [Angular](https://angular.io) deals with dynamic and nested reactive forms 

Angular, as a component-based frameworks, embraces maximum component decomposition. Form components are no exception. As a form-containing component grows bigger, the necessity to decompose it to a set of (potentially reusable) child components emerges. 

Creating a child component and [passing a form control to it](https://blog.grossman.io/real-world-angular-reactive-forms/) as an input looks as an answer at first sight. However, we'll se that Angular provides a more convenient, efficient and scalable one. We'll have a glance at ready-made go-to solutions and implement a custom one to get understanding of how Angular's Reactive Forms work in this regard.

## Prerequisites

Though I try to explain the topic of nested form components here in a simple and concise way, this is a kind of advanced tutorial. I highly recommend the prerequisites from [the first part](https://fyodor.io/dynamic-forms-in-angular/) of this series here, as well as having the first part read prior to this one to get more context on the case study and dynamic forms approach in general.

## Case Study

We will [proceed](https://fyodor.io/dynamic-forms-in-angular/) working with the tiny simple Contact Form app which has a set of dynamically added/removed form fields (for phone numbers and email addresses). 

![](https://res.cloudinary.com/fyodorio/image/upload/v1593746506/contact-form_hc6wjl.gif)

Our goal here is to **make this solution scalable by decomposing the form component into a set of smaller presentational subcomponents**. This way we will be able to isolate the concerns and make adding new features for the application easier, handier and less error-prone.

The initial single-component setup is available at [this blitz](https://stackblitz.com/edit/dynamic-angular-form-part-1-final?file=src%2Fapp%2Fapp.component.html) so you could play around with the code and try the suggested refactorings yourself.

## Options

There are several well-tested solutions providing out-of-the-box functionality for creating dynamically-configured nested forms, like
 [formly](https://formly.dev/), or [ngx-sub-forms](https://dev.to/maxime1992/building-scalable-robust-and-type-safe-forms-with-angular-3nf9), or [ng-dynamic-forms](https://github.com/udos86/ng-dynamic-forms). Though if you need some simple "native" dependency-free way of creating dynamic forms, you can go with Angular's internal tools like [`ReactiveFormsModule`](https://angular.io/api/forms/ReactiveFormsModule) and [`ControlValueAccessor`](https://angular.io/api/forms/ControlValueAccessor) structure which acts as a bridge between the Angular forms API and a native element in the DOM.
 
 As I mentioned at the beginning, we could another route implementing the same feature. We could pass separate form controls to child components via `@Input()` binding, or, for instance, use `@ViewChild()` to access child form components from a parent without inputs. Though the suggested way of implementing the Angular's `ControlValueAccessor` class (unfortunately being more verbose) provides:
 
 * Perfect usability and reusability of similar chunks of code 
 * Good encapsulation, granularity and separation of concerns
 * Way of handling a form subcomponent as we handle simple native form controls (with all the corresponding API) 
 
 So here we are going to take a look at a simple (though scalable) solution that can be used as a good start for implementing dynamic nested forms in the Angular application without any 3rd-party libraries. 

## Solution

## Summary  

The final solution is available at [this blitz](https://stackblitz.com/edit/dynamic-angular-form-part-2-final?file=src/app/app.component.html).

_Cover photo by [John Marvin De Jose](https://unsplash.com/@johnmarvindj) on Unsplash_
