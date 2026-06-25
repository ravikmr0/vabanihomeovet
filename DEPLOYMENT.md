# CAPITAL-H Website - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel automatically deploys React + Vite projects with zero configuration.

#### Steps:
1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CAPITAL-H website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/capital-h-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Domain Setup**
   - Go to project settings
   - Add your custom domain
   - Update DNS records

**Pros**: Automatic deployments, SSL free, CDN included, zero config
**Cost**: Free tier available

---

### Option 2: Netlify

Easy drag-and-drop deployment with continuous integration.

#### Steps:
1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to https://netlify.com
   - Click "Add new site" → "Deploy manually"
   - Drag & drop the `dist` folder

3. **Continuous Deployment (Optional)**
   - Connect your Git repo
   - Netlify auto-deploys on git push

**Pros**: Free hosting, easy setup, form submissions support
**Cost**: Free tier available

---

### Option 3: GitHub Pages

Free hosting directly from GitHub.

#### Steps:
1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/capital-h-website/', // if not using custom domain
     // ... rest of config
   }
   ```

2. **Add Deployment Script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

**Pros**: Free, integrated with GitHub, no vendor lock-in
**Cost**: Free

---

### Option 4: Traditional Web Host

For hosting with a traditional web hosting provider.

#### Steps:
1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Connect via FTP/SFTP
   - Upload contents of `dist/` folder to `public_html/` or `www/`

3. **Configure Server**
   - Create `.htaccess` file (for Apache):
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   
   - OR configure for Nginx:
     ```nginx
     server {
       location / {
         try_files $uri /index.html;
       }
     }
     ```

**Pros**: Full control, no vendor lock-in
**Cost**: Varies ($5-50/month typically)

---

### Option 5: Docker + Cloud (AWS, Google Cloud, Azure)

For advanced deployment with containers.

#### Create Dockerfile:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

#### Build & Push:
```bash
docker build -t capital-h-website .
docker run -p 3000:3000 capital-h-website
```

**Pros**: Highly scalable, auto-scaling available
**Cost**: Varies, usually $5-50+/month

---

## ⚙️ Pre-Deployment Checklist

- [ ] All components render correctly locally (`npm run dev`)
- [ ] Mobile responsiveness tested on multiple devices
- [ ] Contact form API endpoint configured
- [ ] All images/assets optimized
- [ ] Meta tags updated with correct site info
- [ ] Google Analytics set up (if using)
- [ ] Social media links updated
- [ ] SSL certificate ready (HTTPS)
- [ ] Performance tested (Lighthouse score >90)
- [ ] SEO audit completed

---

## 🔒 Security Checklist

- [ ] Remove any hardcoded API keys
- [ ] Set up environment variables properly
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS if needed
- [ ] Validate form inputs
- [ ] Set up rate limiting for forms
- [ ] Configure security headers
- [ ] Regular dependency updates

---

## 📊 Post-Deployment Setup

### 1. Analytics
```html
<!-- Add to index.html before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 2. SEO
- Submit sitemap to Google Search Console
- Set up Google My Business profile
- Configure robots.txt
- Monitor search rankings

### 3. Email
- Set up contact form email notifications
- Configure email service (SendGrid, Mailgun, etc.)

### 4. Monitoring
- Set up uptime monitoring
- Configure error tracking
- Monitor performance metrics

---

## 🚨 Common Deployment Issues

### Issue: 404 errors on page refresh
**Solution**: Configure your server to redirect all requests to index.html

### Issue: Styles not loading
**Solution**: Check that build completed successfully and files are in correct location

### Issue: Environment variables not working
**Solution**: Ensure variables are prefixed with `VITE_` in .env file

### Issue: API calls failing
**Solution**: Check CORS configuration and API endpoint URL

---

## 🔄 Continuous Deployment

### GitHub Actions (for Vercel)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 📈 Performance Optimization

After deployment:

1. **Run Lighthouse Audit**
   - Use Chrome DevTools
   - Aim for >90 on all metrics

2. **Optimize Images**
   - Compress images
   - Use WebP format
   - Implement lazy loading

3. **Monitor Core Web Vitals**
   - Use PageSpeed Insights
   - Monitor CLS, LCP, FID

4. **CDN Configuration**
   - Enable caching headers
   - Use compression (gzip, brotli)

---

## 📞 Domain Setup

### After deploying, set up your domain:

1. **Purchase Domain**
   - GoDaddy, Namecheap, Domain.com, etc.

2. **Point to Deployment**
   - For Vercel: Add DNS records or nameservers
   - For Netlify: Update nameservers or DNS records
   - For traditional host: Update A record

3. **Enable SSL**
   - Most modern hosts auto-enable
   - Ensure HTTPS is active

4. **Configure Email** (Optional)
   - Set up MX records for email
   - Configure email forwarding

---

## 🆘 Support & Troubleshooting

If deployment fails:
1. Check build logs for errors
2. Verify all environment variables are set
3. Test locally: `npm run build && npm run preview`
4. Check platform-specific documentation
5. Review browser console for errors

---

## 📝 Deployment URLs

Update these records after deployment:
- Website URL: _______________________
- Admin Panel: _______________________
- API Endpoint: _______________________
- CDN URL: _______________________

---

## ✅ Post-Launch Checklist

After going live:
- [ ] Test all links and forms
- [ ] Verify contact form submissions
- [ ] Check mobile responsiveness
- [ ] Monitor uptime
- [ ] Set up error tracking
- [ ] Configure analytics
- [ ] Set up backups
- [ ] Create maintenance plan

---

**Ready to launch? Good luck! 🚀**

For more help, refer to:
- README.md - Full documentation
- QUICKSTART.md - Quick start guide
- Component files - Implementation examples
