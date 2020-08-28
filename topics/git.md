# Git

- **Version Control System (VCS)** manages the changes to documents, computer programs, large web sites, and other collections of information
  - distributed version control
  - coordinates work between multiple developers
  - who made what changes and when
  - revert back at any time
  - local & remote repos
- **Git** is a free and open source version control system
  - keeps track of code history
  - takes "snapshots" of your files
  - you decide when to take a snapshot by making a "commit"
  - you can visit any snapshots at any time
  - you can stage files before committing
- git commands:
  - `init` => initialize local hit repo
  - `status` => check status of working tree
  - `clone` => copy repo from the internet (remote repo like Github) to your local machine
  - `add` -> track your files and changes with Git
  - `commit` -> save your changes into Git
  - `push` -> upload your changes (commit) to your remote repo on Github (or another website)
  - `pull` -> download changes from remote repo to your local machine


## Table of Contents <!-- omit in toc -->

- [Add a new repo from your machine to GitHub](#add-a-new-repo-from-your-machine-to-github)
- [Latest changes from repo to your machine](#latest-changes-from-repo-to-your-machine)
- [Add tracking information to your work](#add-tracking-information-to-your-work)
- [What branch](#what-branch)
- [Create a local branch and push it to GitHub](#create-a-local-branch-and-push-it-to-github)
- [Create a PR [Pull Request]](#create-a-pr-pull-request)
- [Check remotes](#check-remotes)
- [Sync a remote fork on your machine](#sync-a-remote-fork-on-your-machine)
- [Sync a remote fork on Github](#sync-a-remote-fork-on-github)
- [2fa](#2fa)
- [Change `origin` url](#change-origin-url)
- [Add code on your machine to new repo](#add-code-on-your-machine-to-new-repo)
- [Delete branches](#delete-branches)
- [Merge master branch into feature branch](#merge-master-branch-into-feature-branch)
- [Merge two repos](#merge-two-repos)
- [Stop tracking a file](#stop-tracking-a-file)
- [Stop tracking a previously tracked folder](#stop-tracking-a-previously-tracked-folder)
- [Start tracking a previously un-tracked file](#start-tracking-a-previously-un-tracked-file)
- [Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub](#cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github)
- [Remove an `upstream` repository](#remove-an-upstream-repository)
- [How can I delete file from remote git repository? I have a file that is just deleted from working copy local repository, and I want delete it from corresponding remote repository.](#how-can-i-delete-file-from-remote-git-repository-i-have-a-file-that-is-just-deleted-from-working-copy-local-repository-and-i-want-delete-it-from-corresponding-remote-repository)
- [Clone a repo and give it a different name](#clone-a-repo-and-give-it-a-different-name)
- [Using Husky?](#using-husky)
- [How to read last commit comment?](#how-to-read-last-commit-comment)
- [Remove commit from pull request](#remove-commit-from-pull-request)
- [How to revert a Git repository to a previous commit](#how-to-revert-a-git-repository-to-a-previous-commit)
- [Adding more changes to your last commit](#adding-more-changes-to-your-last-commit)
- [Show `.gitconfig` details](#show-gitconfig-details)
- [Conflicts between Windows Git and WSL Git?](#conflicts-between-windows-git-and-wsl-git)
- [If you want to rename a branch while pointed to any branch, do:](#if-you-want-to-rename-a-branch-while-pointed-to-any-branch-do)
- [Git ref log](#git-ref-log)
- [If you know the last commit message of the deleted branch you can do this:](#if-you-know-the-last-commit-message-of-the-deleted-branch-you-can-do-this)
- [Use SSH in place of HTTPS](#use-ssh-in-place-of-https)
- [How to authenticate with GitHub using SSH](#how-to-authenticate-with-github-using-ssh)
- [Use multiple SSH keys](#use-multiple-ssh-keys)
- [Re-use SSH keys, from one machine to another](#re-use-ssh-keys-from-one-machine-to-another)
- [Filename too long in git for windows](#filename-too-long-in-git-for-windows)
- [Using SSH over the HTTPS port](#using-ssh-over-the-https-port)
- [Specify multiple users for myself in .gitconfig?](#specify-multiple-users-for-myself-in-gitconfig)
- [Cant remember what your last git commit said?](#cant-remember-what-your-last-git-commit-said)
- [Rebase changes](#rebase-changes)
- [Rebase accept incoming in bulk](#rebase-accept-incoming-in-bulk)
- [See differences between two branches](#see-differences-between-two-branches)
- [See differences between two files](#see-differences-between-two-files)
- [Squash a series of commits and rewrite the history by writing them as one](#squash-a-series-of-commits-and-rewrite-the-history-by-writing-them-as-one)
- [Take a commit that lives in a separate branch and apply the same changes on the current branch](#take-a-commit-that-lives-in-a-separate-branch-and-apply-the-same-changes-on-the-current-branch)
- [Restore the status of a file to the last commit (revert changes)](#restore-the-status-of-a-file-to-the-last-commit-revert-changes)
- [Show a pretty graph of the commit history](#show-a-pretty-graph-of-the-commit-history)
- [Get a prettier log](#get-a-prettier-log)
- [Get a shorter status](#get-a-shorter-status)
- [Checkout a pull request locally](#checkout-a-pull-request-locally)
- [List the commits that involve a specific file](#list-the-commits-that-involve-a-specific-file)
- [List the commits that involve a specific file, including the commits content](#list-the-commits-that-involve-a-specific-file-including-the-commits-content)
- [List the repository contributors ordering by the number of commits](#list-the-repository-contributors-ordering-by-the-number-of-commits)
- [Undo the last commit you pushed to the remote](#undo-the-last-commit-you-pushed-to-the-remote)
- [Pick every change you haven’t already committed and create a new branch](#pick-every-change-you-havent-already-committed-and-create-a-new-branch)
- [Stop tracking a file, but keep it in the file system](#stop-tracking-a-file-but-keep-it-in-the-file-system)
- [Get the name of the branch where a specific commit was made](#get-the-name-of-the-branch-where-a-specific-commit-was-made)

## Add a new repo from your machine to GitHub

```sh
echo "# repo-name" >> README.md # add repo name to README.md
git init # init the repository
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/username/repo-name.git
git push -u origin master
```

…or push an existing repository from the command line
```sh
git remote add origin https://github.com/username/repo-name.git
git push -u origin master
```

## Latest changes from repo to your machine

```sh
git pull
```

## Add tracking information to your work

Assuming that you are working on the master branch then
```sh
git branch --set-upstream-to=origin/master
```

You can set it to whatever branch you want to track changes for
```sh
git branch --set-upstream-to=origin/<branch>
```

This will mean you can just do `git pull` and the latest changes will
be pulled to your `origin`

## What branch

```sh
git branch # shows what branch you're on
git branch -r # shows remote branches
git branch -a # shows all branches
```

## Create a local branch and push it to GitHub

Want to make your feature branch and get it on GitHub?

Make your branch first then:
```sh
git push --set-upstream origin <branch-you-just-created>
```

## Create a PR [Pull Request]

Fork other users repo in GitHub, then clone to your machine.
```sh
git clone https://github.com/YourUserName/repo-name
```

Add the remote repo:
```sh
git remote add upstream https://github.com/OtherUserName/repo-name
```

Create your branch:
```sh
git branch branch-name
```

Check it out:
```sh
git checkout branch-name
```

If adding a folder use.
```sh
git add folderName/\\*
```

Make your commit and push to your new branch.
```sh
git add .
git commit -m 'initial commit'
git push origin branch-name
```

Manage the rest of the PR via GitHub

## Check remotes

```sh
git remote -v
```

## Sync a remote fork on your machine

First configure the local to point to the remote upstream
```sh
git remote -v
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
git remote -v
git fetch upstream
git checkout master
git merge upstream/master
```

You then use `git merge` to update any branch on the upstream
repository:
```sh
git merge upstream/dev
```

Take a look at [syncing a fork](https://help.github.com/articles/syncing-a-fork) for more details.

## Sync a remote fork on Github

1.  Open your fork on GitHub.
2.  Click on Pull Requests.
3.  Click on New Pull Request. By default, GitHub will compare the
    original with your fork, and there shouldn't be anything to
    compare if you didn't make any changes.
4.  Click on Try `switching the base`. Now GitHub will compare your
    fork with the original, and you should see all the latest changes.
5.  Click on Click to create a pull request for this comparison and
    assign a predictable name to your pull request (e.g., Update from
    original).
6.  Click on Send pull request.
7.  Scroll down and click Merge pull request and finally Confirm
    merge. If your fork didn't have any changes, you will be able to
    merge it automatically.

## 2fa

Using two factor authentication? Then use the following so you're not
adding in your auth token each time you want to `push` your code.
```sh
git remote set-url origin https://yourgithubuser:your-token@github.com/yourgithubuser/yourrepo.git
```

## Change `origin` url

If you want to change the origin url you can use the `set-url` command
```sh
git remote set-url origin https://github.com/user/new-repo-name
```

## Add code on your machine to new repo

Via terminal navigate to your code folder.
```sh
git init
```

Add all your files.
```sh
git add .
```

Adding a folder use the following syntax or it'll get added as a BLOB.
```sh
git add folderName/\\*
```

Commit to local repo.
```sh
git commit -m 'some detailed message'
```

To add your files to the remote repo, [first add your remote repo](https://help.github.com/articles/adding-a-remote/)
```sh
git remote add origin [remote repository URL] # Sets the new remote
git remote -v # Verifies the new remote URL
git push origin master
```

For more info check out: [adding an existing project to github using the command line](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line/)

## Delete branches

Delete local branch.
```sh
git branch -D branch-name
```

Remove local branches that are not on the `remote`.
```sh
git remote prune origin
```

Remove local branches that were created from remote branches.
```sh
git branch --merged master | grep -v '^[ *]*master$' | xargs git branch -d
```

## Merge master branch into feature branch

How to merge the master branch into the feature branch? This will come
up often if you are workingon a team with other devs and you want to
update your feature branch to include the latest changes.
```sh
# checkout your feature branch
git checkout feature1
# merge master into it
git merge master
```

## Merge two repos

If you want to merge project-a into project-b:
```sh
cd path/to/project-b
git remote add project-a path/to/project-a
git fetch project-a
git merge --allow-unrelated-histories project-a/master # or whichever branch you want to merge
git remote remove project-a
```

## Stop tracking a file

If you have `.env` files that are tracked by Git and want to ignore
them so your API keys don't get added to GitHub use:
```sh
git update-index --assume-unchanged <file>
```

## Stop tracking a previously tracked folder

Add the folder first to your `.gitignore` then remove the folder from
your local git tracking with:
```sh
git rm -r --cached <folder>
git commit -m "removing <folder">
```

## Start tracking a previously un-tracked file

```sh
git update-index --no-assume-unchanged <file>
```

## Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub

So you make a clone, make some changes then realise that you need to
add it to your GitHub account before making a pull
```sh

git remote -v
origin  https://github.com/OtherUser/OtherUserRepo (fetch)
origin  https://github.com/OtherUser/OtherUserRepo (push)
```

You just need to set the `origin` to yours then add the `upstream` as
the original `origin` make sense?

So change `origin` to yours:
```sh
git remote set-url origin http://github.com/YourUser/YourRepo
```

Then add `upsrtream` as theirs:
```sh
git remote add upstream https://github.com/OtherUser/OtherUserRepo
```

Now it should look something like this:
```sh
git remote -v
origin  http://github.com/YourUser/YourRepo (fetch)
origin  http://github.com/YourUser/YourRepo (push)
upstream        https://github.com/OtherUser/OtherUserRepo (fetch)
upstream        https://github.com/OtherUser/OtherUserRepo (push)
```

## Remove an `upstream` repository

If you no longer need a reference to a forked repository then remove
it with the following:
```sh
git remote rm upstream
```

## How can I delete file from remote git repository? I have a file that is just deleted from working copy local repository, and I want delete it from corresponding remote repository.

Answer: If you deleted a file from the working tree, then commit the deletion:
```
git commit -a -m "A file was deleted"
```

And push your commit upstream:
```
git push
```

## Clone a repo and give it a different name

```sh
git clone https://github.com/user/repoNameYouToChange NameYouWantToGiveToRepo
```

## Using Husky?

If you are pushing right after a commit, you can use
`git push --no-verify` to avoid running all the tests again.

If you make a trivial change and want to commit
`git commit -m 'some detailed message' --no-verify` will skip your
`precommit` and `prepush` scripts.

## How to read last commit comment?

```sh
git show # is the fastest to type, but shows you the diff as well.
git log -1 # is fast and simple.
git log -1 --pretty=%B # if you need just the commit message and nothing else.
```

## Remove commit from pull request

[Read](http://stackoverflow.com/questions/34519665/how-to-move-head-back-to-a-previous-location-detached-head/34519716#34519716) for more detail on how to revert.

One of the simplest approach:
```sh
# Checkout the desired branch
git checkout <branch>
# Undo the desired commit
git revert <commit>
# Update the remote with the undo of the code
git push origin <branch>
```

Rather than use the last part, unstaged the changes in VSCode which is most likely the same thing.

## [How to revert a Git repository to a previous commit](https://stackoverflow.com/questions/4114095/how-to-revert-a-git-repository-to-a-previous-commit)

Lots of complicated and dangerous answers here, but it's actually easy:
```sh
git revert --no-commit 0766c053..HEAD
git commit
```

This will revert everything from the HEAD back to the commit hash, meaning it will recreate that commit state in the working tree as if every commit since had been walked back. You can then commit the current tree, and it will create a brand new commit essentially equivalent to the commit you "reverted" to.

(The `--no-commit` flag lets git revert all the commits at once- otherwise you'll be prompted for a message for each commit in the range, littering your history with unnecessary new commits.)

This is a **safe and easy way to rollback to a previous state**. No history is destroyed, so it can be used for commits that have already been made public.

## [Adding more changes to your last commit](https://medium.com/@igor_marques/git-basics-adding-more-changes-to-your-last-commit-1629344cb9a8)

So you have a commit history like this one (older commits on top):
```sh
f7f3f6d create file_a class and methods
310154e improve SomeOtherClass code
a5f4a0d update changelog file
```

But you forgot to add _just_ a single line on the changelog file you mentioned on the commit **a5f4a0d** :(

You could simply commit it and have a history like this:
```sh
f7f3f6d create file_a class and methods
310154e improve SomeOtherClass code
a5f4a0d update changelog file
a4gx124 add missing line to changelog
```

But that’s just not good for your history (it’s just a change on a change you already did). The best case scenario here is to have both changes in a **single** commit.

And you can achieve that with the simply amazing **amend** command!

**Just remember: do not commit any of the changes you want to add to your last commit before doing these steps!**

### The Basic of the Amend Command

Just add the modified file(s):
```sh
$ (some_branch) git add changelog.md
```

And amend it:
```sh
$ (some_branch) git commit --amend
```

Here you can edit your commit message. Do as you wish and then save the file. If you don’t want to change the message, just save the file without changing it.

Now the changes you did on the last commit and after it will be in the same commit!

### Amending a Commit Without Changing Its Message

If you don’t want to change your commit message, you can run the amend command with the **no-edit** flag, like this:
```sh
$ (some_branch) git commit --amend --no-edit
```

You’ll not be "redirected" a file to edit the commit message and that’s it!

### Pushing an Amended Commit

If you haven’t pushed the last commit yet to your remote, a single push is enough. Otherwise, you’ll have to push using the -f option since you’ve rewritten your commit history:
```sh
$ (some_branch) git push -f origin some_branch
```

> Be warned: pushing with -f is a very dangerous thing. Proceed with caution and always be sure that you’re pushing to the right branch.


### Just Editing a Commit Message

To just edit a commit message (without adding new changes to your last commit), just run the amend command without adding changes. Simple as that!

### Editing a Commit Without Opening a File

Just run:
```sh
$ (some_branch) git commit --amend -m "Your new commit message"
```

## Show `.gitconfig` details

There are three leves for Git config:

**System level**
```sh
# to view
git config --list --system
# to set
git config --system color.ui true
```

**Global level**
```sh
# to view
git config --list --global
# to set
git config --global user.name xyz
```

**Repository level**
```sh
# to view
git config --list --local
# to set
git config --local core.ignorecase true # (--local optional)
# to edit repository config file
git config --edit --local # (--local optional)
```

**View All Settings**
```sh
git config --list --show-origin
```

[info](https://stackoverflow.com/a/46986031/1138354)

## Conflicts between Windows Git and WSL Git?

If you are having issues with changes showing in Windows Git and not
Windows Subsystem Linux Git (For a Windows WSL Dev set-up) then check
the settings of each environment by using:
```sh
git config --list --show-origin
```

Remove any conflicting settings then try again.

## If you want to rename a branch while pointed to any branch, do:

```sh
git branch -m <oldname> <newname>
```

If you want to rename the current branch, you can do:
```sh
git branch -m <newname>
```

A way to remember this, is `-m` is for "move" (or `mv`), which is how
you rename files.

## Git ref log

Want to know what work you have done on a repo? Use `git reflog` to
display all the commits.
```sh
# show all changes for the last 90 days
git reflog show -a
# show changes with a date
git reflog --date=iso
```

https://stackoverflow.com/questions/17369254/is-there-a-way-to-cause-git-reflog-to-show-a-date-alongside-each-entry

## If you know the last commit message of the deleted branch you can do this:

```sh
git reflog
# search for message
fd0e4da HEAD@{14}: commit: This is the commit message I want
git checkout fd0e4da # checkout revision
```

or
```sh
git checkout HEAD@{14}
git branch my-recovered-branch # create branch
git push origin my-recovered-branch:my-recovered-branch # push branch
```

```sh
# other Alternative
git commit -m "Something terribly misguided" # this is what you want to undo
git reset HEAD~
# << edit files as necessary >>
git add ...
git commit -c ORIG_HEAD # -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it.
```

## Use SSH in place of HTTPS

Get your SSH set up on your machine and add a key to GitHub, more on that here: https://egghead.io/lessons/javascript-how-to-authenticate-with-github-using-ssh

You will then need to pick your **Clone with SSH** option from the
**Clone or download** section on your repo page.

Once you have taken the link from there you will need to set the repo
remote to the SSH URL
```sh
git remote set-url origin git@github.com:username/repo-name-here.git
```

Where username is the `username` of the repo owner and
`repo-name-here` is the name of that user's repository.

## How to authenticate with GitHub using SSH
Check that there are no `rsa` files here before continuing, use (bash
or Git bash if you're on Windows):
```sh
ls -al ~/.ssh
```

If there's nothing there then generate a new keygen with:
```sh
ssh-keygen -t rsa -b 4096 -C your@email.com # add your email address 👍
```

> If you decide to use a password for your SSH key see
> [SSH Keys With Passwords](#ssh-keys-with-passwords)

Now using `ls -al ~/.ssh` will show our `id_rsa.pub` file.

Add the SSH key to the SSH agent:
```sh
# for mac and Linux from bash, also from Windows Git Bash
eval "$(ssh-agent -s)"
# for Git Bash on Windows
eval `ssh-agent -s`
# fir Fish shell
eval (ssh-agent -c)
```

Add RSA key to SSH with:
```sh
ssh-add ~/.ssh/id_rsa
```

Copy your key to clipboard with one of the following:
```sh
clip < ~/.ssh/id_rsa.pub # Windows
cat ~/.ssh/id_rsa.pub # Linux
pbcopy < ~/.ssh/id_github.pub # Mac
```

Add a new SSH Key to your GitHub profile from the [settings] page by
clicking the [New SSH key] button and paste in your key. Save it...

[settings]: https://github.com/settings/keys
[new ssh key]: https://github.com/settings/ssh/new

Then authenticate with:
```sh
ssh -T git@github.com
```

If you go back to the GitHub setting page and refresh the key icon
should go from black to green. 🎉

### SSH Keys With Passwords

IF you add a password to your SSH key you will find yourself entering
the password to authenticate on each [pull, push] operation. This can
get tedious, especially if you have a long password in your keys.

Add the following line to your `~/.ssh/config/` file:
```sh
AddKeysToAgent yes
```

Open or create the `~/.ssh/config` file with:
```sh
nano ~/.ssh/config
```

The SSH agent will also need to be started on each terminal session
now to store the keys in, add the follwowinf to your `~/.bashrc` file:
```sh
[ -z "$SSH_AUTH_SOCK" ] && eval "$(ssh-agent -s)"
```

Open the `~/.bashrc` file with:
```sh
nano ~/.ssh/config
```

Now the SSH agent will start on each terminal session and you will
only be prompted for the password on the first `pull`, `push`
operation.

## Use multiple SSH keys

If you have more than one GitHub account or if you have AWS code
commit account then you will need to set up a `config` file, add your
SSH key the same as detailed in
[How to authenticate with GitHub using SSH](#how-to-authenticate-with-github-using-ssh)
and give the key a different name:
```sh
# ls ~/.ssh
~/.ssh/id_rsa_github_1
~/.ssh/id_rsa_github_2
~/.ssh/id_rsa_git_aws
```

You can delete all cached keys before, with:
```sh
ssh-add -D
```

You can check your saved keys, with:
```sh
ssh-add -l
```

Set up the SSH config file, check to see if you haven't got a `config`
file already set up with:
```sh
ls -al ~/.ssh/
```

If you haven't got a `config` file there then:
```sh
cd ~/.ssh/
touch config
```

Use your text editor of choice, in this example we'll use `nano`:
```sh
nano config
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

Clone your repo and modify the config file of the repo as detailed
here:
[Specify multiple users for myself in .gitconfig?](#specify-multiple-users-for-myself-in-gitconfig)

There's a great Gist detailing this
[here](https://gist.github.com/jexchan/2351996) for more detail if
needed.

## Re-use SSH keys, from one machine to another

If you want to avoid creating multiple SSH keys for different
environments and move your `.ssh` folder from one machine to another
then you can do the following:

Copy your `.ssh` and `.gitconfig` files:

Copy from Linux to Windows
```sh
cp ~/.ssh/* /c/Users/Scott.Spence/.linuxFiles/.ssh/
cp ~/.gitconfig /c/Users/Scott.Spence/.linuxFiles/
```

Copy from Windows to Linux

```sh
cp /mnt/c/Users/Scott.Spence/.linuxFiles/.ssh/* ~/.ssh/
# Reset the permissions back to default:
sudo chmod 600 ~/.ssh/id_rsa
sudo chmod 600 ~/.ssh/id_rsa.pub
cp /mnt/c/Users/Scott.Spence/.linuxFiles/.* ~/
chmod 644 ~/.gitconfig
```

Start the SSH agent with:
```sh
eval "$(ssh-agent -s)" # for mac and Linux from bash, also from Windows Git Bash
```

Add your SSH key to the `ssh-agent` with:
```sh
ssh-add ~/.ssh/id_rsa
```

Then authenticate with:
```sh
# GitHub
ssh -T git@github.com
# Bitbucket
ssh -T git@bitbucket.org
```

## Filename too long in git for windows

The better solution is enable the longpath parameter from git.
```sh
git config --system core.longpaths true
```

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


## Using SSH over the HTTPS port

SSH can be tunnelled over HTTPS if the network you are on blocks the
SSH port.

Test if SSH over HTTPS is possible with:
```sh
ssh -T -p 443 git@ssh.github.com
```

If you get a response then, edit your `~/.ssh/config` file and add
this section:
```sh
Host github.com
  Hostname ssh.github.com
  Port 443
```

Check that you have a key already added with:
```sh
ssh-add -l
```

If nothing is listed then add in your key with:
```sh
ssh-add ~/.ssh/id_rsa
```

Test that is has worked with:
```sh
ssh -T git@github.com
```

## Specify multiple users for myself in .gitconfig?

Want to have different git credentials for one specific repository?

You can configure an individual git repo to use a specific user/email
address which overrides the global configuration.

To list out the config for the repo:
```sh
git config --list
```

From the root of the repo, run:
```sh
git config user.name 'Your Name'
git config user.email 'your@email.com'
```

Whereas the default user / email is configured in your `~/.gitconfig`
```sh
git config --global user.name 'Your Name'
git config --global user.email 'your@email.com'
```

## Cant remember what your last git commit said?

```sh
git show
```

## Rebase changes

If you're working on a team and there have been changes to the main
branch you want to push your changes to, you can rebase before
submitting a PR.

In this scenario we're going to rebase our `feature` branch off of the
`develop` branch
```sh
# switch from your feature to get latest develop changes
git checkout develop
git pull
# checkout the feature branch and rebase
git checkout feature
git rebase develop
```

Then use the prompts from there in conjunction with your text editor
to add in the changes.
```sh
# add a change
git add
# continue the rebase
git rebase --continue
# have an unrelated change, nothing to correct
git rebase --skip
# oh DERP! Want to start over?
git rebase --abort
```

## Rebase accept incoming in bulk

If you have a large file (like a `package-lock.json`) that you want to
accept all the incoming changes from then.

Whilst you're in rebase you'll need to check out the file from your
incoming branch then add it as the new file.
```sh
# checkout the file
git checkout temp-branch -- package-lock.json
# add the file whilst in rebase
git add package-lock.json
# continue with the things
git rebase --continue
```

## See differences between two branches

If you want to see the difference between two branches then use the
git built in diff tool.
```sh
git diff branch1..branch2
```

## See differences between two files

If you want to see the difference between two file across different
branches then use.
```sh
git diff branch1..branch2 package.json
```

## Squash a series of commits and rewrite the history by writing them as one

```sh
git rebase -i
```

this puts you in the interactive rebasing tool.

Type `s` to apply `squash` to a commit with the previous one. Repeat the `s` command for as many commits as you need.

## Take a commit that lives in a separate branch and apply the same changes on the current branch

single commit:
```sh
git cherry-pick <commit>
```

for multiple commits:
```sh
git cherry-pick <commit1> <commit2> <commit3>
```

## Restore the status of a file to the last commit (revert changes)

```sh
git checkout -- <filename>
```

You can do it without the `--`, but if the filename looks like a branch or tag (or other revision identifier), it may get confused, so using `--` is best.

You can also check out a particular version of a file:
```sh
git checkout v1.2.3 -- file         # tag v1.2.3
git checkout stable -- file         # stable branch
git checkout origin/master -- file  # upstream master
git checkout HEAD -- file           # the version from the most recent commit
git checkout HEAD^ -- file          # the version before the most recent commit
```

## Show a pretty graph of the commit history

```sh
git log --pretty=format:"%h %s" --graph
```

## Get a prettier log

```sh
git log --pretty=format:"%h - %an, %ar : %s"
```

## Get a shorter status

```sh
git status -s
```

## Checkout a pull request locally

```sh
git fetch origin pull/<id>/head:<branch>

git checkout <branch>
```

## List the commits that involve a specific file

```sh
git log --follow -- <filename>
```

## List the commits that involve a specific file, including the commits content

```sh
git log --follow -p -- <filename>
```

## List the repository contributors ordering by the number of commits

```sh
git shortlog -s -n
```

## Undo the last commit you pushed to the remote

```sh
# to undo a git push
git push -f origin HEAD^:master

# to get to previous commit (preserves working tree)
git reset --soft HEAD

# to get back to previous commit (you'll lose working tree)
git reset --hard HEAD^

# other option and they said the best option
git revert -n HEAD 
```

## Pick every change you haven’t already committed and create a new branch

```sh
git checkout -b <branch>
```

## Stop tracking a file, but keep it in the file system

```sh
git rm -r --cached
```

## Get the name of the branch where a specific commit was made

```sh
git branch --contains <commit>
```
