# Personal Blog Setup Plan

This document outlines the plan for creating a personal blog using Vite and Vue. The blog is a Static Site Generation (SSG) project, making it fast and easy to deploy.

## Developer Notes

*   **Requirement:** This plan must be updated after each significant change or step is completed.

## 1. Project Initialization

*   **Framework:** Vue.js with Vite for the build tool.
*   **Command:** Initialize the project using `npm create vite@latest blog -- --template vue-ts`. **(DONE)**
*   **Dependencies:**
    *   `vue-router` for handling navigation between pages. **(DONE)**
    *   `tailwindcss` for styling. A modern utility-first CSS framework that is easy to customize. **(DONE)**
    *   `unplugin-vue-markdown` a markdown plugin to allow writing blog posts in Markdown. **(DONE)**

## 2. Project Structure

The project structure has been created as planned. **(DONE)**

```
/
├── public/
│   └── static assets (images, etc.)
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── LeftSidebar.vue
│   │   ├── RightSidebar.vue
│   │   └── BlogPostPreview.vue
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Blog.vue
│   │   └── Post.vue
│   ├── posts/
│   │   └── my-first-post.md
│   ├── router/
│   │   └── index.ts
│   ├── utils/
│   │   ├── dateUtils.ts
│   │   └── postUtils.ts
│   ├── types/
│   │   └── index.ts
│   ├── constants/
│   │   └── index.ts
│   ├── composables/
│   │   └── useSearch.ts
│   └── main.ts
├── index.html
├── package.json
└── vite.config.ts
```

## 3. Core Features

### 3.1. Routing

*   **Home Page (`/`):** Landing page with a brief intro and a list of recent blog posts. **(DONE)**
*   **Blog Page (`/blog`):** A page listing all blog posts, with search and sorting. **(DONE)**
*   **Post Page (`/blog/:slug`):** A dynamic route to display a single blog post. The content is rendered from a Markdown file. **(DONE)**
*   **About Page (`/about`):** A page with information about you. **(DONE)**

### 3.2. Blog Posts

*   Posts are written in Markdown files and stored in the `src/posts` directory. **(DONE)**
*   Each Markdown file contains frontmatter at the top to define metadata like `title`, `date`, `author`, and `tags`. **(DONE)**
*   Dynamic import and type-safe extraction of markdown posts. **(DONE)**

### 3.3. Design & Styling

*   **CSS Framework:** Tailwind CSS for a clean, modern, and responsive design. **(DONE)**
*   **Components:** Reusable Vue components for the header, footer, sidebars, and blog post previews. **(DONE)**
*   **Reddit-Inspired UI:** Light/dark mode toggle, three-column layout, and card-based post previews. **(DONE)**

## 4. Development Workflow

1.  **Setup:** Install Node.js and npm. **(DONE)**
2.  **Initialize Project:** Run `npm create vite@latest blog -- --template vue-ts`. **(DONE)**
3.  **Install Dependencies:** `npm install vue-router tailwindcss postcss autoprefixer unplugin-vue-markdown @tailwindcss/postcss`. **(DONE)**
4.  **Configure:** Set up `tailwind.config.js`, `postcss.config.js`, and update `vite.config.ts` to use the markdown plugin. **(DONE)**
5.  **Develop:** Create pages, components, and write blog posts. **(DONE)**
6.  **Build:** Run `npm run build` to generate the static site in the `dist` folder. **(DONE)**
7.  **Run:** Run `npm run dev` to start the development server. **(IN PROGRESS)**

## 5. Refactoring & Code Quality

*   **Type Safety:** Introduced `src/types/index.ts` for all post and utility types. **(DONE)**
*   **Constants:** Centralized magic strings and config in `src/constants/index.ts`. **(DONE)**
*   **Utilities:** Extracted date and post logic to `src/utils/`. **(DONE)**
*   **Composable:** Global search state via `useSearch.ts`. **(DONE)**
*   **Cleanup:** Removed unused files (e.g., HelloWorld.vue) and ensured no dead code remains. **(DONE)**
*   **Consistent Imports:** All components and utilities use consistent, type-safe imports. **(DONE)**

## 6. UI/UX Improvements

*   **Trending Posts:** Real markdown posts, improved card visibility, clickable cards. **(DONE)**
*   **Sidebars:** Sticky, with adjustable top offset and theme-aware styling. **(DONE)**
*   **Header:** Search bar, theme toggle, and rounded border. **(DONE)**
*   **Post Cards:** Improved contrast, shadows, and spacing. **(DONE)**
*   **Accessibility:** Theme-aware text and buttons, better color contrast. **(DONE)**

## 7. Deployment

*   **Hosting:** The static site can be deployed to services like Netlify, Vercel, or GitHub Pages.
*   **Domain:** The custom domain `frederiksahlholdt.com` will be configured with the chosen hosting provider.
*   **CI/CD:** A simple CI/CD pipeline can be set up to automatically build and deploy the site whenever new changes are pushed to the Git repository.

## 8. Next Steps

*   **Testing:** Test the application thoroughly on different devices and browsers.
*   **Performance Optimization:** Implement lazy loading, image optimization, and other performance improvements.
*   **SEO:** Add meta tags, structured data, and sitemap generation.
*   **Analytics:** Integrate Google Analytics or similar tracking.
*   **Comments System:** Implement a comments system (e.g., Disqus or custom solution).
*   **Search Functionality:** Add full-text search capabilities.
*   **RSS Feed:** Generate an RSS feed for blog subscribers.

## 9. Design & UX Improvements (Planned)

- Increase contrast and separation between columns and background.
- Standardize padding and spacing across all components.
- Reduce excessive whitespace on large screens.
- Refine typography: larger headings, improved line height, and clear font pairing.
- Use a consistent accent color for links, buttons, and tags.
- Polish dark mode for better contrast and readability.
- Add more pronounced hover and focus states for all interactive elements.
- Replace favicon and add a personal logo/avatar in the header/sidebar.
- Display blog title or your name in the header for branding.
- Make the header sticky on scroll.
- Add dividers or highlights in sidebars for better section separation.
- Ensure full mobile responsiveness and polish mobile navigation.
- Make entire blog post cards clickable and limit excerpt length.
- Style tags as accent-colored pills.
- Add a footer with copyright, social links, and a back-to-top button.
- Add smooth transitions for theme changes, hovers, and menu toggles.
- Improve accessibility: color contrast, focus states, and alt text for images/icons.