# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
- `npm run dev` - Start Vite development server with HMR (Hot Module Replacement)
- `npm run preview` - Preview production build locally

### Building
- `npm run build` - Production build using Vite (outputs to `dist/public/`)
- Optimized static assets with code splitting and minification

### Code Quality
- `npm run check` - TypeScript type checking across the project

## Architecture Overview

### Tech Stack
**This is a pure static site with no backend.**

- **Frontend**: React 19.2.0 + Vite 7.1.9 + TypeScript 5.6.3
- **Styling**: Tailwind CSS 4.1.14 with CSS variable theming
- **Animation**: Framer Motion 12.23.24 for scroll effects and spring physics
- **UI Components**: 40+ shadcn/ui components (Radix UI + Tailwind)
- **Routing**: Wouter 3.3.5 (lightweight client-side router)
- **Forms**: React Hook Form 7.66.0 + Zod 3.25.76 validation
- **Deployment**: GitHub Pages with automated CI/CD via GitHub Actions

### Project Structure

```
client/src/
  components/
    layout/                      # Navigation components
      Navbar.tsx                 # Scroll-aware navbar with glass morphism, scroll progress bar
    sections/                    # Main portfolio sections
      Hero.tsx                   # Parallax blobs, animated title, scroll triggers
      Timeline.tsx               # Interactive experience timeline with hover effects
      Projects.tsx               # Project grid with animated cards
      Skills.tsx                 # Skills showcase
      About.tsx                  # About/personal section
      Contact.tsx                # Contact information
    ui/                          # Reusable UI components
      magnetic.tsx               # Spring-based magnetic button effect
      marquee.tsx                # Infinite scrolling text component
      [40+ shadcn/ui components] # Pre-configured Radix UI components
  lib/
    data.ts                      # ⭐ SINGLE SOURCE OF TRUTH - All portfolio content
    utils.ts                     # Utility functions (cn for class merging, etc.)
  hooks/
    use-mobile.tsx               # Responsive breakpoint detection
    use-toast.ts                 # Toast notification hook
  pages/
    Home.tsx                     # Main portfolio page (renders all sections)
    not-found.tsx                # 404 page
  App.tsx                        # Root component with routing & providers
  main.tsx                       # Application entry point
  index.css                      # Global styles, CSS variables, Tailwind directives

.github/workflows/
  deploy.yml                     # GitHub Actions workflow for automated deployment
```

### Path Aliases
Configured in `vite.config.ts`:
- `@/` → `client/src/`
- `@assets/` → `attached_assets/`

## Key Architectural Patterns

### 1. Centralized Portfolio Data
**All portfolio content lives in `client/src/lib/data.ts` as the `RESUME_DATA` object.**

This includes:
- Personal information and contact details
- Work experience timeline
- Projects with descriptions, tech stacks, and links
- Skills and technologies
- Education history

**To update the portfolio**: Edit this single file. All sections dynamically render from this data source.

### 2. Animation Architecture
This portfolio features sophisticated scroll-based and interactive animations:

**Framer Motion Patterns**:
- `useScroll` + `useTransform`: Scroll-triggered parallax and transformations
- `useSpring`: Physics-based smooth animations (typical config: stiffness: 150, damping: 20)
- `whileInView`: Trigger animations when elements enter viewport
- Staggered animations: Sequential entrance effects for lists and grids

**Performance Considerations**:
- Scroll events handled via Framer Motion's optimized hooks (no manual debouncing needed)
- GPU-accelerated transforms for smooth animations
- Lazy loading with `whileInView` prevents offscreen animation overhead

### 3. Component Organization

**Section-Based Layout**:
Each portfolio section (Hero, Timeline, Projects, etc.) is an independent component that:
- Receives data from `RESUME_DATA`
- Handles its own animations and interactions
- Uses consistent animation timing and spring physics

**shadcn/ui Integration**:
- Components pre-configured with Tailwind styling
- Stored in `client/src/components/ui/`
- Customizable via `components.json` config
- Theme system uses CSS variables in `index.css`

**Custom UI Components**:
Two unique animation components define the site's character:
- **Magnetic**: Spring attraction effect for interactive elements
- **Marquee**: Infinite horizontal scroll for badges and text

### 4. Styling System

**Tailwind CSS 4 with CSS Variables**:
- Theme colors defined in `index.css` `:root` selector
- Color palette: Soft earthy/blue tones (beige backgrounds, steel blue primary)
- Custom fonts: Inter (sans), Space Grotesk (display), JetBrains Mono (mono)
- Dark mode support via CSS variable swapping

**Responsive Design**:
- Mobile-first approach with Tailwind breakpoints
- `use-mobile.tsx` hook for programmatic breakpoint detection
- Navbar transitions to mobile drawer on small screens

### 5. Build System

**Development**:
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript compilation on the fly
- Fast refresh for instant feedback

**Production**:
- Vite builds optimized static assets to `dist/public/`
- Code splitting for optimal loading performance
- Asset minification and optimization
- Hash-based filenames for cache busting

**Deployment**:
- Automated via GitHub Actions on push to `main` branch
- Workflow defined in `.github/workflows/deploy.yml`
- Builds and deploys to GitHub Pages automatically
- No manual deployment steps required

## Special Animation Components

### Magnetic (`client/src/components/ui/magnetic.tsx`)
Spring-based button attraction effect triggered by mouse proximity.

**How it Works**:
- Tracks mouse position relative to element bounds
- Applies spring physics translation toward cursor when hovering
- Returns to origin position when cursor leaves
- Used on Navbar links and call-to-action buttons

### Hero Section Parallax
Multi-layered scroll animations in the hero section:
- Background image parallax (moves slower than scroll)
- Animated blob shapes with mouse tracking
- Spring-based parallax timing (stiffness: 150, damping: 20)
- Staggered text entrance animations

### Timeline Component
Interactive work experience timeline with:
- Scroll-triggered stagger animations for timeline items
- Hover effects: timeline dots scale 2x with glow, connecting lines illuminate
- Smooth content translation on hover
- Groups multiple roles at same company

## Deployment

### GitHub Pages Setup
This site is configured for automated deployment to GitHub Pages:

1. **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
   - Triggers on every push to `main` branch
   - Runs `npm ci` to install dependencies
   - Runs `npm run build` to generate static files
   - Deploys `dist/public/` to GitHub Pages

2. **Repository Settings**:
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"
   - The workflow will automatically deploy on push

3. **Base Path Configuration**:
   - Currently set to `/` in `vite.config.ts` for root deployment
   - If deploying to a subpath (e.g., `username.github.io/repo-name/`):
     - Update `base: '/repo-name/'` in `vite.config.ts`
     - Rebuild and deploy

4. **Custom Domain** (optional):
   - Add `CNAME` file to `client/public/` with your domain
   - Configure DNS A records to point to GitHub Pages IPs
   - Enable custom domain in GitHub Pages settings

### Local Development
- Run `npm run dev` to start development server
- Changes auto-reload with HMR (Hot Module Replacement)
- All portfolio content edits are in `client/src/lib/data.ts`
- Preview production build locally with `npm run preview`
