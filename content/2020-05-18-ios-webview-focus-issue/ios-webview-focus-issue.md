---
title: IOS webview focus issue
date: 2020-05-18
path: /ios-webview-focus-issue
tags: ios, otp, focus, WkWebView, UiWebView
featuredImage: ../../static/images/przemyslaw-marczynski-oCfkSnqZ0SI-unsplash.jpg
---


## Table of Contents

```toc
```
 
## Introduction 

So, currently I am working a lot of mobile version of our website, and a lot of the code runs on webviews as well.
While, it's mostly sane to work with webviews on android and IOS sometimes we encounter interesting situations.

---

## The OTP component

I had to create an OTP field and although it worked fine on mobile website (desktop, android and IOS) inside our app, in a webview, it's not working properly. 

The UI was something like

```_ _ _ _ _ _```

Each of the ```_``` was an input field and when you are done with one of the input fields you are automatically focused on the next input field. When you hit backspace then you are focused on the previous input field.

Edge checks are done for obvious reasons 😛

## The Issue

The issue was that after you are done with one of the input fields, the next input element is not focused automatically. Keyboard does not show up and you need to manually hit the next input field to type. 

This is obviously annoying as hell.

## The research

So, as any other developer I started to dig into the issue to find out what was wrong. Turns out that this has been an issue for a long time.

Basically IOS has two webview engines
1. UIWebView
2. WKWebView

UIWebView is old and WKWebView is new.
WKWebView uses nitro, a modern engine which is kinda up to date with HTML spec.

So, the solution to this issue is a bit hacky, but it works 😅

## Solution

```js
function focusAndOpenKeyboard(el, timeout) {
  if(!timeout) {
    timeout = 100;
  }
  if(el) {
    // Align temp input element approximately where the input element is
    // so the cursor doesn't jump around
    var __tempEl__ = document.createElement('input');
    __tempEl__.style.position = 'absolute';
    __tempEl__.style.top = (el.offsetTop + 7) + 'px';
    __tempEl__.style.left = el.offsetLeft + 'px';
    __tempEl__.style.height = 0;
    __tempEl__.style.opacity = 0;
    // Put this temp element as a child of the page <body> and focus on it
    document.body.appendChild(__tempEl__);
    __tempEl__.focus();

    // The keyboard is open. Now do a delayed focus on the target element
    setTimeout(function() {
      el.focus();
      el.click();
      // Remove the temp element
      document.body.removeChild(__tempEl__);
    }, timeout);
  }
}

// Usage example
var myElement = document.getElementById('my-element');
var modalFadeInDuration = 300;
focusAndOpenKeyboard(myElement, modalFadeInDuration); // or without the second argument

```
Taken from [here](https://stackoverflow.com/a/55425845/13142033).