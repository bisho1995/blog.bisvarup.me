---
title: npm integrity, checksum and integrity error
date: 2020-05-06
path: /npm-integrity-checksum-and-integrity-error
tags: npm, npm-integrity, checksum
featuredImage: ../../static/images/miltiadis-fragkidis-2zGTh-S5moM-unsplash.jpg
---


## Table of Contents

```toc
```

## Introduction

Suppose you want to install a node module like this,
npm i oauth-sign
You may encounter such an  EINTEGRITY error. It would look something like this.

![npm integrity, checksum and integrity error](/images/npm-eintegrity-pic-1.png)

If we check the logs, it would look something like this.

![npm integrity, checksum and integrity error](/images/npm-eintegrity-pic-2.png)

Add caption

Let us dive into this error, what this error is, and why it occurred. 

## NPM's security

How does npm maintain the security of node modules? I mean when you download a node module how does npm validate if what you have downloaded is actually the correct package?
The answer is with checksums. So when you type npm install package_name, npm will hit the [https://registry.npmjs.org](https://registry.npmjs.org) artifactory and download a parcu-ment (package+document), let us see what it looks like this.

![npm integrity, checksum and integrity error](/images/npm-eintegrity-pic-3.png)

So if you type `@latest` or add the version say `0.9.2` then this particular dist block will be picked up and will be used for processing the validity of the package.

So the npm registry signs the package at their end and sends the signature in this pacument file. It also mentions the URL of the tarball which contains the package code. Now npm will download the tarball and create a signature of the tarball. 

Npm will now check if the signature in the pacument is the same as the signature generated in the tarball. If they are the same then it is a valid package, else the package is not valid and an EINTEGRITY error will be thrown.

## Validating the signature

Let us now see how we can validate the signature ourselves. NPM itself uses the SSRI module to check the validity of packages. I wrote the following script to check the validity. I downloaded the oauth-sign tarball and saved it in the file oauth-sign-tarball. Next, follow the code. integrity is the integrity mentioned in the pacument.

![npm integrity, checksum and integrity error](/images/npm-eintegrity-pic-4.png)


## NPM install with a new cache folder

You do not need to delete the cache to try this experiment. You can basically ask npm to point to a new cache folder, which may not exist. NPM will use that for the cache.

```bash
npm i oauth-sign --cache /tmp/empty-cache/
```

That's it

## Download a pacument

Let's see how we can download the pacument of request

```bash
curl -o request-pacument https://registry.npmjs.org/request
```

## Download a tarball

```bash
curl -o oauth.tgz -L https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz
```

-L means it will follow redirects

## Resources

1. Getting oauth-sign's placement: https://registry.npmjs.org/oauth-sign
2. oauth-sign repo: https://github.com/request/oauth-sign/blob/master/index.js
3. npm's blog about how all these work: https://blog.npmjs.org/post/172999548390/new-pgp-machinery
4. ssri module: https://www.npmjs.com/package/ssri#example