# DK RETAIL Next.js Site

This project is a Next.js + Tailwind CSS implementation of the DK RETAIL pages:

- `/` Home
- `/about` About
- `/showcase` Showcase
- `/contact` Contact

The contact page submits to `POST /api/contact`, which sends:

1. A notification email to the site owner
2. A confirmation email to the user

using Zoho SMTP via Nodemailer.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy env template and fill values:

```bash
cp .env.example .env.local
```

3. Run dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Required Environment Variables

Define these in `.env.local` and in Vercel project settings:

- `ZOHO_SMTP_HOST` (example: `smtp.zoho.com`)
- `ZOHO_SMTP_PORT` (usually `465`)
- `ZOHO_SMTP_USER` (Zoho mailbox used to send mail)
- `ZOHO_SMTP_PASS` (Zoho app-specific password)
- `CONTACT_EMAIL_TO` (recipient address for incoming contact requests)

## Zoho SMTP Notes

- Use an app-specific password from Zoho.
- Keep SMTP credentials server-only. Do not prefix with `NEXT_PUBLIC_`.
- Port `465` is configured as secure SMTP in this app.

Reference: https://www.zoho.com/mail/help/zoho-smtp.html

## Vercel Deployment

1. Push repository to your Git provider.
2. Import project in Vercel.
3. Add all environment variables in Vercel Settings > Environment Variables.
4. Deploy.

After deploy, submit the contact form once and verify:

1. Owner email arrives at `CONTACT_EMAIL_TO`.
2. User confirmation email arrives at the submitter email.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
