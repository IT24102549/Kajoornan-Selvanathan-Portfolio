# Deployment Guide - Kajoornan's Premium Dark Portfolio

## Quick Start

### Local Development
```bash
cd c:\Users\kajoo\Porfolio
npm install
npm run dev
```
Visit: `http://localhost:5173/`

### Production Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel (Recommended)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy
```bash
vercel
```

### 3. Follow prompts and your site will be live!

## Deploy to GitHub Pages

### 1. Update vite.config.js
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

### 2. Build and Deploy
```bash
npm run build
# Then commit dist/ folder to GitHub
git add dist/
git commit -m "Deploy to GitHub Pages"
git push
```

### 3. Enable GitHub Pages
- Go to repo Settings > Pages
- Select `Deploy from a branch`
- Branch: `main`, folder: `/` (or `/dist`)

## Important Setup

### 1. Add CV File
Place your CV at:
```
public/assets/Kajoornan_CV.pdf
```

### 2. Update Social Links
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
- Replace LinkedIn URL
- Replace GitHub URL
- Update email address

### 3. Update Navigation Links
Edit `src/components/Header.jsx` if you want to change nav items

## Environment Variables (if needed)
Create `.env.local`:
```
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

## Performance Tips

### Optimize Images
- Profile image is auto-optimized by Vite
- Keep image sizes reasonable

### Build Analysis
```bash
npm run build --analyze
```

### Monitor Build Size
Current sizes (gzipped):
- JavaScript: 99.45 KB
- CSS: 5.39 KB
- Total: ~105 KB

## Troubleshooting

### Build fails
```bash
rm -r node_modules dist
npm install
npm run build
```

### Preview not working
```bash
# Clear cache
rm -r dist .vite
npm run build
npm run preview
```

### Styles not loading
- Check Tailwind is compiled: `npm run build`
- Clear browser cache: Ctrl+Shift+Delete

## Domain Setup

### Connect Custom Domain
1. Buy domain (Namecheap, GoDaddy, etc.)
2. For Vercel: Add domain in Vercel dashboard
3. For GitHub Pages: Update DNS records to GitHub's IP

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Add New Section
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to section ID in Header navigation
4. Add route in Contact/Footer

## SEO Optimization

### Meta Tags
Update in `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="data science, developer, portfolio">
```

### Open Graph
```html
<meta property="og:title" content="Kajoornan - Portfolio">
<meta property="og:description" content="Premium portfolio">
<meta property="og:image" content="https://your-domain.com/og-image.png">
```

## Live Example
Portfolio is optimized for:
- ✅ Desktop (1920px - optimal)
- ✅ Tablet (768px - responsive)
- ✅ Mobile (360px - optimized)

---

**Need help?** Check GitHub Issues or contact via the portfolio contact form!
