# FretterFrenzy Portfolio - Deployment Guide

Your portfolio is ready to go live! Follow these simple steps to launch it.

## What You'll Need
- Free GitHub account (github.com)
- Free Vercel account (vercel.com)
- ~5 minutes of your time

---

## Step 1: Set Up Your GitHub Repository

### 1a. Create a GitHub account (if you don't have one)
- Go to **github.com** and click "Sign up"
- Complete the signup process (free)

### 1b. Create a new repository for your portfolio
- Go to **github.com/new**
- Name it: `fretterfrenzy-portfolio`
- Description: "Art portfolio website"
- Choose **Public** (so Vercel can access it)
- ✅ Click "Create repository"

### 1c. Clone the repository to your computer
After creating the repo, GitHub will show you a blue button that says `<> Code`. Click it and copy the HTTPS URL (looks like `https://github.com/YOUR-USERNAME/fretterfrenzy-portfolio.git`).

Open Terminal/Command Prompt and run:
```bash
git clone https://github.com/YOUR-USERNAME/fretterfrenzy-portfolio.git
cd fretterfrenzy-portfolio
```

---

## Step 2: Set Up Your Project Files

You need to create a basic React project structure. In the folder you just created, do this:

### 2a. Create `package.json`
In the project folder, create a file called `package.json` with this content:

```json
{
  "name": "fretterfrenzy-portfolio",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### 2b. Create the `public` folder
Create a folder called `public`, then create `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="FretterFrenzy - Art prints and handmade goods" />
    <title>FretterFrenzy Portfolio</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 2c. Create the `src` folder
Create a folder called `src`, then create `src/index.js`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 2d. Create the main App component
Copy the portfolio code into `src/App.js` (the code I provided earlier).

### 2e. Add your images
Create a folder `src/images` and place ALL your image files there:
- All 16 Home images
- All 7 Polymer Clay images

Then update the image paths in `App.js` to point to `./images/filename.png`

---

## Step 3: Push to GitHub

In Terminal/Command Prompt, from your project folder:

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

This uploads all your files to GitHub.

---

## Step 4: Deploy to Vercel

### 4a. Sign up for Vercel
- Go to **vercel.com**
- Click "Sign up"
- Choose "GitHub" to sign up with your GitHub account
- Authorize Vercel to access your GitHub repos

### 4b. Import your project
- On Vercel dashboard, click "Add New..." → "Project"
- Select `fretterfrenzy-portfolio` from your GitHub repos
- Click "Import"
- Leave all settings as default
- ✅ Click "Deploy"

**That's it!** Vercel will build and deploy your site. Within 60 seconds, you'll see a live URL.

---

## Step 5: Share Your Portfolio

You'll get a URL like: `https://fretterfrenzy-portfolio.vercel.app`

Share this with anyone! Every time you push changes to GitHub, Vercel automatically rebuilds and redeploys.

---

## Want a Custom Domain? (Optional)

If you want `www.fretterfrenzy.com` instead of the Vercel URL:

1. Buy a domain (~$12/year from Namecheap, GoDaddy, etc.)
2. In Vercel dashboard: Settings → Domains
3. Add your domain and follow the DNS setup instructions
4. Done!

---

## Troubleshooting

**Images not showing?**
- Make sure image paths in `App.js` match your actual file names
- Check that images are in the `src/images` folder

**Build failed?**
- Check that all dependencies in `package.json` are correct
- Make sure you didn't accidentally delete any files

**Need help?**
- Vercel has excellent docs: vercel.com/docs
- GitHub help: github.com/support

---

## Summary

- ✅ Code created
- 📦 Next: Create GitHub repo + push code
- 🚀 Then: Deploy via Vercel
- 🌍 Result: Live URL you can share

You've got this! Let me know if you hit any snags. 🎨
