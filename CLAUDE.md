# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js portfolio website showcasing projects and blog posts. The site uses MDX for blog content, Tailwind CSS for styling, and features a permanent dark theme design.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4
- MDX for blog posts with custom components
- sugar-high for code syntax highlighting
- Lucide React for icons
- Vercel Analytics

## Development Commands

```bash
# Start development server with turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

- `app/` - Next.js App Router pages and components
  - `components/` - Reusable React components
    - `layout/` - Header, Footer, Hero components
    - `sections/` - Page section components  
    - `blog/` - Blog-specific components (Fab, TableOfContents)
  - `blog/` - MDX blog posts organized by topic
- `mdx-components.tsx` - Custom MDX component definitions
- `public/` - Static assets including algorithm diagrams

## Key Architecture Notes

### MDX Integration
- Blog posts are written in MDX and located in `app/blog/[slug]/page.mdx`
- Custom MDX components are defined in `mdx-components.tsx` with Tailwind styling
- Code blocks use sugar-high for syntax highlighting
- Headings automatically generate IDs for anchor links

### Dark Theme Design
- Permanent dark theme with consistent styling throughout
- Dark color scheme applied at the HTML level
- Optimized for readability and visual appeal in dark mode

### Component Organization
- Layout components (Header, Footer, Hero) handle page structure
- Section components organize content areas
- Blog components provide specific functionality like table of contents
- All components use TypeScript with proper prop typing

### Path Aliases
- `@/*` maps to project root for cleaner imports
- Used consistently across components: `@/app/components/...`

## Blog Content Structure

Blog posts include topics like:
- TypeScript fundamentals
- Algorithm implementations with visual diagrams
- Testing with Vitest
- Each post has its own directory with page.mdx file