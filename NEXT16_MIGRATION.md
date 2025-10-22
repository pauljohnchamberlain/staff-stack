# Next.js 16 cacheComponents Migration - staff-stack

## Current Status

✅ **Completed:**
- View Transitions enabled (`experimental.viewTransition: true`)
- Turbopack flag added to dev script
- Next.js 16.0.0 and React 19.2.0 upgraded

❌ **Incomplete:**
- cacheComponents is **DISABLED** due to Suspense boundary issues

## The Problem

When `cacheComponents: true` was enabled, the build failed with:

```
Error: Route "/blog/[id]": Uncached data was accessed outside of <Suspense>.
This delays the entire page from rendering, resulting in a slow user experience.
```

**Root cause**: The MainLayout component uses `usePathname()` (a client hook) which causes issues when combined with server-side data fetching without Suspense boundaries.

**Location**: `src/components/layout/main-layout.tsx:12:30`

```typescript
export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname(); // This causes the issue
```

## The Challenge

The app uses a `MainLayout` component that:
1. Calls `usePathname()` to get the current route
2. Is likely used to conditionally show/hide navigation or apply route-specific styling
3. Wraps page content that fetches data

This pattern conflicts with cacheComponents because the client-side hook (`usePathname`) is mixed with server-side rendering.

## Migration Strategy

You need to separate client-side layout logic from server-side data fetching using Suspense boundaries.

## Required Changes

### 1. Analyze MainLayout Usage

**File**: `src/components/layout/main-layout.tsx`

First, let's understand what MainLayout does:

```typescript
'use client' // Likely has this

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  // Probably doing something like:
  // - Conditional nav based on route
  // - Different styling per section
  // - Analytics tracking

  return (
    <div>
      <Navigation pathname={pathname} />
      {children}
      <Footer />
    </div>
  )
}
```

### 2. Separate Layout and Content

**Option A: Use Suspense in Pages**

Wrap page content in Suspense, keeping layout as-is:

**Example**: `src/app/blog/[id]/page.tsx`

**Before:**
```tsx
export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.id)

  return (
    <MainLayout>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </MainLayout>
  )
}
```

**After:**
```tsx
import { Suspense } from 'react'

export default function BlogPostPage({ params }) {
  return (
    <MainLayout>
      <Suspense fallback={<BlogPostSkeleton />}>
        <BlogPostContent id={params.id} />
      </Suspense>
    </MainLayout>
  )
}

async function BlogPostContent({ id }) {
  const post = await getBlogPost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
```

**Option B: Refactor MainLayout to Remove usePathname**

If `usePathname` isn't strictly necessary, remove it:

**Before:**
```tsx
'use client'

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  return (
    <div className={pathname === '/blog' ? 'blog-layout' : 'default-layout'}>
      <Navigation active={pathname} />
      {children}
    </div>
  )
}
```

**After:**
```tsx
// Remove 'use client' if possible
// Make it a server component

export function MainLayout({
  children,
  variant = 'default' // Pass variant as prop instead
}: MainLayoutProps) {
  return (
    <div className={variant === 'blog' ? 'blog-layout' : 'default-layout'}>
      <Navigation />
      {children}
    </div>
  )
}
```

Then in pages:
```tsx
<MainLayout variant="blog">
  {/* content */}
</MainLayout>
```

**Option C: Use Middleware to Pass Pathname**

If you MUST have pathname in layout:

```tsx
// Still client component
'use client'

export function MainLayout({ children, pathname }: MainLayoutProps) {
  // pathname passed as prop instead of using usePathname
  return (
    <div className={pathname === '/blog' ? 'blog-layout' : 'default-layout'}>
      <Navigation active={pathname} />
      {children}
    </div>
  )
}
```

### 3. Find All Pages with MainLayout

```bash
# Find files using MainLayout
grep -r "MainLayout" src/app/

# Check which pages fetch data
grep -r "await.*fetch\|await.*prisma\|await.*db" src/app/
```

### 4. Add Suspense to All Dynamic Pages

For each page that fetches data, add Suspense:

**Pattern to follow:**
```tsx
import { Suspense } from 'react'
import { MainLayout } from '@/components/layout/main-layout'

// Page component - NO data fetching here
export default function Page({ params }) {
  return (
    <MainLayout>
      <Suspense fallback={<PageSkeleton />}>
        <PageContent {...params} />
      </Suspense>
    </MainLayout>
  )
}

// Async component - data fetching HERE
async function PageContent({ id, slug }) {
  const data = await fetchData(id)

  return (
    <div>
      {/* Your JSX */}
    </div>
  )
}
```

### 5. Create Loading Skeletons

Create skeleton components for better UX:

**File**: `src/components/skeletons/blog-post-skeleton.tsx`
```tsx
export function BlogPostSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  )
}
```

### 6. Check ClientBody Component

**File**: `src/app/ClientBody.tsx`

If this component exists and uses client hooks, ensure it's properly separated:

```tsx
'use client'

export function ClientBody({ children }) {
  // Any client-side logic here
  return <body>{children}</body>
}
```

