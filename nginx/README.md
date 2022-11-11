# nginx with docker

## 1. pull nginx image from docker hub
```
$ docker pull nginx:latest
```

## 2. check the docker image is existed or not.
```
$ docker images
```

## 3. (option 1) execute a container by cli
```
#                        <names>               <image>
$ docker run -itd --name nginx-test -p 8080:80 nginx
```

## 4. (option 2) execute a `docker-compose.yml` file 
`ignore`

## 5. go into redis service in docker
```
$ docker exec -it <container ID> /bin/bash
```


# Reference
- [https://www.runoob.com/docker/docker-install-nginx.html](https://www.runoob.com/docker/docker-install-nginx.html)
