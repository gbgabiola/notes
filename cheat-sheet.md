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
