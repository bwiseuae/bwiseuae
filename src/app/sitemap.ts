import { MetadataRoute } from 'next';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buildwiseuae.com').replace(/\/$/, '');

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

/**
 * Programmatic security filter rejecting private, administrative, internal, or query-parameterized routes.
 */
function isAllowedRoute(path: string): boolean {
  const normalized = path.toLowerCase().trim();

  // Reject routes containing query parameters or URI fragments
  if (normalized.includes('?') || normalized.includes('#')) {
    return false;
  }

  // Reject sensitive, administrative, internal build, and staging/test paths
  const disallowedPrefixes = [
    '/api',
    '/admin',
    '/_next',
    '/_',
    '/private',
    '/staging',
    '/test',
    '/draft',
  ];

  return !disallowedPrefixes.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Information Architecture & Crawl Priority (GEO-Optimized)
  const coreRoutes: RouteConfig[] = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      path: '/services',
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      path: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      path: '/faq',
      priority: 0.8,
      changeFrequency: 'weekly', // High priority for AI entity & Q&A citation extraction
    },
    {
      path: '/privacy-policy',
      priority: 0.3,
      changeFrequency: 'yearly',
    },
    {
      path: '/terms-and-conditions',
      priority: 0.3,
      changeFrequency: 'yearly',
    },
  ];

  // Dynamic Service Routes (Extensible mapping for nested dynamic service routes e.g. /services/[slug])
  const dynamicServiceSlugs: string[] = [];

  const dynamicServiceRoutes: RouteConfig[] = dynamicServiceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  const allRoutes = [...coreRoutes, ...dynamicServiceRoutes];

  return allRoutes
    .filter((route) => isAllowedRoute(route.path))
    .map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
}
