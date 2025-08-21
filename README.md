# NursingAtHome.in - Professional Home Healthcare Services

A modern, responsive website for nursing care at home services built with Svelte + SvelteKit + Tailwind CSS.

## 🏥 About

NursingAtHome.in provides professional nursing care services in the comfort of your home. Our website showcases our comprehensive healthcare services including elderly care, post-surgery care, chronic disease management, and more.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, sitemap, and structured content
- **Fast Performance**: Built with Svelte for optimal performance
- **Professional UI**: Clean, trustworthy design for healthcare services
- **Contact Forms**: Easy consultation requests
- **Service Showcase**: Comprehensive service descriptions

## 🚀 Tech Stack

- **Frontend**: Svelte + SvelteKit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: Static site generation

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nursing-at-home.git
   cd nursing-at-home
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
pnpm run build
```

The built files will be in the `build` directory, ready for deployment.

## 📱 Pages & Sections

### Homepage Sections:
- **Hero Section**: Main value proposition and call-to-action
- **Services**: 6 main service categories with detailed descriptions
- **Why Choose Us**: 6 key differentiators
- **About**: Company information and commitment
- **Contact**: Contact form and information
- **CTA**: Final call-to-action section

### Services Offered:
1. **Elderly Care**: Medication management, personal hygiene, mobility assistance
2. **Post-Surgery Care**: Wound care, pain management, physical therapy
3. **Chronic Disease Care**: Diabetes, heart disease, COPD management
4. **Palliative Care**: End-of-life care and family support
5. **Pediatric Care**: Child-specific nursing care
6. **Emergency Response**: 24/7 emergency nursing services

## 🎨 Customization

### Colors
The primary color scheme is defined in `tailwind.config.js`:
- Primary: Blue shades (#0ea5e9)
- Secondary: Gray shades
- Custom button classes: `.btn-primary`, `.btn-secondary`

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing with Tailwind utilities

### Components
Custom CSS classes in `src/app.css`:
- `.section-padding`: Consistent section spacing
- `.container-custom`: Max-width container
- Button styles with hover effects

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading hierarchy and structure
- **Fast Loading**: Optimized for Core Web Vitals

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile navigation menu
- Optimized layouts for all screen sizes

## 🚀 Deployment

### Static Hosting (Recommended)
1. Build the project: `pnpm run build`
2. Upload the `build` directory to your hosting provider
3. Configure your domain (nursingathome.in)

### Popular Hosting Options:
- **Netlify**: Drag & drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3 + CloudFront**: Enterprise solution

### Domain Configuration
- Point your domain to your hosting provider
- Update the canonical URLs in `src/routes/+layout.svelte`
- Update the sitemap URL in `static/sitemap.xml`

## 📊 Performance Optimization

- **Code Splitting**: Automatic with SvelteKit
- **Image Optimization**: Use WebP format when possible
- **CSS Purging**: Tailwind automatically removes unused styles
- **Lazy Loading**: Implement for images if needed

## 🔧 Development

### File Structure
```
src/
├── app.css          # Global styles and Tailwind imports
├── routes/
│   ├── +layout.svelte  # Main layout with navigation
│   └── +page.svelte    # Homepage content
static/
├── robots.txt       # Search engine instructions
└── sitemap.xml      # Site structure for SEO
```

### Adding New Pages
1. Create new `.svelte` files in `src/routes/`
2. Add navigation links in `+layout.svelte`
3. Update sitemap.xml if needed

### Styling Guidelines
- Use Tailwind utility classes for consistent styling
- Create custom components in `app.css` for reusable styles
- Follow mobile-first responsive design principles

## 📞 Contact Information

For website support or modifications:
- Email: info@nursingathome.in
- Phone: +91-96500 97115

## 📄 License

This project is proprietary software for NursingAtHome.in. All rights reserved.

## 🤝 Contributing

This is a private project for NursingAtHome.in. For any modifications or improvements, please contact the development team.

---

**Built with ❤️ for better healthcare at home**
