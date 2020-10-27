---
title: Mime Sniffing
date: 2020-10-26
path: /mime-sniffing
tags: java, dropwizard
featuredImage: ../../static/images/problem-solving.jpg
---

From mdn<br/>
> In the absence of a MIME type, or in certain cases where browsers believe they are incorrect, browsers may perform MIME sniffing — guessing the correct MIME type by looking at the bytes of the resource.”
<br/><br/>
This is fixed with X-Content-Type-Options

<br/><br/>
References:
1. https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing
2. http://homakov.blogspot.com/2012/06/saferweb-with-new-features-come-new.html

