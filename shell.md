# Shell

## Table of Contents <!-- omit in toc -->

- [Basic Scripting](#basic-scripting)
- [This folder is not located in drive D, but it's showing](#this-folder-is-not-located-in-drive-d-but-its-showing)
- [How can I tell which version of Ubuntu I'm running](#how-can-i-tell-which-version-of-ubuntu-im-running)
- [Edit .bashrc or any other files in linux](#edit-bashrc-or-any-other-files-in-linux)
- [How do I pause/resume download and install from terminal?](#how-do-i-pauseresume-download-and-install-from-terminal)
- [Modify Your Hosts File](#modify-your-hosts-file)
- [How can I get octal file permissions from command line](#how-can-i-get-octal-file-permissions-from-command-line)
- [How to clean up unnecessary files](#how-to-clean-up-unnecessary-files)
- [What is the correct way to completely remove an application?](#what-is-the-correct-way-to-completely-remove-an-application)
- [Changing the home directory of user on Windows Subsystem for Linux](#changing-the-home-directory-of-user-on-windows-subsystem-for-linux)
- [How to open windows explorer from current working directory of WSL shell?](#how-to-open-windows-explorer-from-current-working-directory-of-wsl-shell)
- [How do I hide the “user@hostname” info](#how-do-i-hide-the-userhostname-info)
- [zsh compinit: insecure directories and files, run compaudit for list.](#zsh-compinit-insecure-directories-and-files-run-compaudit-for-list)
- [Folder permission "Insecure completion-dependent directories detected](#folder-permission-insecure-completion-dependent-directories-detected)
- [Timing All ZSH Plugins Programmatically](#timing-all-zsh-plugins-programmatically)
- [WSL2 DNS stops working](#wsl2-dns-stops-working)
- [WSL2 automatically release disk space back to the host OS](#wsl2-automatically-release-disk-space-back-to-the-host-os)


## Basic Scripting

```sh
#! /bin/bash
```

Echo command:

```sh
echo Hello World!
```

Variables:

```sh
# Uppercase by convention
# Letters, numbers, underscores
NAME="Bob"
echo "My name is $NAME"
# echo "My name is ${NAME}"
```

User input:

```sh
read -p "Enter your name: " NAME
echo "Hello $NAME, nice to meet you!"
```

if statement:

```sh
if [ "$NAME" == "Genesis" ]
then
  echo "Your name is Genesis"
fi
```

if-else:

```sh
if [ "$NAME" == "Genesis" ]
then
  echo "Your name is Genesis"
else 
  echo "Your name is NOT Genesis"
fi
```

else-if (elif):

```sh
if [ "$NAME" == "Genesis" ]
then
  echo "Your name is Genesis"
elif [ "$NAME" == "David" ]
then  
  echo "Your name is David"
else 
  echo "Your name is NOT Genesis or David"
fi
```

Comparisons:

```sh
NUM1=31
NUM2=5
if [ "$NUM1" -gt "$NUM2" ]
then
  echo "$NUM1 is greater than $NUM2"
else
  echo "$NUM1 is less than $NUM2"
fi
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

File conditions:

```sh
FILE="test.txt"
if [ -e "$FILE" ]
then
  echo "$FILE exists"
else
  echo "$FILE does NOT exist"
fi
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

Case statement:

```sh
read -p "Are you 21 or over? Y/N " ANSWER
case "$ANSWER" in 
  [yY] | [yY][eE][sS])
    echo "You can have a beer :)"
    ;;
  [nN] | [nN][oO])
    echo "Sorry, no drinking"
    ;;
  *)
    echo "Please enter y/yes or n/no"
    ;;
esac
```

For loop:

```sh
NAMES="Genesis Moises David Jesh"
for NAME in $NAMES
  do
    echo "Hello $NAME"
done
```

For loop to rename files:

```sh
FILES=$(ls *.txt)
NEW="new"
for FILE in $FILES  
  do
    echo "Renaming $FILE to new-$FILE"
    mv $FILE $NEW-$FILE
done
```

While loop - read through a file line by line:

```sh
LINE=1
while read -r CURRENT_LINE
  do
    echo "$LINE: $CURRENT_LINE"
    ((LINE++))
done < "./new-1.txt"
```

Function:

```sh
function sayHello() {
  echo "Hello World"
}
sayHello
```

Function with params:

```sh
function greet() {
  echo "Hello, I am $1 and I am $2"
}

greet "Genesis" "25"
```

Create folder and write to a file:

```sh
mkdir hello
touch "hello/world.txt"
echo "Hello World" >> "hello/world.txt"
echo "Created hello/world.txt"
```


## This folder is not located in drive D, but it's showing

```sh
$ rd /s "\\?\D:\bad\folder\path "
```


## [How can I tell which version of Ubuntu I'm running](https://www.howtogeek.com/278152/how-to-update-the-windows-bash-shell/)

```sh
$ lsb_release -a
$ lsb_release -sd # determine what version of Ubuntu you're running
$ lsb_release -sc # codename of your distribution
sudo do-release-upgrade # upgrade a full Ubuntu environment to a new release
```


## Edit .bashrc or any other files in linux

```sh
$ vim ~/.bashrc
# alias winhome='cd /mnt/c/Users/<USERNAME>/'

$ source ~/.bashrc # source the file for those changes to take effect
winhome # will go to the set folder directly
```


## [How do I pause/resume download and install from terminal?](https://askubuntu.com/questions/219242/how-do-i-pause-resume-download-and-install-from-terminal#answer-219271)

`Ctrl`+`c` cancels it but next time start from where you left `Ctrl`+`z` stops process but then you can't do another process as it remains locked to the first process

Using one of the above methods is generally better than just closing the terminal, but if you just close the terminal while it's downloading packages, it should start the download right where it stopped next time you run `sudo apt-get upgrade`

If you want to restart the download after using `Ctrl`+`z`:

1. Check paused tasks by typing `jobs` in the terminal
2. To resume a process, type `fg`
3. If you have multiple tasks, then type `fg 1`, `fg 2`, etc…


## Modify Your Hosts File

1. Open a terminal window.
2. Open the hosts file in a text editor (you can use any text editor) by typing the following line: `sudo vim /etc/hosts`
3. Enter your domain user password.
4. Make the necessary changes to the file.
5. Press **Control-x**.
6. When asked if you want to save your changes, answer **y**.


## [How can I get octal file permissions from command line](https://askubuntu.com/questions/152001/how-can-i-get-octal-file-permissions-from-command-line)

```sh
$ stat -c "%a %n" *
```

Replace `*` with the relevant directory or the exact filename that you want to examine.

[From the man page of stat,](http://manpages.ubuntu.com/manpages/precise/en/man1/stat.1.html)

```sh
-c  --format=FORMAT
          use  the  specified  FORMAT instead of the default; output a newline after
          each use of FORMAT
%a     Access rights in octal
%n     File name
```

**Usage**:

```sh
# with files
$ stat -c "%a %n" ./Documents/Udev.html
664 ./Documents/Udev.html

# with folders
$ stat -c "%a %n" ./Documents/
755 ./Documents/
```

[Reference](http://thenubbyadmin.com/2012/02/16/how-to-list-linux-file-permissions-in-octal-notation/)


## [How to clean up unnecessary files](https://askubuntu.com/questions/187326/how-to-clean-up-unnecessary-files)

To clean some packages laying around, run the following:

```sh
$ sudo apt-get autoremove
$ sudo apt-get clean
$ sudo apt-get autoclean
```


## What is the correct way to completely remove an application?

It will purge required packages along with dependencies that are installed with those packages. The `--auto-remove` option (being an alias of `autoremove`) works similar to `sudo apt-get autoremove`. By using this command we can run a single command:

```sh
$ sudo apt-get purge --auto-remove packagename

# instead of
$ sudo apt-get purge packagename
$ sudo apt-get autoremove
```


## [Changing the home directory of user on Windows Subsystem for Linux](https://superuser.com/questions/1132626/changing-home-directory-of-user-on-windows-subsystem-for-linux)

1. Enter bash
2. Type the command  `sudo vim /etc/passwd`
3. Find your account's line, which might look like: `<USERNAME>:x:1000:1000:"",,,:/home/<USERNAME>:/bin/bash`
4. Change the home directory, which above is `/home/<USERNAME>`, to the new directory, using WSL notation
5. Save the file
6. Exit bash and re-launch it
7. To test, use the commands:

    ```sh
    $ cd ~
    $ pwd
    ```


## [How to open windows explorer from current working directory of WSL shell?](https://superuser.com/questions/1338991/how-to-open-windows-explorer-from-current-working-directory-of-wsl-shell#answer-1385493)

```sh
$ explorer.exe .
```

**Set alias** with `.bashrc` for a custom command:

```sh
$ echo 'alias explorer="explorer.exe ."' >> ~/.bashrc
$ source ~/.bashrc
```

To open the current working directory in Windows Explorer, you can just use:

```sh
$ explorer 
```


## [How do I hide the “user@hostname” info](https://github.com/agnoster/agnoster-zsh-theme/issues/39)

Open your .zshrc and paste this at the bottom:

```sh
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
  fi
}
```

This makes only your username to appear. If you don't want that too, just comment out this line `prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"`


## [zsh compinit: insecure directories and files, run compaudit for list.](https://github.com/zsh-users/zsh-completions/issues/433#issuecomment-390600994)

1. run `compaudit` and it will give you a list of directories it thinks are unsecure
2. run `sudo chown -R  username:root target_directory`
3. run `sudo chmod -R 755 target_directory`


## [Folder permission "Insecure completion-dependent directories detected](https://github.com/robbyrussell/oh-my-zsh/issues/6835#issuecomment-390216875)

Set `ZSH_DISABLE_COMPFIX=true` in your zshrc file, before oh-my-zsh.sh is sourced, and update OMZ to the latest version. It should ignore these permission issues and load the completion system normally.


## [Timing All ZSH Plugins Programmatically](https://blog.mattclemente.com/2020/06/26/oh-my-zsh-slow-to-load.html#timing-all-plugins-programmatically)

Update `~/.oh-my-zsh/oh-my-zsh.sh`

```sh
# Load all of the plugins that were defined in ~/.zshrc
for plugin ($plugins); do
  timer=$(($(python3 -c 'from time import time; print (int(round(time() * 1000)))')))
  #timer=$(($(python -c 'from time import time; print int(round(time() * 1000))')))
  if [ -f $ZSH_CUSTOM/plugins/$plugin/$plugin.plugin.zsh ]; then
    source $ZSH_CUSTOM/plugins/$plugin/$plugin.plugin.zsh
  elif [ -f $ZSH/plugins/$plugin/$plugin.plugin.zsh ]; then
    source $ZSH/plugins/$plugin/$plugin.plugin.zsh
  fi
  now=$(($(python3 -c 'from time import time; print (int(round(time() * 1000)))')))
  #now=$(($(python -c 'from time import time; print int(round(time() * 1000))')))
  elapsed=$(($now-$timer))
  echo $elapsed":" $plugin
done
```


## [WSL2 DNS stops working](https://github.com/microsoft/WSL/issues/4285#issuecomment-522201021)

1. Create a file: `/etc/wsl.conf`
2. Put the following lines in the file:

  ```sh
  [network]
  generateResolvConf = false
  ```

3. In a `cmd` window, run `wsl --shutdown`
4. Restart WSL2
5. Create a file: `/etc/resolv.conf`. If it exists, replace existing one with this new file.
6. Put the following lines in the file

  ```sh
  nameserver 8.8.8.8
  ```

7. Repeat step 3 and 4. You will see `git` working fine now.


## WSL2 automatically release disk space back to the host OS

### [Windows 10 Pro](https://github.com/microsoft/WSL/issues/4699#issuecomment-635673427)

```sh
### Optimize (shrink) WSL 2 .vhdx
## Must be run in PowerShell as Administrator user
# DistroFolder found at: $env:LOCALAPPDATA\Packages\
# Examples:
#   CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc
#   CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc

cd $env:LOCALAPPDATA\Packages\REPLACE_ME_WITH_TARGET_DISTRO_FOLDERNAME\LocalState\
wsl --shutdown
optimize-vhd -Path .\ext4.vhdx -Mode full
#Run `wsl` or your favorite terminal to resume use
```

### [Windows 10 Home](https://github.com/microsoft/WSL/issues/4699#issuecomment-627133168)

```sh
wsl --shutdown
diskpart
# open window Diskpart
select vdisk file="C:\WSL-Distros\…\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit
```
