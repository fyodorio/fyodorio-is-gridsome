---
title: Slots vs Props in UI components
date: 2023-01-05
published: true
description: How to decide what you need to choose to (re)use?
cover_image: https://res.cloudinary.com/fyodorio/image/upload/c_fill,g_auto/v1672912407/slots-vs-props_ijm2kv.jpg
tags: [angular, react, vue, webdev, opinion]
canonical_url: https://fyodor.io/slots-vs-props-in-ui-components/
series: false
---

TL;DR it comes up to either the component's purpose is wrapping and styling its internals in reusable way, or providing some kind of specific behaviours inside.

I'm going to explain here in a bit more detail why is it so, without diving too deeply into boring ins and outs, and obvious pros and cons. 

All the front-end web frameworks of our days have both props and slots concepts in their architecture, in one form or another. It's [props](https://reactjs.org/docs/components-and-props.html) and [composition/containment](https://reactjs.org/docs/composition-vs-inheritance.html) in React, [props](https://vuejs.org/guide/components/props.html) and [slots](https://vuejs.org/guide/components/slots.html) in Vue, [inputs](https://angular.io/guide/inputs-outputs) and [content projection](https://angular.io/guide/content-projection) in Angular, and many other analogies around the modern web UI world. But the idea is common: you can either 

* pass some data from a parent component to a child component (in form of primitive values or objects), or
* provide a way to "put" some parts of a parent components inside a single (or multiple, "named") "slot" of child component's template.

```html
<!-- pseudocode -->
<parent-component>
    <!-- props example -->
    <child-component-one [someChildProp]="someValueFromParent" />

    <!-- slots example -->
    <child-component-two>
        <p>{ anotherValueFromParent }</p>
    </child-component-two>
</parent-component>
```

Both ways are mostly interchangeable. And, as usual, when we have two interchangeable (and rather opinionated) ways of doing things in programming, developers come to inevitable [analysis paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis).

IMHO, it's really important to know how these approaches work in your framework of choice. They give flexibility and power of handling the code reusability in a resilient way. But as usual, with great power comes great responsibility, and it means that you need to choose practically what to go with to avoid annoying refactoring chores in the future. In the worst cases some developers may mix the approaches, and it turns into maintenance nightmare for their peers.

After working with different frameworks and problems related to using slots vs props in UI components I had come to a _rule of thumb_ for choosing one approach over another. And here it is:

> **Choose slots APIs** when the component's main responsibility is providing reusable HTML/CSS block(s)/skeleton(s) without necessity to configure internal behaviours. **Choose props APIs** when you need to provide any interactivity inside the component, either you need to tweak its template/styles or not. **Avoid mixing** the two approaches and prefer decomposing the component to several subcomponents with separate responsibilities.

That's it. I intentionally try to avoid detailed examples here as they're too specific to the technology of choice. But if you have come to this writeup you probably know what I'm talking about, or you can click on the framework-specific links above to expand your knowledge.

Choose wisely, safe your intellectual power for business logic problems, and take care. 