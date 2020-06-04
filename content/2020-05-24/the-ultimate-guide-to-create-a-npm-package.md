---
title: The ultimate guide to create a npm package
date: 2020-05-24
path: /the-ultimate-guide-to-create-a-npm-package
tags: node, javascript, npm, package-json
image: /images/nicolas-hans-u2LV_WJdBfQ-unsplash.jpg
---


The following is the `package.json` file which I used for my [ReadMore](https://www.npmjs.com/package/@bisvarup/react-read-more) project.

**Sample package json**

```json
{
  "name": "@bisvarup/react-read-more",
  "version": "0.0.3",
  "description": "...",
  "author": "Bisvarup Mukherjee <codeworks0301@gmail.com>",
  "homepage": "https://bisho1995.github.io/react-read-more/",
  "keywords": [
    "read more",
    "react read more",
    "expand text"
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git@github.com:bisho1995/react-read-more.git"
  },
  "main": "dist/index.js",
  "module": "dist/index.modern.js",
  "types": "dist/index.d.ts",
  "source": "src/index.tsx",
  "engines": {
    "node": ">=10"
  },
  "scripts": {
    "build": "...",
    "start": "...",
    "test": "run-s test:unit test:lint test:build",
    "test:build": "run-s build",
    "test:lint": "eslint .",
    "test:unit": "...",
    "test:watch": "",
    "predeploy": "run-s docs",
    "deploy": "gh-pages -d docs",
    "pregithub-push": "run-s build && git add --all && git commit -m 'build'",
    "github-push": "git push -u origin HEAD",
    "docs": "typedoc --out docs src",
    "prestd": "run-s build docs",
    "std": "standard-version && npm publish --access public",
    "poststd": "run-s deploy && git push --follow-tags origin master && git add --all && git commit -m 'build' && git push origin HEAD"
  },
  "peerDependencies": {
  },
  "devDependencies": {
  },
  "files": [
    "dist"
  ],
  "dependencies": {}
}

```

## top 10 things to put in package.json

1. files
2. Clear separation of dependencies, peer dependencies and dev dependencies
3. main & types
4. name
5. description
6. homepage
7. author
8. keywords
9. license
10. repository

### Explanation

1. Files is important as npm will only have those files when you upload your library. This means on tools such as [bundlephobia](https://bundlephobia.com/) it will show as lesser size.
2. If you are creating a react library you should keep react is peer dependency instead of a dependency/dev dependency. This may be similar for other libraries as well. Be mindful.
3. Main is the starting point and if you have a typescript project, you need to export the types as well. So mention the url of types file here.
4. Name is obviously important
5. Description is also important as it will show in npmjs.com which will help users to choose from.
6. If you have a homepage for the project mention it, else mention the source control (read github) url here.
7. Mentioning the author is important for style points 😉
8. keywords are again important as it will help users to find your project.
9. License is a must, as it is your work and you should decide how someone should be using it
10. repository -> just mention the git url

## Additional goodies

If you are using typescript or javascript use a doc generation tool, for typescript use [typedoc](https://typedoc.org/), for js use [jsdoc](https://jsdoc.app/). 

After generating the doc, use [gh-pages](https://www.npmjs.com/package/gh-pages) to create a github page for your docs/examples.

I personally fell in love with typedoc and ghpages.

## Testing

Before releasing your module, make sure you test it properly. You can use `npm link` to test your project. 

Although you can always push another version to npmjs pushing the correct version the first time is better. 😇 Even I should try doing this.

## Conclusion

It's fun to create and contribute to oss and I encourage lot more devs to dive into it.