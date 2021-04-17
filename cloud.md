# Cloud Setup


## Setup WordPress on Google Cloud Platform

[Google Cloud Platform](https://console.cloud.google.com/)

- Create an instance
  - Project Name
  - Boot disk (Ubuntu or Debian)
  - Firewall: Allow traffic
  - get External IP
- SSH into External IP
  - `ssh <USERNAME>@<EXTERNAL_IP> -i ~/.ssh/google_compute_engine`
- Download WordPress and unzip
  - `tar -xvzf latest.tar.gz`
- Install tools for WordPress via root
  - `mv wp-config-sample.php $ wp-config.php`
  - edit `wp-config.php`
    - `DB_NAME` -> `wpdb`
    - `DB_USER` -> `wpadmin`
    - `DB_PASSWORD` -> `root`
    - Update salts
  - `sudo su`
- Install Apache
  - `apt-get update && $ apt-get install apache2`
  - `service apache2 status`
  - `sudo vim /etc/apache2/apache2.conf`
    - change `<Directory /var/www/>` to `<Directory /home/<username>/wordpress/>`
    - `AllowOverride Yes`
  - `sudo vim /etc/apache2/sites-enabled/000-default.conf`
    - change `DocumentRoot /var/www/html` to `DocumentRoot /home/<username>/wordpress`
- Install php
  - `sudo apt-get install php libapache2-mod-php php-mysql`
  - `php -v`
- Change WordPress ownership permission so apache can access it
  - `sudo chown -R www-data:www-data wordpress/`
  - `sudo service apache2 restart`
  - `sudo service apache2 status`
- Install MySQL
  - `apt-get install mysql-server`
  - `mysql_secure_installation`
  - Enter into mysql
    - `mysql -u root -p` then type `root`'s password
    - `CREATE USER 'wpadmin'@'localhost' IDENTIFIED BY 'password'`
    - `create database wpdb;`
    - `GRANT ALL PRIVILEGES ON database_name.* TO 'wpadmin'@'localhost';`

