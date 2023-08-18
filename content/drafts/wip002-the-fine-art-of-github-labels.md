---
title: The fine art of GitHub labels
date: 2023-08-13
published: false
description:  Simple and straightforward approach to simplifying code repository management and maintenance
cover_image:
tags: [productivity, teamwork, git, codereview, experience]
canonical_url: https://fyodor.io/the-fine-art-of-github-labels/
series: false
---

I saw different approaches to managing GitHub labels (and  actually the GitHub is just an example, it can relate to any VCS interface like GitLab, BitBucket, HuggingFace and whatnot). Some of them are quite clever and sophisticated, demonstrating a great attention to details from the repository maintainers. Some, on contrary, are just defaults and don't mean a thing though _are_ actually used for what they should be used for. And the latter probably is the worse as it's really confusing,  especially for open-source repositories.

I wanted to share a simple two-level system I had came up with on my job a couple of years ago which serves me as a maintainer perfectly well, covering all the edge cases I met (and most of the edge cases I'm going to meet further on, I'm pretty sure). Being combined with proper conventions for commit messages and PR naming, PR templates, and a suitable straightforward PR automation workflow(s), such a system enhances readability of the repository content and history quite a lot, providing developers with both a way to package the PR message, and a helping hand in the review process. 
