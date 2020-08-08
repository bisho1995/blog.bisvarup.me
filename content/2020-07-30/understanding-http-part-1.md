---
title: HTTP 0.9 to HTTP 1.1
date: 2020-07-30
path: /http-0.9-http-1.1
tags: tcp, http
featuredImage: ../../static/images/samuel-foster-lWSnXGwlfMY-unsplash.jpg
---

In this post, we try to understand the evolution of HTTP to HTTP 1.1 and a brief on HTTP connection1.

## Table of Contents

```toc
```

## HTTP/0.9

1. Server response only in HTML
2. One request per TCP connection
3. No headers in the response document

The server serves the whole document then disconnects the client, aka end the TCP connection. Also, the server does not store any information about the request after disconnection.

## HTTP/1.0

1. The web browser evolved during this time
2. Response object can be of any type, HTML, file, image or any other content type
3. Allowed capabilities content-encoding, character set support, multi-part types, authorization, caching, proxy behaviors, date formats, and more

## HTTP/1.1

1. Added improvements keepalive connections, chunked encoding transfers, byte-range requests, additional caching mechanisms, transfer encodings, and request pipelining.
2. Multiple requests per TCP connection
3. Close the connection once closed
4. Saved time from syn, syn-ack, ack cycle and TCP slow start

## HTTP Connection

In the simplest form HTTP connections are established between a user agent and a server, but there can be more complicated situations also. 

For example
1. Proxy
2. Gateway
3. Tunnel

### Proxy

Some server sitting between client and server which can modify requests.

### Gateway

It acts like a receiving agent that acts as a layer above servers, for example, AWS API gateway.

### Tunnel

A tunnel acts as a relay point between two connections without changing the messages

Client ---> Tunnel A ---> Tunnel B ---> Tunnel C ---> Target server

Although HTTP uses TCP as the underlying protocol, it can use other protocols as well such as UDP.

## References

1. https://www.w3.org/Protocols/HTTP/AsImplemented.html
2. https://www.w3.org/Protocols/HTTP/1.0/draft-ietf-http-spec.html#Operation
