# Kajoornan Selvanathan - Premium Dark Portfolio

A modern, responsive personal portfolio website featuring a premium dark-only theme with smooth animations and glassmorphism effects. Built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Premium Dark Theme Only** - Luxurious dark aesthetic inspired by Awwwards
- **Smooth Animations** - Framer Motion transitions and scroll-triggered effects
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Glassmorphism** - Modern frosted glass UI components
- **Particle Background** - Canvas-based animated background system
- **Interactive Sections** - Full-screen hero, timeline about, skill cards, project showcase
- **Contact Form** - Beautiful contact section with social links
- **Scroll Effects** - Blur navbar on scroll, scroll-to-top button

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Development
```bash
cd c:\Users\kajoo\Porfolio
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation with gradient logo
│   ├── Hero.jsx        # Hero section with profile
│   ├── About.jsx       # About with timeline
│   ├── Skills.jsx      # Technical skills showcase
│   ├── Projects.jsx    # Featured projects
│   ├── Education.jsx   # Education info
│   ├── Experience.jsx  # Leadership roles
│   ├── Certificates.jsx # Certifications
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   ├── Loader.jsx      # Loading animation
│   ├── ScrollToTop.jsx # Scroll button
│   └── AnimatedBackground.jsx # Particles
├── hooks/useTypewriter.js
├── assets/Profile.png
├── App.jsx
└── index.css
```

## 🎨 Design System

### Color Palette (Dark Only)
- **Background**: `#050816`, `#0F172A`, `#111827`
- **Accents**: Cyan, Blue, Purple
- **Text**: Light slate & muted colors

## 📦 Tech Stack

- React 18.2.0
- Vite 5.0.0
- Tailwind CSS 3.4.7
- Framer Motion 10.12.16
- React Icons 4.10.1

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy (Vercel):**
```bash
npm i -g vercel
vercel
```

## 🔧 Customization

### Update Content
- Edit components in `src/components/`
- Update links in `Contact.jsx` and `Footer.jsx`
- Add CV to `public/assets/Kajoornan_CV.pdf`

### Modify Styles
- Global: `src/index.css`
- Colors: `tailwind.config.js`
- Animations: Individual components

## 📱 Responsive

- Mobile: 360px+
- Tablet: 768px+
- Desktop: 1024px+

## 📄 License

Personal portfolio for Kajoornan Selvanathan

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
