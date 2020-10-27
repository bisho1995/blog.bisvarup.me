---
title: JS Performance Tips
date: 2020-10-26
path: /js-performance-tips
tags: javascript, optimization, performance
featuredImage: ../../static/images/problem-solving.jpg
---


1. **getElementsByClassName** & **getElementsByTagName** are faster than **querySelecterAll**
<br/><br/>
2. Do not attach event handlers to window scroll events, as this event may fire a lot and it may slow down performance for the entire page.<br/>
**[Solution:]** Use a timer-based logic or use throttle.
<br/><br/>
3. Accessing DOM is **SLOW**, so cache the dom element after a query.
<br/><br/>
4. To run long computation from JS on the main thread we need to break the task into timers.
OR use a web worker. Do not overuse web workers as to and fro passing messages to web workers can be a bottleneck again.
<br/><br/>
5. Split code into modules which are critical for the page load and modules which can be lazy loaded.
<br/><br/>
6. Lazy loading modules in JS
```js
<script type="text/JavaScript">
  function loadFile(url) {
	var script = document.createElement('SCRIPT');
	script.src = url;
	document.getElementsByTagName('HEAD')[0].appendChild(script);
  }
</script>
```
<br/><br/>
7. Load a module on use click, works better for performance. 
<br/><br/>
8.  We can also prefetch the JS files and keep them in memory and if use clicks, we can parse the JS code, this will be faster.
<br/><br/>
9. To increase speed we may load the entire JS file (unsplitted into modules) and have parts of the file commented out so that the parser ignores it. The parser is also responsible for the load time of the JS resource. As and when needed uncomment the JS code and parse it.


