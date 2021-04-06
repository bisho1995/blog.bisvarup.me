---
title: Learnings from some of the best PWAs - Part 2
date: 2021-04-06
path: /learning-from-some-of-the-best-pwa-part-2
tags: pwa, frontend, UI, app
featuredImage: ../../static/images/Screenshot_2021-04-06-09-02-12-29 copy1.jpg
---

## Introduction
The observation which drove me to do this analysis is, although Flipkart/Amazon is spending so much effort on its web presence, still it shows a prompt to the user when they land on the web app to “Open in an app”.  I want to understand how do web-apps perform, good/bad compared to apps and what are the general UI components used for creating apps.

## What makes PWAs not feel like native APPs

1) The human eyes have seen a lot of bad designs in the past where a bunch of ads and popups and too much “content” is shown. If the design is not clean/minimal then users tend to think this is a website and an app-like feel goes away.

2) The PWA needs to be fast, a little delay is fine, but too much delay would seem it is a website and not an app. Apps are fast and to feel like apps PWAs need to be fast to user reactions. Follow PRPL or whatever pattern is suggested but the interactions should feel “fast”.


## What PWAs did well
1) Preserving the scroll position. Myntra, Flipkart preserves the scroll position of the user when the customer goes forward or backward navigation. I think this may be due to chrome’s backward/forward cache, but anyways this “feels” good.

2) Having TTL on the data, some of the data can get a bit “stale”, whenever I visit a page, if I see a loader that feels like a website. Flipkart/Myntra is showing cached data until new data is not received. Of course, there will be places where stale data cannot be shown at all, but in all other places, this is good.

3) Lazy loading images with intersection observers, in all the PWAs I tried I did not find any of the APP loadings all the images at once during page load. Myntra does a very good job of loading “just-in-time”. Flipkart also attempts that but the experience with Myntra was better.

4) Reducing the number of API calls. To feel like an app the number of API calls should be reduced, Myntra does a fantastic job in this regard.

5) Using PRPL patterns some of the apps are preloading and caching stuff which is improving the experience.
I feel apart from PRPL apps should think of long-term storage and cache first approach.

