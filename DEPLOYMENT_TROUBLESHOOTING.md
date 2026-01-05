# GitHub Pages Deployment Troubleshooting

## What I Changed
Changed from `BrowserRouter` to `HashRouter` in `src/App.js`. This makes URLs use hash-based routing (e.g., `/#/case-study/on-call`) which works perfectly with GitHub Pages static hosting.

## Testing Steps

### 1. Check Your Deployment URL
Your site should be at one of these:
- `https://YOUR_USERNAME.github.io/` (if repo name is `YOUR_USERNAME.github.io`)
- `https://YOUR_USERNAME.github.io/portfolio/` (if repo name is `portfolio`)

### 2. Verify Homepage Setting
If your repo is NOT named `YOUR_USERNAME.github.io`, update `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
}
```

For example:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio"
}
```

### 3. Check Browser Console
Open your deployed site and press F12 to open Developer Tools:
- Look for any errors in the Console tab
- Check the Network tab to see if files are loading (look for 404s)

### 4. Common Issues & Fixes

#### Issue: Blank page with no errors
- **Solution**: Already fixed by switching to HashRouter

#### Issue: CSS/JS files not loading (404 errors)
- **Solution**: Set correct `homepage` in package.json (see step 2)

#### Issue: Images not loading
- **Problem**: Image paths may be incorrect
- **Solution**: Make sure image paths in `caseStudies.js` start with `/images/...`
  ```javascript
  src: '/images/case-studies/on-call/mobile-screens.png'  // ✓ Correct
  src: 'images/case-studies/on-call/mobile-screens.png'   // ✗ Wrong
  ```

#### Issue: Old version showing
- **Solution**: Hard refresh with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### 5. Re-deploy
After making changes:
```bash
git add .
git commit -m "Fix GitHub Pages routing"
git push origin main
```

Wait 2-3 minutes for GitHub Actions to rebuild and deploy.

### 6. Check Build Output
In your GitHub repo:
1. Go to "Actions" tab
2. Click on the latest workflow run
3. Expand "Build" step and check for errors

### 7. Verify GitHub Pages Settings
In your repo settings:
1. Go to Settings → Pages
2. Verify Source is set to "GitHub Actions"
3. Check the displayed URL matches where you're looking

## If Still Not Working

Try building locally to test:
```bash
npm run build
npx serve -s build
```

Open http://localhost:3000 and verify everything works.

## Alternative Solution: Keep BrowserRouter

If you prefer clean URLs without `#`, you can use BrowserRouter with a 404 trick:

1. Create `public/404.html` with redirect script
2. Update `public/index.html` with hash detection

This is more complex but keeps URLs looking like `/case-study/on-call` instead of `/#/case-study/on-call`.

Let me know if you'd like me to implement this alternative!

