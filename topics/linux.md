# Linux - Basic Comamands

Print Working Directory

```sh
$ pwd
```

List files and folders

```sh
$ ls
$ ls -a # show hidden and system files
$ ls -l # show extra information
```

Make Directory

```sh
$ mkdir <folderName>
```

Change Directory

```sh
$ cd <folderName>
$ cd .. # to go back 1 level
$ cd / # root directory
$ cd # go to home directory
$ cd ~ # go to home directory
```

Create a file

```sh
$ touch <fileName>
```

Show the content of a file

```sh
$ cat <fileName>
$ less <fileName> # Show the content of a big file with page down
```

Rename or move file

```sh
$ mv <fileName> <newFileName>
```

Copy file to a different file

```sh
$ copy <fileName> <fileNameCopy>
```

Move and copy to other location

```sh
$ cp <fileName> <locationPath/fileName>
```

Delete or remove a file

```sh
$ rm <fileName> # Remove a file
$ rmdir <folderName> # Remove a folder
$ rm -r <folderName> # Remove a folder that is not empty
```

Show files or folders location

```sh
$ which <fileName> # or <folderName>
```

Show the lists of commands you enter

```sh
$ history
```

Run as root user

```sh
$ sudo <commands>
```

Show network information

```sh
$ ifconfig
```

Show wireless network information

```sh
$ iwconfig
```

Ping another machine

```sh
$ ping google.com
```

Get build (Summary of the system)

```sh
$ uname -a
```

Show hard drives

```sh
$ blkid
```

Show the processes like task manager

```sh
$ top
```

Show available and unavailable disk space

```sh
$ df
```

Show the devices like USB hubs

```sh
$ lsusb
```

Show the PCI stuff

```sh
$ lspci
```

Install packages

```sh
$ sudo apt-get install <packageName>
```

Remove packages

```sh
$ sudo apt-get remove <packageName>
```

Check if there is available updates for packages on the system

```sh
$ sudo apt-get update
```

To shutdown the system

```sh
$ sudo shutdown -h
$ sudo shutdown -h 10 # with 10mins time
$ sudo shutdown -h now # Shutdown right away
$ sudo shutdown -r # Restart
```
