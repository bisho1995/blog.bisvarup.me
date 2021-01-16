---
title: JavaScript Clean APIs Part 1
date: 2020-12-14
path: /javascript-clean-api-part-1
tags: chrome, browser-api
featuredImage: ../../static/images/problem-solving.jpg
---

## Introduction

Do you want to write clean APIs like this. 

```js
const number = generateRandom();
const number2 = number1.addOne();
const number3 = number2.addOne();
const number4 = number3.addOne().addOne();
```

Admit it, this looks so clean. We are not writing APIs like `generateRandom().addOne().getNumber()`.  Let's see how we create such APIs.

## Working demo
https://codepen.io/pritammukherjee16/pen/ZEpLVWq?editors=0010




