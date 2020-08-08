---
title: Webpack and tree shaking
date: 2020-05-06
path: /webpack-and-tree-shaking
tags: webpack, tree-shaking
featuredImage: ../../static/images/trevor-pye-KyaoT3NKN2s-unsplash.jpg
---


## Table of Contents

```toc
```

## Problem statement & example

Turns out tree shaking, which is compiler removing unused code is pretty hard. So by default webpack 4 does few checks to remove unused code, but it is very basic. 

Let us see some of the situations and what are the outputs.

test.ts

![test.ts](/images/webpack-bundle-splitting-1.png)

Lets import like this,

![importing test.ts](/images/webpack-bundle-splitting-2.png)

So, we just import it but don't call it.
In this case, if you find the string "function B", you won't find it. So webpack does not bundle this file.

But if we call function B

![calling function B](/images/webpack-bundle-splitting-3.png)

And then look for the string "function A", here is the result

![Searching function A](/images/webpack-bundle-splitting-4.png)


Oh my god, function A is bundled, shit!!

Now, let's fix this.


## The Fix

Tree shaking is done by a combination of webpack minimizer, uglifyjs and minify plugin such as uglifyjs(dint try) or terser (faster) and babel.

So the idea is these tools can remove useless or dead code if they can detect it properly. Turns out they can do that if the module system is in es6+, then with import and export they can remove useless code.

1. So to leave code at es6 and not turn it into commonjs or amd, we need to tell babel to leave our modules alone

![Babel modification](/images/webpack-bundle-splitting-5.png)

Take into note the presets and env part, we need to add in

```js
{
    "modules": false
}
```

This means babel will not turn our lovely es6 to something else.

2. Add WebpackTerserPlugin if you don't have already.

3. If you are using typescript then you need to make sure babel converts and does its magic with your files. So after using tsc or ts-loader you need to apply babel loader. 

I am not sure why, but output of ts-loader is not tree shaking properly, but output of babel loader is . So pipe the output of ts-loader to babel loader and you should be good.

```js
{
    loader: 'babel-loader'
},
{
    loader: "awesome-typescript-loader",
```

4. If you are using typescript, make sure your module system is es2015+

```ts
 "module": "esnext", // use ES2015 modules
```

Its because tree shaking started from es2015

That should be all for tree shaking.
