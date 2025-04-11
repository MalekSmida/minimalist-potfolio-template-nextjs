# Data Architecture

This document explains the data architecture of the portfolio project, focusing on how data is stored, fetched, and used throughout the application.

## Overview

The portfolio uses GitHub Gists as a flexible content management system, allowing you to update your portfolio content without having to modify code. This separation of content from code provides a more maintainable and scalable approach.

## Directory Structure

```
src/
├── services/                # Services for fetching data from GitHub Gists
│   ├── gistService.ts       # Utility for fetching data from GitHub Gists
│   ├── siteConfigService.ts # Service for site configuration
│   ├── presentationService.ts # Service for presentation data
│   ├── skillsService.ts     # Service for skills data
│   ├── careerService.ts     # Service for career data
│   ├── aboutService.ts      # Service for about data
│   ├── contactService.ts    # Service for contact data
│   ├── types.ts             # TypeScript type definitions
│   └── index.ts             # Exports all services and types
└── app/
    ├── page.tsx             # Main page using data services
    └── layout.tsx           # Root layout using data services
```

## How It Works

### 1. Environment Variables

The GitHub Gist URLs are configured through environment variables in `.env.local`:

```plaintext
# GitHub Gist URLs for Portfolio Data
NEXT_PUBLIC_GIST_SITE_CONFIG_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_SKILLS_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_PRESENTATION_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_CAREER_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_ABOUT_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
NEXT_PUBLIC_GIST_CONTACT_URL='https://gist.githubusercontent.com/YOUR_USERNAME/your-gist-id/raw'
```

Note that the URLs don't include commit hashes, allowing you to update your Gists without having to update your environment variables.

### 2. Data Fetching Utility

The `gistService.ts` utility provides a function to fetch data from GitHub Gists:

```typescript
/**
 * Fetches data from a GitHub Gist
 * @param url - The full URL to the GitHub Gist JSON file
 * @returns The parsed JSON data
 */
export async function fetchFromGist<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      throw new Error(`Failed to fetch data from Gist: ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error('Error fetching data from Gist:', error);
    throw error;
  }
}
```

### 3. Data Services

Each section of the portfolio has its own data service that uses the gistService to fetch data:

```typescript
// Example: presentationService.ts
import { fetchFromGist } from './gistService';
import { PresentationData } from './types';

export async function getPresentationData(): Promise<PresentationData> {
  const url = process.env.NEXT_PUBLIC_GIST_PRESENTATION_URL!;
  return fetchFromGist<PresentationData>(url);
}
```

### 4. TypeScript Types

All data structures are defined as TypeScript interfaces in `types.ts`:

```typescript
// Example: PresentationData interface
export interface PresentationData {
  name: string;
  jobTitle: string;
  description: string;
  yearsOfExperience: string;
}
```

## Usage Examples

### In React Server Components (recommended)

Server components can directly use the data services:

```tsx
// Example: page.tsx
import { getPresentationData } from '@/services';

const HomePage = async () => {
  const presentationData = await getPresentationData();

  return (
    <div>
      <h1>{presentationData.name}</h1>
      <h2>{presentationData.jobTitle}</h2>
      <p>{presentationData.description}</p>
    </div>
  );
};
```

### In Client Components

Client components can use the fetch utility with React hooks:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { PresentationData } from '@/services/types';

export default function ClientPresentationSection() {
  const [data, setData] = useState<PresentationData | null>(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(process.env.NEXT_PUBLIC_GIST_PRESENTATION_URL!);
      const presentationData = await response.json();
      setData(presentationData);
    }

    loadData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.jobTitle}</h2>
      <p>{data.description}</p>
    </div>
  );
}
```

## Creating and Updating GitHub Gists

