# Practice Management Marketing Website (React)

A modern, responsive marketing website for a private practice therapy practice management service, built with React and Vite.

## Overview

This React application features reusable components and client-side routing for a seamless single-page application experience. The site maintains a clean, professional design with a calming color scheme perfect for a therapy practice management service.

## Tech Stack

- **React 19** - UI library
- **React Router DOM 7** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling (no CSS frameworks)

## Color Scheme

- **Off White**: `#FAF9F6` - Primary background
- **Tan**: `#D4C5B9` - Accent color, borders
- **Pale Green**: `#A8C5A5` - Primary CTA color
- **Dark Green**: `#7A9B76` - Hover states, headings
- **Text Colors**: Various shades of green/gray for optimal readability

## Project Structure

```
practice-mgmt/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Reusable navigation header
│   │   └── Footer.jsx       # Reusable footer
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── Services.jsx     # Services page
│   │   ├── Pricing.jsx      # Pricing page
│   │   ├── StartingPractice.jsx  # Starting a practice guide
│   │   └── Chat.jsx         # Contact form page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── styles.css           # All styling
├── index-react.html         # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## Features

- ✅ **Component-Based Architecture** - Reusable Header and Footer components
- ✅ **Client-Side Routing** - Fast navigation with React Router
- ✅ **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- ✅ **Mobile Navigation** - Hamburger menu with state management
- ✅ **Form Handling** - React-controlled form in Chat component
- ✅ **Modern UI/UX** - Clean, professional design with excellent readability
- ✅ **Fast Development** - Hot module replacement with Vite

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0 recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173` (Vite's default port)

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The production files will be in the `dist/` directory.

## Component Overview

### Reusable Components

**Header Component** (`src/components/Header.jsx`)
- Navigation with React Router Links
- Active link highlighting based on current route
- Mobile menu with state management
- Hamburger animation

**Footer Component** (`src/components/Footer.jsx`)
- Consistent footer across all pages
- React Router Links for internal navigation

### Page Components

All pages are self-contained components that can be easily modified:

- **Home** - Hero section, benefits list, CTA sections
- **Services** - Detailed service offerings
- **Pricing** - Three-tier pricing with FAQ
- **Starting Practice** - Timeline-based guide
- **Chat** - Contact form with React state management

## Routing

Routes are defined in `src/App.jsx`:

- `/` - Home page
- `/services` - Services page
- `/pricing` - Pricing page
- `/starting-practice` - Starting a practice guide
- `/chat` - Contact form

## Styling

All styles are in `src/styles.css`. The CSS uses:
- CSS custom properties (variables) for colors
- Flexbox and Grid for layouts
- Mobile-first responsive design
- No CSS frameworks or preprocessors

## Deployment

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

Or connect your Git repository and set:
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

```bash
npm run build
vercel --prod
```

### Other Static Hosts

Build the project and upload the `dist/` directory to any static hosting service.

## Contact Form Integration

The contact form in `Chat.jsx` currently displays a success message on submit. To connect it to a backend:

1. Update the `handleSubmit` function in `src/pages/Chat.jsx`
2. Add your API endpoint
3. Consider using services like:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Custom backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential additions:
- TypeScript for type safety
- Blog section with markdown support
- Testimonials component
- FAQ accordion with animations
- Newsletter signup
- Analytics integration
- SEO meta tags component
- Loading states and transitions
- Error boundaries

## Development Notes

### Why React?

The site was converted to React to:
- Enable component reuse (Header/Footer across all pages)
- Simplify maintenance and updates
- Provide better state management for interactive elements
- Enable easier scaling and feature additions
- Improve developer experience with hot module replacement

### Why Vite?

Vite provides:
- Lightning-fast hot module replacement
- Optimized production builds
- Modern ES modules support
- Simple configuration
- Excellent React integration

## License

See LICENSE file for details.

## Contact

For questions or support, visit the "Chat with Me" page on the website.
