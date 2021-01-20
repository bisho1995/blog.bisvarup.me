---
title: The docker handbook for frontend devs
date: 2020-05-22
path: /docker-handbook-for-feds
tags: frontend, docker
featuredImage: ../../static/images/guillaume-bolduc-uBe2mknURG4-unsplash.jpg
---

 
## General docker commands

* Pulling an image from dockerhub
``` 
docker pull ubuntu
```
* Login to your own dockerhub account (optional)
```
docker login --username bisvarup
```
* List your docker contains, which you have installed
```
docker image ls
docker images
```
* Create an instance of the image, and run it in detached (-d), -i (interactive) and attach a psudo tty (-t)
```
docker run -it -d ubuntu
```
* List the image containers
```
docker ps -a
```
* List all containers with just their numeric id
```sh
docker container ls –aq 
```
* Remove a container
```
docker container rm [container_id]
```
* Remove all stopped containers
```
docker container rm $(docker container ls –aq)
```
* Log into an container
```
docker exec -it 45ceac9df55c bash
```
* Stop a container
```
docker stop 45ceac9df55c
```
* stop all containers
```
docker container stop $(docker container ls –aq)
```
* Delete an container
```
docker rm 45ceac9df55c
```
* Delete a container
```
docker rmi ubuntu
```
* Create a new image
```
docker commit container_id username/image_name
```
* Push a new image to dockerhub
```
docker push bisvarup/image_name
```
* Stop all containers
* Docker disk usage for active containers
```
docker ps --size
```
* Detailed docker disk usage
```
docker system df
```
* Create a docker container from a Dockerfile
```
docker build -t container-name .
```

## Popular docker commands

* Create a mysql container from mysql image
```sh
docker run --name mysql-5.7 -e MYSQL_ROOT_PASSWORD=password -p 0.0.0.0:3306:3306 -d mysql:5.7
```
This assumes you already have mysql:5.7 image installed in your system. There seems to be some issue with mysql 8.0 and that does not work well with sequelpro. Hence using mysql 5.7