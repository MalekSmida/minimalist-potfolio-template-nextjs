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
├── data/                 # Data files for portfolio content
│   └── siteConfigData.ts # Centralized site configuration (SEO, manifest, etc.)
├── hooks/                # Custom React hooks
├── sections/             # Page sections (about, contact, etc.)
├── styles/               # Global styles and Tailwind configuration
└── utils/                # Utility functions and helpers
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
NEXT_PUBLIC_EMAIL='your.email@example.com'
NEXT_PUBLIC_ADDRESS='12345, Your City, Country'
NEXT_PUBLIC_PHONE='+1234567890'
NEXT_PUBLIC_GOOGLE_MAPS_LINK='https://www.google.com/maps/place/Your+Address'
NEXT_PUBLIC_LINKEDIN_PROFILE='https://www.linkedin.com/in/yourprofile/'
NEXT_PUBLIC_GITHUB_PROFILE='https://github.com/yourgithub'
NEXT_PUBLIC_GITHUB_REPOSITORY='https://github.com/yourgithub/your-repo'
NEXT_PUBLIC_CV_PDF_LINK='https://drive.google.com/your-cv-pdf-link'
```

Copy the content of `.env.example` into your `.env.local` file (create it) and replace the placeholder values with your actual information.

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

### Changing the Content

1. Edit the files in `/src/data/` to update:

   - Personal information
   - Experience and education
   - Projects and skills
   - Contact details

2. The components will automatically render based on the data you provide.

### Site Configuration

The project uses a centralized configuration approach for all site-wide settings:

1. Edit the file `/src/data/siteConfigData.ts` to update:

   - Site metadata (title, description, etc.)
   - OpenGraph and Twitter card data
   - Robots.txt configuration
   - Sitemap settings
   - Web App Manifest for PWA support

2. This centralized approach makes it easy to maintain consistency across different aspects of the site and simplifies updates when forking the project.

### Styling

The project uses Tailwind CSS for styling. To customize the look and feel:

1. Edit the Tailwind configuration in `tailwind.config.js`
2. Use Tailwind classes directly in the components
3. Add custom styles in `/src/styles/globals.css`

## Security Features

This template implements several security best practices:

- Strict Content Security Policy (CSP)
- HTTPS-only cookies
- XSS protection headers
- Prevents clickjacking with X-Frame-Options
- Proper CORS configuration

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