1. Go to [GitHub Gist](https://gist.github.com/)
2. Create a new gist with your data in JSON format
3. Make sure the structure matches the TypeScript interfaces defined in `types.ts`
4. After creating the gist, update your `.env.local` file with the new gist URL
5. Restart your development server for the changes to take effect

### Forking Existing Gists

The easiest way to get started is by forking the example gists:

1. Visit each of the example gists listed in the README
2. Click the "Fork" button in the top-right corner of the gist page
3. Modify the content with your information
4. Use your forked gist URLs in your environment variables

This approach lets you quickly set up your portfolio with the correct data structure.

### Error Handling and Fallbacks

The portfolio is designed to be resilient to data-fetching failures. Each service includes:

1. Proper error handling for missing environment variables
2. Graceful handling of network errors during fetching
3. Default fallback data to ensure the site remains functional even when data can't be fetched
4. Type checking to ensure data integrity

This approach means your portfolio site will never be completely broken, even if some data is unavailable. Components will display fallback content rather than crashing.

```typescript
// Example of error handling in a service
export async function getAboutData(): Promise<AboutData> {
  try {
    const url = process.env.NEXT_PUBLIC_GIST_ABOUT_URL;

    if (!url) {
      console.error('Missing environment variable for About section');
      return {
        title: 'About Me',
        paragraphs: ['No about data available. Please check your configuration.'],
        focusList: [],
      };
    }

    const data = await fetchFromGist<Partial<AboutData>>(url);

    // Ensure we have proper data structure even if the API response is incomplete
    return {
      title: data.title || 'About Me',
      paragraphs: Array.isArray(data.paragraphs)
        ? data.paragraphs
        : ['About information not available.'],
      focusList: Array.isArray(data.focusList) ? data.focusList : [],
    };
  } catch (error) {
    console.error('Error fetching about data:', error);
    // Return fallback data instead of throwing to prevent page from crashing
    return {
      title: 'About Me',
      paragraphs: ['Unable to load about data. Please try again later.'],
      focusList: [],
    };
  }
}
```

Components are also designed to handle missing or empty data gracefully:

```tsx
// Example: About component handling missing data
const About: React.FC<PropsAbout> = ({ blockList }) => {
  // Always render the component, even with empty blockList
  return (
    <section className="my-10 grid grid-cols-1 lg:grid-cols-2" id="about">
      {/* Image section*/}
      <div className="flex w-full items-center justify-center px-8">
        <AnimatedGuitarPlayerImage />
      </div>

      {/* About me */}
      <article className="xl:text-md lg:px-22 bg-gray-50 p-8 text-sm md:px-16 md:py-8 lg:py-16 dark:bg-gray-800">
        <h1 className="mb-4 text-2xl font-bold sm:mb-10 sm:text-3xl">Hello again 👋</h1>

        {blockList.length > 0 ? (
          blockList.map((block, index) => (
            <AboutBlock key={index} title={block.title} itemList={block.aboutList} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-200">
            No about information available. Please check your data source.
          </p>
        )}
      </article>
    </section>
  );
};
```

## Example Gist JSON Structures

### Site Configuration

```json
{
  "siteInfo": {
    "title": "Your Name | Your Title",
    "name": "Your Name Portfolio",
    "shortName": "Your Name",
    "description": "Your detailed description...",
    "baseUrl": "https://www.yourwebsite.com",
    "author": "Your Name",
    "authorUrl": "https://www.linkedin.com/in/yourname/",
    "twitterHandle": "@yourhandle",
    "locale": "en_US"
  },
  "routes": [
    { "path": "", "priority": 1 },
    { "path": "/experience", "priority": 0.8 }
  ],
  "metaDataData": {
    /* metadata configuration */
  },
  "manifestData": {
    /* manifest configuration */
  },
  "robotsData": {
    /* robots.txt configuration */
  },
  "sitemapData": [
    /* sitemap configuration */
  ]
}
```

### Contact Data

```json
{
  "email": "your.email@example.com",
  "address": "Your Address",
  "phone": "+1234567890",
  "googleMapsLink": "https://www.google.com/maps/place/Your+Address",
  "linkedinProfile": "https://www.linkedin.com/in/yourprofile/",
  "githubProfile": "https://github.com/yourgithub/",
  "githubRepository": "https://github.com/yourgithub/your-repository"
}
```

See the README file for links to all example Gists.
