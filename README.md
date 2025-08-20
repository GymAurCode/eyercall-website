# 🚀 Animated Website - React + Vite + Three.js

A fully animated 3-page website built with modern web technologies featuring stunning 3D graphics, smooth animations, and immersive user experiences.

## ✨ Features

- **3D Graphics**: Three.js powered backgrounds with animated starfields and glowing orbs
- **Smooth Animations**: GSAP-powered cinematic animations and transitions
- **Scroll Effects**: AOS (Animate On Scroll) for engaging scroll-triggered animations
- **Custom Cursor**: Glowing cursor with hover scaling effects
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Glass morphism effects and gradient designs
- **Performance Optimized**: Buttery smooth 60fps animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS v3
- **Routing**: React Router v6
- **Animations**: GSAP (GreenSock)
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Scroll Animations**: AOS (Animate On Scroll)
- **Micro-interactions**: Framer Motion

## 📱 Pages

### 🏠 Home Page
- Fullscreen animated starfield background
- Shooting stars and twinkling effects
- Parallax mouse movement
- GSAP text animations and typing effects
- Smooth scroll indicator

### ℹ️ About Page
- Animated gradient space background
- Student-focused platform information
- Course availability details
- Video meeting features
- Scroll-triggered animations

### 📞 Contact Page
- Animated glowing orb background
- Interactive contact form with GSAP animations
- Animated contact information icons
- Form validation and submission feedback

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd animated-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── CustomCursor.jsx # Custom cursor with glow effects
│   ├── Navbar.jsx      # Navigation component
│   └── StarField.jsx   # 3D starfield background
├── pages/              # Page components
│   ├── Home.jsx        # Home page with starfield
│   ├── About.jsx       # About page with animations
│   └── Contact.jsx     # Contact page with form
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles and TailwindCSS
```

## 🎨 Customization

### Colors and Themes
- Modify `tailwind.config.js` for custom color schemes
- Update gradient classes in components
- Adjust glass effect opacity in CSS

### Animations
- GSAP animations are in `useEffect` hooks
- AOS attributes can be modified for scroll effects
- Three.js parameters in background components

### 3D Elements
- Star count and positions in `StarField.jsx`
- Background geometry in page components
- Camera positions and lighting

## 🔧 Configuration

### TailwindCSS
The project uses TailwindCSS v3 with custom animations and components. Configuration is in `tailwind.config.js`.

### GSAP
GSAP plugins are registered in each component that uses them:
- `TextPlugin` for typing effects
- `ScrollTrigger` for scroll-based animations

### Three.js
Three.js scenes are configured with:
- Optimized camera settings
- Efficient lighting
- Performance-focused rendering

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized 3D performance on mobile

## 🚀 Performance Tips

- 3D scenes are optimized for 60fps
- Animations use `will-change` CSS property
- Efficient GSAP timelines
- Lazy loading for heavy components

## 🐛 Troubleshooting

### Common Issues

1. **GSAP animations not working**
   - Ensure GSAP plugins are registered
   - Check for console errors

2. **3D performance issues**
   - Reduce star count in StarField
   - Lower canvas resolution on mobile

3. **TailwindCSS not working**
   - Verify `tailwind.config.js` content paths
   - Check PostCSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email info@animatedwebsite.com or create an issue in the repository.

---

**Built with ❤️ using React, Three.js, and GSAP**
