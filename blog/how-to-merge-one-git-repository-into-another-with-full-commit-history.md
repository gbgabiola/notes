# How to Merge One Git Repository Into Another (With Full Commit History)

Have you ever needed to combine two separate Git repositories into one? Whether you are consolidating a legacy codebase into a **monorepo** or pulling an isolated microservice back into a parent project, the goal is always the same: **move the child repo into a subfolder while preserving every single commit history**.

If you just copy and paste the files, you lose the project's entire timeline. If you use basic `git merge` commands, files spill into your root directory and trigger messy conflicts.

In this guide, we will cover the **two best ways** to merge repositories cleanly. We'll start with the modern gold standard (`git-filter-repo`) and then look at a native Git alternative if you can't install external tools.

## Method 1: The Gold Standard (git-filter-repo)

The absolute cleanest, most foolproof way to combine repositories is using `git-filter-repo`.

Instead of merging the child repo at the root level and shuffling files around afterward, `git-filter-repo` **rewrites the child repository's history beforehand**. It alters past commits so they look like they always happened inside your target subfolder. When you finally pull it into your parent repo, it snaps into place perfectly with **zero merge conflicts** and **zero root directory spillover**.

### Step 1: Install `git-filter-repo`
Because this is an external extension officially recommended by Git, you will need to install it first:
- **Mac (Homebrew):** `brew install git-filter-repo`
- **Windows / Linux (Pip):** `pip install git-filter-repo`

### Step 2: Create a Temporary Clone of the Child Repo
Because `git-filter-repo` physically rewrites history, **never run it on your original source repository**. Clone a fresh, disposable copy instead:

```bash
git clone git@github.com:username/child-repo.git child-repo-temp
cd child-repo-temp
```

### Step 3: Shift the Layout Natively
Run the filtering tool to push the entire history into your desired target subfolder name (e.g., `imported-project`):

```bash
git filter-repo --to-subdirectory-filter imported-project
```
_If you look at this temporary directory now, you'll see that the root level is perfectly clean, and every single file lives inside `imported-project/`._

### Step 4: Merge Into Your Parent Repository
Open your terminal, navigate over to your **main parent repository**, and pull the rewritten history in:

```bash
cd /path/to/main-parent-repo

# 1. Link your local temporary child directory as a source
git remote add local-child /path/to/child-repo-temp

# 2. Fetch the prepared history data
git fetch local-child

# 3. Merge the histories seamlessly
git merge local-child/main --allow-unrelated-histories -m "Merge child repo into imported-project/"

# 4. Clean up the temporary remote path
git remote remove local-child
```

### Why this is the best way:
Because the files were pre-nested inside `imported-project/` before touching your main repo, running standard commands like `git log --follow imported-project/some-file.txt` will work perfectly out-of-the-box.

---

## Method 2: The Native Git Alternative (`git subtree`)

If you are working in a restricted corporate environment where you cannot install `git-filter-repo`, the best built-in alternative is **`git subtree`**. 

Unlike manual file-moving scripts that rely on unstable terminal wildcards (`*`), which frequently crash on Mac/Zsh or Windows, `git subtree` is built natively into Git. It automatically maps an external repository directly into a subfolder.

### Step-by-Step Native Guide
Open your terminal, navigate directly to your **main parent repository**, and execute these commands:

```bash
# 1. Add the child repository as a temporary remote source
git remote add temp-source git@github.com:username/child-repo.git
git fetch temp-source

# 2. Pull the child repo directly into a subfolder
# (Change 'imported-project' to your desired directory name)
git subtree add --prefix=imported-project temp-source main

# 3. Clean up the temporary tracking connection
git remote remove temp-source
```

### The Catch with `git subtree`
While this method is fast and requires no external tools, it acts as a complex, synthesized merge layout. Because of this architectural shift, standard logging features get slightly obscured. 

If you run `git log --follow imported-project/file.txt` later and notice your history looks hidden, you will need to append a specific flag to force Git to look past the subtree merge point:

```bash
git log --follow --full-history imported-project/file.txt
```

---

## Comparison: Which should you choose?

| Feature                | Method 1: `git-filter-repo` (Recommended) | Method 2: `git subtree` (Built-in)      |
| :--------------------- | :---------------------------------------- | :-------------------------------------- |
| **Installation**       | Requires Python/Homebrew                  | **None (Native to Git)**                |
| **Workspace Safety**   | **Perfect (No ghost files or clutter)**   | **Perfect (No ghost files or clutter)** |
| **Merge Conflicts**    | **Zero Risk**                             | **Zero Risk**                           |
| **`git log --follow`** | **Works flawlessly out-of-the-box**       | Requires extra flags (`--full-history`) |

## Summary
If you have the ability to install tools on your machine, always choose **`git-filter-repo`**. It provides the absolute cleanest history tree and avoids workspace stability issues entirely. If you need a quick, no-install fix right now, **`git subtree`** is your best native friend.
