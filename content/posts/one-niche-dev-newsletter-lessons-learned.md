---
title: "One niche dev newsletter: lessons learned"
date: 2025-09-01
published: true
description: I already wrote about how it started. Now it's time for how it's going.
cover_image: https://res.cloudinary.com/fyodorio/image/upload/w_1000,h_420,c_fill,g_auto,q_auto,f_auto/v1735586201/newspaper-H1flXzFuXgo_yvqsmr.jpg
tags: [meta, craftsmanship, software, philosophy, experience]
canonical_url: https://fyodor.io/one-niche-dev-newsletter-lessons-learned/
series: false
---

About seven months ago I had published [the first issue](https://metaframe.works/archive/0/) of my first newsletter — Metaframeworks Weekly, dedicated to JavaScript-based tools like [Next.js](https://metaframe.works/tags/nextjs/), [Nuxt](https://metaframe.works/tags/nuxt/), [SvelteKit](https://metaframe.works/tags/sveltekit/), and [Astro](https://metaframe.works/tags/astro/) and their place in the modern web development. Today I'm renaming it to [Metaframeworks Records](https://metaframe.works) and sharing some why's, pains, and gains here, following up [the initial post](https://fyodor.io/let-s-talk-metaframeworks/) from the last days of the last year. I'm not going to teach anyone with this lessons format, not at all (_would be boring, and I'm not that old_) — it's rather the list of things one can learn even during such a short amount of grind time over something new that needs to be repeated regularly. Sounds obscure, I know, so let's dive deeper. 

## Lesson 1: Roll up your sleeves

I love reading newsletters. Well, some of them. Most of the stuff on the Internet, including the niche dev projects, are pretty basic and represent some sort of list of resources with basic meta derived from... well, the resource meta. There are some examples I really like though, like [Bytes](https://bytes.dev), where the author adds some [in]sane humour and pop-culture references to that, with some short essays on the most interesting stuff. But most of that is pretty generic anyway. What I always wanted is some deeper chronicles of the industry I'm into without unnecessary noise at the same time. So, [as I mentioned](https://fyodor.io/let-s-talk-metaframeworks/), something like that pushed me to creating my regular list of interesting resources dedicated to metaframeworks topics specifically. And I thought some details for each of the findings in the list would make it more alive.

Long story short, making something alive is [un]surprisingly difficult. That is something I'm still trying to figure out the mechanics of, but one obvious thing is it's hard, and it requires time, especially if you do it manually. I have some tricks in my pockets already, but in essence it's still a lot of reading things, and trying things, and writing about things.

I honestly underestimated the amount of effort and am now trying to adjust to proper operation mode instead, taking into account my day job in a "fast-pace startup environment", and my family life, and my migraines, and learning Rust (_which can be a sort of migraine of its own at times_). What is true is that you need to re-visit and re-assess your attitude and cut yourself some slack if you plan to save your mental health not to go mental. Which leads to... 

## Lesson 2: Form the shape as you go

During these months of working on the newsletter I tried different tools and approaches to everything, starting from information gathering, through [website source code](https://github.com/fyodorio/metaframeworks-newsletter-website) changes, and finishing with the resulting text format. I found that at least in the early stages you need to change a lot and cut away stuff that doesn't look good, and emphasize things that work best and bring personality to the project. 

The newsletter had started as _**Metaframeworks Weekly**_, and because of _the Lesson 1_ above I quickly realized that the cadence is probably not something that should be set in stone this harsh way. At the same time, from the very beginning, the content was tightly tied to music, which is a big part of my audiophile life: each issue is called after a song with a tagline from it as an epigraph, relevant to the key topic of the week. So that was the reason I eventually decided to rename the project to _**Metaframeworks Records**_, which sounds much better to me because:

* It eliminates the pressure of weekly updates — now I can publish bi-weekly, or twice a week, or even go to a vacation sometimes.
* It's much more relevant to music, which is so cool (_especially as all these records provide a lot of releases in the end_).
* It's relevant to records as notes on something (_which is closer to my heart than "issues" as the latter is still associated with bugs for me_).
* It's more relevant to news I write about being some sort of [records](https://www.guinnessworldrecords.com) in its area — some outstanding, or the most awful, or unexpected things peer developers praise or shame out loud.
* It's even much more relevant [to Computer Science](https://en.wikipedia.org/wiki/Record_(computer_science)), especially if you consider the fact I started my newsletter with [the Issue #0](https://metaframe.works/archive/0/), as them records ~~classically~~ sometimes do.

All in all, it's a good example of shaping something as you go, when you realize that, even with some unhabitual changes, the results may get more straightforward, relevant and even... simple? 

## Lesson 3: Simplicity is great until it's not

The initial idea of mine was to make the project itself (_the code base_) as simple as possible and (_even though it started as an [Astro](https://astro.build)-based project_) come to some framework-less solution and avoid vendor lock-ins of any kind. But eventually I realized a good tool goes a long way, and with some of them it turned out into a real attachment:

* I still use Astro, and it helps me a lot to quickly iterate on new ideas and features without clunky contraptions of self-made analogues for well-thought features the guys deliver.
* I use [Buttondown](https://buttondown.com) for the actual newsletter services (_and I'm ashamed to confess I hadn't even went out of the boundaries of the free tier yet_), I can compare it with other solutions which I used professionally, and it's much simpler than competitors (_literally one line of HTML code_), while allowing me to avoid the pains of maintaining my own mailing solution.
* I use [Bluesky](https://bsky.app) for communication around the newsletter (_not a lot of though, wouldn't call it marketing or something_) and for following [the real-time news](https://bsky.app/profile/did:plc:7vyxybjsqatduo4xbldbf2cu/feed/aaan4pa65r5ke) from the metaframework world, and I need to accept this project is very close to something one would call an ideal social media for humans.

Probably without all that I'd feel myself more accomplished, but I also would suffer a lot more too. With one caveat related to being slightly opinionated and selective about some technologies, but you know what?

## Lesson 4: Opinions are inevitable, and that's OK

Again, while I still try to be the most unbiased person as I write about the technology news of my niche of choice, I can not avoid some judgements from time to time, not to say about having some of already mentioned favorites. However, I was told once, and I pretty much agree with the saying, that without opinions you lose personality. I'm still sure there's no black and white in our technical world, there is no absolute, and I try to float at a sane distance from love or hate for this or that technology. But being a curator of the metaframeworks-related newsletter already makes me an opinionated person by default. That's why I have a "The Bad" block in each of my records, where I inevitably find something bad about metaframeworks and related technologies each week. And this block is a part of something important too, specifically...

## Lesson 5: Patterns are extremely useful

Each newsletter issue consists of three blocks as a rule: _the Good_, _the Bad_, and _the Noteworthy_. You quickly get an idea of what that's about, and it becomes a habitual and anticipated structure. Besides, it makes it easier to prepare each record for _me_, and makes cross-record connections possible (_and quite interesting_). There are lots of other patterns in this project too, starting from the Astro's [content collections](https://docs.astro.build/en/guides/content-collections/) (_powering not only issues and tags but also stuff like the items on [the Metaframeworks Comparison](https://metaframe.works/comparison/) page, or [FAQ pairs](https://metaframe.works/faq/)_), the song title and tagline as "my thing", posts on Bluesky, and more. As we developers know, patterns are powerful tools to simplify maintenance, and it's a shame not to use them. Like many other things too, for instance... 

## Lesson 6: AI is extremely overrated

AI and LLMs are parts of our lives now. It would be dumb to dump them these days, but... As Rich Harris had [said](https://bsky.app/profile/rich-harris.dev/post/3lxi76nyra22o) recently, "I keep giving LLMs a chance to impress me, whenever I encounter a boring task that they should be good at, and they keep shitting the bed". That's spot on. I experiment with code assistants (_and online webapp builders like Bolt and Lovable_) a lot, as they mostly generate code for web projects in metaframeworks wrappings by default. But as many of us know from the professional experience, the last 10% remaining from the initial (_often AI-generated_) implementation of a project take 90% of the time, or even more, and sometimes dealing with the AI output, or collaborating with AI over these 10% is a real torture, as even on simple tasks the code assistants fail spectacularly (_and too stupidly_) too often. And even for simple stuff LLMs are born to be perfect at (_like text proofreading_) they need thorough supervision (_even more than myself, being a non-native speaker, so we fight a lot and I often prefer my clumsy draft versions_). But they're not the only burning problem of our industry, as...

## Lesson 7: Security is important, from back to front

I am genuinely intimidated by how often you face new and new security threats and issues with the technology like metaframeworks and tools around that. You can check [the "security" tag](https://metaframe.works/tags/security/), I'm not kidding: that's a whole new specialization for some bounty hunters these days. The problems the metaframeworks industry raises are quite unique very often, considering their hybrid approach to building full-stack web applications. So it's hard to overestimate how important it is to keep your finger on the pulse of what's happening in the industry in this regard and how different tooling vendors try to prevent adversaries from messing with _your_ code. We, developers, too often neglect that, but there's some hope that metaframeworks can actually (_and surprisingly_) be an answer to this problem too. But that's a long journey and...   

## Lesson 8: It only starts here

I like _**Metaframeworks Records**_ — that's my labour of love. I write a lot, I learn a lot, and I explore how much I still need to learn about the technology and the ways to make it work in a better way for us. I have a lot of ideas to make it easier for myself and other interested developers, and to subside further beneath the tip of the iceberg we have discovered during these several month, like:

* [The metaframeworks encyclopedia](https://github.com/fyodorio/awesome-metaframeworks),
* [The metaframeworks comparison](https://metaframe.works/comparison/) (_which I plan to turn into an interactive quiz!_),
* [The dedicated Bluesky feed](https://bsky.app/profile/did:plc:7vyxybjsqatduo4xbldbf2cu/feed/aaan4pa65r5ke),

and a lot more (_not even saying about "simple" stuff like records search, pagination, and alike_), just stay tuned! Suggestions are welcome too, as well as any feedback (_the simplest way is to ping me via [fyodor@metaframe.works](mailto:fyodor@metaframe.works)_).

And if you have any new metaframework in mind (_[it happens](https://metaframe.works/tags/newborn/), you know_) — spit it out without a doubt! Who knows, maybe it will take its place in the metaframeworks Hall of Fame another day.

_The cover photo by [Jon Tyson](https://unsplash.com/@jontyson) from Unsplash_
      