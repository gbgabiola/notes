# Interesting cheat sheets

## General
- [Dev hints](https://devhints.io/)
- [Awesome cheat sheets](https://github.com/LeCoupa/awesome-cheatsheets#readme)

## Machine Learning
- [Machine Learning cheat sheet](https://github.com/soulmachine/machine-learning-cheat-sheet)

## Python

- [Python 3 cheat sheet](https://perso.limsi.fr/pointal/_media/python:cours:mementopython3-english.pdf)
- [Pipenv](#pipenv-cheat-sheet)
- [Django 2.x](#django-2.x-cheat-sheet)
- [Django Deployment to Ubuntu 18.04](#django-deployment-to-ubuntu-18.04)

## DevOps
- [General](#general)
- [Machine Learning](#machine-learning)
- [Python](#python)
- [DevOps](#devops)
- [Pipenv](#pipenv)
- [Django 2.x](#django-2x)
- [Django Deployment to Ubuntu 18.04](#django-deployment-to-ubuntu-1804)
- [Basic Shell Scripting](#basic-shell-scripting)
- [NPM Commands](#npm-commands)
- [YARN Commands](#yarn-commands)
- [SSH](#ssh)
- [Docker Commands, Help & Tipcs](#docker-commands-help--tipcs)

---

## Pipenv

### Install pipenv

```py
pip3 install pipenv
```

### Activate

```py
pipenv shell
```

### Check version of Python

```py
python --version
```

### Check path

```py
python
>>> import sys
>>> sys.executable
quit()
```

### Install a package

```py
pipenv install camelcase
```

### Check local packages

```py
pipenv lock -r
```

### Uninstall a package

```py
pipenv uninstall camelcase
```

### Install a dev package

```py
pipenv install nose --dev
```

### Install from requirements.txt

```py
pipenv install -r ./requirements.txt
```

### Check security vulnerabilities

```py
pipenv check
```

### Check dependency graph

```py
pipenv graph
```

### Ignore pipfile

```py
pipenv install --ignore-pipfile
```

### Set lockfile - before deployment

```py
pipenv lock
```

### Exiting the virtualenv

```py
exit
```

### Run with pipenv

```py
pipenv run *
```


## Django 2.x

### Creating a virtual environment

We need to create a virtual env for our app to run in: [More Here](https://docs.python.org/3/library/venv.html)  
Run this command in whatever folder you want to create your venv folder

```py
python -m venv ./venv
```

### Activate the virtualenv

```py
# Mac/Linux
source ./venv/bin/activate

# Windows
venv\Scripts\activate.bat - May need to add full path (c:\users\....venv\Scripts\activate.bat)
```

### Escape from venv

```py
deactivate
```

### Check packages installed in that venv

```py
pip freeze
```

### Install Django

```py
pip install django
```

### Create your project

```py
django-admin startproject PROJECTNAME
```

### Run Server (http://127.0.0.1:8000) CTRL+C to stop

```py
python manage.py runserver
```

### Create an app

```py
python manage.py start app APPNAME
```

### Create migrations

```py
python manage.py makemigrations
```

### Run migration

```py
python manage.py migrate
```

### Collect Static Files

```py
python manage.py collectstatic
```

---

## Django Deployment to Ubuntu 18.04

In this guide I will go through all the steps to create a VPS, secure it and deploy a Django application. This is a summarized document from this [digital ocean doc](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04)

Any commands with "$" at the beginning run on your local machine and any "#" run when logged into the server

#### Create A Digital Ocean Droplet

Use [this link](https://m.do.co/c/5424d440c63a) and get $10 free. Just select the $5 plan unless this a production app.

### Security & Access

#### Creating SSH keys (Optional)

You can choose to create SSH keys to login if you want. If not, you will get the password sent to your email to login via SSH

To generate a key on your local machine

```sh
$ ssh-keygen
```

Hit enter all the way through and it will create a public and private key at

```sh
~/.ssh/id_rsa
~/.ssh/id_rsa.pub
```

You want to copy the public key (.pub file)

```sh
$ cat ~/.ssh/id_rsa.pub
```

Copy the entire output and add as an SSH key for Digital Ocean

#### Login To Your Server

If you setup SSH keys correctly the command below will let you right in. If you did not use SSH keys, it will ask for a password. This is the one that was mailed to you

```sh
$ ssh root@YOUR_SERVER_IP
```

#### Create a new user

It will ask for a password, use something secure. You can just hit enter through all the fields. I used the user "djangoadmin" but you can use anything

```sh
$ adduser djangoadmin
```

#### Give root privileges

```sh
$ usermod -aG sudo djangoadmin
```

#### SSH keys for the new user

Now we need to setup SSH keys for the new user. You will need to get them from your local machine

#### Exit the server

You need to copy the key from your local machine so either exit or open a new terminal

```sh
$ exit
```

You can generate a different key if you want but we will use the same one so lets output it, select it and copy it

```sh
$ cat ~/.ssh/id_rsa.pub
```

#### Log back into the server

```sh
$ ssh root@YOUR_SERVER_IP
```

#### Add SSH key for new user

Navigate to the new users home folder and create a file at `'.ssh/authorized_keys'` and paste in the key

```sh
$ cd /home/djangoadmin
$ mkdir .ssh
$ cd .ssh
$ nano authorized_keys
Paste the key and hit "ctrl-x", hit "y" to save and "enter" to exit
```

#### Login as new user

You should now get let in as the new user

```sh
$ ssh djangoadmin@YOUR_SERVER_IP
```

#### Disable root login

```sh
$ sudo nano /etc/ssh/sshd_config
```

#### Change the following

```sh
PermitRootLogin no
PasswordAuthentication no
```

#### Reload sshd service

```sh
$ sudo systemctl reload sshd
```

### Simple Firewall Setup

See which apps are registered with the firewall

```sh
$ sudo ufw app list
```

#### Allow OpenSSH

```sh
$ sudo ufw allow OpenSSH
```

#### Enable firewall

```sh
$ sudo ufw enable
```

#### To check status

```sh
$ sudo ufw status
```

We are now done with access and security and will move on to installing software

### Software

#### Update packages

```sh
$ sudo apt update
$ sudo apt upgrade
```

#### Install Python 3, Postgres & NGINX

```sh
$ sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl
```

### Postgres Database & User Setup

```sh
$ sudo -u postgres psql
```

You should now be logged into the pg shell

#### Create a database

```sh
CREATE DATABASE btre_prod;
```

#### Create user

```sh
CREATE USER dbadmin WITH PASSWORD 'abc123!';
```

#### Set default encoding, tansaction isolation scheme (Recommended from Django)

```sh
ALTER ROLE dbadmin SET client_encoding TO 'utf8';
ALTER ROLE dbadmin SET default_transaction_isolation TO 'read committed';
ALTER ROLE dbadmin SET timezone TO 'UTC';
```

#### Give User access to database

```sh
GRANT ALL PRIVILEGES ON DATABASE btre_prod TO dbadmin;
```

#### Quit out of Postgres

```sh
\q
```

### Vitrual Environment

You need to install the python3-venv package

```sh
$ sudo apt install python3-venv
```

#### Create project directory

```sh
$ mkdir pyapps
$ cd pyapps
```

#### Create venv

```sh
$ python3 -m venv ./venv
```

#### Activate the environment

```sh
$ source venv/bin/activate
```

### Git & Upload

#### Pip dependencies

From your local machine, create a requirements.txt with your app dependencies. Make sure you push this to your repo

```sh
$ pip freeze > requirements.txt
```

Create a new repo and push to it (you guys know how to do that)

#### Clone the project into the app folder on your server (Either HTTPS or setup SSH keys)

```sh
$ git clone https://github.com/yourgithubname/btre_project.git
```

#### Install pip modules from requirements

You could manually install each one as well

```sh
$ pip install -r requirements.txt
```

### Local Settings Setup

Add code to your settings.py file and push to server

```py
try:
    from .local_settings import *
except ImportError:
    pass
```

Create a file called **local_settings.py** on your server along side of settings.py and add the following

- SECRET_KEY
- ALLOWED_HOSTS
- DATABASES
- DEBUG
- EMAIL\_\*

#### Run Migrations

```sh
$ python manage.py makemigrations
$ python manage.py migrate
```

#### Create super user

```sh
$ python manage.py createsuperuser
```

#### Create static files

```sh
python manage.py collectstatic
```

#### Create exception for port 8000

```sh
$ sudo ufw allow 8000
```

#### Run Server

```sh
$ python manage.py runserver 0.0.0.0:8000
```

#### Test the site at YOUR_SERVER_IP:8000

Add some data in the admin area

### Gunicorn Setup

Install gunicorn

```sh
$ pip install gunicorn
```

Add to requirements.txt

```sh
$ pip freeze > requirements.txt
```

#### Test Gunicorn serve

```sh
$ gunicorn --bind 0.0.0.0:8000 btre.wsgi
```

Your images, etc will be gone

#### Stop server & deactivate virtual env

```sh
ctrl-c
$ deactivate
```

#### Open gunicorn.socket file

```sh
$ sudo nano /etc/systemd/system/gunicorn.socket
```

#### Copy this code, paste it in and save

```sh
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

#### Open gunicorn.service file

```sh
$ sudo nano /etc/systemd/system/gunicorn.service
```

#### Copy this code, paste it in and save

```sh
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=djangoadmin
Group=www-data
WorkingDirectory=/home/djangoadmin/pyapps/btre_project
ExecStart=/home/djangoadmin/pyapps/venv/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          btre.wsgi:application

[Install]
WantedBy=multi-user.target
```

#### Start and enable Gunicorn socket

```sh
$ sudo systemctl start gunicorn.socket
$ sudo systemctl enable gunicorn.socket
```

#### Check status of guinicorn

```sh
$ sudo systemctl status gunicorn.socket
```

#### Check the existence of gunicorn.sock

```sh
$ file /run/gunicorn.sock
```

### NGINX Setup

#### Create project folder

```sh
$ sudo nano /etc/nginx/sites-available/btre_project
```

#### Copy this code and paste into the file

```sh
server {
    listen 80;
    server_name YOUR_IP_ADDRESS;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/djangoadmin/pyapps/btre_project;
    }
    
    location /media/ {
        root /home/djangoadmin/pyapps/btre_project;    
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

#### Enable the file by linking to the sites-enabled dir

```sh
$ sudo ln -s /etc/nginx/sites-available/btre_project /etc/nginx/sites-enabled
```

#### Test NGINX config

```sh
$ sudo nginx -t
```

#### Restart NGINX

```sh
$ sudo systemctl restart nginx
```

#### Remove port 8000 from firewall and open up our firewall to allow normal traffic on port 80

```sh
$ sudo ufw delete allow 8000
$ sudo ufw allow 'Nginx Full'
```

#### You will probably need to up the max upload size to be able to create listings with images

Open up the nginx conf file

```sh
$ sudo nano /etc/nginx/nginx.conf
```

#### Add this to the http{} area

```sh
client_max_body_size 20M;
```

#### Reload NGINX

```sh
$ sudo systemctl restart nginx
```

#### Media File Issue

You may have some issues with images not showing up. I would suggest, deleting all data and starting fresh as well as removeing the "photos" folder in the "media folder"

```sh
$ sudo rm -rf media/photos
```

### Domain Setup

Go to your domain registrar and create the following a record

```sh
@  A Record  YOUR_IP_ADDRESS
www  CNAME  example.com
```

#### Go to local_settings.py on the server and change "ALLOWED_HOSTS" to include the domain

```sh
ALLOWED_HOSTS = ['IP_ADDRESS', 'example.com', 'www.example.com']
```

#### Edit /etc/nginx/sites-available/btre_project

```sh
server {
    listen: 80;
    server_name xxx.xxx.xxx.xxx example.com www.example.com;
}
```

#### Reload NGINX & Gunicorn

```sh
$ sudo systemctl restart nginx
$ sudo systemctl restart gunicorn
```

---

## Basic Shell Scripting

```sh
#! /bin/bash
```

### Echo command

```sh
# echo Hello World!
```

### Variables

```sh
# Uppercase by convention
# Letters, numbers, underscores
NAME="Bob"
# echo "My name is $NAME"
# echo "My name is ${NAME}"
```

### User input

```sh
# read -p "Enter your name: " NAME
# echo "Hello $NAME, nice to meet you!"
```

### Simple if statement

```sh
# if [ "$NAME" == "Genesis" ]
# then
#   echo "Your name is Genesis"
# fi
```

### if-else

```sh
# if [ "$NAME" == "Genesis" ]
# then
#   echo "Your name is Genesis"
# else 
#   echo "Your name is NOT Genesis"
# fi
```

### else-if (elif)

```sh
# if [ "$NAME" == "Genesis" ]
# then
#   echo "Your name is Genesis"
# elif [ "$NAME" == "David" ]
# then  
#   echo "Your name is David"
# else 
#   echo "Your name is NOT Genesis or David"
# fi
```

### Comparisons

```sh
# NUM1=31
# NUM2=5
# if [ "$NUM1" -gt "$NUM2" ]
# then
#   echo "$NUM1 is greater than $NUM2"
# else
#   echo "$NUM1 is less than $NUM2"
# fi
```

```sh
########
# val1 -eq val2 Returns true if the values are equal
# val1 -ne val2 Returns true if the values are not equal
# val1 -gt val2 Returns true if val1 is greater than val2
# val1 -ge val2 Returns true if val1 is greater than or equal to val2
# val1 -lt val2 Returns true if val1 is less than val2
# val1 -le val2 Returns true if val1 is less than or equal to val2
########
```

### File conditions

```sh
# FILE="test.txt"
# if [ -e "$FILE" ]
# then
#   echo "$FILE exists"
# else
#   echo "$FILE does NOT exist"
# fi
```

```sh
########
# -d file   True if the file is a directory
# -e file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
# -f file   True if the provided string is a file
# -g file   True if the group id is set on a file
# -r file   True if the file is readable
# -s file   True if the file has a non-zero size
# -u    True if the user id is set on a file
# -w    True if the file is writable
# -x    True if the file is an executable
########
```

### Case statement

```sh
# read -p "Are you 21 or over? Y/N " ANSWER
# case "$ANSWER" in 
#   [yY] | [yY][eE][sS])
#     echo "You can have a beer :)"
#     ;;
#   [nN] | [nN][oO])
#     echo "Sorry, no drinking"
#     ;;
#   *)
#     echo "Please enter y/yes or n/no"
#     ;;
# esac
```

### Simple for loop

```sh
# NAMES="Genesis Moises David Jessie"
# for NAME in $NAMES
#   do
#     echo "Hello $NAME"
# done
```

### For loop to rename files

```sh
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES  
#   do
#     echo "Renaming $FILE to new-$FILE"
#     mv $FILE $NEW-$FILE
# done
```

### While loop - read through a file line by line

```sh
# LINE=1
# while read -r CURRENT_LINE
#   do
#     echo "$LINE: $CURRENT_LINE"
#     ((LINE++))
# done < "./new-1.txt"
```

### Function

```sh
# function sayHello() {
#   echo "Hello World"
# }
# sayHello
```

### Function with params

```sh
# function greet() {
#   echo "Hello, I am $1 and I am $2"
# }

# greet "Genesis" "25"
```

### Create folder and write to a file

```sh
# mkdir hello
# touch "hello/world.txt"
# echo "Hello World" >> "hello/world.txt"
# echo "Created hello/world.txt"
```

---

## NPM Commands

### Get version

```sh
$ npm -v # or --version
```

### Get help

```sh
$ npm help
$ npm
```

### Create `package.json`

```sh
$ npm init
$ npm init -y (or --yes)
```

### Set defaults

```sh
$ npm config set init-author-name "YOUR NAME"
$ npm set init-license "MIT"
```

### Get defaults

```sh
$ npm config get init-author-name
$ npm get init-license
```

### Remove defaults

```sh
$ npm config delete init-author-name
$ npm delete init-license
```

### Installing local packages

```sh
$ npm install <packageName>
$ npm install -D <packageName> # dev-dependency
```

### Install without dev-dependencies

```sh
$ npm install --production
```

### Removing packages

```sh
$ npm uninstall -D <packageName># or npm remove <packageName> --save-dev
```

### Install certain versions

```sh
$ npm install <packageName>@6.3.13
```

### Update

```sh
$ npm update <packageName>
```

### Install global packages

```sh
$ npm install -g <packageName>
```

### Find root folder

```sh
$ npm root -g
```

### Remove global packages

```sh
$ npm remove -g <packageName>
```

### Listing packages

```sh
$ npm list
$ npm list --depth 0
$ npm list --depth 1
```

### NPM script

```json
"scripts": {
    "start": "node index.js",
    "dev": "live-server"
},
```

---

## YARN Commands

### Get version

```sh
yarn -v (or --version)
```

### Get help

```sh
yarn help
```

### Create `package.json`

```sh
yarn init
yarn init -y # Use defaults
```

### Set defaults

```sh
yarn config set init-license ISC
```

### Get defaults

```sh
yarn config get init-license
```

### Remove defaults

```sh
yarn delete init-license
```

### Installing local packages

```sh
yarn add lodash
yarn add moment
```

### Install from package.json

```sh
(add "gulp":"*")
yarn install
```

### Removing packages

```sh
yarn remove lodash
```

### Install certain versions

```sh
yarn add lodash@4.17.3
```

### Find outdated versions

```sh
yarn outdated lodash
yarn outdated
```

### Upgrade

```sh
yarn upgrade lodash
yarn upgrade
```

### Install global packages (global must be put right after yarn)

```sh
yarn global add nodemon
```

### Find root folder

```sh
yarn global bin
```

### Remove global packages

```sh
yarn global remove nodemon
```

### Listing packages

```sh
yarn list
yarn list --depth=0
yarn list --depth=1
yarn list --pattern gulp
```

### Installing as dev dependency

```sh
yarn add gulp -D or --dev
```

### Remove dev dependency

```sh
yarn remove gulp
```

### Verify that versions  match lock file

```sh
yarn check
```

### Create yarn.lock file

```sh
yarn import
```

### Add script

```json
"scripts": {
    "dev": "nodemon index.js"
  },
```

### Run script

```sh
yarn run dev
```

### Get licenses

```sh
yarn license
```

### Create gzip archive of dependencies

```sh
yarn pack
yarn pack mydep
```

### List global cache packages

```sh
yarn cache list
yarn cache list --pattern lodash
```

---

## SSH

#### Login via SSH with password (Local Server)

```sh
$ ssh <username>@192.168.1.29
```

#### Create folder, file, install Apache (Just messing around)

```sh
$ mkdir test
$ cd test
$ touch hello.txt
$ sudo apt-get install apache2
```

#### Generate Keys (Local Machine)

```sh
$ ssh-keygen
```

#### Add Key to server in one command

```sh
> cat ~/.ssh/id_rsa.pub | ssh <username>@192.168.1.29 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >>  ~/.ssh/authorized_keys
```

#### Create & copy a file to the server using SCP

```sh
$ touch test.txt
$ scp ~/test.txt <username>@192.168.1.29:~
```

### Digital Ocean

> Create account->create droplet

#### Create Keys For Droplet (id_rsa_do)

```sh
$ ssh-keygen -t rsa
```

> Add Key When Creating Droplet

#### Try logging in

```sh
$ ssh root@doserver
```

#### If it doesn't work

```sh
$ ssh-add ~/.ssh/id_rsa_do # or whatever name you used
```

#### Login should now work

```sh
$ ssh root@doserver
```

#### Update packages

```sh
$ sudo apt update
$ sudo apt upgrade
```

#### Create new user with sudo

```sh
$ adduser <username>
$ usermod -aG sudo <username>
$ id <username>
```

#### Login as <username>

```sh
> ssh <username>@doserver
```

#### We need to add the key to <username> .ssh on the server, log back in as root

```sh
$ ssh root@doserver
$ cd /home/<username>
$ mkdir .ssh
$ cd .ssh
$ touch authorized_keys
> sudo nano authorized_keys # paste in the id_rsa_do.pub key, exit and log in as <username>
```

#### Disable root password login

```sh
$ sudo nano /etc/ssh/sshd_config
```

#### Set the following

```sh
PermitRootLogin no
PasswordAuthentication no
```

#### Reload sshd service

```sh
$ sudo systemctl reload sshd
```

#### Change owner of /home/<username>/* to <username>

```sh
$ sudo chown -R <username>:<username> /home/<username>
```

#### May need to set permission

```sh
$ chmod 700 /home/<username>/.ssh
```

#### Install Apache and visit ip

```sh
$ sudo apt install apache2 -y
```

### Github
#### Generate Github Key(On Server)

```sh
$ ssh-keygen -t rsa
```
(id_rsa_github or whatever you want)

#### Add new key

```sh
$ ssh-add /home/genesis/.ssh/id_rsa_github
```

#### If you get a message about auth agent, run this and try again

```sh
$ eval `ssh-agent -s
```

#### Clone repo

```sh
$ git clone git@github.com:<username>/react_otka_auth.git
```

#### Install Node

```sh
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

#### Install Dependencies

```sh
$ npm install
```

#### Start Dev Server and visit ip:3000

```sh
$ npm start
```

#### Build Out React App

```sh
$ npm run build
```

#### Move static build to web server root

```sh
$ sudo mv -v /home/<username>/react_otka_auth/build/* /var/www/html
```

### Resources

- [SSH Crash Course | With Some DevOps](https://www.youtube.com/watch?v=hQWRp-FdTpc)

---

## Docker Commands, Help & Tipcs

#### Show commands & management commands

```sh
$ docker
```

#### Docker version info

```sh
$ docker version
```

#### Show info like number of containers, etc

```sh
$ docker info
```

### WORKING WITH CONTAINERS

#### Create an run a container in foreground

```sh
$ docker container run -it -p 80:80 nginx
```

#### Create an run a container in background

```sh
$ docker container run -d -p 80:80 nginx
```

#### Shorthand

```sh
$ docker container run -d -p 80:80 nginx
```

#### Naming Containers

```sh
$ docker container run -d -p 80:80 --name nginx-server nginx
```

#### TIP: WHAT RUN DID
- Looked for image called nginx in image cache
- If not found in cache, it looks to the default image repo on Dockerhub
- Pulled it down (latest version), stored in the image cache
- Started it in a new container
- We specified to take port 80- on the host and forward to port 80 on the container
- We could do "$ docker container run --publish 8000:80 --detach nginx" to use port 8000
- We can specify versions like "nginx:1.09"

#### List running containers

```sh
$ docker container ls
```

OR


```sh
$ docker ps
```

#### List all containers (Even if not running)

```sh
$ docker container ls -a
```

#### Stop container

```sh
$ docker container stop [ID]
```

#### Stop all running containers

```sh
$ docker stop $(docker ps -aq)
```

#### Remove container (Can not remove running containers, must stop first)

```sh
$ docker container rm [ID]
```

#### To remove a running container use force(-f)

```sh
$ docker container rm -f [ID]
```

#### Remove multiple containers

```sh
$ docker container rm [ID] [ID] [ID]
```

#### Remove all containers

```sh
$ docker rm $(docker ps -aq)
```

#### Get logs (Use name or ID)

```sh
$ docker container logs [NAME]
```

#### List processes running in container

```sh
$ docker container top [NAME]
```

#### TIP: About Containers

Docker containers are often compared to virtual machines but they are actually just processes running on your host os. In Windows/Mac, Docker runs in a mini-VM so to see the processes youll need to connect directly to that. On Linux however you can run "ps aux" and see the processes directly

### Image Commands

#### List the images we have pulled

```sh
$ docker image ls
```

#### We can also just pull down images

```sh
$ docker pull [IMAGE]
```

#### Remove image

```sh
$ docker image rm [IMAGE]
```

#### Remove all images

```sh
$ docker rmi $(docker images -a -q)
```

#### TIP: About Images

- Images are app bianaries and dependencies with meta data about the image data and how to run the image
- Images are no a complete OS. No kernel, kernel modules (drivers)
- Host provides the kernel, big difference between VM

#### Some sample container creation

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

### Container Info

#### View info on container

```sh
$ docker container inspect [NAME]
```

#### Specific property (--format)

```sh
$ docker container inspect --format '{{ .NetworkSettings.IPAddress }}' [NAME]
```

#### Performance stats (cpu, mem, network, disk, etc)

```sh
$ docker container stats [NAME]
```

### Accessing Containers

#### Create new nginx container and bash into

```sh
$ docker container run -it --name [NAME] nginx bash
```

- i = interactive Keep STDIN open if not attached
- t = tty - Open prompt

_For Git Bash, use "winpty"_

```sh
$ winpty docker container run -it --name [NAME] nginx bash
```

#### Run/Create Ubuntu container

```sh
$ docker container run -it --name ubuntu ubuntu
```

_(no bash because ubuntu uses bash by default)_

#### You can also make it so when you exit the container does not stay by using the -rm flag

```sh
$ docker container run --rm -it --name [NAME] ubuntu
```

#### Access an already created container, start with -ai

```sh
$ docker container start -ai ubuntu
```

#### Use exec to edit config, etc

```sh
$ docker container exec -it mysql bash
```

#### Alpine is a very small Linux distro good for docker

```sh
$ docker container run -it alpine sh
```

(use sh because it does not include bash)
(alpine uses apk for its package manager - can install bash if you want)

### Networking

#### "bridge" or "docker0" is the default network

#### Get port

```sh
$ docker container port [NAME]
```

#### List networks

```sh
$ docker network ls
```

#### Inspect network

```sh
$ docker network inspect [NETWORK_NAME]
("bridge" is default)
```

#### Create network

```sh
$ docker network create [NETWORK_NAME]
```

#### Create container on network

```sh
$ docker container run -d --name [NAME] --network [NETWORK_NAME] nginx
```

#### Connect existing container to network

```sh
$ docker network connect [NETWORK_NAME] [CONTAINER_NAME]
```

#### Disconnect container from network

```sh
$ docker network disconnect [NETWORK_NAME] [CONTAINER_NAME]
```

#### Detach network from container

```sh
$ docker network disconnect
```

### Image Tagging & Pushinh to Dockerhub

tags are labels that point to an image ID

```sh
$ docker image ls
```
Youll see that each image has a tag

#### Retag existing image

```sh
$ docker image tag nginx ggabiola/nginx
```

#### Upload to dockerhub

```sh
$ docker image push genesisgabiola/nginx
```

#### If denied, do

```sh
$ docker login
```

#### Add tag to new image

```sh
$ docker image tag genesisgabiola/nginx genesisgabiola/nginx:testing
```

#### Dockerfile Parts

- FROM - The os used. Common is alpine, debian, ubuntu
- ENV - Environment variables
- RUN - Run commands/shell scripts, etc
- EXPOSE - Ports to expose
- CMD - Final command run when you launch a new container from image
- WORKDIR - Sets working directory (also could use 'RUN cd /some/path')
- COPY # Copies files from host to container

#### Build image from dockerfile (reponame can be whatever)

#### From the same directory as Dockerfile

```sh
$ docker image build -t [REPONAME] .
```

#### TIP: Cache & Order

- If you re-run the build, it will be quick because everythging is cached.
- If you change one line and re-run, that line and everything after will not be cached
- Keep things that change the most toward the bottom of the Dockerfile

### Extending Dockerfile

#### Custom Dockerfile for html paqge with nginx

```sh
FROM nginx:latest # Extends nginx so everything included in that image is included here
WORKDIR /usr/share/nginx/html
COPY index.html index.html
```

#### Build image from Dockerfile

```sh
$ docker image build -t nginx-website
```

#### Running it

```sh
$ docker container run -p 80:80 --rm nginx-website
```

#### Tag and push to Dockerhub

```sh
$ docker image tag nginx-website:latest ggabiola/nginx-website:latest
$ docker image push genesisgabiola/nginx-website
```

### Volumes

#### Volume - Makes special location outside of container UFS. Used for databases

#### Bind Mount -Link container path to host path

#### Check volumes

```sh
$ docker volume ls
```

#### Cleanup unused volumes

```sh
$ docker volume prune
```

#### Pull down mysql image to test

```sh
$ docker pull mysql
```

#### Inspect and see volume

```sh
$ docker image inspect mysql
```

#### Run container

```sh
$ docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysql
```

#### Inspect and see volume in container

```sh
$ docker container inspect mysql
```

#### TIP: Mounts

- You will also see the volume under mounts
- Container gets its own uniqe location on the host to store that data
- Source: xxx is where it lives on the host

#### Check volumes

```sh
$ docker volume ls
```

_There is no way to tell volumes apart for instance with 2 mysql containers, so we used named volumes_

#### Named volumes (Add -v command)(the name here is mysql-db which could be anything)

```sh
$ docker container run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=True -v mysql-db:/var/lib/mysql mysql
```

#### Inspect new named volume

```sh
docker volume inspect mysql-db
```

### Bind Mounts

- Can not use in Dockerfile, specified at run time (uses -v as well)
- ... run -v /Users/<username>/stuff:/path/container (mac/linux)
- ... run -v //c/Users/<username>/stuff:/path/container (windows)

_TIP: Instead of typing out local path, for working directory use $(pwd):/path/container - On windows may not work unless you are in your users folder_

#### Run and be able to edit index.html file (local dir should have the Dockerfile and the index.html)

```sh
$ docker container run  -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
```

#### Go into the container and check

```sh
$ docker container exec -it nginx bash
$ cd /usr/share/nginx/html
$ ls -al
```

#### You could create a file in the container and it will exist on the host as well

```sh
$ touch test.txt
```

### Docker Compose

- Configure relationships between containers
- Save our docker container run settings in easy to read file
- 2 Parts: YAML File (docker.compose.yml) + CLI tool (docker-compose)

#### 1. docker.compose.yml - Describes solutions for

- containers
- networks
- volumes

#### 2. docker-compose CLI - used for local dev/test automation with YAML files
#### Sample compose file (From Bret Fishers course)

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

#### To run

```sh
docker-compose up
```

#### You can run in background with

```sh
docker-compose up -d
```

#### To cleanup

```sh
docker-compose down
```

---
