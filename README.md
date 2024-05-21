# learn-docker
learn how to use the docker tech.

- Dockerfile: 單個服務執行的部屬 (類似自動化腳本)
- docker-compose: 多個服務執行

```Dockerfile
# Dockerfile
RUN pip3 install -r requirements.txt # 建立image時使用的
CMD ["", ""] # 執行container時使用的
```


## basic docker commands
### 1. `docker ps`
only show the executing containers. 
```shell
$ sudo docker ps 
```

show all containers, even if the service of container is off.
```shell
$ sudo docker ps -a 
```

### 2. `docker stop`
```shell
$ docker stop <container ID>
```

### 3. `docker restart`
```shell
$ docker restart <container ID>
```

### 4. `docker rm`
```shell
$ docker rm <container ID>
```

### 5. `docker exec`
```shell
$ docker exec <container ID> /bin/bash

# for other shell script.
$ docker exec <container ID> /bin/sh

# for redis.
$ docker exec <container ID> redis-cli
```

### 6. `docker build`
```shell
$ docker build -t <image_name> .
```

# Refernce
- [https://www.youtube.com/watch?v=mPquwpxyUQU](https://www.youtube.com/watch?v=mPquwpxyUQU)
- [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)
- [Docker 操作簡介 - command / dockerfile / docker-compose](https://eandev.com/post/series/build-automated-deploy/docker-operate/)