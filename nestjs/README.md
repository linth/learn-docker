# nestjs build with docker

## 0. install some packages in global environment. 
```
# global environment.
$ npm i -g @nestjs/cli
```

## 1. create nestjs sample project.
```
$ nest new project-name
```

## 2. create a Dockerfile, and .dockerignore in the nestjs project.
```
# Dockerfile

FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "dist/main.js"]
```

```
# .dockerignore

Dockerfile
.dockerignore
node_modules
npm-debug.log
dist
```

## 3. build your docker (need to wait long time)
docker will download  image file necessarily, and execute your command.

```
$ docker build -t sample-nestjs-docker .
```

After executing the command: `docker build`, your docker image is generated.


## 4. your service is executed.
```
$ docker run -p 80:3000 -d sample-nestjs-docker
```

## 5. watch your website: http://localhost/


# Reference
- [https://www.youtube.com/watch?v=mPquwpxyUQU](https://www.youtube.com/watch?v=mPquwpxyUQU)
- [https://docs.nestjs.com/first-steps](https://docs.nestjs.com/first-steps)
- [Debugging Nest.js (TypeScript) in a Docker Container](https://qiita.com/rema424/items/36475ea7379e0d9c5972), good article.
- [Dockerizing NestJS Application](https://medium.com/@sujan.dumaru.official/dockerizing-nestjs-application-c4b25139fe4c)