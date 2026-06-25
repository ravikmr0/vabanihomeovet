# CAPITAL-H Website - Quick Start Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Install Dependencies
```bash
cd c:\Users\hp\vabanihomeovet
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation & sticky header
│   ├── Hero.jsx            # Landing section
│   ├── About.jsx           # Company info
│   ├── Products.jsx        # Product categories
│   ├── Benefits.jsx        # Why Homeopathy
│   ├── Research.jsx        # Quality section
│   ├── Industries.jsx      # Industries served
│   ├── Testimonials.jsx    # Client reviews
│   ├── Contact.jsx         # Contact form & info
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles

Configuration Files:
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── package.json            # Dependencies & scripts
├── index.html              # HTML entry point
└── .eslintrc.json          # Code quality
```

---

## 🎨 Customize Your Site

### Change Company Info
Edit company details in these files:
- `src/components/Header.jsx` - Logo and nav
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer info

### Update Content
All text is in component files. Simply edit the JSX content.

### Change Colors
Edit `tailwind.config.js` theme colors to match your brand.

### Add Images
Replace placeholder emojis with actual images:
```jsx
// Instead of: <div className="text-6xl mb-4">🐄</div>
// Use: <img src="/path/to/image.jpg" alt="Dairy" />
```

---

## 🔧 Common Tasks

### Add New Section
1. Create `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to component list in App render

### Connect Contact Form
1. Open `src/components/Contact.jsx`
2. In `handleSubmit()`, replace the fetch URL with your API endpoint
3. Test with real backend

### Change Fonts
1. Edit `tailwind.config.js` fontFamily
2. Update Google Fonts link in `index.html`

### Add Social Media Links
Edit `src/components/Footer.jsx` socialLinks array with your URLs.

---

## 📦 Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder ready for deployment.

---

## 🚢 Deploy

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify

### Option 3: Traditional Server
1. Upload `dist` contents via FTP
2. Configure server for SPA (route `/` to `index.html`)

---

## ✅ Pre-launch Checklist

- [ ] Update all company contact information
- [ ] Add real company images and photos
- [ ] Collect and add real testimonials
- [ ] Connect contact form to backend API
- [ ] Add Google Analytics
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Proofread all content
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure domain name

---

## 🆘 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Dependencies issues?
```bash
rm -r node_modules
npm install
```

### Build errors?
```bash
npm run build
# Check console for specific errors
```

---

## 📞 Support

Need help? Check the full README.md for detailed documentation.

Happy coding! 🎉
