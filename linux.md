# Linux

- [Linux Introduction](#linux-introduction)
- [Linux Distributions](#linux-distributions)
- [Linux Directory Structure](#linux-directory-structure)
- [The Shell](#the-shell)
- [Basic Linux Commands](#basic-linux-commands)


## Linux Introduction

- Linux is an operating system
- At the heart of the OS is the Linux Kernel
- Linux is the layer between applications and hardware
- Linux can be used as a server or a desktop
- Distributions are implementations of Linux, each with their own goals and focus

## Linux Distributions

- Linux Distro = kernel + software
- 2 most popular distro
  - redhat (use CentOS with different branding/logos)
  - Banks, Airlines, Telecoms, Healthcare
  - Ubuntu
  - Startups, SaaS, Social Networks, Cloud Based
- Other Linux distro
  - Linux Mint, Debian, Mageia, Fedora, openSUSE, Arch Linux, Slackware


## Linux Directory Structure

### Directory Listing

- **`/`** "Root", the top of the file system hierarchy
- **`/bin`** Binaries and other executable programs
- `/boot` Files needed to boot the operating system
- `/cdrom` Mount point for CD-ROMs
- `/cgroup` Control Groups hierarchy
- `/dev` Device files, typically controlled by the operating system and the system administrators
- **`/etc`** System configuration files
- `/export` Shared file systems
- **`/home`** Home directories
- `/lib` System Libraries
- `/lib64` System Libraries, 64 bit
- `/lost+found` Used by the file system to store recovered files after a file system check has been perform
- `/media` Used to mount removable media like CD-ROMs
- `/mnt` Used to mount external file systems
- **`/opt`** Optional or third party software
- `/proc` Provides info about running processes
- `/root` The home directory for the root account
- `/sbin` System administration binaries
- `/selinux` Used to display information about SELinux
- `/srv` Contains data which is served by the system
- `/srv/www` Web server files
- `/srv/ftp` FTP files
- `/sys` Used to display and sometimes configure the devices known to the Linux kernel
- **`/tmp`** Temporary space, typically cleared on reboot
- **`/usr`** User related programs, libraries, and docs
- `/usr/bin` Binaries and other executable programs
- `/usr/lib` Libraries
- `/usr/local` Locally installed software that is not part of the base operating system
- `/usr/sbin` System administration binaries
- **`/var`** Variable data, most notably log files
- `/var/log` Log files

### Application Directory Structures

- Applications that are not part of the base OS can be installed in:
  - `/usr/lcoal`
  - `/opt`
- programs installed in `/usr/local`
  - `/usr/local/crashplan/bin`
  - `/usr/local/crashplan/etc`
  - `/usr/local/crashplan/lib`
  - `/usr/local/crashplan/log`
- programs installed in `/opt`
  - `/opt/acme`
  - `/opt/acme/bin`
  - `/opt/acme/etc`
  - `/opt/acme/lib`
  - `/opt/acme/log`
- programs installed with company name then product name
  - `/opt/google`
  - `/opt/google/chrome`
  - `/opt/google/earth`
- other variation which add organization name
  - `/opt/web-team`
  - `/opt/acme/web-team`
  - `/usr/local/acme/web-team`
- other variation
  - `/etc/opt/myapp`
  - `/opt/myapp/bin`
  - `/opt/myapp/lib`
  - `/var/opt/myapp`
- sometimes installed without their own directory structure, and installed in a share manner 
  - `/usr/local/bin/myapp`
  - `/usr/local/etc/myapp.conf`
  - `/usr/local/lib/libmyspp.so`
- common practice `/opt/companyName`


## The Shell

- The default interface to Linux
- A program that accepts and executes commands 
- Also called as command line interpreter
- **Command Line Interface (CLI)** vs **Graphic User Interface (GUI)**
  - CLI can do everything a GUI can do
  - Server distros do not include GUIs
  - Desktop distros have GUIs and CLIs
- **The Prompt**
  - Displays current user and name of Linux system
  - `$` current user is a normal user
  - `#` current user is Superuser (root)
  - `~` represents home directory
  - **Tilde Expansion**
    - `~username` -> `/home/username`
    - `~root` -> `/root`
    - `~ftp` -> `/srv/ftp`
- **Root, the Superuser**
  - Root access is typically restricted to system administrators
  - Root access may be required to _install_, _start_, or _stop_ an application


## Basic Linux Commands

- `ls` Lists directory contents
  - `-l` long listing format
- `cd` Changes the current directory
- `pwd` Displays or print the current working directory
- `cat` Concatenates and displays files
- `echo` Displays arguments to the screen
- `man` Displays the online manual
- `exit` Exits shell or current session
- `clear` Clears the screen


### List files and folders

```sh
ls
ls -a # show hidden and system files
ls -l # show extra information
```

### Make directory

```sh
mkdir <folderName>
```

### Change directory

```sh
cd <folderName>
cd .. # to go back 1 level
cd / # root directory
cd # go to home directory
cd ~ # go to home directory
```

### Create a file

```sh
touch <fileName>
```

### Show the content of a file

```sh
cat <fileName>
less <fileName> # Show the content of a big file with page down
```

### Rename or move file

```sh
mv <fileName> <newFileName>
```

### Copy file to a different file

```sh
copy <fileName> <fileNameCopy>
```

### Move and copy to other location

```sh
cp <fileName> <locationPath/fileName>
```

### Delete or remove a file

```sh
rm <fileName> # Remove a file
rmdir <folderName> # Remove a folder
rm -r <folderName> # Remove a folder that is not empty
```

### Show files or folders location

```sh
$ which <fileName> # or <folderName>
```

### Show the lists of commands you enter

```sh
history
```

### Run as root user

```sh
sudo <commands>
```

### Get build info

```sh
uname -a
# Linux DESKTOP-KCGTGRV 4.4.0-43-Microsoft #1-Microsoft Wed Dec 31 14:42:53 PST 2014 x86_64 x86_64 x86_64 GNU/Linux
```

### Get kernel version

```sh
uname -r
```

### Get architecture

```sh
dpkg --print-architecture
# amd64
```

### See what Linux version

```sh
cat /etc/issue
# Debian GNU/Linux 9 \n \l
```

### Show network information

```sh
ifconfig
```

### Show wireless network information

```sh
iwconfig
```

### Ping another machine

```sh
ping google.com
```

### Get build (Summary of the system)

```sh
uname -a
```

### Show hard drives

```sh
blkid
```

### Show the processes like task manager

```sh
top
```

### Show available and unavailable disk space

```sh
df
```

### Show the devices like USB hubs

```sh
lsusb
```

### Show the PCI stuff

```sh
lspci
```

### Install packages

```sh
sudo apt-get install <packageName>
```

### Remove packages

```sh
sudo apt-get remove <packageName>
```

### Check if there is available updates for packages on the system

```sh
sudo apt-get update
```

### To shutdown the system

```sh
sudo shutdown -h
sudo shutdown -h 10 # with 10mins time
sudo shutdown -h now # Shutdown right away
sudo shutdown -r # Restart
```

### Force uninstall a package

Nuclear option:
https://askubuntu.com/questions/525088/how-to-delete-broken-packages-in-ubuntu
