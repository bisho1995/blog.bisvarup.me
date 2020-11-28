---
title: Contacts Picker API
date: 2020-11-28
path: /contacts-picker-api
tags: chrome, browser-api
featuredImage: ../../static/images/problem-solving.jpg
---


## Introduction
Android and IOS applications (native apps) inherently had the capability to access contact list of a user. Ofcouse the user needs to provide permission for that (I think) but it was there. The web however did not have this feature.

Starting from chrome 80, we have support for this feature on android. The user experience is not as great or as powerful as native implementation, but it is not bad by any means. I can see usage of this feature in let's say 

<br />

1. Share trip data to contacts.
2. Share gift purchase information.
3. Upload and share contact information with ease.
4. Sending mails to people from contact list, gone are the days when you need to remember email ids.

and much more...

## Demo

Run this application on an android device using the chrome browser.

<iframe src="https://codesandbox.io/embed/react-contact-picker-demo-i7q7q?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-contact-picker-demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Source Code

Check the source code on [codesandbox](https://codesandbox.io/s/magical-mclean-i7q7q?file=/src/App.js&resolutionWidth=405&resolutionHeight=675).
<iframe src="https://codesandbox.io/embed/react-contact-picker-demo-i7q7q?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-contact-picker-demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Getting started

1. We need a https domain for this feature to work. Usually these powerful features need extra security for good reasons usually.
2. Chrome browser version should be >= 80, which was released in Feb, 2020
3. Check if contacts is supported by the browser.
```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```
4. Use the async method to prompt the user to select permission and then pick the contacts.
```js
const props = ["name", "email", "tel"];
const opts = { multiple: true };
const contacts = await navigator.contacts.select(props, opts);
```
5. Contacts are an array of objects, so loop through this data and manipulate it as you wish.
6. Bonus point, I used ant-design for this project. This allowed me to create this beautiful UI really fast.

## Conclusion

I believe this feature is production ready and going forward we can see companies adopting this feature to make better user experiences. Although a compatibility issue is there, but it a "nice" step forward.
