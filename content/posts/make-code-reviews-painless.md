---
title: Make code reviews painless
date: 2020-02-14
published: true
description: Use code review guidelines to make team collaboration effective and nice
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/lwiasifixq3y6zinra9r.jpg
tags: [codereview, webdev, teamwork, git, experience]
canonical_url: https://fyodor.io/make-code-reviews-painless/
series: false
---

Recently I came across the DEV [discussion post](https://dev.to/devcamilla/how-to-make-code-reviews-developer-conflict-free-18ag) about developer-conflict-free code reviews. This topic is huge and makes a difference when you work in a team, especially a big one.

There are different approaches to that, mostly technical and mostly automation-related (IDE plugins, linters, git hooks, CI/CD). And I totally agree that adhering to code standards should be automated and enforced as much as possible using the most up-to-date tools and approaches. But it's not the topic of this post. Here I want to talk about the things beyond the technology and code that you can do to your team to make code reviews effective and painless.

In my experience working with different teams and technologies, two things made the most difference in providing a foundation for solid code review tradition:

1. Using the right code collaboration and version control tools 
2. Sticking to well-discussed and agreed team standards

The first point is short and clear, though controversial and opinionated, and I'm not going to dig deep into that. There are different code collaboration tools - [GitHub](https://github.com), [GitLab](https://about.gitlab.com), [BitBucket](https://bitbucket.org), [Azure Repos](https://azure.microsoft.com/en-us/services/devops/repos/), and so on - and each team has a predefined one usually. But in terms of code review, each of them can be very specific and original. Take time to compare Pull/Merge Request experience in GitHub and BitBucket, for instance. As with anything in tech (IDEs, programming languages, frameworks, whatnot), you'll find that one of them suits your visual and analytical preferences much more than another.

I have personally found that the Bitbucket code review experience makes a huge difference for me, and today I work with a team that uses another tool. It's real torture preventing detail-oriented code reviews and lowering code quality in the end.

So be wise and choose by heart, at least if you have such an option.

Another significant step towards the code review pleasure and excellence in code quality that I found extremely useful in any team and with any technology is *compiling a collaborative team code review guidelines*. In short, what it is all about is:

* Background routines, like code style and git workflows
* Pre-PR routines, like specific checklists and automated tooling workflows
* In-PR routine, from detail-oriented approach to requester/reviewer behavior
* Working with edge cases, like tight deadlines and technical debt accumulation
* Post-PR routine, like working with merge conflicts and merge strategies

You will not be able to overestimate how well this stuff works. In any arguable situation, _you can refer to such written guidelines or particular paragraph of that, instead of yelling at each other and spoiling relationships inside of a team_.

To make it more visual, I've shared [one of such guidelines](https://github.com/fyodorio/code-review-guidelines/blob/master/code_review_guidelines.md) I had compiled some time ago for one of my teams. It's kind of boring, but it's not too long and covers everything I'd mentioned. So it makes a perfect sense to read into it and probably find some ideas on what could be useful for your team in your repositories and concerning your team's traditions and mentality.

As a bonus, I [had dropped](https://github.com/fyodorio/code-review-guidelines/blob/master/pull_request_template.md) a decent [PR template](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository), which makes life a little better when you submit your updates and try not to forget anything.

Please, let me know [in comments](https://dev.to/fyodorio/make-code-reviews-painless-29j3) what you think about this approach and what is your view on the problem of making Pull Request reviewing experience at least meaningful, if not exciting.

_Cover photo by [Priscilla Du Preez](https://unsplash.com/@priscilladupreez) on Unsplash_
