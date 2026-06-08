# 🎨 FretterFrenzy Portfolio

Your beautiful art portfolio website, ready to launch!

---

## ✨ What You Get

- 📸 Clean, responsive gallery for your art prints (16 items)
- 🧸 Dedicated section for polymer clay creations (7 items)
- 📱 Mobile-friendly (works on phones, tablets, desktop)
- 🚀 Free hosting with automatic deployment
- 🌐 Live URL you can share anywhere

---

## 🚀 Quick Start (5 Minutes)

### 1. **Clone or Download This Folder**
```bash
git clone https://github.com/YOUR-USERNAME/fretterfrenzy-portfolio.git
cd fretterfrenzy-portfolio
```

### 2. **Add Your Images**
Create a folder: `src/images/`

Copy all 23 image files there:
- 16 Home section images (prints)
- 7 Polymer Clay images

### 3. **Install & Run Locally** (Optional)
```bash
npm install
npm start
```

Visit `http://localhost:3000` to see it on your computer.

### 4. **Push to GitHub**
```bash
git add .
git commit -m "Ready to deploy"
git push origin main
```

### 5. **Deploy to Vercel**
- Go to **vercel.com**
- Sign in with GitHub
- Select this repository
- Click "Deploy"
- ✅ Done! Your URL appears in ~60 seconds

---

## 📁 File Structure

```
fretterfrenzy-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── images/               ← PUT YOUR IMAGES HERE
│   │   ├── _8_5x11_Fruits.png
│   │   ├── artwork1.png
│   │   ├── artwork2.png
│   │   ... (23 total images)
│   ├── App.js               ← Main portfolio component
│   └── index.js             ← React entry point
├── .gitignore
├── package.json
└── README.md
```

---

## 🎯 What to Customize

**In `src/App.js`:**
- ✏️ Change your name in the header: `FretterFrenzy` → `Your Name`
- ✏️ Change the subtitle: `Art, prints & handmade goods` → whatever fits
- ✏️ Update social links (they're at the bottom of the file)

**Colors:** The default palette is soft and warm (pinks, pastels). To change:
- Header gradient: `#d4537e` (pink)
- Hover effects: `#d85a8e`
- Feel free to customize!

---

## 🔗 Social Links

Your footer automatically links to:
- 📸 Instagram: `https://www.instagram.com/fretterfrenzy/`
- 🎵 TikTok: `https://www.tiktok.com/@fretterfrenzy`
- 🛍️ Etsy: `https://www.etsy.com/shop/fretterfrenzy`

These are already in the code!

---

## 📚 Full Deployment Guide

See **DEPLOYMENT-GUIDE.md** for step-by-step instructions with screenshots.

---

## 🆘 Troubleshooting

**Images not showing?**
- Make sure image file names in the code match actual file names (case-sensitive!)
- All images must be in `src/images/` folder

**Build fails locally?**
```bash
npm install
npm cache clean --force
npm install
npm start
```

**Need to add a custom domain later?**
- Buy a domain (Namecheap, GoDaddy, etc.)
- In Vercel dashboard → Settings → Domains
- Follow the DNS setup instructions

---

## 🎨 Design Notes

- Built with React for fast, smooth performance
- Mobile-first responsive design
- Lazy loading for fast image delivery
- Smooth animations and hover effects
- No ads, no trackers, just your art

---

## 📝 Making Changes After Deployment

Want to update your portfolio later?

1. Edit files locally
2. Push to GitHub:
```bash
git add .
git commit -m "Updated gallery"
git push origin main
```

Vercel automatically rebuilds and redeploys. Your new version is live in ~60 seconds.

---

## 🌟 Next Steps (Optional)

- Add an "About" section with bio
- Add click-to-enlarge image modals
- Set up email signup for new followers
- Add a blog for behind-the-scenes content

Happy to help with any of these!

---

## 📞 Quick Links

- **GitHub**: github.com (create account, create repo)
- **Vercel**: vercel.com (deploy with GitHub)
- **Buy Domain**: namecheap.com or godaddy.com (~$12/year)
- **React Docs**: react.dev (if you want to customize further)

---

**Made with 🎨 for your art.**

Let me know if you run into any issues!
