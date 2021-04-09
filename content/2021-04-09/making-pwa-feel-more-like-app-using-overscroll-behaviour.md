---
title: Making PWA feel more like an app using CSS overscroll behavior
date: 2021-04-09
path: /making-pwa-feel-more-like-app-using-css-overscroll-behavior
tags: pwa, css
featuredImage: ../../static/images/Screenshot_2021-04-09-22-29-11-88.jpg
---


## Introduction
The reason I went about looking for this is because of pull-to-refresh. Here is a demo of pull to refresh.
![pull to refresh](/images/pull-to-refresh.gif)

I am not sure why this is the default behavior but this is not what I would like my apps to have. For my blog post, this makes the blog feel less like native and more like a web app, plus if you see the gif closely when someone overscrolls, then there is a tinge of blue that comes.

## The Fix
The fix to this problem is to use the overscroll-behavior CSS property. There are 3 values to this, default/contain/none. This [blog post by web.dev](https://developers.google.com/web/updates/2017/11/overscroll-behavior) does a great job at talking about this CSS property.
<br/>
<br/>
What I did in my case was to apply overscroll-behavior to none at the root level, i.e. body tag. As a result of this this “ugly” tinge and pull to refresh was stopped.
<br/>
<br/>
Although this CSS property does not have 100% coverage, it has [75% coverage](https://caniuse.com/?search=overscroll-behavior) which is pretty decent and I assume most modern browsers would support it.
<br/>
<br/>
Here is what my PWA looks like after this change.
![my pwa](/images/my-pwa.gif)