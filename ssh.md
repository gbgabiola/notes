# SSH

## Table of Contents <!-- omit in toc -->

- [SSH Basics](#ssh-basics)
- [SSH on Digital Ocean](#ssh-on-digital-ocean)
- [SSH on Github](#ssh-on-github)
- [ssh “permission are too open” error](#ssh-permission-are-too-open-error)
- [git@github.com: Permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists.](#gitgithubcom-permission-denied-publickey-fatal-could-not-read-from-remote-repository-please-make-sure-you-have-the-correct-access-rights-and-the-repository-exists)
- [Use SSH in place of HTTPS](#use-ssh-in-place-of-https)
- [Using SSH over the HTTPS port](#using-ssh-over-the-https-port)
- [How to authenticate with GitHub using SSH](#how-to-authenticate-with-github-using-ssh)
- [Use multiple SSH keys](#use-multiple-ssh-keys)
- [Multiple SSH Keys settings for different github account](#multiple-ssh-keys-settings-for-different-github-account)
- [Re-use SSH keys, from one machine to another](#re-use-ssh-keys-from-one-machine-to-another)
- [Sharing SSH With WSL](#sharing-ssh-with-wsl)
- [Resources](#resources)


## SSH Basics

Login via SSH with password (Local Server):

```sh
$ ssh <USERNAME>@192.168.1.29
```

Create folder, file, install Apache:

```sh
$ mkdir test
$ cd test
$ touch hello.txt
$ sudo apt-get install apache2
```

Generate Keys (Local Machine):

```sh
$ ssh-keygen
```

Add Key to server in one command:

```sh
$ cat ~/.ssh/id_rsa.pub | ssh <USERNAME>@192.168.1.29 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >>  ~/.ssh/authorized_keys
```

Create & copy a file to the server using SCP:

```sh
$ touch test.txt
$ scp ~/test.txt <USERNAME>@192.168.1.29:~
```


## SSH on Digital Ocean

> Create account->create droplet

Create Keys For Droplet (id_rsa_do):

```sh
$ ssh-keygen -t rsa
```

> Add Key When Creating Droplet

Try logging in:

```sh
$ ssh root@doserver
```

If it doesn't work:

```sh
$ ssh-add ~/.ssh/id_rsa_do # or whatever name you used
```

Login should now work:

```sh
$ ssh root@doserver
```

Update packages:

```sh
$ sudo apt update
$ sudo apt upgrade
```

Create new user with sudo:

```sh
$ adduser <USERNAME>
$ usermod -aG sudo <USERNAME>
$ id <USERNAME>
```

Login as `<USERNAME>`:

```sh
$ ssh <USERNAME>@doserver
```

We need to add the key to `<USERNAME>` .ssh on the server, log back in as root:

```sh
$ ssh root@doserver
$ cd /home/<USERNAME>
$ mkdir .ssh
$ cd .ssh
$ touch authorized_keys
$ sudo vim authorized_keys # paste in the id_rsa_do.pub key, exit and log in as <USERNAME>
```

Disable root password login:

```sh
$ sudo vim /etc/ssh/sshd_config
```

Set the following:

```sh
PermitRootLogin no
PasswordAuthentication no
```

Reload sshd service:

```sh
$ sudo systemctl reload sshd
```

Change owner of `/home/<USERNAME>/*` to `<USERNAME>`:

```sh
$ sudo chown -R <USERNAME>:<USERNAME> /home/<USERNAME>
```

May need to set permission:

```sh
$ chmod 700 /home/<USERNAME>/.ssh
```

Install Apache and visit ip:

```sh
$ sudo apt install apache2 -y
```


## SSH on Github

Generate Github Key (On Server):

```sh
$ ssh-keygen -t rsa
# (id_rsa_github or whatever you want)
```

Add new key:

```sh
$ ssh-add /home/genesis/.ssh/id_rsa_github
```

If you get a message about auth agent, run this and try again:

```sh
$ eval `ssh-agent -s
```

Clone repo:

```sh
$ git clone git@github.com:<USERNAME>/react_otka_auth.git
```

Install Node:

```sh
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Install Dependencies:

```sh
$ npm install
```

Start Dev Server and visit ip:3000:

```sh
$ npm start
```

Build Out React App:

```sh
$ npm run build
```

Move static build to web server root:

```sh
$ sudo mv -v /home/<USERNAME>/react_otka_auth/build/* /var/www/html
```


## [ssh “permission are too open” error](https://stackoverflow.com/questions/9270734/ssh-permissions-are-too-open-error)

Keys need to be only readable by you:

```sh
$ chmod 400 ~/.ssh/id_rsa # set read only for you
$ chmod 600 ~/.ssh/id_rsa # or set read-write only for you
```


## git@github.com: Permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists.

- [Error: Permission denied (publickey)](https://help.github.com/articles/error-permission-denied-publickey)
1. [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh)
2. [Checked for existing SSH keys](https://help.github.com/articles/checking-for-existing-ssh-keys)
3. [Generated a new SSH key and added it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
4. [Adding a new SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account)
5. [Testing your SSH connection](https://help.github.com/articles/testing-your-ssh-connection)


## Use SSH in place of HTTPS

```sh
$ git remote set-url origin git@github.com:username/repo-name-here.git
```

Where username is the `username` of the repo owner and `repo-name-here` is the name of that user's repository.


## Using SSH over the HTTPS port

Test if SSH over HTTPS is possible with:

```sh
$ ssh -T -p 443 git@ssh.github.com
> Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

If you get a response then, edit `~/.ssh/config` file and add:

```sh
Host github.com
  Hostname ssh.github.com
  Port 443
```

Check that you have a key already:

```sh
$ ssh-add -l

# if nothing add in your key
$ ssh-add ~/.ssh/id_rsa
```


You can test that this works by connecting once more to GitHub:

```sh
$ ssh -T git@github.com
> Hi username! You've successfully authenticated, but GitHub does not
> provide shell access.
```


## How to authenticate with GitHub using SSH

Check if there are no `rsa` files:

```sh
$ ls -al ~/.ssh
```

If there's nothing there then generate a new keygen with:

```sh
ssh-keygen -t rsa -b 4096 -C your@email.com # add your email address 👍
```

Now using `ls -al ~/.ssh` will show our `id_rsa.pub` file.

Add the SSH key to the SSH agent:
```sh
# for mac and Linux from bash, also from Windows Git Bash
$ eval "$(ssh-agent -s)"

# for Git Bash on Windows
$ eval `ssh-agent -s`

# fir Fish shell
$ eval (ssh-agent -c)
```

Add RSA key to SSH with:

```sh
$ ssh-add ~/.ssh/id_rsa
```

Copy your key to clipboard with one of the following:

```sh
$ clip < ~/.ssh/id_rsa.pub # Windows
$ cat ~/.ssh/id_rsa.pub # Linux
$ pbcopy < ~/.ssh/id_github.pub # Mac
```

Add a new SSH Key to your GitHub profile from the [settings](https://github.com/settings/keys) page by clicking the [New SSH key](https://github.com/settings/ssh/new) button and paste in your key. Save it...

Then authenticate with:

```sh
$ ssh -T git@github.com
```

If you go back to the GitHub setting page and refresh, the key icon
should go from black to green.

### SSH Keys With Passwords

Add a password to your SSH key you will find yourself entering the password to authenticate on each [pull, push] operation.

Add the following line to your `~/.ssh/config/` file:

```sh
AddKeysToAgent yes
```

The SSH agent will also need to be started on each terminal session now to store the keys in, add the following to your `~/.bashrc` file:

```sh
[ -z "$SSH_AUTH_SOCK" ] && eval "$(ssh-agent -s)"
```

Now the SSH agent will start on each terminal session and you will only be prompted for the password on the first `pull`, `push` operation.


## Use multiple SSH keys

If you have more than one GitHub account or if you have AWS code commit account then you will need to set up a `config` file, add your SSH key and give it a different name:

```sh
$ ls ~/.ssh
~/.ssh/id_rsa_github_1
~/.ssh/id_rsa_github_2
~/.ssh/id_rsa_git_aws
```

You can delete all cached keys before, with:

```sh
$ ssh-add -D
```

You can check your saved keys, with:

```sh
$ ssh-add -l
```

Set up the SSH config file, check to see if you haven't got a `config` file already set up with:

```sh
$ ls -al ~/.ssh/
```

If you haven't got a `config` file there then:

```sh
$ cd ~/.ssh/
$ touch config
```

Add your configuration:

```sh
AddKeysToAgent yes

# github_1 account
Host github.com-github_1
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_github_1

# github_2 account
Host github.com-github_2
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_github_2

# AWS code commit account
Host git-codecommit.*.amazonaws.com
	User AWSUSERNAME
	IdentityFile ~/.ssh/id_rsa_git_aws
```


## [Multiple SSH Keys settings for different github account](https://gist.github.com/jexchan/2351996)

#### create different public key

create different ssh key according the article [Set Up Git](https://docs.github.com/en/github/getting-started-with-github/set-up-git)

```sh
$ ssh-keygen -t rsa -C "your_email@youremail.com"
```

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
$ vim -a config
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

`cd gfs_jexchan` and modify `git config`:

```sh
$ git config user.name "jexchan"
$ git config user.email "jexchan@gmail.com" 

$ git config user.name "activehacker"
$ git config user.email "jexlab@gmail.com" 
```

or you can have global git config `$ git config --global user.name "jexchan"` `$ git config --global user.email "jexchan@gmail.com"`

then use normal flow to push your code:

```sh
$ git add .
$ git commit -m "your comments"
$ git push
```


## Re-use SSH keys, from one machine to another

If you want to avoid creating multiple SSH keys for different environments and move your `.ssh` folder from one machine to another then you can do the following:

Copy your `.ssh` and `.gitconfig` files:

```sh
# Copy from Linux to Windows
$ cp ~/.ssh/* /c/Users/Scott.Spence/.linuxFiles/.ssh/
$ cp ~/.gitconfig /c/Users/Scott.Spence/.linuxFiles/

# Copy from Windows to Linux
$ cp /mnt/c/Users/Scott.Spence/.linuxFiles/.ssh/* ~/.ssh/
$ cp /mnt/c/Users/Scott.Spence/.linuxFiles/.* ~/

# Reset the permissions back to default:
$ sudo chmod 600 ~/.ssh/id_rsa
$ sudo chmod 600 ~/.ssh/id_rsa.pub
$ chmod 644 ~/.gitconfig
```

Start the SSH agent with:

```sh
$ eval "$(ssh-agent -s)" # for mac and Linux from bash, also from Windows Git Bash
```

Add your SSH key to the `ssh-agent` with:

```sh
$ ssh-add ~/.ssh/id_rsa
```

Then authenticate with:

```sh
$ ssh -T git@github.com # GitHub
$ ssh -T git@bitbucket.org # Bitbucket
```


## [Sharing SSH With WSL](https://geedew.com/Sharing-SSH-With-WSL/)

The first step within the WSL is to create an SSH config for your user that will use the Windows user’s files for keys.

```sh
$ mkdir -p ~/.ssh/config
$ touch ~/.ssh/config # create a config only if it doesn't exist
$ vim ~/.ssh/config # begin editing the config
```

Once in the Vim program, enter the following config:

```sh
Host * IdentityFile /mnt/c/Users/WINDOWS_USER_NAME/.ssh/NAME_OF_KEY
```

You must replace `WINDOWS_USER_NAME` with the name of the account being used in windows. Also, tell the config file the `NAME_OF_KEY` that you’d like to share. Usually this is `id_rsa`.  
Finally, save the new config file and then we must change it’s permissions so that Linux will allow it to be used.

```sh
$ chmod 600 ~/.ssh/config
$ chown $USER ~/.ssh/config
```

We are also able to share `known_hosts` so that the servers we are connecting to are in both environments.

```sh
$ touch /mnt/c/Users/WINDOWS_USER_NAME/.ssh/known_hosts
$ ln -s /mnt/c/Users/WINDOWS_USER_NAME/.ssh/known_hosts ~/.ssh/known_hosts
```

This creates a symlink with the Windows `known_hosts` for better sharing in the system.


## Resources

- [SSH Crash Course | With Some DevOps](https://www.youtube.com/watch?v=hQWRp-FdTpc)
