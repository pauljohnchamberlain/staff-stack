# SEO Quick Fixes - Staff Stack

Copy-paste ready code snippets to implement SEO fixes immediately.

## 1. robots.txt (2 minutes)

**File:** `/public/robots.txt`

```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://staffstack.co/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /
```

## 2. Basic Sitemap (5 minutes)

**File:** `/src/app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://staffstack.co',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://staffstack.co/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://staffstack.co/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://staffstack.co/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://staffstack.co/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
```

## 3. Quick Meta Tags Fix (10 minutes)

**Update:** `/src/app/layout.tsx`

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://staffstack.co'),
  title: {
    default: 'Staff Stack | Remote Teams in the Philippines',
    template: '%s | Staff Stack'
  },
  description: 'Build your remote team in the Philippines. IT developers, customer service, creative professionals. Save 70% on staffing costs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://staffstack.co',
    siteName: 'Staff Stack',
    images: [{
      url: 'https://staffstack.co/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

## 4. Google Analytics Quick Setup (REMOVED)

**Note:** Google Analytics tracking code has been removed from the application upon user request.

## 5. Fix Image Optimization (2 minutes)

**Update:** `/next.config.js`

```javascript
const nextConfig = {
  images: {
    // DELETE THIS LINE:
    // unoptimized: true,
    
    // ADD THESE:
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // DELETE THESE IN PRODUCTION:
  // typescript: { ignoreBuildErrors: true },
  // eslint: { ignoreDuringBuilds: true },
};
```

## 6. Basic Organization Schema (5 minutes)

**Add to:** `/src/app/layout.tsx` (before closing body tag)

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Staff Stack",
      "url": "https://staffstack.co",
      "logo": "https://staffstack.co/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+63-2-1234-5678",
        "contactType": "sales",
      },
      "sameAs": [
        "https://www.facebook.com/staffstack",
        "https://www.linkedin.com/company/staffstack",
      ]
    })
  }}
/>
```

## 7. Page-Specific Meta Tags (3 minutes each)

**For any page file (e.g., `/src/app/services/page.tsx`):**

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'IT development, customer service, creative services, and admin support from the Philippines.',
  openGraph: {
    title: 'Our Services | Staff Stack',
    description: 'IT development, customer service, creative services, and admin support from the Philippines.',
  },
}

// Your component code...
```

## 8. Quick FAQ Schema (5 minutes)

**Add to:** `/src/app/faq/page.tsx`

```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What services does Staff Stack offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We offer IT development, customer service, creative services, and administrative support."
    }
  }]
};

// In your component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

## 9. Canonical URL (2 minutes)

**Add to any page's metadata:**

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://staffstack.co/current-page-path',
  },
}
```

## 10. Basic llms.txt (3 minutes)

**File:** `/public/llms.txt`

```txt
# Staff Stack

We are an offshore staffing provider in the Philippines.

## Services
- IT Development
- Customer Service  
- Creative Services
- Administrative Support

## Contact
Website: https://staffstack.co
Email: info@staffstack.co
Phone: +63-2-1234-5678

## Why Choose Us
- English-proficient staff
- 70% cost savings
- Dedicated teams
- 24/7 support available
```

## 11. Mobile Viewport Fix (1 minute)

**Add to:** `/src/app/layout.tsx` (in head)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
```

## 12. Resource Hints (2 minutes)

**Add to:** `/src/app/layout.tsx` (in head)

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

## 13. 404 Page SEO (3 minutes)

**File:** `/src/app/not-found.tsx`

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/">Go Home</a>
    </div>
  )
}
```

## 14. Quick Breadcrumb Implementation (5 minutes)

**Component:** `/src/components/Breadcrumbs.tsx`

```typescript
export function Breadcrumbs({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb">
        {items.map((item, i) => (
          <span key={i}>
            <a href={item.url}>{item.name}</a>
            {i < items.length - 1 && ' > '}
          </span>
        ))}
      </nav>
    </>
  );
}
```

## 15. Emergency Performance Fix (5 minutes)

**Add to:** `/next.config.js`

```javascript
const nextConfig = {
  // ... existing config
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}
```

## Command Line Quick Actions

```bash
# Test robots.txt
curl http://localhost:3000/robots.txt

# Test sitemap
curl http://localhost:3000/sitemap.xml

# Build and check for errors
npm run build

# Check bundle size
npx @next/bundle-analyzer

# Test mobile responsiveness
npx lighthouse http://localhost:3000 --view

# Generate icons
npx pwa-asset-generator logo.png public/icons
```

## Testing URLs

After implementing, test these:
- https://yourdomain.com/robots.txt
- https://yourdomain.com/sitemap.xml
- https://yourdomain.com/llms.txt

## Validation Tools

1. **Meta Tags:** https://www.opengraph.xyz/
2. **Structured Data:** https://search.google.com/test/rich-results
3. **Mobile Friendly:** https://search.google.com/test/mobile-friendly
4. **Page Speed:** https://pagespeed.web.dev/
5. **Twitter Cards:** https://cards-dev.twitter.com/validator

## Deploy Checklist

```bash
# 1. Clear Next.js cache
rm -rf .next

# 2. Install dependencies
npm install

# 3. Build project
npm run build

# 4. Test locally
npm run start

# 5. Deploy
npm run deploy
```

## Monitoring Scripts

**Add to package.json:**

```json
{
  "scripts": {
    "seo:check": "next build && next-sitemap",
    "seo:validate": "npx schema-validator",
    "seo:lighthouse": "npx lighthouse https://staffstack.co --view"
  }
}
```

## Quick Wins Summary

1. **Immediate (5 mins):** robots.txt + basic sitemap
2. **Quick (15 mins):** Meta tags + Google Analytics
3. **Easy (30 mins):** Schema markup + image optimization
4. **Important (1 hour):** All page titles + descriptions
5. **Impactful (2 hours):** Full sitemap + structured data

---

**Remember:** After implementing any changes:
1. Clear browser cache
2. Test in incognito mode
3. Check Google Search Console after 24-48 hours
4. Monitor Google Analytics for traffic changes

**Support:** For questions, contact dev@staffstack.co