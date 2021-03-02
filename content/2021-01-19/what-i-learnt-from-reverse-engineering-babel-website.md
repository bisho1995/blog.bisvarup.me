---
title: What I learnt from reverse engineering the Babel website
date: 2021-01-19
path: /what-i-learnt-from-reverse-engineering-the-babel-website
tags: babel, html, react, web worker
featuredImage: ../../static/images/problem-solving.jpg
---


Here are the points:

1. **run-s:** A CLI command to run given npm-scripts sequentially. 
```json
"bootstrap": "run-s bootstrap:sponsors build",
```
2. Get a filesize of a code snippet
```js
var code = `
... // some valid code
...
var blob = new Blob([code], {type: "text/javascript"})
console.log(blob.size)
`
```

3. Evaluating user code inside an iframe. Creating an iframe with width=height=0 and using iframe.contentWindow.eval(user_code). Wrapping this in try-catch to detect if the code is functionally correct.

4. While evaluating our code and compiling it, there is a delay with a debounce method (500ms delay).

5. Neat small implementation of worker message passing. Pasting the code here
```js
export function registerPromiseWorkerApi(worker: any) {
  const uidMap = {};
  /* Unique id per message since message order isn't guaranteed */
  let counter = 0;
  worker.addEventListener("message", (event: WorkerEvent) => {
    const { uid, error, message } = event.data;
    const [resolve, reject] = uidMap[uid];
    delete uidMap[uid];
    if (error == null) {
      resolve(message);
    } else {
      reject(error);
    }
  });
  return {
    postMessage(message: any) {
      const uid = ++counter;

      return new Promise<any>((resolve, reject) => {
        uidMap[uid] = [resolve, reject];
        worker.postMessage({
          message,
          uid,
        });
      });
    },
  };
}
``` 
5.1 This is a **closure** implementation and the data that is stored is uidMap. Whenever there is a postMessage the counter is incremented and that is sent to the worker. Also the resolve and reject of the promise is stored in uidMap
```js
uidMap = {
[uid]: [resolve, reject]
}
```

6. Loading the worker source itself.
```js
const WorkerSource = require("worker-loader?inline=no-fallback&esModule=false!./Worker");
```
using the webpack plugin `worker-loader` to loaded the worker source. This is the syntax for inline loading of the worker. I had created an example of loading the worker in `webpack.config.js`.

7. Run commands in parallel. 
```json
"start": "run-p start:repl start:docusaurus"
```

8. The way it loads babel and miniRelp
Check the file `website/pages/en/index.js`
```js
const MiniRepl = () => {}
```
If you observer this component, you would understand that this component renders HTML and also script tags that pull in babel, ace, and chunk for replmin. All of them have the defer tag. So the idea is this would be rendered initially and then lazily loaded with the chunks. Sort of similar to lazy loading of webpack and react but pretty clever IMO.

9. Repl.js file, you can use plain script tags to load react and other project files. If you check the repl.js file it is interesting what is done here. Instead of bundling react like normally how we would be doing it, this file has a list of scripts that the repl page needs and is rendering all of the scripts, and when they are done the repl page is loaded.