And in layout:
```tsx
import { Suspense } from 'react'
import { ClientBody } from './ClientBody'

export default function RootLayout({ children }) {
  return (
    <html>
      <ClientBody>
        <Suspense fallback={<RootSkeleton />}>
          {children}
        </Suspense>
      </ClientBody>
    </html>
  )
}
```

### 7. Enable cacheComponents

**File**: `next.config.js`

Once all Suspense boundaries are in place, uncomment:

```javascript
const nextConfig = {
  // Enable Cache Components for Next.js 16
  cacheComponents: true,  // UNCOMMENT THIS

  experimental: {
    viewTransition: true,
  },
  // ... rest of config
}
```

### 8. Test the Build

```bash
pnpm build
```

Expected output:
```
▲ Next.js 16.0.0 (Turbopack, Cache Components)
```

### 9. Implement "use cache" on Marketing Pages

Your SaaS marketing pages are **perfect for caching**:

#### Static Pages (high cache):

```typescript
'use cache'
import { unstable_cacheLife as cacheLife } from 'next/cache'

// src/app/about/page.tsx
export default async function AboutPage() {
  cacheLife('days') // Cache for 24 hours
  return // JSX
}

// src/app/services/page.tsx
export default async function ServicesPage() {
  cacheLife('days')
  return // JSX
}

// src/app/pricing/page.tsx
export default async function PricingPage() {
  cacheLife('hours') // Shorter cache if pricing changes
  return // JSX
}
```

#### Blog Pages (medium cache):

```typescript
'use cache'
import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from 'next/cache'

// src/app/blog/[id]/page.tsx
export default async function BlogPostPage({ params }) {
  cacheLife('days')
  cacheTag('blog', `blog-${params.id}`)

  const post = await getBlogPost(params.id)
  return // JSX
}
```

#### Homepage (short cache):

```typescript
'use cache'
import { unstable_cacheLife as cacheLife } from 'next/cache'

// src/app/page.tsx
export default async function HomePage() {
  cacheLife('hours') // Shorter cache for homepage
  return // JSX
}
```

### 10. Don't Cache Dashboard/Auth Pages

**Important**: DON'T add "use cache" to:
- User dashboards
- Authentication pages
- Admin panels
- Any user-specific content

These pages need to be dynamic per-user.

## Testing Checklist

- [ ] Build succeeds with no errors
- [ ] All pages load correctly
- [ ] Blog posts render properly
- [ ] Navigation works (if based on pathname)
- [ ] Loading states show during Suspense
- [ ] Static pages load fast (cached)
- [ ] Dynamic pages work correctly
- [ ] Auth flow works (if applicable)
- [ ] No console errors about uncached data
- [ ] Dev mode hot reload works
- [ ] Production build shows "Cache Components"

## Recommended Cache Strategy

**For a SaaS marketing site:**

| Page Type | Cache Duration | Reasoning |
|-----------|----------------|-----------|
| Homepage | 1 hour | Shows latest content, updated frequently |
| About/Company | 24 hours | Static content, rarely changes |
| Services/Products | 6-12 hours | Features change occasionally |
| Pricing | 6 hours | Pricing might update |
| Blog Posts | 24 hours | Content stable after publish |
| FAQ | 24 hours | Rarely updated |
| Contact | 6 hours | Form might change |
| Dashboard | NO CACHE | User-specific data |

## Common Patterns for This App

### Pattern 1: Marketing Page (Static)
```tsx
'use cache'
import { unstable_cacheLife as cacheLife } from 'next/cache'

export default async function StaticPage() {
  cacheLife('days')
  return <div>{/* Static content */}</div>
}
```

### Pattern 2: Blog Post (Semi-Dynamic)
```tsx
import { Suspense } from 'react'

export default function BlogPost({ params }) {
  return (
    <MainLayout>
      <Suspense fallback={<Skeleton />}>
        <BlogContent id={params.id} />
      </Suspense>
    </MainLayout>
  )
}

async function BlogContent({ id }) {
  'use cache'
  cacheLife('days')

  const post = await getPost(id)
  return <article>{/* content */}</article>
}
```

### Pattern 3: Dynamic Dashboard (No Cache)
```tsx
// NO 'use cache' directive
export default async function DashboardPage() {
  const user = await getCurrentUser()
  const data = await getUserData(user.id)

  return <Dashboard user={user} data={data} />
}
```

## Rollback Plan

If issues occur:

```javascript
// next.config.js
const nextConfig = {
  // cacheComponents: true,  // Comment out
  experimental: {
    viewTransition: true,
  },
}
```

## Resources

- [Next.js 16 Cache Components](https://nextjs.org/docs/app/building-your-application/caching)
- [React Suspense](https://react.dev/reference/react/Suspense)
- [usePathname Hook](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
- [Next.js Error: Blocking Route](https://nextjs.org/docs/messages/blocking-route)

## Notes

- SaaS marketing sites are **perfect for aggressive caching**
- Public pages (about, services, blog) can be cached for hours/days
- Only user-specific content (dashboards, account pages) should be dynamic
- Consider implementing on-demand revalidation for blog posts
- MainLayout pattern is common but needs careful handling with cacheComponents
