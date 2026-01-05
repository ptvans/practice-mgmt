# GitHub Pages Deployment Guide

This project is set up to automatically deploy to GitHub Pages whenever you push to the `main` branch.

## Initial Setup

### 1. Update Configuration

Before pushing to GitHub, update these files with your GitHub username and repo name:

**`package.json`** - Update the homepage URL:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
}
```

**`vite.config.js`** - Update the base path:
```js
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/', // Must match your GitHub repo name
})
```

### 2. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Save

### 4. Wait for Deployment

- Go to the **Actions** tab in your repository
- Watch the workflow run (takes 1-2 minutes)
- Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME`

## How It Works

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:
1. Triggers on every push to `main` branch
2. Installs dependencies
3. Builds the React app with Vite
4. Deploys the `dist` folder to GitHub Pages

### HashRouter for GitHub Pages

We use `HashRouter` instead of `BrowserRouter` because GitHub Pages is a static host. This means:
- URLs look like: `https://yoursite.com/#/services`
- No server configuration needed
- Routing works perfectly on refresh

## Making Updates

Every time you push to the `main` branch, the site automatically rebuilds:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
```

Wait 1-2 minutes and your changes will be live!

## Testing Before Deployment

### Test the Build Locally

```bash
# Build the production version
npm run build

# Preview the production build
npm run preview
```

Open http://localhost:4173 to see exactly what will be deployed.

### Test with Dev Server

```bash
npm run dev
```

Open http://localhost:5173 for hot-reload development.

## Troubleshooting

### Issue: Blank page after deployment

**Solution**: Verify these settings:
1. `base` in `vite.config.js` matches your repo name
2. `homepage` in `package.json` is correct
3. You're using `HashRouter` (not `BrowserRouter`)

### Issue: CSS/JS files not loading (404 errors)

**Solution**: The `base` path in `vite.config.js` must match your repository name exactly.

### Issue: Images not loading

**Solution**: Ensure images are in the `public` directory and paths start with `/`:
```jsx
<img src="/images/photo.jpg" alt="..." />
```

### Issue: Old version showing

**Solution**: Hard refresh your browser:
- Mac: Cmd + Shift + R
- Windows/Linux: Ctrl + Shift + R

### Issue: Build fails in GitHub Actions

**Solution**: 
1. Go to Actions tab
2. Click on the failed workflow
3. Expand the "Build" step to see the error
4. Fix the issue locally and push again

## Viewing Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. See all deployment runs and their status
4. Click any run to see detailed logs

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update `homepage` in `package.json` to your custom domain
4. Update `base` in `vite.config.js` to `'/'`

## Repository Naming Options

### Option 1: User/Organization Site
- Repo name: `YOUR_USERNAME.github.io`
- URL: `https://YOUR_USERNAME.github.io`
- Config: Set `base: '/'` in `vite.config.js`

### Option 2: Project Site (Current Setup)
- Repo name: `practice-mgmt` (or anything else)
- URL: `https://YOUR_USERNAME.github.io/practice-mgmt`
- Config: Set `base: '/practice-mgmt/'` in `vite.config.js`

## Need Help?

Check `DEPLOYMENT_TROUBLESHOOTING.md` for common issues and solutions.

