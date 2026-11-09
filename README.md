# 🪔 Diwali Lantern Hero — Lighting Studio

An interactive, responsive Diwali greeting and interactive lantern lighting studio web experience built with vanilla HTML5, CSS3, and modern JavaScript.

![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

- **Interactive Lantern Track**:
  - Physics-based spring-damper swinging animation (`requestAnimationFrame`).
  - Slide lanterns horizontally along the rail with automatic collision bounding.
  - Hover or tap to illuminate lanterns with dynamic light halos, floor pools, and conical beam projections.
  - Drag lanterns vertically (up to dim, down to brighten) or control them with keyboard arrow keys.
- **Fairy Lights**:
  - 17 decorative fairy bulbs mapped mathematically along an SVG quadratic Bézier curve with staggered twinkling.
- **Lit Diya Header**:
  - Pure SVG diya with multi-stage realistic flame flicker, core shimmer, and ambient glowing effect.
  - Shimmering golden headline with the custom *"Beauty Mountains"* typography.
- **Lantern Catalog & Glow Customizer**:
  - Inspect any selected lantern against an animated starry night sky.
  - Real-time ambient glow color picker (**Warm Gold**, **Rose Pink**, **Emerald Green**, **Royal Violet**).
- **Celebration Video Modal**:
  - *"Buy a Free Lantern"* opens an interactive celebration video overlay with full keyboard `Esc` dismiss and accessibility focus traps.
- **Diwali Collection Showcase**:
  - Product grid showing all 8 authentic handcrafted lanterns with instant track-syncing.
- **Accessibility & Responsiveness**:
  - Full keyboard navigation (`Tab`, `Enter`, Arrow Keys).
  - Screen reader friendly with semantic tags, `aria-live="polite"`, and `aria-label`s.
  - Dark mode (`prefers-color-scheme: dark`) and reduced motion (`prefers-reduced-motion: reduce`) support.
  - Mobile, tablet, and desktop responsive layouts.
- **WhatsApp Wish Forwarding**:
  - One-click share button preloaded with festive Diwali greetings.

---

## 📂 Project Structure

```text
happy-diwali/
├── index.html                   # Main entry point (optimized for GitHub Pages)
├── Diwali Lamp Hero.html        # Standalone single-file bundle (fully offline)
├── README.md                    # Project documentation
├── .gitignore                   # Standard ignore rules
└── assets/
    ├── css/
    │   └── style.css            # Stylesheets, themes, variables & keyframes
    ├── js/
    │   └── main.js              # Physics engine, interactions, video modal & WhatsApp
    ├── fonts/
    │   └── BeautyMountains.woff # Custom decorative typography
    ├── images/
    │   ├── logo.png             # Studio brand logo
    │   ├── night-sky.png        # Catalog night backdrop
    │   └── lanterns/            # High-resolution transparent lantern assets
    │       ├── lantern-1.png    # Royal Hex Lantern (Red & Gold)
    │       ├── lantern-2.png    # Floral Diamond Lantern (Yellow & Green)
    │       ├── lantern-3.png    # Lotus Hex Lantern (White & Purple)
    │       ├── lantern-4.png    # Diya Square Lantern (Emerald Green)
    │       ├── lantern-5.png    # Crochet Globe Lantern (Rose Pink)
    │       ├── lantern-6.png    # Peacock Hex Lantern (Orange & Purple)
    │       ├── lantern-7.png    # Rainbow Diamond Lantern (Multicolour)
    │       └── lantern-8.png    # Star Lantern (Multicolour)
    └── videos/
        └── celebration.mp4      # Celebration video modal asset
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/happy-diwali.git
cd happy-diwali
```

### 2. Run locally
No build step or Node dependencies are required! You can open `index.html` directly in any web browser, or serve it using any local HTTP server:

```bash
# Using Python (if available):
python -m http.server 8000

# Using Node (npx):
npx serve .

# Or using VS Code Live Server extension:
# Right click on index.html -> "Open with Live Server"
```

---

## 🌐 Deploying to GitHub Pages

1. Push your repository to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose branch: `main` (or `master`) and folder: `/ (root)`.
5. Click **Save**. Within 1–2 minutes, your project will be live!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
