# Git

## Table of Contents <!-- omit in toc -->

- [Git Basics](#git-basics)
- [Add a new repo from your machine to GitHub](#add-a-new-repo-from-your-machine-to-github)
- [Clone a repo and give it a different name](#clone-a-repo-and-give-it-a-different-name)
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
- [Delete Branch Locally](#delete-branch-locally)
- [Delete Branch Remotely](#delete-branch-remotely)
- [Merge master branch into feature branch](#merge-master-branch-into-feature-branch)
- [Merge two repos](#merge-two-repos)
- [Stop tracking a file](#stop-tracking-a-file)
- [Stop tracking a previously tracked folder](#stop-tracking-a-previously-tracked-folder)
- [Start tracking a previously un-tracked file](#start-tracking-a-previously-un-tracked-file)
- [Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub](#cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github)
- [Remove an `upstream` repository](#remove-an-upstream-repository)
- [How can I delete file from remote git repository? I have a file that is just deleted from working copy local repository, and I want delete it from corresponding remote repository.](#how-can-i-delete-file-from-remote-git-repository-i-have-a-file-that-is-just-deleted-from-working-copy-local-repository-and-i-want-delete-it-from-corresponding-remote-repository)
- [Remove commit from pull request](#remove-commit-from-pull-request)
- [How to read last commit comment?](#how-to-read-last-commit-comment)
- [How to revert a Git repository to a previous commit](#how-to-revert-a-git-repository-to-a-previous-commit)
- [Adding more changes to your last commit](#adding-more-changes-to-your-last-commit)
- [Show `.gitconfig` details](#show-gitconfig-details)
- [Conflicts between Windows Git and WSL Git?](#conflicts-between-windows-git-and-wsl-git)
- [Rename a branch while pointed to any branch](#rename-a-branch-while-pointed-to-any-branch)
- [If you know the last commit message of the deleted branch you can do this:](#if-you-know-the-last-commit-message-of-the-deleted-branch-you-can-do-this)
- [Filename too long in git for windows](#filename-too-long-in-git-for-windows)
- [Specify multiple users for myself in .gitconfig?](#specify-multiple-users-for-myself-in-gitconfig)
- [Rebase changes](#rebase-changes)
- [Rebase accept incoming in bulk](#rebase-accept-incoming-in-bulk)
- [See differences between two branches](#see-differences-between-two-branches)
- [See differences between two files](#see-differences-between-two-files)
- [Squash a series of commits and rewrite the history by writing them as one](#squash-a-series-of-commits-and-rewrite-the-history-by-writing-them-as-one)
- [Take a commit that lives in a separate branch and apply the same changes on the current branch](#take-a-commit-that-lives-in-a-separate-branch-and-apply-the-same-changes-on-the-current-branch)
- [Restore the status of a file to the last commit (revert changes)](#restore-the-status-of-a-file-to-the-last-commit-revert-changes)
- [Show a pretty graph of the commit history](#show-a-pretty-graph-of-the-commit-history)
- [Get a prettier log](#get-a-prettier-log)
- [Git ref log](#git-ref-log)
- [Cant remember what your last git commit said?](#cant-remember-what-your-last-git-commit-said)
- [Get a shorter status](#get-a-shorter-status)
- [Checkout a pull request locally](#checkout-a-pull-request-locally)
- [List the commits that involve a specific file](#list-the-commits-that-involve-a-specific-file)
- [List the commits that involve a specific file, including the commits content](#list-the-commits-that-involve-a-specific-file-including-the-commits-content)
- [List the repository contributors ordering by the number of commits](#list-the-repository-contributors-ordering-by-the-number-of-commits)
- [Undo the last commit you pushed to the remote](#undo-the-last-commit-you-pushed-to-the-remote)
- [Pick every change you haven’t already committed and create a new branch](#pick-every-change-you-havent-already-committed-and-create-a-new-branch)
- [Stop tracking a file, but keep it in the file system](#stop-tracking-a-file-but-keep-it-in-the-file-system)
- [Get the name of the branch where a specific commit was made](#get-the-name-of-the-branch-where-a-specific-commit-was-made)
- [Changing a remote's URL](#changing-a-remotes-url)
- [Caching your GitHub password in Git (Linux)](#caching-your-github-password-in-git-linux)
- [How to use Visual Studio Code as Default Editor for Git](#how-to-use-visual-studio-code-as-default-editor-for-git)


## Git Basics

- **Version Control System (VCS)** manages the changes to documents, computer programs, large web sites, and other collections of information
  - distributed version control
  - coordinates work between multiple developers
  - who made what changes and when
  - revert back at any time
  - local & remote repos
- **git** is a free and open source distributed version control system
  - keeps track of code history
  - takes "snapshots" of your files
  - you decide when to take a snapshot by making a "commit"
  - you can visit any snapshots at any time
  - you can stage files before committing
- **Github**: a platform for hosting and collaborating on Git repositories
- **commit**" a Git object, a snapshot of your entire repository compressed into a SHA
- **branch** is a lightweight movable pointer to a commit
- **clone**: a local version of a repository, including all commits and branches
- **remote**: a common repository on Github that all team member use to exchange their changes
- **fork**: a copy of a repository on Github owned by a different user
- **pull request**: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
- **HEAD**: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using `git checkout`
- git commands:
  - `init` initialize a local git repository
  - `status` check status of working tree
  - `clone` copy a repository from the Github to your local machine
  - `add` track your files and changes with Git
  - `commit` save your changes into Git
  - `push` upload your changes (commit) to your remote repository on Github
  - `pull` download changes from remote repository to your local machine


## Add a new repo from your machine to GitHub

```sh
$ echo "# repo-name" >> README.md # add repo name to README.md
$ git init # init the repository
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://github.com/username/repo-name.git
$ git push -u origin master

# or push an existing repository from the command line
$ git remote add origin https://github.com/username/repo-name.git
$ git push -u origin master
```


## Clone a repo and give it a different name

```sh
$ git clone https://github.com/user/repoNameYouToChange NameYouWantToGiveToRepo
```


## Latest changes from repo to your machine

```sh
$ git pull
```


## Add tracking information to your work

Assuming that you are working on the master branch then

```sh
$ git branch --set-upstream-to=origin/master
```

You can set it to whatever branch you want to track changes for

```sh
$ git branch --set-upstream-to=origin/<branch>
```

This will mean you can just do `git pull` and the latest changes will
be pulled to your `origin`


## What branch

```sh
$ git branch # shows what branch you're on
$ git branch -r # shows remote branches
$ git branch -a # shows all branches
```


## Create a local branch and push it to GitHub

Want to make your feature branch and get it on GitHub?

Make your branch first then:

```sh
# git push --set-upstream <REMOTE_NAME> <BRANCE_NAME> or git push -u <REMOTE_NAME> <BRANCE_NAME>
$ git push -u origin feature
```


## Create a PR [Pull Request]

Fork other users repo in GitHub, then clone to your machine:

```sh
$ git clone https://github.com/<username>/<repo-name>
```

Add the remote repo:

```sh
$ git remote add upstream https://github.com/<OthersUsername>/<repo-name>
```

Create your branch:

```sh
$ git branch <BRANCE_NAME>
```

Check it out:

```sh
$ git checkout <BRANCE_NAME>
```

If adding a folder use:

```sh
$ git add folderName/\\*
```

Make your commit and push to your new branch:

```sh
$ git add .
$ git commit -m 'initial commit'
$ git push origin branch-name
```

Manage the rest of the PR via GitHub


## Check remotes

```sh
$ git remote -v
```


## Sync a remote fork on your machine

First configure the local to point to the remote upstream:

```sh
$ git remote -v
$ git remote add upstream https://$ github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
$ git remote -v
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```

You then use `git merge` to update any branch on the upstream
repository:

```sh
$ git merge upstream/dev
```

Take a look at [syncing a fork](https://help.github.com/articles/syncing-a-fork) for more details.


## Sync a remote fork on Github

1. Open your fork on GitHub.
2. Click on Pull Requests.
3. Click on New Pull Request. By default, GitHub will compare the original with your fork, a there shouldn't be anything to compare if you didn't make a changes.
4. Click on Try `switching the base`. Now GitHub will compare your fork with the original, and you should see all the latest changes.
5. Click on Click to create a pull request for this comparison and assign a predictable name to your pull request (e.g., Update from original).
6. Click on Send pull request.
7. Scroll down and click Merge pull request and finally Confirm merge. If your fork didn't have any changes, you will be able to merge it automatically.


## 2fa

Using two factor authentication? Then use the following so you're not
adding in your auth token each time you want to `push` your code.
```sh
$ git remote set-url origin https://yourgithubuser:your-token@github.com/yourgithubuser/yourrepo.git
```

## Change `origin` url

If you want to change the origin url you can use the `set-url` command
```sh
$ git remote set-url origin https://github.com/user/new-repo-name
```


## Add code on your machine to new repo

Via terminal navigate to your code folder:

```sh
$ git init
```

Add all your files:

```sh
$ git add .
```

Adding a folder use the following syntax or it'll get added as a BLOB:

```sh
$ git add folderName/\\*
```

Commit to local repo:

```sh
$ git commit -m 'some detailed message'
```

To add your files to the remote repo, [first add your remote repo](https://help.github.com/articles/adding-a-remote/):

```sh
$ git remote add origin [remote repository URL] # Sets the new remote
$ git remote -v # verifies the new remote URL
$ git push origin master
```

For more info check out: [adding an existing project to github using the command line](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line/)


## Delete Branch Locally

`-d` option alias for `--delete`, which deletes the branch if it has already been merged in its upstream branch. `-D` option alias for `--delete --force` which deletes the branch irrespective of its merged status.

```sh
# git branch -d <BRANCE_NAME>
$ git branch -d feature/login
```

Remove local branches that are not on the `remote`:

```sh
$ git remote prune <REMOTE_NAME>
```

Remove local branches that were created from remote branches:

```sh
$ git branch --merged master | grep -v '^[ *]*master$' | xargs git branch -d
```


## Delete Branch Remotely

```sh
# git push <REMOTE_NAME> :<BRANCE_NAME>
# git push <REMOTE_NAME> --delete <BRANCE_NAME>
# git push <REMOTE_NAME> -d <BRANCE_NAME>

$ git push origin -d feature/login
```


## Merge master branch into feature branch

How to merge the master branch into the feature branch? This will come
up often if you are workingon a team with other devs and you want to
update your feature branch to include the latest changes:

```sh
# checkout your feature branch
$ git checkout feature1

# merge master into it
$ git merge master
```


## Merge two repos

If you want to merge project-b into project-a:

```sh
$ cd path/to/project-a
$ git remote add project-b path/to/project-b
$ git fetch project-b
$ git merge --allow-unrelated-histories project-b/master # or whichever branch you want to merge
$ git remote remove project-b
```


## Stop tracking a file

If you have `.env` files that are tracked by Git and want to ignore
them so your API keys don't get added to GitHub use:

```sh
$ git update-index --assume-unchanged <FILE>
```


## Stop tracking a previously tracked folder

Add the folder first to your `.gitignore` then remove the folder from
your local git tracking with:

```sh
$ git rm -r --cached <folder>
$ git commit -m "removing <folder">
```


## Start tracking a previously un-tracked file

```sh
$ git update-index --no-assume-unchanged <FILE>
```


## Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub

So you make a clone, make some changes then realise that you need to
add it to your GitHub account before making a pull:

```sh
$ git remote -v
origin  https://github.com/OtherUser/OtherUserRepo (fetch)
origin  https://github.com/OtherUser/OtherUserRepo (push)
```

You just need to set the `origin` to yours then add the `upstream` as
the original `origin` make sense?

So change `origin` to yours:

```sh
$ git remote set-url origin http://github.com/YourUser/YourRepo
```

Then add `upstream` as theirs:

```sh
$ git remote add upstream https://github.com/OtherUser/OtherUserRepo
```

Now it should look something like this:

```sh
$ git remote -v
origin  http://github.com/YourUser/YourRepo (fetch)
origin  http://github.com/YourUser/YourRepo (push)
upstream        https://github.com/OtherUser/OtherUserRepo (fetch)
upstream        https://github.com/OtherUser/OtherUserRepo (push)
```


## Remove an `upstream` repository

If you no longer need a reference to a forked repository then remove
it with the following:

```sh
$ git remote rm upstream
```


## How can I delete file from remote git repository? I have a file that is just deleted from working copy local repository, and I want delete it from corresponding remote repository.

If you deleted a file from the working tree, then commit the deletion:

```sh
$ git commit -a -m "A file was deleted"
```

And push your commit upstream:

```sh
$ git push
```


## Remove commit from pull request

[Read](http://stackoverflow.com/questions/34519665/how-to-move-head-back-to-a-previous-location-detached-head/34519716#34519716) for more detail on how to revert.

```sh
# Checkout the desired branch
$ git checkout <BRANCH_NAME>

# Undo the desired commit
$ git revert <COMMIT>

# Update the remote with the undo of the code
$ git push origin <BRANCH_NAME>
```

Rather than use the last part, unstaged the changes in VSCode which is most likely the same thing.


## How to read last commit comment?

```sh
$ git show # shows you the diff as well
$ git log -1
$ git log -1 --pretty=%B # just the commit message
```


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

Add the modified file(s) and amend it:

```sh
$ (some_branch) git add changelog.md
$ (some_branch) git commit --amend
```

Amending a commit without changing its message with `no-edit` flag:

```sh
$ (some_branch) git commit --amend --no-edit
```

Pushing an amended commit that's not yet on the remote, otherwise use `-f` option rewrite your commit history:

```sh
$ (some_branch) git push -f origin some_branch
```

Just to edit a commit message, run the amend command without adding changes.

To edit a commit without opening a file, run:

```sh
$ (some_branch) git commit --amend -m "Your new commit message"
```


## [Show `.gitconfig` details](https://stackoverflow.com/questions/12254076/how-do-i-show-my-global-git-configuration/46986031#46986031)

There are three leves for Git config:

**System level**:

```sh
$ git config --list --system # to view
$ git config --system color.ui true # to set
$ git config --edit --system # to edit system config file
```

**Global level**:

```sh
$ git config --list --global # to view
$ git config --global user.name xyz # to set
$ git config --edit --global # to edit global config file
```

**Repository level**:

```sh
$ git config --list --local # to view
$ git config --local core.ignorecase true  # to set (--local optional)
$ git config --edit --local # to edit repository config file (--local optional)
```

**View all settings**:

```sh
$ git config --list --show-origin
```


## Conflicts between Windows Git and WSL Git?

If you are having issues with changes showing in Windows Git and not Windows Subsystem Linux Git (For a Windows WSL Dev set-up) then check the settings of each environment by using:

```sh
$ git config --list --show-origin
```

Remove any conflicting settings then try again.


## Rename a branch while pointed to any branch

```sh
$ git branch -m <OLD_NAME> <NEW_NAME>
```

To rename the current branch, do:

```sh
$ git branch -m <NEW_NAME>
```

A way to remember this, is `-m` is for "move" (or `mv`), which is how
you rename files.


## If you know the last commit message of the deleted branch you can do this:

```sh
$ git reflog

# search for message
fd0e4da HEAD@{14}: commit: This is the commit message I want
$ git checkout fd0e4da # checkout revision

# or
$ git checkout HEAD@{14}
$ git branch my-recovered-branch # create branch
$ git push origin my-recovered-branch:my-recovered-branch # push branch
```

```sh
# other Alternative
$ git commit -m "Something terribly misguided" # this is what you want to undo
$ git reset HEAD~
# << edit files as necessary >>
$ git add ...
$ git commit -c ORIG_HEAD # -c ORIG_HEAD will open an editor, which initially contains the log message from the old commit and allows you to edit it
```


## Filename too long in git for windows

The better solution is enable the longpath parameter from git:

```sh
$ git config --system core.longpaths true
```

But a work arround that works is remove `node_modules` folder from git:

```sh
$ git rm -r --cached node_modules
$ vi .gitignore
```

Add `node_modules` in new row inside `.gitignore` file. After do this, push your modifications:

```sh
$ git add .gitignore
$ git commit -m "node_modules removed"
$ git push
```


## Specify multiple users for myself in .gitconfig?

Want to have different git credentials for one specific repository?

You can configure an individual git repo to use a specific user/email address which overrides the global configuration.

To list out the config for the repo:

```sh
$ git config --list
```

From the root of the repo, run:

```sh
$ git config user.name 'Your Name'
$ git config user.email 'your@email.com'
```

Whereas the default user/email is configured in your `~/.gitconfig`

```sh
$ git config --global user.name 'Your Name'
$ git config --global user.email 'your@email.com'
```


## Rebase changes

If you're working on a team and there have been changes to the main branch you want to push your changes to, you can rebase before submitting a PR.

In this scenario we're going to rebase our `feature` branch off of the `develop` branch.

```sh
# switch from your feature to get latest develop changes
$ git checkout develop
$ git pull

# checkout the feature branch and rebase
$ git checkout feature
$ git rebase develop
```

Then use the prompts from there in conjunction with your text editor to add in the changes.

```sh
$ git add # add a change
$ git rebase --continue # continue the rebase
$ git rebase --skip # have an unrelated change, nothing to correct
$ git rebase --abort # oh DERP! Want to start over?
```


## Rebase accept incoming in bulk

If you have a large file (like a `package-lock.json`) that you want to accept all the incoming changes from then.

Whilst you're in rebase you'll need to check out the file from your incoming branch then add it as the new file.

```sh
$ git checkout temp-branch -- package-lock.json # checkout the file
$ git add package-lock.json # add the file whilst in rebase
$ git rebase --continue # continue with the things
```


## See differences between two branches

If you want to see the difference between two branches then use the
$ git built in diff tool:

```sh
$ git diff branch1..branch2
```


## See differences between two files

If you want to see the difference between two file across different
branches then use:

```sh
$ git diff branch1..branch2 package.json
```


## Squash a series of commits and rewrite the history by writing them as one

```sh
$ git rebase -i
```

this puts you in the interactive rebasing tool.

Type `s` to apply `squash` to a commit with the previous one. Repeat the `s` command for as many commits as you need.


## Take a commit that lives in a separate branch and apply the same changes on the current branch

single commit:

```sh
$ git cherry-pick <commit>
```

for multiple commits:

```sh
$ git cherry-pick <commit1> <commit2> <commit3>
```


## Restore the status of a file to the last commit (revert changes)

```sh
$ git checkout -- <filename>
```

You can do it without the `--`, but if the filename looks like a branch or tag (or other revision identifier), it may get confused, so using `--` is best.

You can also check out a particular version of a file:
```sh
$ git checkout v1.2.3 -- file         # tag v1.2.3
$ git checkout stable -- file         # stable branch
$ git checkout origin/master -- file  # upstream master
$ git checkout HEAD -- file           # the version from the most recent commit
$ git checkout HEAD^ -- file          # the version before the most recent commit
```


## Show a pretty graph of the commit history

```sh
$ git log --pretty=format:"%h %s" --graph
```


## Get a prettier log

```sh
$ git log --pretty=format:"%h - %an, %ar : %s"
```


## Git ref log

Want to know what work you have done on a repo? Use `git reflog` to display all the commits:

```sh
$ git reflog show -a # show all changes for the last 90 days
$ git reflog --pretty=short
$ git reflog --date=iso # show changes with a date
```


## Cant remember what your last git commit said?

```sh
$ git show
```


## Get a shorter status

```sh
$ git status -s
```


## Checkout a pull request locally

```sh
$ git fetch origin pull/<id>/head:<branch>
$ git checkout <branch>
```


## List the commits that involve a specific file

```sh
$ git log --follow -- <filename>
```


## List the commits that involve a specific file, including the commits content

```sh
$ git log --follow -p -- <filename>
```


## List the repository contributors ordering by the number of commits

```sh
$ git shortlog -s -n
```


## Undo the last commit you pushed to the remote

```sh
# to undo a git push
$ git push -f origin HEAD^:master

# to get to previous commit (preserves working tree)
$ git reset --soft HEAD

# to get back to previous commit (you'll lose working tree)
$ git reset --hard HEAD^

# other option and they said the best option
$ git revert -n HEAD 
```

## Pick every change you haven’t already committed and create a new branch

```sh
$ git checkout -b <branch>
```

## Stop tracking a file, but keep it in the file system

```sh
$ git rm -r --cached
```

## Get the name of the branch where a specific commit was made

```sh
$ git branch --contains <commit>
```


## [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/)

The `git remote set-url` command takes two arguments:

- An existing remote name, e.g., `origin` or `upstream` are two common choices.
- A new URL for the remote. For example:
  - If you're updating to use HTTPS, your URL might look like: `https://github.com/USERNAME/REPOSITORY.git`
  - If you're updating to use SSH, your URL might look like: `git@github.com:USERNAME/REPOSITORY.git`

### Switching remote URLs from SSH to HTTPS

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
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

The next time you `git fetch`, `git pull`, or `git push` to the remote repository, you'll be asked for your GitHub username and password.

- If you have [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa) enabled, you must [create a personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line) to use instead of your GitHub password.

### Switching remote URLs from HTTPS to SSH

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
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```


## Caching your GitHub password in Git (Linux)

Turn on the credential helper so that Git will save your password in memory for some time. By default, Git will cache your password for 15 minutes.

In Terminal, enter the following:

```sh
$ git config --global credential.helper cache # Set git to use the credential memory cache
```

To change the default password cache timeout, enter the following:

```sh
$ git config --global credential.helper 'cache --timeout=3600' # Set the cache to timeout after 1 hour (setting is in seconds)
```


## [How to use Visual Studio Code as Default Editor for Git](https://stackoverflow.com/questions/30024353/how-to-use-visual-studio-code-as-default-editor-for-git)

1. Make sure you can run `code --help` from the command line and you get help
2. From the command line, run `git config --global core.editor "code --wait"`
   
Now you can run `git config --global -e` and use VS Code as editor for configuring Git.

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
