# Medical & Homeopathy School Nigeria

A modern, professional website for Nigeria's premier medical and homeopathy school, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏥 About

This website showcases our comprehensive alternative medicine education programs and integrated clinic services. Inspired by UCSF.edu, it provides a clean, professional, and trustworthy user experience that reflects our commitment to excellence in healthcare education.

## ✨ Features

### 🎨 Design & UI
- **Healthcare-First Design**: Clean, professional aesthetics that inspire trust
- **Mobile-First Responsive**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG 2.1 AA compliant design patterns
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives

### 📱 Pages & Sections
- **Homepage**: Hero section, statistics, program overview, clinic services
- **About Us**: Mission, vision, values, leadership team, campus facilities
- **Contact Us**: Contact form, office hours, location, FAQ section
- **Programs**: Medical Degree, Homeopathy Diploma, Naturopathy Certificate
- **Clinic**: Services, doctors, appointment booking
- **Admissions**: Requirements, application process, fees

### 🔧 Technical Features
- **Next.js 14**: App Router with Server & Client Components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom medical theme
- **SEO Optimized**: Meta tags, schema markup, sitemap ready
- **Performance**: Optimized images, fonts, and loading strategies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ LTS
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about-us/          # About Us page
│   ├── contact-us/        # Contact page
│   ├── programs/          # Academic programs
│   ├── clinic/            # Clinic services
│   └── admissions/        # Admissions information
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── styles/               # Global styles and CSS
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` - Medical authority and trust
- **Healing Green**: `#059669` - Natural healing and growth
- **Calming Teal**: `#0d9488` - Balance and harmony
- **Warm Orange**: `#f97316` - Energy and warmth
- **Soft Purple**: `#7c3aed` - Innovation and research

### Typography
- **Headings**: Playfair Display (serif) - Elegant and authoritative
- **Body**: Inter (sans-serif) - Clean and readable

## 📄 Available Pages

### ✅ Completed
- [x] Homepage with hero section and program overview
- [x] About Us page with mission, vision, and team
- [x] Contact Us page with form and information
- [x] Responsive header with navigation menu
- [x] Professional footer with links and contact info
- [x] SEO-optimized metadata and structure

### 🚧 In Progress
- [ ] Academic Programs pages (Medical Degree, Homeopathy Diploma)
- [ ] Clinic Services section with appointment booking
- [ ] Admissions pages with requirements and application
- [ ] Blog/News section for content marketing
- [ ] Student portal integration (future phase)

## 🛠️ Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your content
3. Update navigation in `src/components/layout/header.tsx`

### Modifying Styles
- Global styles: `src/styles/globals.css`
- Component styles: Use Tailwind classes
- Theme colors: `tailwind.config.ts`

### Adding Components
- UI components: `src/components/ui/`
- Layout components: `src/components/layout/`
- Page-specific components: Create in respective page folders

## 📈 SEO Features

- **Meta Tags**: Comprehensive title, description, and Open Graph tags
- **Schema Markup**: Educational and medical organization schemas
- **URL Structure**: Clean, descriptive URLs
- **Sitemap Ready**: Structure supports automatic sitemap generation
- **Performance**: Optimized for Core Web Vitals

## 🔮 Future Enhancements

### Phase 2: Advanced Features
- [ ] User authentication and student portal
- [ ] Online application system
- [ ] Appointment booking system
- [ ] Blog with CMS integration
- [ ] Multi-language support

### Phase 3: Integration
- [ ] Payment gateway integration
- [ ] Email marketing automation
- [ ] Analytics and tracking
- [ ] Advanced search functionality
- [ ] Mobile app companion

## 📞 Support

For questions about this website or our programs:

- **Email**: info@medicalhomeopathyschool.edu.ng
- **Phone**: +234-xxx-xxx-xxxx
- **Address**: 123 Medical Drive, Lagos State, Nigeria

## 📜 License

This project is proprietary to Medical & Homeopathy School Nigeria.

---

**Built with ❤️ for Nigeria's healthcare education**
