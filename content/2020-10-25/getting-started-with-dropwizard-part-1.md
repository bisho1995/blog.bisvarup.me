---
title: Getting started with Dropwizard Part 1
date: 2020-10-25
path: /getting-started-with-dropwizard-part-1
tags: java, dropwizard
featuredImage: ../../static/images/markus-winkler-gLdJnQFcIXE-unsplash.jpg
---

## Table of Contents

```toc
```

## Introduction

Before starting with any project we must ask ourselves the why. Why do you want to start this project? Why is THIS the right time? For me, being a front-end developer, I always wanted to understand the world of the backend, how it is done at a production level, what challenges they face, and so on and so forth.
<br/><br/>
So recently I spoke about my interest to my manager and they are helping me with this interest of mine, so this was the right time for me to pick up the backend.
<br/><br/>
I chose dropwizard because it is used in our company's backend so I chose dropwizard and not spring/spring boot.


## Some Basics about Dropwizard

Dropwizard is a Java framework for creating web applications. Sometimes people compare it with the Flask of python. 
<br/><br/>
I am going to being in parallelism from the frontend world to introduce things.
<br/><br/>
Dropwizard is like React.js. It is a framework on top of Servlets, the low-level web servery stuff. Just is React is a library which is responsible for the view of data similarly dropwizard is a collection of some of the popular Java libraries such as
<br/><br/>
1. Jetty for HTTP - This is the webserver. 
2. Jersey for REST - This is used for REST API creation, such as POST, GET,... etc
3. Jackson for JSON - This is used for converting Java objects to JSON and JSON to java objects, super useful.
4. Metrics for metrics - This is for capturing metrics such as the timing of function execution.

## Prerequisites

**Maven:** This is similar to npm.js which maintains repos for javascript. <br/>
**Pom.xml:** This is similar to package.json.

## Getting Started

1. Create a new project using the IntelliJ idea, use it to create a simple java project using pom.
2. In pom.xml add in dropwizard dependency.
3. Add in Jackson dependency for dropwizard, Jackson-annotations, Jackson-databind, Jackson-core. **(Not sure though why we need to pull in Jackson, as dropwizard is supposed to have it installed beforehand)**
<br/><br/>
Will add the rest of getting started a bit later.

## Resources

Since we are making REST APIs each endpoint we create we are accessing a **RESOURCE**. So to create endpoints we need to create **RESOURCES**. For example, if we are creating an endpoint for a todo application. We can call it **TodoResource**.

## Configuration

The other concept is just like creating any react project/nodejs project we need some configuration data. For example **process.env.NODE_ENV** lets say. Similarly, for dropwizard, it can read config data out of a config file. The config file will be of format **.yml/.yaml**.
<br/><br/>
So, we can put any type of config data, say which ports to use or what are the database configurations in this config file. 
<br/><br/>
Then we need to create a configuration class that extends the Configuration class.
