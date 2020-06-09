---
title: Transition between focused elements
date: 2020-05-02
path: /transition-between-focused-elements
tags: input, frontend, react
featuredImage: ../../static/images/markus-spiske-_v6mhdOK2g0-unsplash.jpg
---

 

Suppose you have a list of input tags and one of them has focus enabled on them. You want to hit tab and the next input gets focus.

To detect the hitting of the tab you add an event listener to input tag, specifically the blur event listener. So when blur is called you check what is the next element which has focus.

To your surprise, you will see that the element which has focus is not the input tag but the body.
If you run, `document.activeElement` you will see that `body` is returned.

Why did this happen, we thought when we hit tab the next input will get focused, so why did the body receive focus? This is because after we lose focus from the first input, then the body gets focus and then the second element will get focus. So to summarize focus goes from `input -> body -> target` (input in our case).

To account for this I checked the activeElement after 100ms 😛

---

![transition between focused elements]( transition-between-focused-element.png)