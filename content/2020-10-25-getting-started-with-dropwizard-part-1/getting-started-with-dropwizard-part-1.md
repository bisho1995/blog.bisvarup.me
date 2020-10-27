---
title: Getting started with Dropwizard Part 1
date: 2020-10-25
path: /getting-started-with-dropwizard-part-1
tags: java, dropwizard
featuredImage: ../../static/images/problem-solving.jpg
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

![Dropwizard Configuration extended](/images/dropwizard_configuration.png)

Remember Jackson converts Json from POJO (plain old java objects, aka Java classes) to JSON and back. That is used here to pick up some database config from the config.yml file and adding it to an instance of the class.
<br/><br/>
We can use a similar technique for pulling in any config.

## Application 

We need to create the main application file now, for running our dropwizard application. We need to extend the Application and use our configuration for this.

![Dropwizard Application extended](/images/dropwizard_application.png)

As we can see, this is a simple class with public static void main, and in the main method we call the run method. That’s it.
<br/><br/>
In the run method, we register our **RESOURCE**. If we do not do that, dropwizard will not know what our resource is, right?

## Conclusion

This is not a tutorial per se, but an approach to how a front-end developer may take to learn dropwizard. I broke down dropwizard into fundamental building blocks and tried to explain why it is needed.
<br/><br/>
So to summarise:
1. Maven == npm.js
2. Pom.xml == package.json
3. Config from Configuration class which reads config.yml file
4. Main application starting code/starting point from Application class.
5. Creating resources to create endpoints.

There is more to it when I created a basic todo endpoint which adds todos and a URL to populate all the todo(s), but if we understand the fundamentals then the rest is easy. 
<br/><br/>
If we know how to keep data in-memory, we can replace that with a database or file storage, it does not matter. That is not a concept of dropwizard, but a part of core java, the how.
<br/><br/>
Usually, we create interfaces and write implementations of those interfaces, we do this so that in case we need to change from an in-memory database to a SQL database we need not change the interface but just the implementation of the interface. Similarly, we can use an interface for the resource as well and then write a concrete implementation for it later on.
<br/><br/>
I would suggest not to spend time on folder structure or clean code when trying to get started with a new framework, but just get coding and building something. 
