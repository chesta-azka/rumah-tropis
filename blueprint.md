
# Blueprint: Rumah Tropis Landing Page Rebuild

## Overview

This document outlines the plan for rebuilding the Rumah Tropis landing page. The goal is to create a modern, premium, and visually appealing dark and white theme with brand color accents, while ensuring all existing media assets are preserved.

## Design and Style

*   **Theme:** Dark and white premium design.
*   **Color Palette:**
    *   Primary: #FFFFFF (White)
    *   Secondary: #000000 (Black)
    *   Accent: #FF0000 (Red - Brand Color)
*   **Typography:** Modern, clean, and readable font.
*   **Layout:** Clean, spacious, and responsive layout.

## Project Structure

```
/
|-- app/
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- Header.tsx
|   |-- Hero.tsx
|   |-- About.tsx
|   |-- Services.tsx
|   |-- Portfolio.tsx
|   |-- Testimonials.tsx
|   |-- CTA.tsx
|   |-- Footer.tsx
|-- public/
|   |-- images/
|       |-- (existing images)
|-- styles/
    |-- globals.css
```

## Plan

1.  **Scaffold Project:** Set up the basic Next.js project structure with the App Router.
2.  **Preserve Assets:** Ensure all files in the `public/images` directory are kept.
3.  **Build Components:** Create the following React components with the new dark and white design:
    *   `Header`: Navigation bar with logo and links.
    *   `Hero`: Hero section with a compelling headline and call-to-action.
    *   `About`: Section describing the company.
    *   `Services`: Section showcasing the services offered.
    *   `Portfolio`: Grid displaying portfolio items using existing images.
    *   `Testimonials`: Section with client testimonials.
    *   `CTA`: Call-to-action section.
    *   `Footer`: Footer with contact information and links.
4.  **Assemble Page:** Combine the components in `app/page.tsx` to create the complete landing page.
5.  **Style Application:** Apply global styles and component-specific styles.
6.  **Cleanup:** Remove old, unused code files after confirming with the user.
7.  **Review and Refine:** Review the rebuilt page and make any necessary adjustments.

