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

## Windows
### [Remove 3D Objects folder under This PC in Windows 10](http://www.thewindowsclub.com/remove-3d-objects-folder-winows-10)
The 3D Objects folder of File Explorer basically contains **.3mf files** which can be opened with **Mixed Reality Viewer**. The folder’s location address is C:\Users\Username\3D Objects.

To remove this system folder, open the ‘Run’ dialog box, type regedit.exe, and hit the Enter key to open the Windows Registry editor.

Next, navigate to the following location by pasting the address into the address field:  
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace`

Locate:  
`{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}`

Now, to remove the folder from File Explorer, right-click on the entry, and select **Delete**.

If you are using Windows 10 64-bit, also visit the following key and do as instructed:  
`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace`

Then, locate the following, right-click on the entry, and select Delete option:  
`{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}`

That’s it! You will no more find ‘3D objects’ entry under ‘This PC’ heading of File Explorer.

### [How to disable Windows Defender using the Registry](https://www.windowscentral.com/how-permanently-disable-windows-defender-windows-10)
1. Use the `Windows key + R` keyboard shortcut to open the `Run` command.
2. Type `regedit`, and click OK to open the `Registry`.
3. Browse the following path:

`HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`

4. If you don't see the `DisableAntiSpyware` DWORD, right-click the Windows Defender (folder) key, select `New`, and click on `DWORD (32-bit) Value`.
5. Name the key DisableAntiSpyware and press Enter.
6. Double-click the newly created DWORD and set the value from 0 to 1.
7. Click OK.
After completing the steps, restart your device to apply the settings, and then the Windows Defender Antivirus should now be disabled.

If you no longer want to keep the security feature disabled, you can enable it again using the same steps, but on `step No. 6`, make sure to right-click the `DisableAntiSpyware` DWORD and select the `Delete` option.

### [Steps to fix the issue- Laptop Touchpad Not Working:](http://www.howtoresolveit.com/2017/12/laptop-mouse-touchpad-not-working.html)
**If it is a New Laptop:**
- If it is a new laptop and the touchpad is not working after installing the operating system, then we need to install the touchpad drivers related to the laptop model.
- There should be a option in Bios Settings which is “`Disable` or `Enable` the `Touchpad`”, if it is disabled by default then we have to enable it.
- There should be a option in Bios settings like Basic or Advanced Touchpad mode in some laptops. We can enable the touchpad by changing those options and restarting the laptop.

**If it is a old laptop:**
- If laptop touchpad is stopped working suddenly, then we can try restarting the laptop and once and check the status.
- If still touchpad is not working then check whether the touchpad button is turned off on the keyboard. If it off then turn it to on and check the status
- If still touchpad is not working, then go to control panel and go to `Device Manager` which is under `Devices and Printers`
- Click on `Mice and other pointing devices`
- You can see the touchpad option listed there, right click on that
- Go to update `driver software`
- Click on `browse my computer for driver software`
- Click on `Let me pick from a list of device drivers on my computer`
- Select the touchpad driver and click on next
- Now the driver will be updated
- Restart the laptop once and check the status
- If still the touchpad is not working then, go to bios settings when the laptop is turning on and there should be a option in Bios Settings which is “Disable or Enable the Touchpad”, if it is disabled then enable it and restart the laptop and check the status.
- If still touchpad is not working, then we can try reinstall the operating system
- If the problem is still exist, it might be a hardware problem, so visit the laptop service center and show it to them.
All the above steps are to fix the issue laptop touchpad is not working.

### Windows 10 Login Bypass (for forgotten password)
- A CD or USB with bootable Windows
- restart to the boot menu according to your bios
- on windows Setup click 'Next`
- then `Repair your computer`
- Choose an option, click `Troubleshoot`
- on Advanced options, click `System Image Recovery` then `Windows 10`
- on Select a system image backup popup, click on `Cancel`, then `Next`
- Re-image your computer window, click `Advanced..`
- then Install a driver, click `OK`
- Popup window will show, go to `windows folder` -> C:\Windows\system32\
- then rename `sethc` into `sethc.bak` for backup, if not renamed automatically on refresh that's fine
- after that, duptlicate `cmd` and rename it as `sethc`, then click `Cancel` all and restart the machine, click `Continue`
- press `shift` 5 times will open sticky keys and cmd as Administrator sethc.exe
- type in cmd, `control userpasswords2`, User Accounts window will popup.

### Windows Master Control Panel (God Menu)
- list of shortcuts to almost every settings in menu in windows
- create a folder anywhere and rename it to the following string `GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}`

### [How To Find Wi-Fi Password Using CMD Of All Connected Networks](https://fossbytes.com/find-wifi-password-connected-networks-cmd-windows/)
- Open the command prompt and run it as administrator.
- In the next step, we want to know about all the profiles that are stored in our computer. So, type the following command in the cmd: `netsh wlan show profile`
- Type the following command to see the password of any WiFi network: `netsh wlan show profile WiFi-name key=clear`
- Under the security settings, in the ‘key content’, you see the WiFi password of that particular network.