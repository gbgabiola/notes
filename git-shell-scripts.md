# Related Error Messages, Questions, or Problems in Git or Terminal Commands

- [Git](#git)
- [WSL/Linux](#wsllinux)
- [NPM](#npm)
- [ZSH](#zsh)


## Git

### git@github.com: Permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists.

- [Error: Permission denied (publickey)](https://help.github.com/articles/error-permission-denied-publickey)
1. [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh)
2. [Checked for existing SSH keys](https://help.github.com/articles/checking-for-existing-ssh-keys)
3. [Generated a new SSH key and added it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
4. [Adding a new SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account)
5. [Testing your SSH connection](https://help.github.com/articles/testing-your-ssh-connection)


### [Multiple SSH Keys settings for different github account](https://gist.github.com/jexchan/2351996)

#### create different public key

create different ssh key according the article [Mac Set-Up Git](http://help.github.com/mac-set-up-git/)

```sh
$ ssh-keygen -t rsa -C "your_email@youremail.com"
```

Please refer to [github ssh issues](http://help.github.com/ssh-issues) for common problems.

for example, 2 keys created at:

```sh
~/.ssh/id_rsa_activehacker
~/.ssh/id_rsa_jexchan
```

then, add these two keys as following:

```sh
$ ssh-add ~/.ssh/id_rsa_activehacker
$ ssh-add ~/.ssh/id_rsa_jexchan
```

you can delete all cached keys before

```sh
$ ssh-add -D
```

finally, you can check your saved keys

```sh
$ ssh-add -l
```

#### Modify the ssh config

```sh
$ cd ~/.ssh/
$ touch config
$ subl -a config
```

Then added
```sh
#activehacker account
Host github.com-activehacker
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_activehacker
	#IdentitiesOnly yes # SSH config block to force it to only use the `IdentityFile` you specified.

#jexchan account
Host github.com-jexchan
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_jexchan
```

#### Clone your repo and modify your Git config
clone your repo `git clone git@github.com:activehacker/gfs.git gfs_jexchan`

`cd gfs_jexchan` and modify `git config`
```sh
$ git config user.name "jexchan"
$ git config user.email "jexchan@gmail.com" 

$ git config user.name "activehacker"
$ git config user.email "jexlab@gmail.com" 
```

or you can have global git config `$ git config --global user.name "jexchan"` `$ git config --global user.email "jexchan@gmail.com"`

then use normal flow to push your code
```sh
$ git add .
$ git commit -m "your comments"
$ git push
```


### Maintaining multiple GitHub accounts
```sh
# Set user 1 as current user
gitfirst() {
  git config --global user.email 'xxx.yyyy@gmail.com' && git config --global user.name 'mrprofessor'
    gituser
}

# Set user 2 as current user
gitsecond() {
  git config --global user.email 'zzzzz@corporation.com' && git config --global user.name 'rudrabot'
    gituser
}

# Print current user
gituser() {
  git config --global user.name && git config --global user.email
}
```

### [How to use Visual Studio Code as Default Editor for Git](https://stackoverflow.com/questions/30024353/how-to-use-visual-studio-code-as-default-editor-for-git)
   1. Make sure you can run `code --help` from the command line and you get help.
      - if you do not see help, please follow these steps:
	     - Mac: Select **Shell Command: Install 'Code'** command in path from the Command Palette.
		 - Windows: Make sure you selected Add to PATH during the installation.
		 - Linux: Make sure you installed Code via our new .deb or .rpm packages.
   2. From the command line, run `git config --global core.editor "code --wait"`
   
Now you can run git config --global -e and use VS Code as editor for configuring Git.

Add the following to enable support for using VS Code as diff tool:

```sh
[diff]
    tool = default-difftool
[difftool "default-difftool"]
    cmd = code --wait --diff $LOCAL $REMOTE
```

This leverages the new `--diff` option you can pass to VS Code to compare two files side by side.

To summarize, here are some examples of where you can use Git with VS Code:

- `git rebase HEAD~3 -i` allows to interactive rebase using VS Code
- `git commit` allows to use VS Code for the commit message
- `git add -p` followed by e for interactive add
- `git difftool <commit>^ <commit>` allows to use VS Code as diff editor for changes


### Caching your GitHub password in Git (Linux)

Turn on the credential helper so that Git will save your password in memory for some time. By default, Git will cache your password for 15 minutes.

1. In Terminal, enter the following:
  ```sh
  $ git config --global credential.helper cache
  # Set git to use the credential memory cache
  ```
2. To change the default password cache timeout, enter the following:
  ```sh
  $ git config --global credential.helper 'cache --timeout=3600'
  # Set the cache to timeout after 1 hour (setting is in seconds)
  ```

### Using SSH over the HTTPS port

To test if SSH over the HTTPS port is possible, run this SSH command:

```sh
$ ssh -T -p 443 git@ssh.github.com
> Hi username! You've successfully authenticated, but GitHub does not
> provide shell access.
```

#### Enabling SSH connections over HTTPS

If you are able to SSH into `git@ssh.github.com` over port 443, you can override your SSH settings to force any connection to GitHub to run though that server and port.

To set this in your ssh config, edit the file at `~/.ssh/config`, and add this section:

```sh
Host github.com
  Hostname ssh.github.com
  Port 443
```

You can test that this works by connecting once more to GitHub:

```sh
$ ssh -T git@github.com
> Hi username! You've successfully authenticated, but GitHub does not
> provide shell access.
```


### [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/)

The `git remote set-url` command takes two arguments:
- An existing remote name. For example, origin or upstream are two common choices.
- A new URL for the remote. For example:
  - If you're updating to use HTTPS, your URL might look like:
  
  ```sh
  https://github.com/USERNAME/REPOSITORY.git
  ```
  
  - If you're updating to use SSH, your URL might look like:
  
  ```sh
  git@github.com:USERNAME/REPOSITORY.git
  ```

#### Switching remote URLs from SSH to HTTPS

1. Open Git Bash.
2. Change the current working directory to your local project.
3. List your existing remotes in order to get the name of the remote you want to change.

```sh
$ git remote -v
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```

4. Change your remote's URL from SSH to HTTPS with the `git remote set-url` command.

```sh
$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

5. Verify that the remote URL has changed.

```sh
$ git remote -v
# Verify new remote URL
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

The next time you `git fetch`, `git pull`, or `git push` to the remote repository, you'll be asked for your GitHub username and password.

- If you have [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa) enabled, you must [create a personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line) to use instead of your GitHub password.

#### Switching remote URLs from HTTPS to SSH

1. Open Git Bash.
2. Change the current working directory to your local project.
3. List your existing remotes in order to get the name of the remote you want to change.

```sh
$ git remote -v
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

4. Change your remote's URL from HTTPS to SSH with the `git remote set-url` command.

```sh
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

5. Verify that the remote URL has changed.

```sh
$ git remote -v
# Verify new remote URL
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```


### [Delete Branch both Remote and Locally

```sh
$ git push --delete <remote_name> <branch_name> // Delete Remote Branch
$ git branch -d <branch_name> // Delete Local Branch
```


### [Ssh “permission are too open” Error](https://www.poftut.com/ssh-permission-open-error/)

Ssh is secure protocol andit tries to make everything properly to continue securely. There are a lot of different ssh security configuration. It one of them are violated ssh do not operates one of them is

```sh
Permissions 0777 for '/Users/username/.ssh/id_rsa' are too open.
It is recommended that your private key files are NOT accessible by others.
This private key will be ignored.
```

error.  It is related with the permission of id_rsa file. If the permission is like 777 it will give this error and will not start. To correct this error the permission of the id_rsa file has to changed more secure level like 600.

```sh
root@ubu1:~# chmod 400 .ssh/id_rsa 
root@ubu1:~# ls -al .ssh/id_rsa 
-r-------- 1 root root 1675 Nov  2 16:33 .ssh/id_rsa
```

---

## WSL/Linux

### This folder is not located in drive D, but it's showing

```sh
rd /s "\\?\D:\bad\folder\path "
```


### [How can I tell which version of Ubuntu I'm running](https://www.howtogeek.com/278152/how-to-update-the-windows-bash-shell/)

```sh
lsb_release -a
lsb_release -sd // determine what version of Ubuntu you're running
lsb_release -sc // codename of your distribution
sudo do-release-upgrade // upgrade a full Ubuntu environment to a new release
```


### Edit bashrc or any other files in linux

```sh
nano ~/.bashrc // to edit file using nano
// alias winhome='cd /mnt/c/Users/Genesis/'

source ~/.bashrc // source the file for those changes to take effect
winhome // will go to the set folder directly
```


### [How do I pause/resume download and install from terminal?](https://askubuntu.com/questions/219242/how-do-i-pause-resume-download-and-install-from-terminal#answer-219271)

`Ctrl`+`c` cancels it but next time start from where you left `Ctrl`+`z` stops process but then you can't do another process as it remains locked to the first process

Using one of the above methods is generally better than just closing the terminal, but if you just close the terminal while it's downloading packages, it should start the download right where it stopped next time you run `sudo apt-get upgrade`

If you want to restart the download after using `Ctrl`+`z`:

1. Check paused tasks by typing `jobs` in the terminal
2. To resume a process, type `fg`
3. If you have multiple tasks, then type `fg 1`, `fg 2`, etc…


### Modify Your Hosts File

1. Open a terminal window.
2. Open the hosts file in a text editor (you can use any text editor) by typing the following line: `sudo nano /etc/hosts`
3. Enter your domain user password.
4. Make the necessary changes to the file.
5. Press **Control-x**.
6. When asked if you want to save your changes, answer **y**.


### [How can I get octal file permissions from command line](https://askubuntu.com/questions/152001/how-can-i-get-octal-file-permissions-from-command-line)

```sh
stat -c "%a %n" *
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

**Usage:**
- With files:

  ```sh
  $ stat -c "%a %n" ./Documents/Udev.html
  664 ./Documents/Udev.html
  ```
  
- With folders:

  ```sh
  $ stat -c "%a %n" ./Documents/
  755 ./Documents/
  ```

[Reference](http://thenubbyadmin.com/2012/02/16/how-to-list-linux-file-permissions-in-octal-notation/)


### [How to clean up unnecessary files](https://askubuntu.com/questions/187326/how-to-clean-up-unnecessary-files)

To clean some packages laying around, run the following:

```sh
$ sudo apt-get autoremove
$ sudo apt-get clean
$ sudo apt-get autoclean
```


### What is the correct way to completely remove an application?

It will purge required packages along with dependencies that are installed with those packages. The `--auto-remove` option (being an alias of `autoremove`) works similar to `sudo apt-get autoremove`. By using this command we can run a single command:

```sh
sudo apt-get purge --auto-remove packagename
```

Instead of:

```sh
sudo apt-get purge packagename
sudo apt-get autoremove
```


### [Changing the home directory of user on Windows Subsystem for Linux](https://superuser.com/questions/1132626/changing-home-directory-of-user-on-windows-subsystem-for-linux)

1. Enter bash
2. Type the command  `sudo vim /etc/passwd`
3. Find your account's line, which might look like: `harry:x:1000:1000:"",,,:/home/harry:/bin/bash`
4. Change the home directory, which above is `/home/harry`, to the new directory, using WSL notation
5. Save the file
6. Exit bash and re-launch it
7. To test, use the commands:

    ```sh
    $ cd ~
    $ pwd
    ```


### [How to open windows explorer from current working directory of WSL shell?](https://superuser.com/questions/1338991/how-to-open-windows-explorer-from-current-working-directory-of-wsl-shell#answer-1385493)

To **open the current directory in Explorer** - use the following (WSL sets the Windows path by itself):

```sh
explorer.exe .
```

You can **set alias** with `.bashrc` for a custom command:

```sh
echo 'alias explorer="explorer.exe ."' >> ~/.bashrc
source ~/.bashrc
```

Now just use:

```sh
explorer 
```

to open the current working directory in Windows Explorer.


### [Sharing SSH With WSL](https://geedew.com/Sharing-SSH-With-WSL/)

The first step within the WSL is to create an SSH config for your user that will use the Windows user’s files for keys.

```sh
mkdir -p ~/.ssh/config
touch ~/.ssh/config # create a config only if it doesn't exist
vi ~/.ssh/config #begin editing the config
```

Once in the Vi program (or use nano or whatever you like to edit with) enter the following config.

```sh
Host * IdentityFile /mnt/c/Users/WINDOWS_USER_NAME/.ssh/NAME_OF_KEY
```

You must replace `WINDOWS_USER_NAME` with the name of the account being used in windows. Also, tell the config file the `NAME_OF_KEY` that you’d like to share. Usually this is `id_rsa`.  
Finally, save the new config file and then we must change it’s permissions so that Linux will allow it to be used.

```sh
chmod 600 ~/.ssh/config
chown $USER ~/.ssh/config
```

We are also able to share `known_hosts` so that the servers we are connecting to are in both environments.

```sh
touch /mnt/c/Users/WINDOWS_USER_NAME/.ssh/known_hosts
ln -s /mnt/c/Users/WINDOWS_USER_NAME/.ssh/known_hosts ~/.ssh/known_hosts
```

This creates a symlink with the Windows `known_hosts` for better sharing in the system.

---

## NPM

### [npm ERR! Unexpected end of JSON input while parsing...](https://github.com/trufflesuite/ganache-cli/issues/505)

```sh
$ rm -rf node_modules package-lock.json
$ npm cache clean --force
```


### EACCESS ERROR FIX

lets say for example you trying to install webpack
```sh
sudo npm install -g webpack@4.25.1
```

and get an error `Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/webpack/node_modules/fsevents/build'`

then try again to install it but with this at the end `--unsafe-perm=true --allow-root`

```sh
sudo npm install -g webpack@4.25.1 --unsafe-perm=true --allow-root
```


###

---

## ZSH

### [How do I hide the “user@hostname” info](https://github.com/agnoster/agnoster-zsh-theme/issues/39)

Open your .zshrc and paste this at the bottom:

```sh
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
  fi
}
```

This makes only your username to appear. If you don't want that too, just comment out this line `prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"`


### [zsh compinit: insecure directories and files, run compaudit for list.](https://github.com/zsh-users/zsh-completions/issues/433#issuecomment-390600994)

1. run `compaudit` and it will give you a list of directories it thinks are unsecure
2. run `sudo chown -R  username:root target_directory`
3. run `sudo chmod -R 755 target_directory`


### [Folder permission "Insecure completion-dependent directories detected](https://github.com/robbyrussell/oh-my-zsh/issues/6835#issuecomment-390216875)

Set `ZSH_DISABLE_COMPFIX=true` in your zshrc file, before oh-my-zsh.sh is sourced, and update OMZ to the latest version. It should ignore these permission issues and load the completion system normally.

