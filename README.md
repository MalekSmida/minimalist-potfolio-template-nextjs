# Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## About the Project

This is a light, simple and minimalist online portfolio template built with modern web technologies:

- [Next.js 15](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

The template was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and focuses on:

- ✅ Accessibility
- 🔍 SEO optimization
- 🛡️ Security (security headers including CSP with none)
- ⚡ Performance
- 🧩 Best practices (ESLint and Prettier included)

The project leverages the island architecture through Next.js's hybrid rendering approach (server and client side), using 'use client' directives in some components. This provides:

- Server-side rendering for better SEO and initial load performance
- Client-side interactivity only where needed
- Smaller JavaScript bundles for improved page speed

Out of curiosity, I experimented with several technologies in this project:

- [pnpm](https://pnpm.io/) as a package manager
- [Vitest](https://vitest.dev/) for unit tests and coverage
- [Playwright](https://playwright.dev/) for end-to-end testing

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

## Customization

You can customize the portfolio by editing the files under `/src/data`. All text content has been exported into these data files, and the sections and components are conditionally rendered based on the provided configuration. This allows for easy customization with minimal effort.

## Deployment

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
