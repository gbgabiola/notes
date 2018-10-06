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
```bash
git config --system core.longpaths true
```

But a work arround that works is remove node_modules folder from git.
```bash
$ git rm -r --cached node_modules
$ vi .gitignore
```

Add node_modules in new row inside .gitignore file. After do this, push your modifications.
```bash
$ git add .gitignore
$ git commit -m "node_modules removed"
$ git push
```

---

### If you know the last commit message of the deleted branch you can do this:
```bash
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

```cmd
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

```bash
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