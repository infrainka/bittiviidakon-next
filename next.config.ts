import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
          // Content-Security-Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' https://bittiviidakon.fi https://calendar.google.com https://*.google.com https://*.googleapis.com https://cdn.openwidget.com https://*.openwidget.com https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net https://*.greensock.com 'sha256-llmkQd2Bf5teYhrifdb3Do5GrTeG/xE0/DkAD57dgZQ='; style-src 'self' https://calendar.google.com https://*.google.com https://fonts.googleapis.com https://use.typekit.net https://p.typekit.net https://*.openwidget.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com https://use.typekit.net https://*.openwidget.com; img-src 'self' data: https://*.google.com https://*.googleapis.com https://*.openwidget.com; connect-src 'self' https://*.google.com https://*.openwidget.com; frame-src https://static.elfsight.com https://calendar.google.com https://*.google.com https://*.googleapis.com https://*.openwidget.com;",
          },
        ],
      },
      // Cache headers for static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        destination: '/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.bittiviidakon.fi',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
