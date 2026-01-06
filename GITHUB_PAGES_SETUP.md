# GitHub Pages Deployment - Quick Fix Guide

## Current Status
✅ Build works locally
✅ GitHub Actions workflow is configured
✅ index.html is now the correct React entry point

## What You Need to Do

### 1. Update Configuration Files

You still have placeholder values that need to be updated:

**`package.json`** - Line 6:
```json
"homepage": "https://YOUR_USERNAME.github.io/practice-mgmt",
```
Change `YOUR_USERNAME` to your actual GitHub username.

**`vite.config.js`** - Line 6:
```js
base: '/practice-mgmt/', // Update this to match your GitHub repo name
```
If your repo name is NOT `practice-mgmt`, change this to match.

### 2. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Click Save

### 3. Push Your Code

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Monitor the Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run starting
3. Click on it to watch the progress
4. If it fails, click on the failed step to see the error

## Common Issues & Solutions

### Issue: Workflow doesn't run
**Solution**: Make sure you enabled "GitHub Actions" as the source in Settings → Pages

### Issue: Build fails with "npm ci" error
**Solution**: Make sure `package-lock.json` is committed to the repository

### Issue: 404 on deployed site
**Solution**: 
- Verify `base` in `vite.config.js` matches your repo name exactly
- If repo name is `YOUR_USERNAME.github.io`, set `base: '/'`
- Otherwise, set `base: '/REPO_NAME/'`

### Issue: Blank page after deployment
**Solution**: Already fixed! We're using HashRouter which works with GitHub Pages

### Issue: Images not loading
**Solution**: Images are in the `public/images/` folder, which is correct. They should work.

## Testing Your Deployment URL

After successful deployment, your site will be at:
- `https://YOUR_USERNAME.github.io/practice-mgmt/` (if repo name is `practice-mgmt`)
- `https://YOUR_USERNAME.github.io/` (if repo name is `YOUR_USERNAME.github.io`)

## Local Testing

Before pushing, you can test the production build:

```bash
# Build
npm run build

# Preview the build
npm run preview
```

Then open http://localhost:4173 to see exactly what will be deployed.

## Current Workflow Status

The `.github/workflows/deploy.yml` file is correctly configured to:
1. ✅ Trigger on push to main branch
2. ✅ Use Node.js 20
3. ✅ Install dependencies with `npm ci`
4. ✅ Build with `npm run build`
5. ✅ Upload the `dist` folder
6. ✅ Deploy to GitHub Pages

Everything should work once you:
1. Update YOUR_USERNAME in package.json
2. Enable GitHub Actions in repository settings
3. Push to GitHub

