# Oz Eftpos Website - Project Structure

## Overview
Modern Next.js website for Oz Eftpos - professional EFTPOS payment solutions company.

## Project Structure

```
website-oz-eftpos/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/              # Layout components (Header, Footer, Nav)
│   ├── sections/            # Page sections (Hero, About, Services, Contact)
│   └── ui/                  # Reusable UI components (Buttons, Cards, etc.)
├── public/                  # Static assets
│   └── images/              # Image assets (logos, photos)
├── lib/                     # Utility functions and helpers
├── types/                   # TypeScript type definitions
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Design Notes

Based on `quick_mockup.html`:
- **Color Scheme**: Clean, professional design (update from blue #0154FC)
- **Layout**: Modern single-page with smooth scrolling sections
- **Sections**: Header, Hero, About, Services, Contact, Footer
- **Style**: Soft shadows, rounded corners, hover effects, gradient backgrounds

## Next Steps

1. **Add Brand Assets**: 
   - Place your Oz Eftpos logo in `public/images/`
   - Add any product images or team photos

2. **Update Colors**: 
   - Configure brand colors in `tailwind.config.ts`

3. **Build Components**:
   - Create reusable components in `components/`
   - Build page sections

4. **Customize Content**:
   - Update copy and messaging for Oz Eftpos
   - Add EFTPOS-specific features and services

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
