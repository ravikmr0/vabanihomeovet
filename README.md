# CAPITAL-H | Vibani Homeo Vet Website

A modern, responsive, premium corporate website for CAPITAL-H (Vibani Homeo Vet) - Natural Homeopathic Solutions for Animal Health & Wellness.

## 🌟 Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Responsive Design** - Mobile-first approach with full responsive support
- **Smooth Animations** - Framer Motion for elegant scroll and interaction animations
- **Tailwind CSS** - Utility-first CSS for rapid, consistent styling
- **Professional UI** - Premium healthcare industry appearance with trust-building elements
- **SEO Optimized** - Meta tags, proper structure, and semantic HTML
- **Contact Form** - Ready for API integration
- **Performance** - Fast loading with optimized assets

## 📋 Sections Included

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Compelling landing with CTA buttons
3. **About** - Company introduction with key highlights
4. **Products** - 6 category cards with icons
5. **Benefits** - Why Choose Homeopathy section with icons
6. **Research & Quality** - Pharmaceutical-style quality assurance section
7. **Industries** - Industries we serve grid layout
8. **Testimonials** - Client reviews and feedback
9. **Contact** - Contact form and company details
10. **Footer** - Links, social media, and copyright

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Router DOM** - Navigation (ready for expansion)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Setup Steps

1. **Navigate to project directory**
   ```bash
   cd c:\Users\hp\vabanihomeovet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Color Palette
All colors are defined in `tailwind.config.js`:
- **Primary**: #0F766E (Teal)
- **Secondary**: #16A34A (Green)
- **Dark**: #0F172A (Navy)
- **Light**: #F8FAFC (Off-white)
- **Accent**: #84CC16 (Lime)

### Modifying Content
All content is in component files in `src/components/`. Each section is a separate component:
- `Hero.jsx` - Main landing section
- `About.jsx` - Company information
- `Products.jsx` - Product categories
- `Benefits.jsx` - Why Homeopathy
- `Research.jsx` - Quality assurance
- `Industries.jsx` - Industries served
- `Testimonials.jsx` - Client reviews
- `Contact.jsx` - Contact form and info
- `Header.jsx` - Navigation
- `Footer.jsx` - Footer links

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully to different screen sizes.

## 🔗 API Integration

The contact form in `Contact.jsx` is ready for API integration. Replace the placeholder in the `handleSubmit` function with your actual backend endpoint:

```javascript
// In src/components/Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    // Handle response
  } catch (error) {
    // Handle error
  }
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to Traditional Server
1. Run `npm run build`
2. Upload the `dist` folder contents to your server
3. Configure your server to serve `index.html` for all routes

## 📧 Contact Information

- **Phone**: +91 7906410606
- **Email**: Info@vibanihomeovet.com
- **Address**: Bajna Cut, Yamuna Expressway, MaharamGarhi, Bajna, Mathura - 281201, U.P., India

## 📝 License

© 2026 CAPITAL-H | Vibani Homeo Vet. All Rights Reserved.

## 🤝 Support

For customization or technical support, please contact the development team.

---

**Note**: This is a production-ready template. Ensure to:
- Replace placeholder images with actual company images
- Update testimonials with real client feedback
- Integrate contact form with backend API
- Update social media links
- Configure analytics (Google Analytics, etc.)
- Set up SSL certificate for HTTPS
