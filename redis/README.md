# redis with docker

> TODO: 
> 1. Redis cluster building
> 2. Redis cluster management


## 1. pull redis image from docker hub
```
$ docker pull redis:latest
```

## 2. check the docker image is existed or not.
```
$ docker images
```

## 3. (option 1) execute a container by cli
```
#                        <names>                 <image>
$ docker run -itd --name redis-test -p 6379:6379 redis
```

## 4. (option 2) execute a docker-compose.yml file 
`ignore`

## 5. go into redis service in docker
```
$ docker exec -it <container ID> redis-cli
```


# Reference
- [https://www.runoob.com/docker/docker-install-redis.html](https://www.runoob.com/docker/docker-install-redis.html)
- [https://hub.docker.com/_/redis/tags](https://hub.docker.com/_/redis/tags)
- [https://zhuanlan.zhihu.com/p/542192212](https://zhuanlan.zhihu.com/p/542192212)
- [https://www.runoob.com/docker/docker-install-redis.html](https://www.runoob.com/docker/docker-install-redis.html)
- [Redis｜用 Docker 架設 Redis Cluster](https://blog.bimap.com.tw/2021/06/10/dockerize-redis-cluster-tutorial)
