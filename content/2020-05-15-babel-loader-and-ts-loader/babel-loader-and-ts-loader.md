---
title: ts-loader and babel-loader | hensel and gretel 
date: 2020-05-15
path: /ts-loader-and-babel-loader-hensel-and-gretel
tags: babel, loaders
featuredImage: ../../static/images/fynn-schmidt-IYKL2uhgsnU-unsplash.jpg
---

 

**🚨Short story alert.🚨**<br/>
Directly quoting from [stackoverflow](https://stackoverflow.com/a/49624611/13142033)

<br />

> ts-loader: convert typescript (es6) to javascript (es6) <br/>
> babel-loader: converts javascript (es6) to javascript (es5) and Typescript doesn't do polyfills, which babel does. If you write client-side <br/>
> code in es6 and want it to run on modern browsers, you'd probably need babel's polyfills.<br/>

## Backstory

The thing is I was working to enable tree shaking in our project when I ran into this issue. Turns out (after hours of research) that tree shaking will only work if bebel does it's magic after ts-loader does it's stuff. 🤯