---
title: How I recovered 30+G from my Mac
date: 2021-05-01
path: /how-i-recovered-30-g-from-my-mac
tags: mac
featuredImage: ../../static/images/danil-shostak-5akbdhWHqs8-unsplash.jpg
---

## Introduction
This guide is for web & mobile developers who are facing disk space issues using Mac.

## Steps
1. Use either npm or yarn. Both of them cache stuff and using both of them would bloat the system.
2. If you are using IntelliJ products, they cache a lot of stuff for easier access. You need to periodically delete the cache.
```
File > Invalidate cache
```
3. Use products like “Clean my Mac” to free up space.
4. While cleaning the cache directory under `~/Library/Caches/` you need to delete the files while keeping the folder structure. Use the following command 
```
find ./ -type f -exec rm {} +
```
5. Remove yarn/npm cache. Remove the cache which you do not use primarily. I will stop using yarn
```
yarn cache clean
```
6. Remove cocoa pods cache 
```
pod cache clean --all
```
7. Remove xcode derived data. I freed up about 6G from this.
```
rm -rf ~/Library/Developer/Xcode/DerivedData
```
8. Remove intellij cache 
```
rm -rf /Users/bisvarup.m/Library/Caches/JetBrains
```
<br/><br/>

I have also started to use open-source software called [iGlance](https://github.com/iglance/iGlance) to track my system metrics. I am able to view the following metrics with this.
1. Disk space usage
2. System temperature
3. Network stats
4. Disk RPM
