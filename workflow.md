# Workflow

## Table of Contents <!-- omit in toc -->

- [How to Write a Git Commit Message](#how-to-write-a-git-commit-message)
- [Your Perfect Kickstart To Shell Scripting](#your-perfect-kickstart-to-shell-scripting)
- [Github does dotfiles](#github-does-dotfiles)
- [Intro to Dotfiles](#intro-to-dotfiles)
- [Getting Started With Dotfiles](#getting-started-with-dotfiles)
- [An introduction to Dotfiles: how to take control of your development environment](#an-introduction-to-dotfiles-how-to-take-control-of-your-development-environment)
- [How to make your Dotfile management a painless affair](#how-to-make-your-dotfile-management-a-painless-affair)
- [Dotfiles Are Meant to Be Forked](#dotfiles-are-meant-to-be-forked)
- [Managing Your Dotfiles](#managing-your-dotfiles)
- [Others](#others)


## [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how


## [Your Perfect Kickstart To Shell Scripting](https://codeburst.io/your-perfect-kickstart-to-shell-scripting-857b81c0939b)

- Shebang
- Variables
- User Input
- Tests
  1. File Test Operations
  2. String Test Operations
  3. Arithmetic Operators
- Decision Making
  1. The `if` statement
  2. Case Statements
- Iterative Statements: Loops
  1. The For Loop
  2. The While Loop
- Positional Parameters
- Exit Statuses
- Logic Operations
  - Logical AND = `&&`
  - Logical OR = `||`
- Functions
- Positional Parameters In Functions
  - Global Scope
  - Local Scope
- Wildcards
  - `*` = matches zero or more characters
  - `?` = matches exactly one character
  - `[ ]` = A character class
  - `[!]` = maches characters not included within brackets
- Debugging
  1. -x option
  2. -e option
  3. -v option


## [Github does dotfiles](https://dotfiles.github.io/)

- Home
  - **Backup**, **restore**, and **sync** the prefs and settings for your toolbox. Your dotfiles might be the most important files on your machine
  - **Learn** from the community
  - **Share** what you've learned with the rest of us
- Tutorials
- General-purpose utilities
- Tool-specific frameworks
  - Editors
  - Shell
- Bootstrap repositories
  - [thoughtbot/dotfiles](https://github.com/thoughtbot/dotfiles)
  - [dotphiles](https://github.com/dotphiles/dotphiles)
- Inspiration
- Tips and tricks
  - Don't ignore your .gitignore
  - Embrace submodules / subtrees
  - Different branches for different boxes
- FAQ


## [Intro to Dotfiles](https://thoughtbot.com/upcase/videos/intro-to-dotfiles)

- thoughtbot dotfiles
  - Local Overrides
  - rcm dotfile management utility
- Distributed Dotfile Convention
- Vim Filetype Configuration
  - ftdetect
  - ftplugin
- Zsh Configuration
- Git Configuration
  - Aliases
  - Scripts
  - Fall through g Alias
- Dotfiles Philosophy
  - Avoid automation
  - Rule of 3
  - Use Time Boxed Spikes
  - Capture Notes
  - Share Your Dotfiles
  - Don't Use Someone Else's Dotfiles
- Levelling Up Your Dotfiles


## [Getting Started With Dotfiles](https://medium.com/@webprolific/getting-started-with-dotfiles-43c3602fd789)

- Automate All The Things!
- Getting Started
- An Example Dotfiles Repository
  - Structure
  - The Dotfiles
    - .bash_profile
    - .inputrc
    - .alias
    - .functions
    - .env
    - .prompot
- Other Dotfiles
  - .gitconfig for Git
  - .vimrc for Vim
- Installing the Dotfiles
  - Installing Script
- Homebrew and Homebrew Cask
- macOS defaults
- Updating Your System


## [An introduction to Dotfiles: how to take control of your development environment](https://www.freecodecamp.org/news/dive-into-dotfiles-part-1-e4eb1003cff6/)

- Modifying the .bash_profile
- Aliases
- Functions
- Dotfiles and Sharing


## [How to make your Dotfile management a painless affair](https://www.freecodecamp.org/news/dive-into-dotfiles-part-2-6321b4a73608/)

- Setting Up Your Environment
- The rsync Approach
- Symlinking
- Creating Utility Scripts for Syncing and Bootstrapping
- Splitting Up Your .bash_profile
- Adding Support For Customization
- Next Steps


## [Dotfiles Are Meant to Be Forked](https://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/)

- So many lines
- Sharing the shit out of them
- So, organize it
- My dotfiles
  - [holman/dotfiles](https://github.com/holman/dotfiles)


## [Managing Your Dotfiles](https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/)

- Dotfiles Are Not Meant to Be Forked
- Organizational Approaches
- Version Control
- Initialization
- Installation
- Dependencies and Plugins
- Local Customization
  - Shell
  - Git
  - Vim
  - tmux
- Miscellaneous Tips
  - Path to Dotfiles
  - Tracking Custom Scripts
  - Tracking Config Files in Other Directories


## Others

- [Personal dotfiles for mac and wsl](https://github.com/ridhwaans/dotfiles)
