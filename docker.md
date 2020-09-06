# Docker Commands & Tips

## Table of Contents <!-- omit in toc -->

- [Docker Basics](#docker-basics)
- [Working with Containers](#working-with-containers)
- [Image Commands](#image-commands)
- [Container Info](#container-info)
- [Accessing Containers](#accessing-containers)
- [Networking](#networking)
- [Image Tagging & Pushinh to Dockerhub](#image-tagging--pushinh-to-dockerhub)
- [Extending Dockerfile](#extending-dockerfile)
- [Volumes](#volumes)
- [Bind Mounts](#bind-mounts)
- [Docker Compose](#docker-compose)
- [Wordpress & Docker](#wordpress--docker)


## Docker Basics

Show commands & management commands:

```sh
$ docker
```

Docker version info:

```sh
$ docker version
```

Show info like number of containers, etc:

```sh
$ docker info
```


## Working with Containers

Create an run a container in foreground:

```sh
$ docker container run -it -p 80:80 nginx
```

Create an run a container in background:

```sh
$ docker container run -d -p 80:80 nginx
```

Naming Containers:

```sh
$ docker container run -d -p 80:80 --name nginx-server nginx
```

**Tips**: What Run Did:

- Looked for image called nginx in image cache
- If not found in cache, it looks to the default image repo on Dockerhub
- Pulled it down (latest version), stored in the image cache
- Started it in a new container
- We specified to take port 80- on the host and forward to port 80 on the container
- We could do "$ docker container run --publish 8000:80 --detach nginx" to use port 8000
- We can specify versions like "nginx:1.09"

List running containers:

```sh
$ docker ps # docker container ls
```

List all containers (Even if not running):

```sh
$ docker container ls -a
```

Stop container:

```sh
$ docker container stop [ID]
```

Stop all running containers:

```sh
$ docker stop $(docker ps -aq)
```

Remove container (Can not remove running containers, must stop first):

```sh
$ docker container rm [ID]
```

To remove a running container use force(-f):

```sh
$ docker container rm -f [ID]
```

Remove multiple containers:

```sh
$ docker container rm [ID] [ID] [ID]
```

Remove all containers:

```sh
$ docker rm $(docker ps -aq)
```

Get logs (Use name or ID):

```sh
$ docker container logs [NAME]
```

List processes running in container:

```sh
$ docker container top [NAME]
```

**Tips**: About Containers

Docker containers are often compared to virtual machines but they are actually just processes running on your host os. In Windows/Mac, Docker runs in a mini-VM so to see the processes youll need to connect directly to that. On Linux however you can run "ps aux" and see the processes directly


## Image Commands

List the images we have pulled:

```sh
$ docker image ls
```

We can also just pull down images:

```sh
$ docker pull [IMAGE]
```

Remove image:

```sh
$ docker image rm [IMAGE]
```

Remove all images:

```sh
$ docker rmi $(docker images -a -q)
```

**Tips**: About Images

- Images are app bianaries and dependencies with meta data about the image data and how to run the image
- Images are no a complete OS. No kernel, kernel modules (drivers)
- Host provides the kernel, big difference between VM

### Some sample container creation

Nginx:

```sh
$ docker container run -d -p 80:80 --name nginx nginx (-p 80:80 is optional as it runs on 80 by default)
```

Apache:

```sh
$ docker container run -d -p 8080:80 --name apache httpd
```

MongoDB:

```sh
$ docker container run -d -p 27017:27017 --name mongo mongo
```

MySQL:

```sh
$ docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql
```


## Container Info

View info on container:

```sh
$ docker container inspect [NAME]
```

Specific property (--format):

```sh
$ docker container inspect --format '{{ .NetworkSettings.IPAddress }}' [NAME]
```

Performance stats (cpu, mem, network, disk, etc):

```sh
$ docker container stats [NAME]
```


## Accessing Containers

Create new nginx container and bash into:

```sh
$ docker container run -it --name [NAME] nginx bash
```

- i = interactive Keep STDIN open if not attached
- t = tty - Open prompt

_For Git Bash, use "winpty"_

```sh
$ winpty docker container run -it --name [NAME] nginx bash
```

Run/Create Ubuntu container:

```sh
$ docker container run -it --name ubuntu ubuntu
```

_(no bash because ubuntu uses bash by default)_

You can also make it so when you exit the container does not stay by using the `-rm` flag:

```sh
$ docker container run --rm -it --name [NAME] ubuntu
```

Access an already created container, start with -`ai`:

```sh
$ docker container start -ai ubuntu
```

Use exec to edit config, etc:

```sh
$ docker container exec -it mysql bash
```

Alpine is a very small Linux distro good for docker:

```sh
$ docker container run -it alpine sh
```

(use sh because it does not include bash)  
(alpine uses apk for its package manager - can install bash if you want)


## Networking

"bridge" or "docker0" is the default network

Get port:

```sh
$ docker container port [NAME]
```

List networks:

```sh
$ docker network ls
```

Inspect network:

```sh
$ docker network inspect [NETWORK_NAME]
("bridge" is default)
```

Create network:

```sh
$ docker network create [NETWORK_NAME]
```

Create container on network:

```sh
$ docker container run -d --name [NAME] --network [NETWORK_NAME] nginx
```

Connect existing container to network:

```sh
$ docker network connect [NETWORK_NAME] [CONTAINER_NAME]
```

Disconnect container from network:

```sh
$ docker network disconnect [NETWORK_NAME] [CONTAINER_NAME]
```

Detach network from container:

```sh
$ docker network disconnect
```


## Image Tagging & Pushinh to Dockerhub

Tags are labels that point to an image ID:

```sh
$ docker image ls
# Youll see that each image has a tag
```

Retag existing image:

```sh
$ docker image tag nginx ggabiola/nginx
```

Upload to dockerhub:

```sh
$ docker image push genesisgabiola/nginx
```

If denied, do:

```sh
$ docker login
```

Add tag to new image:

```sh
$ docker image tag genesisgabiola/nginx genesisgabiola/nginx:testing
```

Dockerfile Parts:

- `FROM` - The os used. Common is alpine, debian, ubuntu
- `ENV` - Environment variables
- `RUN` - Run commands/shell scripts, etc
- `EXPOSE` - Ports to expose
- `CMD` - Final command run when you launch a new container from image
- `WORKDIR` - Sets working directory (also could use 'RUN cd /some/path')
- `COPY` # Copies files from host to container

Build image from dockerfile (reponame can be whatever)

From the same directory as Dockerfile:

```sh
$ docker image build -t [REPONAME] .
```

**Tips**: Cache & Order

- If you re-run the build, it will be quick because everythging is cached.
- If you change one line and re-run, that line and everything after will not be cached
- Keep things that change the most toward the bottom of the Dockerfile


## Extending Dockerfile

Custom Dockerfile for html paqge with nginx:

```sh
FROM nginx:latest # Extends nginx so everything included in that image is included here
WORKDIR /usr/share/nginx/html
COPY index.html index.html
```

Build image from Dockerfile:

```sh
$ docker image build -t nginx-website
```

Running it:

```sh
$ docker container run -p 80:80 --rm nginx-website
```

Tag and push to Dockerhub:

```sh
$ docker image tag nginx-website:latest ggabiola/nginx-website:latest
$ docker image push genesisgabiola/nginx-website
```


## Volumes

- volumes makes special location outside of container UFS. Used for databases
- bind mounts link container path to host path

Check volumes:

```sh
$ docker volume ls
```

Cleanup unused volumes:

```sh
$ docker volume prune
```

Pull down mysql image to test:

```sh
$ docker pull mysql
```

Inspect and see volume:

```sh
$ docker image inspect mysql
```

Run container:

```sh
$ docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql
```

Inspect and see volume in container:

```sh
$ docker container inspect mysql
```

**Tips**: Mounts

- You will also see the volume under mounts
- Container gets its own uniqe location on the host to store that data
- Source: xxx is where it lives on the host


_There is no way to tell volumes apart for instance with 2 mysql containers, so we used named volumes_

Named volumes (Add `-v` command)(the name here is `mysql-db` which could be anything):

```sh
$ docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql
```

Inspect new named volume:

```sh
docker volume inspect mysql-db
```


## Bind Mounts

- Can not use in Dockerfile, specified at run time (uses -v as well)
- `... run -v /Users/<username>/stuff:/path/container (mac/linux)`
- `... run -v //c/Users/<username>/stuff:/path/container (windows)`

**Tips**: _Instead of typing out local path, for working directory use $(pwd):/path/container - On windows may not work unless you are in your users folder_

Run and be able to edit `index.html` file (local dir should have the Dockerfile and the `index.html`):

```sh
$ docker container run  -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
```

Go into the container and check:

```sh
$ docker container exec -it nginx bash
$ cd /usr/share/nginx/html
$ ls -al
```

You could create a file in the container and it will exist on the host as well:

```sh
$ touch test.txt
```


## Docker Compose

- Configure relationships between containers
- Save our docker container run settings in easy to read file
- 2 Parts: YAML File (`docker.compose.yml`) + CLI tool (docker-compose)

1. `docker.compose.yml` - Describes solutions for:
   - containers
   - networks
   - volumes

2. docker-compose CLI - used for local dev/test automation with YAML files

Sample compose file (From Bret Fishers course)

```sh
version: '2'

# same as
# docker run -p 80:4000 -v $(pwd):/site bretfisher/jekyll-serve

services:
  jekyll:
    image: bretfisher/jekyll-serve
    volumes:
      - .:/site
    ports:
      - '80:4000'
```

To run:

```sh
docker-compose up
```

You can run in background with:

```sh
docker-compose up -d
```

To cleanup:

```sh
docker-compose down
```


## [Wordpress & Docker](https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42)

Setup Wordpress, MySQL & PHPMyAdmin with a single command. Add the code below to a file called "docker-compose.yaml" and run the command

```sh
$ docker-compose up -d

# To Tear Down
$ docker-compose down --volumes
```

```
version: '3'

services:
  # Database
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    networks:
      - wpsite
  # phpmyadmin
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - '8080:80'
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: password 
    networks:
      - wpsite
  # Wordpress
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - '8000:80'
    restart: always
    volumes: ['./:/var/www/html']
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    networks:
      - wpsite
networks:
  wpsite:
volumes:
  db_data:
```
