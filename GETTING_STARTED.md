# 🎯 CAPITAL-H Website - Getting Started

Welcome! This guide will help you get the CAPITAL-H website up and running in minutes.

## What You Have

A complete, modern website for **CAPITAL-H | Vibani Homeo Vet** built with:
- **React** - Modern JavaScript framework
- **Vite** - Super-fast build tool
- **Tailwind CSS** - Beautiful styling
- **Framer Motion** - Smooth animations

## ⚡ Get Running in 3 Steps

### Step 1️⃣: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```
This downloads all required packages (takes 1-2 minutes).

### Step 2️⃣: Start Development Server
```bash
npm run dev
```
You'll see: `Local: http://localhost:5173`

### Step 3️⃣: Open in Browser
Visit `http://localhost:5173` and see your website!

---

## 📁 What's Inside

```
📦 capital-h-website
├── 📄 README.md              ← Full documentation
├── 📄 QUICKSTART.md          ← Quick commands
├── 📄 DEPLOYMENT.md          ← How to launch online
├── 📄 PROJECT_SUMMARY.md     ← What was built
│
├── 📦 src/
│   ├── App.jsx               ← Main app file
│   ├── index.css             ← Global styles
│   ├── main.jsx              ← Entry point
│   └── 📂 components/        ← All page sections
│       ├── Header.jsx        (Navigation)
│       ├── Hero.jsx          (Landing)
│       ├── About.jsx         (About company)
│       ├── Products.jsx      (6 products)
│       ├── Benefits.jsx      (Why homeopathy)
│       ├── Research.jsx      (Quality)
│       ├── Industries.jsx    (6 industries)
│       ├── Testimonials.jsx  (Reviews)
│       ├── Contact.jsx       (Contact form)
│       └── Footer.jsx        (Footer)
│
├── 📋 Configuration Files
│   ├── package.json          ← Dependencies
│   ├── vite.config.js        ← Build settings
│   ├── tailwind.config.js    ← Style settings
│   ├── postcss.config.js     ← CSS processing
│   └── .eslintrc.json        ← Code quality
│
└── 📄 index.html             ← Website HTML
```

---

## 🎨 Customize Your Site

### Change Company Info
Edit file: `src/components/Header.jsx` (line 1-50)
- Change logo text/icon
- Update company name
- Modify phone number

Also edit: `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Change Website Text
Find the section you want to change in `src/components/` and edit the text directly.

Examples:
- Hero headline → `src/components/Hero.jsx`
- About text → `src/components/About.jsx`
- Product names → `src/components/Products.jsx`

### Change Colors
Edit `tailwind.config.js` around line 10:
```javascript
colors: {
  primary: '#0F766E',     // Main color (teal)
  secondary: '#16A34A',   // Accent color (green)
  dark: '#0F172A',        // Text color (navy)
  // ...
}
```

### Add Real Images
Replace emoji placeholders with actual images:
```jsx
// Instead of this:
<div className="text-6xl">🐄</div>

// Do this:
<img src="/path/to/image.jpg" alt="Dairy" className="w-full" />
```

---

## 📦 Build for Production

When ready to launch:
```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy.

---

## 🚀 Deploy Online

Choose your platform:

### 🎈 Vercel (Easiest)
1. Push code to GitHub
2. Visit https://vercel.com
3. Connect your repo
4. Click Deploy
5. Done! Your site is live

### 🚀 Netlify
1. Build locally: `npm run build`
2. Visit https://netlify.com
3. Drag & drop the `dist` folder
4. Done! Your site is live

### 📚 See DEPLOYMENT.md for all options

---

## 📝 Key Files Explained

| File | Purpose |
|------|---------|
| `App.jsx` | Combines all sections together |
| `Header.jsx` | Navigation bar at top |
| `Hero.jsx` | Main landing section |
| `Contact.jsx` | Contact form (ready for API) |
| `Footer.jsx` | Bottom of page |
| `tailwind.config.js` | Colors, fonts, sizes |
| `package.json` | Dependencies list |

---

## 🔧 Common Tasks

### Change Headline
1. Open `src/components/Hero.jsx`
2. Find the `<h1>` tag
3. Change the text
4. Save file - website updates automatically!

### Add Testimonial
1. Open `src/components/Testimonials.jsx`
2. Find the `testimonials` array (line 5)
3. Add new object with name, role, content
4. Done!

### Connect Contact Form
1. Open `src/components/Contact.jsx`
2. Find `handleSubmit` function (line 26)
3. Replace the placeholder with your API endpoint
4. Test it works

### Change Styling
1. Open component file
2. Look for `className="..."` attributes
3. Modify or add Tailwind classes
4. See changes instantly

---

## 🆘 Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Changes not showing?
- Save the file
- Check browser console (F12)
- Hard refresh browser (Ctrl+Shift+R)

### npm install fails?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
```bash
npm run build
# Read error message carefully
```

---

## 📚 Documentation

- **README.md** - Everything explained in detail
- **QUICKSTART.md** - Fast reference
- **DEPLOYMENT.md** - How to put online
- **PROJECT_SUMMARY.md** - What's included

---

## ✨ Features Included

✅ Mobile responsive
✅ Smooth animations
✅ Professional design
✅ Contact form
✅ SEO optimized
✅ Fast loading
✅ Easy to customize
✅ Production ready
✅ 10 complete sections
✅ Professional typography

---

## 📞 Contact Info (Built-In)

- **Phone**: +91 7906410606
- **Email**: Info@vibanihomeovet.com
- **Address**: Bajna Cut, Yamuna Expressway, MaharamGarhi, Bajna, Mathura - 281201, U.P., India

(Edit in components/Contact.jsx and components/Footer.jsx)

---

## 🎓 Learning Resources

This project teaches:
- React components & hooks
- CSS with Tailwind
- Animations with Framer Motion
- Responsive design
- Modern web development

---

## ✅ Quick Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:5173
- [ ] Customize content
- [ ] Test on mobile
- [ ] Run `npm run build`
- [ ] Deploy with Vercel/Netlify

---

## 🎉 You're All Set!

Your professional website is ready to customize and deploy.

**Next Step:** Open `src/components/Header.jsx` and update company info!

**Questions?** Check the full README.md for detailed answers.

**Ready to launch?** See DEPLOYMENT.md for publishing options.

---

**Happy coding! 🚀**

Built with ❤️ using React + Vite + Tailwind CSS
