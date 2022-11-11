# learn-docker
learn how to use the docker tech.


## basic docker commands
### 1. `docker ps`
only show the executing containers. 
```
$ sudo docker ps 
```

show all containers, even if the service of container is off.
```
$ sudo docker ps -a 
```

### 2. `docker stop`
```
$ docker stop <container ID>
```

### 3. `docker restart`
```
$ docker restart <container ID>
```

### 2. `docker rm`
```
$ docker rm <container ID>
```

### 2. `docker exec`
```
$ docker exec <container ID> /bin/bash

# for other shell script.
$ docker exec <container ID> /bin/sh

# for redis.
$ docker exec <container ID> redis-cli
```

# Refernce
- [https://www.youtube.com/watch?v=mPquwpxyUQU](https://www.youtube.com/watch?v=mPquwpxyUQU)
- [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)