# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MassAdoption.ai is a Bitcoin education and community website featuring informational pages, event coordination, advisory services, and an AI assistant called "Mr. Nakamoto". Built with Next.js 13 App Router, React, and Tailwind CSS.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Node version requirement: 18.x.x**

## Architecture

### Next.js App Router Structure

The app uses route groups to organize pages:

- `app/(landing)/` - Marketing landing page
- `app/(dashboard)/(routes)/` - Feature pages (MrNakamoto, advisory, team, about, contact, meetup, etc.)

Each route group can have its own `layout.tsx` for shared UI elements.

### Key Directories

- `/components` - Reusable React components
- `/components/ui` - Shadcn/UI components (Radix UI primitives)
- `/lib` - Utilities including `cn()` for Tailwind class merging
- `/public` - Static assets (images, logos)
- `/constants.ts` - Tool definitions and configuration constants

### UI Component System

Uses Shadcn/UI with Radix primitives. Components are in `/components/ui/`. The `cn()` helper from `/lib/utils.ts` merges Tailwind classes:

```typescript
import { cn } from "@/lib/utils"
cn("base-class", condition && "conditional-class", props.className)
```

### Third-Party Integrations

- **AI**: OpenAI (GPT), Replicate
- **Payments**: Stripe
- **Analytics**: Google Analytics (gtag.js)
- **Support**: Crisp chat widget
- **Forms**: React Hook Form + Zod validation
- **State**: Zustand (minimal usage)

### Path Aliases

TypeScript paths configured: `@/*` maps to project root.

```typescript
import { Button } from "@/components/ui/button"
```

## Styling

- Tailwind CSS with dark mode (class strategy)
- CSS variables for theming defined in `globals.css`
- Responsive design using Tailwind breakpoints (sm, md, lg, xl)
- Use `"use client"` directive for components needing interactivity
