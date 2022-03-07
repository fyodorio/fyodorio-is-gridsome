---
title: Dynamic forms in Angular with FormArray
date: 2020-12-12
published: false
description: Dive into building simple dynamic configurable forms in Angular using built-in tools
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto/v1591322896/IMG_0043_budjqu.jpg
tags: [angular, forms, typescript, webdev]
canonical_url: https://fyodor.io/dynamic-forms-in-angular/
series: [Dynamic Nested Reactive Forms in Angular]
---

> This is the *first* part of the series describing the way [Angular](https://angular.io) deals with dynamic and nested reactive forms 

Someone said that modern web apps are basically just forms and lists. If lists are easy to grasp for any software craftsman, forms can be tough, especially if you work with some web-development framework and its opinionated patterns and tools. 
The topic becomes even more interesting and complicated if talk about dynamic forms, that is:

1. when the form configuration object is passed from outside, and the app builds the UI based on that (using corresponding predefined setup and restrictions), or 
1. when user manages how many form controls the resulting form will have using CRUD controls.

In this post we are going to discuss how Angular approaches this challenge and what dedicated out-of-the-box tools does it provide to a developer.

## Prerequisites

Though I try to explain the topic of dynamic forms here in a simple and concise way, this is a kind of advanced tutorial. I assume that you have at least basic understanding of [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (and [forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) in particular), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [TypeScript](https://www.typescriptlang.org/docs/home) mechanics, and can reason about Angular application development on a level of the [official starter tutorial](https://angular.io/start).

I will not dive into differences between [Template-Driven and Reactive Forms](https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/), [Reactive Forms internals](https://angular.io/guide/reactive-forms), [form validation](https://angular.io/guide/form-validation), [error handling](https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5), [form config type safety](https://medium.com/@tomastrajan/angular-reactive-sub-forms-type-safe-without-duplication-dbd24225e1e8) or [form testing](https://www.telerik.com/blogs/testing-dynamic-forms-in-angular) within the scope of this post as I try to make it short and narrow-focused. So it's also a good idea to have a basic grasp on these topics as a background (or consider digging deeper into the list in future).

Finally, we are going to work within a single component for brevity purposes and to make it more visual. [The next part](https://fyodor.io/nested-form-components-in-angular/) of the series is dedicated to form component decomposition.

## Case Study

We will develop a tiny simple Contact Form app which need to have a set of dynamically added/removed form fields (for phone numbers and email addresses).

![](https://res.cloudinary.com/fyodorio/image/upload/v1593746506/contact-form_hc6wjl.gif)

The initial setup for this app is available at [this blitz](https://stackblitz.com/edit/dynamic-angular-form-part-1-blank?file=src%2Fapp%2Fapp.component.html) so you could play around with the code and try the described concepts yourself.

## Solution

To give life to our simple HTML structure and make UI controls interactive we are going to use `ReactiveFormsModule` and some of its important building blocks: `FormBuilder`, `FormGroup`, `FormArray` and `FormControl`.

`FormBuilder` service allows us to compile a basic form structure inside the app component.

`FormGroup` class provides a skeleton for the form and its counterparts, and delivers this contraption to the UI layer using `FormControl` bindings.

The trickiest part of the UI is dynamic input field (`FormGroup` or `FormControl`) adding and removing for phones and emails. We are going to build this feature using `FormArray` class, which provides a scaffolding for homogenous `FormGroup` combinations. It gives us everything we need to develop CRUD functionality for repetitive form patterns.

The diagram shows the simplified app structure and the role of all these building blocks in it.

...

For demo purposes we use very simple data structure here, but as you might guess, we could easily expand any of its parts, as well as the corresponding form group structure. For instance, we could add some kind of select control for phone number group of phones array (to describe its type, for instance), or add a checkbox control for email form group to make it hidden if we chose to. 


## Summary

The final solution is available at [this blitz](https://stackblitz.com/edit/dynamic-angular-form-part-1-final?file=src%2Fapp%2Fapp.component.html).
