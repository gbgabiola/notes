# Linux - Basic Comamands

- [Print working directory](#print-working-directory)
- [List files and folders](#list-files-and-folders)
- [Make directory](#make-directory)
- [Change directory](#change-directory)
- [Create a file](#create-a-file)
- [Show the content of a file](#show-the-content-of-a-file)
- [Rename or move file](#rename-or-move-file)
- [Copy file to a different file](#copy-file-to-a-different-file)
- [Move and copy to other location](#move-and-copy-to-other-location)
- [Delete or remove a file](#delete-or-remove-a-file)
- [Show files or folders location](#show-files-or-folders-location)
- [Show the lists of commands you enter](#show-the-lists-of-commands-you-enter)
- [Run as root user](#run-as-root-user)
- [Get build info](#get-build-info)
- [Get kernel version](#get-kernel-version)
- [Get architecture](#get-architecture)
- [See what Linux version](#see-what-linux-version)
- [Show network information](#show-network-information)
- [Show wireless network information](#show-wireless-network-information)
- [Ping another machine](#ping-another-machine)
- [Get build (Summary of the system)](#get-build-summary-of-the-system)
- [Show hard drives](#show-hard-drives)
- [Show the processes like task manager](#show-the-processes-like-task-manager)
- [Show available and unavailable disk space](#show-available-and-unavailable-disk-space)
- [Show the devices like USB hubs](#show-the-devices-like-usb-hubs)
- [Show the PCI stuff](#show-the-pci-stuff)
- [Install packages](#install-packages)
- [Remove packages](#remove-packages)
- [Check if there is available updates for packages on the system](#check-if-there-is-available-updates-for-packages-on-the-system)
- [To shutdown the system](#to-shutdown-the-system)
- [Force uninstall a package](#force-uninstall-a-package)


## Print working directory

```sh
pwd
```

## List files and folders

```sh
ls
ls -a # show hidden and system files
ls -l # show extra information
```

## Make directory

```sh
mkdir <folderName>
```

## Change directory

```sh
cd <folderName>
cd .. # to go back 1 level
cd / # root directory
cd # go to home directory
cd ~ # go to home directory
```

## Create a file

```sh
touch <fileName>
```

## Show the content of a file

```sh
cat <fileName>
less <fileName> # Show the content of a big file with page down
```

## Rename or move file

```sh
mv <fileName> <newFileName>
```

## Copy file to a different file

```sh
copy <fileName> <fileNameCopy>
```

## Move and copy to other location

```sh
cp <fileName> <locationPath/fileName>
```

## Delete or remove a file

```sh
rm <fileName> # Remove a file
rmdir <folderName> # Remove a folder
rm -r <folderName> # Remove a folder that is not empty
```

## Show files or folders location

```sh
$ which <fileName> # or <folderName>
```

## Show the lists of commands you enter

```sh
history
```

## Run as root user

```sh
sudo <commands>
```

## Get build info

```sh
uname -a
# Linux DESKTOP-KCGTGRV 4.4.0-43-Microsoft #1-Microsoft Wed Dec 31 14:42:53 PST 2014 x86_64 x86_64 x86_64 GNU/Linux
```

## Get kernel version

```sh
uname -r
```

## Get architecture

```sh
dpkg --print-architecture
# amd64
```

## See what Linux version

```sh
cat /etc/issue
# Debian GNU/Linux 9 \n \l
```

## Show network information

```sh
ifconfig
```

## Show wireless network information

```sh
iwconfig
```

## Ping another machine

```sh
ping google.com
```

## Get build (Summary of the system)

```sh
uname -a
```

## Show hard drives

```sh
blkid
```

## Show the processes like task manager

```sh
top
```

## Show available and unavailable disk space

```sh
df
```

## Show the devices like USB hubs

```sh
lsusb
```

## Show the PCI stuff

```sh
lspci
```

## Install packages

```sh
sudo apt-get install <packageName>
```

## Remove packages

```sh
sudo apt-get remove <packageName>
```

## Check if there is available updates for packages on the system

```sh
sudo apt-get update
```

## To shutdown the system

```sh
sudo shutdown -h
sudo shutdown -h 10 # with 10mins time
sudo shutdown -h now # Shutdown right away
sudo shutdown -r # Restart
```

## Force uninstall a package

Nuclear option:
https://askubuntu.com/questions/525088/how-to-delete-broken-packages-in-ubuntu
