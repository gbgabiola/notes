# Technology Hacks

- [Remove 3D Objects folder under This PC in Windows 10](#remove-3d-objects-folder-under-this-pc-in-windows-10)
- [How to disable Windows Defender using the Registry](#how-to-disable-windows-defender-using-the-registry)
- [Steps to fix the issue- Laptop Touchpad Not Working:](#steps-to-fix-the-issue--laptop-touchpad-not-working)
- [Windows 10 Login Bypass (for forgotten password)](#windows-10-login-bypass-for-forgotten-password)
- [Office repeatedly prompts you to activate on a new PC](#office-repeatedly-prompts-you-to-activate-on-a-new-pc)
- [Windows Master Control Panel (God Menu)](#windows-master-control-panel-god-menu)
- [Can Connect to Wireless Router, but not to the Internet?](#can-connect-to-wireless-router-but-not-to-the-internet)
- [How To Find Wi-Fi Password Using CMD Of All Connected Networks](#how-to-find-wi-fi-password-using-cmd-of-all-connected-networks)
- [The 7 common PLDT Default passwords & usernames](#the-7-common-pldt-default-passwords--usernames)
- [Getting the Default Wifi Password for PLDT and Smart](#getting-the-default-wifi-password-for-pldt-and-smart)
- [Turn on AutoComplete in Windows Command Prompt](#turn-on-autocomplete-in-windows-command-prompt)
- [Modify /etc/hosts on Windows](#modify-etchosts-on-windows)
- [Recover files](#recover-files)
- [Show "Most Used Apps" Option Grayed Out in Windows 10 Start Settings](#show-%22most-used-apps%22-option-grayed-out-in-windows-10-start-settings)
- [How to Access the BIOS on a Windows 10 PC](#how-to-access-the-bios-on-a-windows-10-pc)
- [Tips to improve PC performance in Windows 10](#tips-to-improve-pc-performance-in-windows-10)
- [How to Bypass Age Restrictions on YouTube Videos](#how-to-bypass-age-restrictions-on-youtube-videos)
- [Solved! Google Drive Limit Download Sorry, you can't view or download this file at this time](#solved-google-drive-limit-download-sorry-you-cant-view-or-download-this-file-at-this-time)
- [Item Not Found When Trying To Delete in Windows 10](#item-not-found-when-trying-to-delete-in-windows-10)
- [How to Clear Windows Update History in Windows 10/7](#how-to-clear-windows-update-history-in-windows-107)
- [How to Format a Hard Drive Using the Command Prompt](#how-to-format-a-hard-drive-using-the-command-prompt)
- [How to Fix/Repair a RAW Drive](#how-to-fixrepair-a-raw-drive)
- [WIFI Icon Shows Not Connected but the Computer is Connected in Windows 10 (Solved)](#wifi-icon-shows-not-connected-but-the-computer-is-connected-in-windows-10-solved)
- [Change Drive Label](#change-drive-label)
- [How to make image transparent](#how-to-make-image-transparent)
- [HOW TO CROP A CIRCLE IN PHOTOSHOP](#how-to-crop-a-circle-in-photoshop)
- [How to Remove Unwanted Things from Images in Photoshop](#how-to-remove-unwanted-things-from-images-in-photoshop)
- [How to Fix ERR_CONNECTION_RESET in Google Chrome | The Site Can't Be Reached](#how-to-fix-errconnectionreset-in-google-chrome--the-site-cant-be-reached)


## [Remove 3D Objects folder under This PC in Windows 10](http://www.thewindowsclub.com/remove-3d-objects-folder-winows-10)

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


## [How to disable Windows Defender using the Registry](https://www.windowscentral.com/how-permanently-disable-windows-defender-windows-10)

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


## [Steps to fix the issue- Laptop Touchpad Not Working:](http://www.howtoresolveit.com/2017/12/laptop-mouse-touchpad-not-working.html)

### If it is a New Laptop:

- If it is a new laptop and the touchpad is not working after installing the operating system, then we need to install the touchpad drivers related to the laptop model.
- There should be a option in Bios Settings which is “`Disable` or `Enable` the `Touchpad`”, if it is disabled by default then we have to enable it.
- There should be a option in Bios settings like Basic or Advanced Touchpad mode in some laptops. We can enable the touchpad by changing those options and restarting the laptop.

### If it is a old laptop:

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


## Windows 10 Login Bypass (for forgotten password)

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


## [Office repeatedly prompts you to activate on a new PC](https://support.office.com/en-us/article/Office-repeatedly-prompts-you-to-activate-on-a-new-PC-a9a6b05f-f6ce-4d1f-8d49-eb5007b64ba1)

Update the registry to remove the Office 365 activation prompt
1. Close the activation window and all Office apps.
2. Right-click the Windows **Start** button on the lower-left corner of your screen, and select **Run**.
3. Type **regedit**, and then press **Enter**. Select **Yes** when prompted to open the Registry Editor.
4. On the left side of the Registry Editor, under **Computer**, navigate to the following key in the registry: `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Office\16.0\Common\OEM`
5. Right click the **OEM** value and click **File**>**Export**.
6. Save the key.
7. After the key is backed up, select **Edit**>**Delete**.
8. Repeat steps 3-7 for the following key: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\16.0\Common\OEM`
9. Close the Registry Editor and start Office again.


## Windows Master Control Panel (God Menu)

- list of shortcuts to almost every settings in menu in windows
- create a folder anywhere and rename it to the following string `GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}`


## [Can Connect to Wireless Router, but not to the Internet?](https://helpdeskgeek.com/networking/can-connect-to-wireless-router-but-not-to-the-internet/)

- Method 1 – Reset TCP/IP Stack
   - netsh int ip reset reset.log
   - netsh winsock reset catalog
- Method 2 – Update Driver in Device Manager
- Method 3 – Reset Wireless Network
- Method 4 – Update Computer Hardware Drivers
- Method 5 – Unsupported Wireless Security Settings
- Method 6 – Internet Connection Troubleshooter
- Method 7 – Reset Windows PC
- Method 8 – Check Proxy Server Settings

## [How To Find Wi-Fi Password Using CMD Of All Connected Networks](https://fossbytes.com/find-wifi-password-connected-networks-cmd-windows/)

- Open the command prompt and run it as administrator.
- In the next step, we want to know about all the profiles that are stored in our computer. So, type the following command in the cmd: `netsh wlan show profile`
- Type the following command to see the password of any WiFi network: `netsh wlan show profile WiFi-name key=clear`
- Under the security settings, in the ‘key content’, you see the WiFi password of that particular network.


## [The 7 common PLDT Default passwords & usernames](https://www.techchore.com/pldt-default-password/)

1. admin & 1234
2. adminpldt & 1234567890
3. homeultera & homeultera
4. homebro & homebro
5. voip & 1234
6. telecomadmin & admintelecom
7. admin & admin

For PLDTHome MyDSL subscribers the default username and password is user: admin & password: 1234. How about the PLDT default Admin password? It must be user: adminpldt & password: 1234567890.


## [Getting the Default Wifi Password for PLDT and Smart](https://pinoy.today/2017/12/02/getting-default-wifi-password-pldt-smart/)

### Default Wifi Password for PLDT HOME DSL

1. This guide will work on PLDTHOMEDSL, PLDTmyDSLPAL, and PLDTmyDSLBiz.
2. Download the Wifi Analyzer program (Android)
3. Get the Mac Address of your target Wifi.
4. Take the last 5 digit of your MAC Address. If you MAC is 00:4a:00:d0:44:c0, get 044C0. Convert all letters to upper case.
5. Combine PLDTWIFI + 5 digit MAC. Your password will be **PLDTWIFI044C0**.

### Default Wifi Password for PLDTHOMEDSLxxxxx

1. Some PLDT HOME DSL wifis have their MAC address as a suffix.
2. Make sure that the suffix only contains numbers.
3. Take those 5 digit numbers and multiple them by 3. Example, PLDTHOMEDSL12345, take 12345 x 3 = 37035.
4. You password will be **PLDTWIFI37035**.

### Default Wifi Password for PLDTHOMEFIBR_xxxxxx

1. Make sure the SSID has an underscore since there is another similar SSID without the underscore.
2. Take the xxxxxx portion of the SSID and convert them with the table below.

    |       |       |       |       |
    | ----- | ----- | ----- | ----- |
    | 0 = f | 1 = e | 2 = d | 3 = c |
    | 4 = b | 5 = a | 6 = 9 | 7 = 8 |
    | 8 = 7 | 9 = 6 | a = 5 | b = 4 |
    | c = 3 | d = 2 | e = 1 | f = 0 |

3. For example if we have PLDTHOMEFIBR_cdf123, then we take cdf123 and convert them with the table above. That will give us 320edc.
4. Now attach the resulting conversion to wlan (wlan + converted code). Your password will be **wlan320edc**.

### Default Wifi Password for PLDTHOMEFIBRxxxxxx

1. Make sure the SSID does not contain an underscore else follow the previous guide.
2. Get the code that represents the xxxxxx in the SSID.
3. Follow the conversion in the previous guide.
4. Attach the converted code into PLDTWIFI.
5. If your SSID is PLDTHOMEFIBR_cdf123, your password will be **PLDTWIFI320edc**. Take note of the capitalization of the password, the code should be in lowercase while PLDTWIFI is in uppercase.

### Default Wifi Password for HomeBro_Ultera

1. Please see the first guide on how to obtain the MAC Address of your target wifi network.
2. Take the last 5 characters of the MAC address, for example, if we have 00:4a:00:d0:44:c0, get 044C0.
3. Attach the previous code as a suffix in “HomeBro_”.
4. You password will be HomeBro_044C0. Codes are in uppercase format.


## [Turn on AutoComplete in Windows Command Prompt](https://www.thewindowsclub.com/autocomplete-in-windows-command-prompt)

### Activate auto-complete in CMD temporarily

To activate auto-complete in CMD for the current user for the current command session, open Run box, type `cmd /f` and hit Enter. The **/f** switch, enables or disables file and directory name completion characters.

Now press Ctrl+D to complete the folder name or Ctrl+F to complete a file name. Keep pressing this key combination and see the file names change.

To deactivate automatic complete, type `cmd /f:off`.

### Turn on auto-complete in CMD permanently

To enable auto-complete permanently in command prompt, run regedit to open the Registry Editor, and navigate to the following registry key: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor`

You will have to edit the **CompletionChar** value. The default is 40 in Hexadecimal. Set the value of REG_DWORD to **9**. This will enable folder name completion.

Next, double-click on **PathCompletionChar** and change its value to **9**.

This will set the **TAB key** as the control character.

If you want to use the same control characters that you use for a single command session as mentioned in the first part of this post, then set the values as follows:

- 4 for Ctrl+D
- 6 for Ctrl+F

The file name auto-completion feature will work on folders too, because Windows will search for the complete path and match against both file and folder names.

Go on to read more [Command Prompt Tips Tricks](https://www.thewindowsclub.com/5-basic-command-prompt-tips-for-windows-7-vista-users)!


## Modify /etc/hosts on Windows

- Run Notepad (or any editor) as administrator
- From Notepad, open the following file: `c:\Windows\System32\Drivers\etc\hosts`
- Make the necessary changes to the file.
- Click File > Save to save your changes.


## Recover files

You can recover them using CMD by following these steps:
- Go to Start -> Run -> cmd.
- Go to your pen drive, memory cards or mobile phone directory.
- Type `del` *.lnk` (to delete all link files in the directory)
- Type `attrib -h -r -s /s /d G:*.*`
- Replace `G` with your drive letter.
- And then press a gentle `Enter`.


## [Show "Most Used Apps" Option Grayed Out in Windows 10 Start Settings](https://www.askvg.com/fix-show-most-used-apps-option-grayed-out-in-windows-10-start-settings/)

Fix the "Show most used apps" option in Start settings, following steps will help you:

1. Open **Settings** app from Start Menu. Alternatively, you can press **WIN**+**I** keys together to open Settings directly.
2. Now click on **Privacy** icon in Settings app and in **General** tab, look for following option: `Let Windows track app launches to improve Start and search results`

Make sure this option is turned ON. If its set to OFF in your computer, click on the toggle button and set it to **ON**.

![Settings](https://media.askvg.com/articles/images6/Enable_Let_Windows_Track_App_Launches_To_Improve_Start_And_Search_Results_Option.png)

That's it. Now go to **Personalization** -> **Start** page and the "Show most used apps" option will become available. Now you can turn on/off this option without any problem. Also now the RUN dialog box will start remembering recently used commands in its history list.


## [How to Access the BIOS on a Windows 10 PC](https://www.laptopmag.com/articles/access-bios-windows-10)

1. **Navigate to settings.** You can get there by clicking the gear icon on the Start menu.
2. **Select Update & security.**
3. **Select Recovery** from the left menu.
4. **Click Restart Now** under Advanced startup. The comptuer will reboot to a special menu.
5. **Click Troubleshoot.**
6. **Click Advanced options.**
7. **Select UEFI Firmware Settings.**
8. **Click Restart.**


## [Tips to improve PC performance in Windows 10](https://support.microsoft.com/en-ph/help/4002019/windows-10-improve-pc-performance)

If your PC is running slowly, the following suggestions might help speed things up. The tips are listed in order, so start with the first one, see if that helps, and then continue to the next one if it doesn’t. 

1. Make sure you have the latest updates for Windows and device drivers
2. Restart your PC and open only the apps you need
3. Use ReadyBoost to help improve performance
4. Make sure the system is managing the page file size
5. Check for low disk space and free up space
6. Adjust the appearance and performance of Windows
7. Pause OneDrive syncing
8. Disable unnecessary startup programs
9. Check for and remove viruses and malware
10. Restore your PC from a system restore point


## [How to Bypass Age Restrictions on YouTube Videos](https://www.wikihow.com/Bypass-Age-Restrictions-on-YouTube-Videos)

- Method 1: **Replace** `watch?v=` with `/embed/`
- Method 2: **Add** `nsfw` right after `https://www.`
- Method 3: **Add** `repeat` right after `https://www.youtube`


## Solved! Google Drive Limit Download [Sorry, you can't view or download this file at this time](https://www.youtube.com/watch?v=MfMydm8iXSs)

1. From the drive URL remove the "**&export=download**" and replace "**uc**" with "**open**" then click "**Enter**".
2. Now click on that "**Add to My Drive**" button.
3. Go to your Google drive's homepage.
4. Then right click on that added file and click on "**Make a copy**". Now you can see that ownership of that copied file has been changed.
5. Now you can download this file.


## Item Not Found When Trying To Delete in Windows 10

1. Open command prompt with admin
2. Type `cd /d` and the path of the folder you are wanting to delete.
3. Type `dir /x` to list all the folders in that directory.
4. Look for the name for the folder and you should see something like FIXUSB~1 or you name of folder.
5. Type `rmdir /q /s` and folder path
6. That's it, folder should be removed.


## [How to Clear Windows Update History in Windows 10/7](https://www.isumsoft.com/computer/2-ways-to-clear-windows-update-history.html)

### How to Delete Windows Update History in Windows Explorer

**Step 1**: Stop Windows Update service.  
Press **Win+R** to open **Run** box, then type in **services.msc** in it and hit **Enter** to open the Services Manager.

![Open Service Manager](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/open-service-manager.png)

In Service Manager, scroll down the service list to Windows Update service, right-click on it and select **Stop**.

![Stop Windows Update Service](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/stop-windows-update-service.png)

**Step 2**: Open **Windows Explorer**, then, copy and past the following path into address bar, hit **Enter** key.

`%windir%\SoftwareDistribution\DataStore`

![Open Windows Update Log](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/open-windows-update-log.png)

**Step 3**: In DateStore folder, delete **Logs** and **DataStore.ebd**.

![Delete Windows Update History](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/delete-windows-update-history.png)

### How to Clear Windows Update History via Command Prompt

**Step 1**： Open Command Prompt as administrator.

Click Start, type **cmd** in the Search box. Then, right-click Command Prompt, select Run as administrator.

![Open Command Prompt](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/open-command-prompt.png)

**Step 2**: On command prompt, type in `net stop wuauserv` and press **Enter** to stop Windows Update service.

**Step 3**: Copy and paste command below and hit Enter.

`del "%systemroot%\SoftwareDistribution\DataStore\Logs\edb.log"`

![Clear Windows Update History](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/clear-windows-update-history.png)

It will delete the log file that stores your Windows update history.

![Update History Empty](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/update-history-empty.png)

**Step 4**: Type `net start wuauserv` and press Enter to **start the Windows Update service** again.

![Start Windows Update History](https://www.isumsoft.com/images/computer/2-ways-to-clear-windows-update-history/start-windows-update-service.png)


## [How to Format a Hard Drive Using the Command Prompt](https://www.tomshardware.com/news/format-hard-drive-command-prompt,37632.html)

Formatting a hard drive or SSD is the same as buying a new hard drive since the process erases all the data in one fell swoop. When you format your hard drive, you can clean internal as well as external storage media.

1. **Open Command Prompt As Administrator**
2. **Use Diskpart** type `diskpart` and press `Enter`.
3. **List Disk** to list all the available drives, type `list disk` and press `Enter`.
4. **Select the Drive to Format** specify the drive number which needs to be formatted, type `select disk <disk number>`.
5. **Clean the Disk** to permanently delete all files and folders, and successfully clean up the disk, type `clean`.
6. **Create Partition Primary** to make the drive accessible again, type `create partition primary`.
7. **Format the Drive** with FAT or NTFS file system, type `format fs=ntfs` (or `format fs=exfat`) and press `Enter`.
8. **Assign a Drive Letter** type `assign`.


## [How to Fix/Repair a RAW Drive](https://www.guibord.com/english/online_articles/raw_drive/index.html)

A **RAW drive** is a hard drive on which the reference data (master boot record, partition records, etc.) is corrupt.

1. At the command prompt, type `DISKPART`
2. type `LIST DISK`
3. type `SELECT DISK 1`
4. type `LIST VOLUME`
5. type `SELECT VOLUME 2`
6. type `CLEAN`
7. type `CREATE PARTITION PRIMARY`
8. type `ACTIVE`
9. type `LIST PARTITION`
10. type `SELECT PARTITION 1`
11. type `FORMAT OVERRIDE QUICK LABEL=FixedDrv`


## [WIFI Icon Shows Not Connected but the Computer is Connected in Windows 10 (Solved)](https://www.youtube.com/watch?v=TwcrydoLCJI)

Wifi icon not showing the correct signal status in Windows 10? It's simple to fix this problem. Right click on Taskbar I Task Manager I Services I Open Services (Bottom) and set these five services to "Automatic" and Start all of them (If they are not already running)

1. DHCP Client
2. Network Location Awareness
3. Network List Service
4. Network Store Interface Service
5. Windows Event Log


## [Change Drive Label](https://macrorit.com/partition-magic-manager/change-drive-label-command-prompt-windows-10-7.html)

1. Press `WIN` key or click start bottom, type `CMD`, run cmd.exe as administrator. It's required to run it as administrator to change drive label.
2. Type `label C: System`, Press `Enter`; > Type `label E: Tools`, Press `Enter`; > Type `label F: Programs`, Press `Enter`;
3. Double click This PC on desktop to check new labels.


## [How to make image transparent](https://www.templatemonster.com/help/photoshop-how-to-make-image-transparent.html)

1. Right click the image layer in Photoshop. Select `Layer From Background`.
2. Select the `Magic Wand Tool` from the left panel in Photoshop
3. Select the image area you want to be transparent using the `Magic Wand Tool`
4. Once selected, click `Delete` on your keyboard. With that done you should see the transparent background around the image.
5. Save the image as `.png` to keep the transparent.


## [HOW TO CROP A CIRCLE IN PHOTOSHOP](https://windycitybloggers.com/photoshop-cropping-circles/)

1. Open your image in Photoshop
2. Double click on the Background layer and make it a Normal layer – just click OK.
3. Select the Elliptical Marquee Tool
4. Create the circle
5. Inverse the layer
6. Delete the outer layers
7. Crop your image to save
8. Save as .png


## [How to Remove Unwanted Things from Images in Photoshop](https://www.youtube.com/watch?v=S1CA7Ap_PG8)

1. Select `Clone Stamp Tool`, press `Alt` key on the keyboard and click the thing you want to clone, the start moving the cursor over the object you want to remove.
2. Select `Spot Healing Brush Tool` and click on a small object, the smart filter will remove the object and blend in the surrounding environment.
3. Once done, select the `Healing Brush Tool`, click on the area while holding the `Alt` key for the tool to pick up what to clone and apply it on a canvas like in the `Clone Stamp Tool`.
4. Now select the `Patch Tool`, click on the area you want to remove and drag it to a spot, which you want to clone. It will simply blend in the two selected areas, you can use the `Spot Healing Brush Tool` to fix up the area a bit.
5. In the end, select the area which you want to remove, go to `Edit` menu and click the `fill` option, choose the `Content-Aware` option from the drop down list, select `normal` for the mode, opacity to `100%`, and click OK.

This will remove a selected area of the image and blend the selection according to its surrounding pattern.


## How to Fix ERR_CONNECTION_RESET in Google Chrome | The Site Can't Be Reached

### Method 1: DNS Server Addresses

1. Type Preferred DNS Server: `8.8.8.8` and Alternate DNS Server: `8.8.4.4`

OR

Type Preferred DNS Server: `1.1.1.1` and Alternate DNS Server: `1.0.0.1`

2. Tick the "Validate Box" & then press "OK" button to save changes.

### Method 2: Open "Command Prompt" as Admin.

1. `ipconfig /release`, then press Enter Key.
2. `ipconfig /flushdns`, then press Enter Key.
3. `ipconfig /renew`, then press Enter Key.
4. `netsh winsock reset`, then press Enter Key.
5. Type `exit`, then press Enter Key.
6 Once you execute all cmds, Restart your PC/Laptop to apply changes.


---

<!-- ## [Lynda.com 60days PREMIUM account FREE](https://discuss.freetutorials.eu/t/get-lynda-com-60days-premium-account-free/7102)

[Lynda.com 60days PREMIUM account FREE](https://discuss.freetutorials.eu/t/get-lynda-com-60days-premium-account-free/7102)

Method:
1. Go-to
> https://know.freelibrary.org/MyResearch/register/policy

2. Check I am 18 years of age or older & Next
3. use
> http://www.fakenamegenerator.com  
and fill form details &
>
>For fake email Use  
https://emailfake.com  
Use any pin eg. 5439  
[NOTE: write down or store fake email and pin in notepad.]

4. Address information
Copy paste form fakenamegenrator.com & next
>[ IMPORTANT NOTE: If the fake address is not working then  
Do a Google Map search this “Pennsylvania apartment” .  
then select any rated apt.  
From list result  
Select address Details and copy paste the address ]

5. Library card number and pin will be emailed to your fake email.

6. go-to
> https://www.lynda.com/portal/patron?org=freelibrary.org  
And login.

This library card is valid for 60days  
Re-do above process after every expirey -->

<!-- Temporary Account
|            |                     |
| ---------- | ------------------- |
| FirstName  | Kurt                |
| M.I.       | S.                  |
| LastName   | Irvin               |
| Bdate      | 04/04/1979          |
| Phone      | 405-209-7000        |
| Gender     | Male                |
| Address    | 5349 Oxford Cir     |
| City       | Mechanicsburg       |
| State      | Pensylvenia         |
| ZipCode    | 17055               |
| Email      | kurtirvin@e-mule.ml |
| PIN        | 7904                |
| Library    | 2472032             |
| Expiration | 02/03/2019          | --> |
