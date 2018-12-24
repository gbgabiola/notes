https://www.bootstrapcdn.com/
https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css
https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js
https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js


#### JQuery Core CDN / code.jquery.com
3.3.1 -
```html
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
```
2.2.4 -
```html
<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
```
1.12.4 -
```html
<script src="https://code.jquery.com/jquery-1.12.4.js" integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=" crossorigin="anonymous"></script>
```
regex url:
```js
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
```

---

#### installation packages:
```bash
npm install -g express-generator
npm install -g less
npm install -g less-watch-compiler
npm install -g grunt
npm install -g js2coffee // javascipt to CoffeeScript
```

#### update or upgrade:
```bash
npm install npm@latest -g // latest version
npm install -g npm@lts // long term support version
```

update action to each globally installed package that is outdated -- that is, has a version that is different from latest.
```bash
npm update -g
```
**NOTE**: *If a package has been upgraded to a version newer than latest, it will be downgraded*.

---

## [Node Version Manager (nvm)](https://github.com/coreybutler/nvm-windows "Node Version Manager") for Windows

Manage multiple installations of node.js on a Windows computer.

Download [here!](https://github.com/coreybutler/nvm-windows/releases)

### Installation & Upgrades
It comes with an installer (and uninstaller), because getting it should be easy. Please note, you need to uninstall any existing versions of node.js before installing NVM for Windows. Also delete any existing nodejs installation directories (e.g., "C:\Program Files\nodejs") that might remain. NVM's generated symlink will not overwrite an existing (even empty) installation directory.

You should also delete the existing npm install location (e.g. "C:\Users<user>\AppData\Roaming\npm") so that the nvm install location will be correctly used instead. After install, reinstalling global utilities (e.g. gulp) will have to be done for each installed version of node:

```bash
nvm use 4.4.0
npm install gulp-cli -g
nvm use 0.10.33
npm install gulp-cli -g
```

**To upgrade**, just run the new installer. It will safely overwrite the files it needs to update without touching your node.js installations.

```
nvm install versionNumber
nvm use versionNumber
nvm on // turn on the nodejs
nvm off
nvm ls // shows the lists of node.js version instaled
nvm uninstall versionNumber
nvm alias default system
or
nvm alias default versionNumber

nvm install node --reinstall-packages-from=node -> moving your tools to the new Node.js version
```
### Usage
NVM for Windows is a command line tool. Simply type nvm in the console for help. The basic commands are:

- `nvm arch [32|64]`: Show if node is running in 32 or 64 bit mode. Specify 32 or 64 to override the default architecture.
- `nvm install <version> [arch]`: The version can be a node.js version or "latest" for the latest stable version. Optionally specify whether to install the 32 or 64 bit version (defaults to system arch). Set [arch] to "all" to install 32 AND 64 bit versions.
- `nvm list [available]`: List the node.js installations. Type available at the end to show a list of versions available for download.
- `nvm on`: Enable node.js version management.
- `nvm off`: Disable node.js version management (does not uninstall anything).
- `nvm proxy [url]`: Set a proxy to use for downloads. Leave [url] blank to see the current proxy. Set [url] to "none" to remove the proxy.
- `nvm uninstall <version>`: Uninstall a specific version.
- `nvm use <version> [arch]`: Switch to use the specified version. Optionally specify 32/64bit architecture. nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode based on the value supplied to <arch>. For information about using use in a specific directory (or using .nvmrc), please refer to issue #16.
- `nvm root <path>`: Set the directory where nvm should store different versions of node.js. If <path> is not set, the current root will be displayed.
- `nvm version`: Displays the current running version of NVM for Windows.
- `nvm node_mirror <node_mirror_url>`: Set the node mirror.People in China can use https://npm.taobao.org/mirrors/node/
- `nvm npm_mirror <npm_mirror_url>`: Set the npm mirror. People in China can use https://npm.taobao.org/mirrors/npm/

---

## Organizing Folders:
### By Topic:
- Separate folders for scripts related to system management, games, virtualization, database, office tasks, data analysis, etc.
- I find this type of organization extremely useful if you work in many different fields on a wide variety of projects

### By Platform:
- Separate folders for desktop apps, web apps (like Django, ROR, Node.js, etc.), mobile apps (iphone, android, etc.),
- Useful if you develop for many different platforms

### By Seriousness:
- Separate projects for work, individual projects, collaboration projects, etc.
- Useful for separating work projects and side projects

---

- ~/Projects
  - /... Self-contained projects that are deployed somewhere/will be
  - /... Client specific folder of projects (* number of clients)
    - /... Projects
  - /scratch
    - /... One-offs, quick tests, experiments
  - /libraries
    - /... open source projects i need to dig through or I'm contributing on
  - /tools
    - /... Re-usable utilities I write for myself that get added to the path

---

 - code/ 
   - ruby/ 
   - javascript/
   - ... # loosely organized by language

 # Main project folder
 - Projects/
   - _Archive/ # Old projects
   - Kizmeta/ # My personal projects
   - Playground/ # Miscellaneous projects, general playground
   - ClientName/ # Organized by client then by project
     - client_project_1/
     - client_project_2/

---

~/Projects/
|-  <a_client>/
|--    <product>
|-  <another_client>/
|--    <product>
|--    <more_product>
|-  <my_company>/
|--    <a_tool>
|--    <random_experiment>
|-  open_source/
|--    <my_fork_of_stuff>
|--    <another_fork>
|-  <my_personal_domain>/
|--    <personal_project>

Projects
    |
    +-- ProjectName  <-- Project git repo 
           |
           +-- DevelopmentDocuments
           |
           +-- Assets
           |     |
           |     +-- Wireframes
           |     |
           |     +-- PSDs
           |
           +-- Code
                 |
                 +-- laravel_project
                       |
                       +-- app
                       |
                       +-- config
                       |
                       +-- resources
                       |
                       +-- public  <-- point webserver docroot here.
    ... etc ... 



Clients/ all client docs archived code etc
Projects/ personal projects docs
src/ all non web code
www/ Apache document root for all the web sites and apps.


Client/Project Folder � e.g. Ted�s Drywall Website
1 � Documents � This houses any documents related to the client
Proposals � Copies of any proposals sent to the client, and all versions thereof.
Contracts � Copies of all contracts sent to the client; I typically have an unsigned Word and PDF version, then a scanned PDF of the signed contract
Invoices � Invoiced saved as Excel files and PDFs sent to the client
Other � Anything that doesn�t fit elsewhere, such as email correspondence I want a copy of
2 � Inspiration � I put anything I use for inspiration here, such as color pallets, screenshots, and photos
3 � Materials � This is any material provided by the client or created by me for the project
Content � Textual content for the site, and any supplemental materials like magazine articles
Imagery � Photos, logos, icons, etc
Other � Anything else, like Flash animations, audio and video files, lists of links, etc
4 � Design � Anything creative built during the design phase
Wireframes � Wireframes of different modules of the project (e.g. home page, contact form)
Mockups � Mockup of different modules of the project (e.g. home page, contact form)
Other � Photoshop files for project imagery
5 � Development � This is where the actual website is stored; while this will vary project to project, it will mirror what�s on the webserver and generally follows the same basic structure
Images � All images for the site
Scripts � All external Javascript files
Stylesheets � All CSS files
Common � Common site elements like headers, sidebars, etc. that are included at the server level

---

webDev intro:
Im a web developer that never went to college/high school. I had no experience when I took my first job, but thanks to people on Youtube like Traversy Media who teach code, I was able to get my first job and actually complete it. That was about 5 years ago, now I have too many clients to handle on my own. This video has a lot of quality tips that I had to learn the hard way. One thing I wish I knew about coding languages when I had first gotten into it was that once you learn one the others become easier like dominoes. That and having well-protecting contractual agreements.


download videos or video tutorials:
pip3 install youtube-dl
youtube-dl.exe - https://rg3.github.io/youtube-dl/download.html

---

### javaScript:
- eloquentjavascript
- js the right way
- you dont know js
- javascript garden
- survivejs
- https://google.github.io/styleguide/javascriptguide.xml

### sql:
- sqlzoo.net
- sqlschool.com

### git:
- http://www.vikingcodeschool.com/web-development-basics/a-command-line-crash-course