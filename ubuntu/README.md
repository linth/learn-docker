# ubuntu with docker

## 1. pull nginx image from docker hub
you can use `docker search ubuntu` to find you want.
```
$ docker pull ubuntu:latest
```

## 2. check the docker image is existed or not.
```
$ docker images
```

## 3. (option 1) execute a container by cli
```
#                        <names>            <image>
$ docker run -itd --name ubuntu -p 8080:80  ubuntu
```

## 4. (option 2) execute a `docker-compose.yml` file 
`ignore`

## 5. go into ubuntu service in docker
```
$ docker exec -it <container ID> bash
```


# Reference
- [https://www.runoob.com/docker/docker-install-ubuntu.html](https://www.runoob.com/docker/docker-install-ubuntu.html)
