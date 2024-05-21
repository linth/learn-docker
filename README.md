# learn-docker
learn how to use docker and docker-compose.

- Dockerfile: 單個服務執行的部屬 (類似自動化腳本)
- docker-compose: 多個服務執行

```Dockerfile
# Dockerfile
RUN pip3 install -r requirements.txt # 建立image時使用的
CMD ["", ""] # 執行container時使用的
```


## 1. Docker command

### 1-0. 

docker version
```
$ docker --version
$ docker -v
```

docker help
```
$ docker -h
$ docker --help
```

### 1. docker container 常用指令
### 1-1. `docker ps`
only show the executing containers. 
```shell 
$ docker ps # 查看目前container清單
$ docker container ls
$ docker ps -a # show all containers, even if the service of container is off.
```

### 1-2. `docker stop`
```shell
$ docker stop [CONTAINER ID]
```

### 1-3. `docker restart` & `docker start`
```shell
$ docker restart [CONTAINER ID]
```

```shell
$ docker start [CONTAINER ID] # 啟動已停止的 Container
$ docker container start [CONTAINER ID] 
```


### 1-4. `docker rm`
```shell
$ docker rm [container ID]
```

### 1-5. `docker exec`
```shell
$ docker exec [container ID] /bin/bash

# for other shell script.
$ docker exec [container ID] /bin/sh

# for redis.
$ docker exec [container ID] redis-cli
```

### 1-6. `docker build`
```shell
$ docker build -t [image_name] .
```

---
### 2 `docker image` 常用指令
```shell
$ docker image ls
$ docker image pull NAME:[tag] # 下載image
$ docker run NAME:[tag] # 執行image, 建立container
```

```shell
# 刪除image
$ docker image rm IMAGE 
$ docker rmi IMAGE
```



# Refernce
- [https://www.youtube.com/watch?v=mPquwpxyUQU](https://www.youtube.com/watch?v=mPquwpxyUQU)
- [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
- [Docker 操作簡介 - command / dockerfile / docker-compose](https://eandev.com/post/series/build-automated-deploy/docker-operate/)