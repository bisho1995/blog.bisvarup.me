---
title: Cookie Tossing
date: 2020-10-26
path: /cookie-tossing
tags: infosec
featuredImage: ../../static/images/problem-solving.jpg
---

## Introduction
The way cookie headers work is a cookie is set for a domain, example.com, [insert actual data] then it cannot be accessed from cookie.io or subdomain.cookie.com, but **if we are setting a cookie in subdomain.example.com it will be sent to example.com**
<br/><br/>
So for example, if there is a cookie _session, and subdomain also creates a cookie _sessoion=SOMETHING_RANDOM, then when someone opens example.com this cookie will also be sent and would cause an issue and may cause a logout of the user.
<br/><br/>

This is called [cookie tossing](https://security.stackexchange.com/questions/67608/cookie-tossing-explained/67613#67613).<br/>
1. Simple cookie tossing
2. Changing the path of setCookie so that it only affects a specific path
3. Escaping the cookie set, for example, if we encodeURIComponent the cookie, it may be decrypted at the server and result in the same cookie.
4. There is a hard limit on the number of cookies that can be set for a domain, and as per the article, browsers may clear all the cookies if we add in too may cookies and then if we put in the malicious cookie then we can set the BAD cookie value.

Due to the cookie tossing issue, we must validate if we want untrusted people to host JS code on our subdomain.

Read Next: [https://en.wikipedia.org/wiki/Clickjacking](https://en.wikipedia.org/wiki/Clickjacking)


## References: 
1. https://github.blog/2013-04-09-yummy-cookies-across-domains/
2. http://homakov.blogspot.com/2013/03/hacking-github-with-webkit.html
