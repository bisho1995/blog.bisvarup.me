---
title: The docker handbook for frontend devs
date: 2020-05-22
path: /docker-handbook-for-feds
tags: frontend, docker
image: /images/guillaume-bolduc-uBe2mknURG4-unsplash.jpg
---

 

Pulling an image from dockerhub

``` 
docker pull ubuntu
```
<br />
<br />
Login to your own dockerhub account (optional)

```
docker login --username bisvarup
```
<br />
<br />
List your docker contains, which you have installed

```
docker image ls
docker images
```
<br />
<br />
Create an instance of the image, and run it in detached (-d), -i (interactive) and attach a psudo tty (-t)

```
docker run -it -d ubuntu
```
<br />
<br />
List the image containers

```
docker ps -a
```
<br />
<br />
Log into an container

```
docker exec -it 45ceac9df55c bash
```
<br />
<br />
Stop an instance

```
docker stop 45ceac9df55c
```
<br />
<br />
Delete an container

```
docker rm 45ceac9df55c
```
<br />
<br />
Delete a container

```
docker rmi ubuntu
```
<br />
<br />
Create a new image

```
docker commit container_id username/image_name
```
<br />
<br />
Push a new image to dockerhub

```
docker push bisvarup/image_name
```