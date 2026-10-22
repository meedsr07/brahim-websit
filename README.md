This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Local SEO and Netlify

- Set `NEXT_PUBLIC_SITE_URL` to the production domain (for example,
  `https://your-domain.com`). If it is empty on Netlify, the build falls back
  to Netlify's `URL` environment variable.
- The homepage metadata and the `LocalBusiness` JSON-LD live in
  `lib/seo.js` and `lib/schema.js`. Business data (phone, hours, price range,
  keywords) is centralized in `lib/business.js`.
- Before publishing, confirm that the 24/7 emergency service and the
  `priceRange` are accurate. If they change, update `business.hours` and
  `business.priceRange`; the website, metadata, and schema update together.
- For a stronger LocalBusiness result, add the real street address, postal
  code, coordinates, and Google Business Profile URL when they are available.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
