# Related Error Messages, Questions, or Problems in Git or Terminal Commands

## Git
…or create a new repository on the command line
```
echo "# description of readme" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/username/gitName.git
git push -u origin master
```

…or push an existing repository from the command line
```
git remote add origin https://github.com/username/gitName.git
git push -u origin master
```

---

### Filename too long in git for windows
The better solution is enable the longpath parameter from git.

`git config --system core.longpaths true`

But a work arround that works is remove node_modules folder from git.
```sh
$ git rm -r --cached node_modules
$ vi .gitignore
```

Add node_modules in new row inside .gitignore file. After do this, push your modifications.
```sh
$ git add .gitignore
$ git commit -m "node_modules removed"
$ git push
```

---

### If you know the last commit message of the deleted branch you can do this:
```sh
git reflog
// # search for message
// fd0e4da HEAD@{14}: commit: This is the commit message I want
git checkout fd0e4da // # checkout revision
// or

git checkout HEAD@{14}
git branch my-recovered-branch // # create branch
git push origin my-recovered-branch:my-recovered-branch // # push branch

// other Alternative
git commit -m "Something terribly misguided" // this is what you want to undo
git reset HEAD~
// << edit files as necessary >>
git add ...
git commit -c ORIG_HEAD // -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it.
```

---

### How can I delete file from remote git repository? I have a file that is just deleted from working copy local repository, and I want delete it from corresponding remote repository.

Answer: If you deleted a file from the working tree, then commit the deletion:
```
git commit -a -m "A file was deleted"
```

And push your commit upstream:
```
git push
```

---

### git@github.com: Permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists.

* [Error: Permission denied (publickey)](https://help.github.com/articles/error-permission-denied-publickey/)
1. [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
2. [Checked for existing SSH keys](https://help.github.com/articles/checking-for-existing-ssh-keys/)
3. [Generated a new SSH key and added it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
4. [Adding a new SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
5. [Testing your SSH connection](https://help.github.com/articles/testing-your-ssh-connection/)


---

### [Multiple SSH Keys settings for different github account](https://gist.github.com/jexchan/2351996)
#### create different public key
create different ssh key according the article [Mac Set-Up Git](http://help.github.com/mac-set-up-git/)

`$ ssh-keygen -t rsa -C "your_email@youremail.com"`

Please refer to [github ssh issues](http://help.github.com/ssh-issues/) for common problems.

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

`$ ssh-add -D`

finally, you can check your saved keys

`$ ssh-add -l`

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

#jexchan account
Host github.com-jexchan
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_jexchan
```

#### Clone you repo and modify your Git config
clone your repo git clone git@github.com:activehacker/gfs.git gfs_jexchan

cd gfs_jexchan and modify git config

```sh
$ git config user.name "jexchan"
$ git config user.email "jexchan@gmail.com" 

$ git config user.name "activehacker"
$ git config user.email "jexlab@gmail.com" 
```

or you can have global git config $ git config --global user.name "jexchan" $ git config --global user.email "jexchan@gmail.com"

then use normal flow to push your code

```
$ git add .
$ git commit -m "your comments"
$ git push
```

---

### [How to use Visual Studio Code as Default Editor for Git](https://stackoverflow.com/questions/30024353/how-to-use-visual-studio-code-as-default-editor-for-git)
   1. Make sure you can run `code --help` from the command line and you get help.
      * if you do not see help, please follow these steps:
	     * Mac: Select **Shell Command: Install 'Code'** command in path from the Command Palette.
		 * Windows: Make sure you selected Add to PATH during the installation.
		 * Linux: Make sure you installed Code via our new .deb or .rpm packages.
   2. From the command line, run `git config --global core.editor "code --wait"`
   
Now you can run git config --global -e and use VS Code as editor for configuring Git.

Add the following to enable support for using VS Code as diff tool:
```
[diff]
    tool = default-difftool
[difftool "default-difftool"]
    cmd = code --wait --diff $LOCAL $REMOTE
```

This leverages the new `--diff` option you can pass to VS Code to compare two files side by side.

To summarize, here are some examples of where you can use Git with VS Code:

* `git rebase HEAD~3 -i` allows to interactive rebase using VS Code
* `git commit` allows to use VS Code for the commit message
* `git add -p` followed by e for interactive add
* `git difftool <commit>^ <commit>` allows to use VS Code as diff editor for changes

---

## Terminals

### This folder no located in drive D, but it's showing

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

### Modify Your Hosts File
1. Open a terminal window.
2. Open the hosts file in a text editor (you can use any text editor) by typing the following line: `sudo nano /etc/hosts`
3. Enter your domain user password.
4. Make the necessary changes to the file.
5. Press **Control-x**.
6. When asked if you want to save your changes, answer **y**.


### [How can I get ocatal file permissions from command line]()

`stat -c "%a %n" *`

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

---

