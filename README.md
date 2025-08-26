# Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Live Preview :
[<img width="1817" height="894" alt="image" src="https://github.com/user-attachments/assets/47167337-8a94-4c55-a501-5d06550d5a95" />](https://www.maleksmida.com/)

## About the Project

This is a light, simple and minimalist online portfolio template built with modern web technologies:

- [Next.js 15](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

The template was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and focuses on:

- ✅ Accessibility
- 🔍 SEO optimization
- 🛡️ Security (security headers including CSP)
- ⚡ Performance
- 🧩 Best practices (ESLint and Prettier included)

The project leverages the island architecture through Next.js's hybrid rendering approach (server and client side), using 'use client' directives in some components. This provides:

- Server-side rendering for better SEO and initial load performance
- Client-side interactivity only where needed
- Smaller JavaScript bundles for improved page speed

Out of curiosity, I experimented with several technologies in this project:

- [Pnpm](https://pnpm.io/) as a package manager
- [Vitest](https://vitest.dev/) for unit tests and coverage
- [Playwright](https://playwright.dev/) for end-to-end testing

## Project Structure

```
src/
├── app/                  # Next.js app router pages and layouts
├── components/           # Reusable UI components
├── services/             # Services for fetching data from GitHub Gists
│   ├── types.ts          # TypeScript type definitions
│   ├── gistService.ts    # Utility for fetching data from GitHub Gists
│   └── *Service.ts       # Individual services for each data section
├── hooks/                # Custom React hooks
├── sections/             # Page sections (about, contact, etc.)
└── styles/               # Global styles and Tailwind configuration
```

### Key Features

- **Island Architecture**: Only interactive components use client-side JavaScript
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach that works on all devices
- **Content Security Policy**: Strict CSP implementation
- **Type Safety**: Full TypeScript integration
- **Comprehensive Testing**: Unit and E2E tests
- **Accessibility**: ARIA attributes and semantic HTML
- **SEO Optimization**: Metadata, structured data, and optimized rendering
- **Centralized Configuration**: All site metadata, robots.txt, sitemap, and manifest configurations in one place

## Getting Started

### Requirements

- Node.js version >= 22.x ([installation guide](https://nodejs.org/en/download))
- pnpm >= 9.x ([installation guide using Corepack](https://pnpm.io/installation#using-corepack))

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm i
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

The project relies on the following environment variables:

```plaintext
# GitHub Gist URLs for Portfolio Data
NEXT_PUBLIC_GIST_SITE_CONFIG_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_HOME_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_CONSULTING_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_CAREER_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_CONTACT_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
# PostHog Analytics Configuration
NEXT_PUBLIC_POSTHOG_KEY='your-posthog-key'
NEXT_PUBLIC_POSTHOG_HOST='your-posthog-host' # example: https://us.i.posthog.com
```

Copy the content of `.env.example` into your `.env` file (create it) and replace the placeholder values with your actual information.

## PostHog Configuration

We use PostHog for analytics, if you want to activate it, you should:

1. Create an account on [PostHog](https://posthog.com/) (if you don't already have an account).
2. When selecting the type of product you want to use, go with `Product Analytics` (for tracking user behavior and feature usage) and `Web Analytics` (focuses on website traffic and visitor behavior).
3. Update env variables `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`.

## Available Scripts

| Command                    | Description                             |
| -------------------------- | --------------------------------------- |
| `pnpm dev`                 | Start development server with Turbopack |
| `pnpm build`               | Build the application for production    |
| `pnpm start`               | Start the production server             |
| `pnpm lint`                | Run ESLint on the codebase              |
| `pnpm format`              | Format code with Prettier               |
| `pnpm test`                | Run Vitest tests                        |
| `pnpm test:coverage`       | Run tests with coverage report          |
| `pnpm test:e2e`            | Run Playwright end-to-end tests         |
| `pnpm test:e2e:ui`         | Run Playwright tests with UI            |
| `pnpm test:e2e:chrome`     | Run Playwright tests in Chrome only     |
| `pnpm test:e2e:debug`      | Run Playwright tests in debug mode      |
| `pnpm test:e2e:codegen`    | Generate Playwright test code           |
| `pnpm test:e2e:showReport` | Show Playwright test report             |

Before executing e2e tests make sure to install playright `pnpm exec playwright install`.

## Upgrade pnpm version

Execute in the root folder

```Shell
corepack use pnpm@latest
```

## Upgrade Next.js version to latest

Execute in the root folder

```Shell
npx @next/codemod@latest upgrade latest
```

## Trace outdated package

Trace outdate Node.js package in your dependency tree

While in dev:

```Shell
NODE_OPTIONS="--trace-deprecation" pnpm dev
```

Global app scan:

```Shell
pnpm outdated

# You can update it using: pnpm add <package>@latest
```

## Customization

You can customize the portfolio by editing the contents of your GitHub Gists. All text content has been externalized into GitHub Gists, and the sections and components are conditionally rendered based on the provided configuration. This allows for easy customization with minimal effort.

### Using GitHub Gists for Content Management

This portfolio template fetches all content data from GitHub Gists, which provides several benefits:

1. **Easier content updates**: You can update your portfolio content without modifying code
2. **Version control**: Gists are version controlled, allowing you to track changes
3. **External CMS-like experience**: Edit your content through GitHub's interface

#### My public Gists, I am currently using

Each Gist should contain a JSON file with the appropriate structure for that section or page. See the example Gists for reference:

- [Site Config Example](https://gist.githubusercontent.com/MalekSmida/5bdb952bc527ec98baf9bccd46e051e8/raw)
- [Home Page Example](https://gist.githubusercontent.com/MalekSmida/276f02371a685522f4590b16d49bc3fc/raw)
- [Consulting Page Example](https://gist.githubusercontent.com/MalekSmida/bce3829cd6cfdb956297282a83941d52/raw)
- [Career Page Example](https://gist.githubusercontent.com/MalekSmida/20e4fa74cb974429182dbd1dfc6bb98e/raw)
- [Contact Page Example](https://gist.githubusercontent.com/MalekSmida/f8027a67e0c6dcae34b7742f1c3c0266/raw)

#### How to Use GitHub Gists for Content

1. Fork the example Gists from below to your own GitHub account (the easiest way to start):

   - Click on each Gist link below
   - Click the "Fork" button in the top right corner
   - Update the content with your own information
   - Save the fork
   - Use your new Gist URLs in your environment variables

   OR

2. Create new GitHub Gists from scratch for each section of your portfolio:

   - Site configuration (SEO, manifest, robots, etc.)
   - Presentation section (your name, title, description)
   - Skills section (your technical skills)
   - Career section (work experience)
   - About section (about you)
   - Contact section (your contact information)

3. Configure your GitHub Gists by setting environment variables in your `.env` file:

   ```plaintext
   # GitHub Gist URLs for Portfolio Data
   NEXT_PUBLIC_GIST_SITE_CONFIG_URL
   NEXT_PUBLIC_GIST_HOME_URL
   NEXT_PUBLIC_GIST_CONSULTING_URL
   NEXT_PUBLIC_GIST_CAREER_URL
   NEXT_PUBLIC_GIST_CONTACT_URL
   ```

   Note: The URLs are structured to exclude commit hashes, allowing you to update your Gists without having to update your environment variables.

### Styling

The project uses Tailwind CSS for styling. To customize the look and feel:

1. Edit the Tailwind configuration in `tailwind.config.js`
2. Use Tailwind classes directly in the components
3. Add custom styles in `/src/styles/globals.css`

## Security Features

This template implements security best practices, like: HTTP Security Headers, you can test it via [Security Headers by Snyk](https://securityheaders.com/)

## Testing

The project includes comprehensive testing:

- **Unit Tests**: Using Vitest for components, hooks, and utilities
- **End-to-End Tests**: Using Playwright to test the full application

Run tests with:

```bash
pnpm test          # Unit tests
pnpm test:e2e      # E2E tests
```

## Deployment

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
