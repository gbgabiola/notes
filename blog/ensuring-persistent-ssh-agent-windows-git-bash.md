# Ensuring Persistent SSH-Agent on Windows with Git Bash

- [Introduction](#introduction)
- [Step 1: Install Git Bash](#step-1-install-git-bash)
- [Step 2: Configure SSH Keys](#step-2-configure-ssh-keys)
- [Step 3: Automate SSH-Agent Launch](#step-3-automate-ssh-agent-launch)
- [Step 4: Configure Git to Use SSH](#step-4-configure-git-to-use-ssh)
- [Step 5: Test Your Configuration](#step-5-test-your-configuration)
- [Conclusion](#conclusion)


## Introduction

Securing your Git workflow with SSH keys is a crucial aspect of software development. However, ensuring that the SSH-Agent persists across Git commits in Windows using Git Bash can be a bit challenging. In this article, we'll explore a step-by-step guide to achieve this, enhancing the security and efficiency of your Git operations.


## Step 1: Install Git Bash

If you haven't already, make sure to install Git Bash on your Windows machine. You can download it from the official [Git](https://git-scm.com/downloads) website. During the installation, ensure that you select the option to use Git from the Windows Command Prompt.


## Step 2: Configure SSH Keys

Generate SSH keys using the ssh-keygen command in Git Bash. If you already have keys, skip this step. Add the generated SSH key to your SSH-Agent using the ssh-add command.

```sh
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
$ eval "$(ssh-agent -s)"
$ ssh-add ~/.ssh/your_private_key
```


## Step 3: Automate SSH-Agent Launch

To ensure that SSH-Agent starts with every Git Bash session, modify the .bashrc file. If the file doesn't exist, create it. Add the following lines:

```sh
# Start SSH-Agent and add keys
if [ -z "$SSH_AUTH_SOCK" ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/your_private_key
fi
```


## Step 4: Configure Git to Use SSH

Make sure your Git configuration is set to use SSH:

```sh
$ git config --global core.sshCommand "ssh -i ~/.ssh/your_private_key -F /dev/null"
```


## Step 5: Test Your Configuration

Verify that the SSH-Agent persists by opening a new Git Bash window and running:

```sh
$ ssh -T git@github.com
```


## Conclusion

By following these steps, you ensure that the SSH-Agent launches automatically with every Git Bash session, providing a seamless and secure Git experience on Windows. This setup not only enhances security but also streamlines your workflow, allowing you to focus on what you do best—coding.
