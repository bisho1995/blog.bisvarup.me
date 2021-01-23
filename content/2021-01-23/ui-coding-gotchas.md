---
title: UI coding gotchas
date: 2021-01-23
path: /ui-coding-gotchas
tags: react, frontend, ui
featuredImage: ../../static/images/problem-solving.jpg
---

Here are the list of coding gotchas you should keep in mind while coding:

* When using anchor tag (or react-navigation) keep in mind if the transition should be a push event or a replace event. 
* We should not use UNSAFE_ methods. This breaks the flow of the lifecycle methods and can lead to strange behaviors that are hard to track. IF you find existing code using the UNSAFE_ method, replace it with newer APIs. 
* If you are making any temporary changes, always add a // todo comment which can be caught at code review time. 
* If you are making any change that affects multiple parts of the codebase, for example, babel/webpack/HBS file make sure to test all the affected parts. 
* If there is an implementation such that an API call is made and post that some data is updated on the UI, make sure when the API call is in transit we show some indicator, a loader, or a shimmer so that the user knows that something is going on. 
* When using regular functions or arrow functions keep in mind the importance of the `this` keyword. In the arrow function `this` comes from the implementor where the arrow function is defined, but in the regular function, it comes from the call site.
TODO: add the server instance template issues
* Check you do not run into infinite loops. In this situation, the update condition has i+=0 in a case.
Consider system color themes, for example, the laptop may run on a black theme then favicon color may blend and become unreadable.
* When creating a feature keep in mind “prefers-reduced-motion”, chromium, android, iOS, safari, firefox, and opera, “color-preference”.
* Navbars on the left/right may not be buttons, but actually links and think of accessibility such as “esc” should close the navigation bar on left. Set focus on the nav button.
* Follow these principles while thinking about reflows. https://gist.github.com/paulirish/5d52fb081b3570c81e3a 



