# Fix: GitHub Deployments Showing "github-pages inactive"

When your GitHub Deployments status panel says `github-pages inactive`, don't worry, this is a very common side-effect of switching deployment workflows.

It happens because your repository still has an old cached deployment hook pointing to a manual Git branch (like `gh-pages` or `main`), while your new optimized `deploy.yml` is using modern GitHub Actions cloud runner APIs instead.

Follow this quick checklist to activate it instantly:

## Step 1: Switch Your Source to Actions
GitHub needs to know it should switch from the old branch-tracking mode to the modern Actions runner pipeline.

1. Open your repository on GitHub.
2. Click on **Settings** ⚙️ at the top menu bar.
3. On the left-hand sidebar, click on **Pages** (under the Code and automation section).
4. Under **Build and deployment** -> **Source**, toggle the dropdown option from _Deploy from a branch_ and change it to **GitHub Actions**.

## Step 2: Trigger a Fresh Change Push
The deployment infrastructure requires a fresh commit to wipe its old configuration status and spin up your modern pipeline environment.

1. Go to your local code editor workspace.
2. Make a small text modification (such as adding a tiny comment line or a space inside your files).
3. Open your terminal shell and commit/push the change to execute your newly customized `deploy.yml` pipeline workflow file:

```bash
git add .
git commit -m "fix: re-trigger pipeline configuration sequence"
git push origin main
```

## Step 3: Monitor the Active Execution
1. Click on the **Actions** tab at the top of your GitHub repository interface page.
2. Click on your latest running pipeline title card
3. Wait roughly 30–45 seconds until you see green checkmarks across all steps.

Once your fresh run finishes compiling successfully, go back to your main repository landing page. The **Deployments** panel on the right sidebar will update to green and say `github-pages Active`, showing your direct production URL!
