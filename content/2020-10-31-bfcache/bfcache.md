---
title: Backward Forward Cache
date: 2020-10-26
path: /bfcache
tags: browsers, optimization
featuredImage: ../../static/images/problem-solving.jpg
---

back/forward cache to cache pages in memory (preserving JavaScript & DOM state) when the user navigates away.

A back/forward cache (bfcache) caches whole pages (including the JavaScript heap) when navigating away from a page so that the full state of the page can be restored when the user navigates back. Think of it as pausing a page when you leave it and playing it when you return.

At the moment 19% of all navigations on Android and 10% on the desktop are back-forward. 



## Resources

1. [https://docs.google.com/document/d/1YrBKX_eFMA9KoYof-eVThT35jcTqWcH_rRxYbR5RapU/edit#](https://docs.google.com/document/d/1YrBKX_eFMA9KoYof-eVThT35jcTqWcH_rRxYbR5RapU/edit#)
2. [https://developers.google.com/web/updates/2019/02/back-forward-cache](https://developers.google.com/web/updates/2019/02/back-forward-cache)
3. [https://dev.to/paulcalvano/browser-back-forward-caches-and-their-benefit-to-web-performance-4f4l](https://dev.to/paulcalvano/browser-back-forward-caches-and-their-benefit-to-web-performance-4f4l)
