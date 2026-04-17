import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function validateContactPayload(payload: ContactPayload): string | null {
  if (payload.website && payload.website.trim().length > 0) {
    return "Spam detected.";
  }

  if (!payload.name || payload.name.trim().length < 2 || payload.name.trim().length > 120) {
    return "Please provide a valid name.";
  }

  if (!payload.email || !EMAIL_REGEX.test(payload.email.trim())) {
    return "Please provide a valid email address.";
  }

  if (!payload.subject || payload.subject.trim().length < 2 || payload.subject.trim().length > 180) {
    return "Please provide a valid subject.";
  }

  if (!payload.message || payload.message.trim().length < 10 || payload.message.trim().length > 5000) {
    return "Please provide a message between 10 and 5000 characters.";
  }

  return null;
}

function createTransport() {
  const host = getRequiredEnv("ZOHO_SMTP_HOST");
  const port = Number(getRequiredEnv("ZOHO_SMTP_PORT"));
  const user = getRequiredEnv("ZOHO_SMTP_USER");
  const pass = getRequiredEnv("ZOHO_SMTP_PASS");
  const authMethod = (process.env.ZOHO_SMTP_AUTH_METHOD || "LOGIN").toUpperCase();

  if (!Number.isFinite(port)) {
    throw new Error("Invalid SMTP port configured in ZOHO_SMTP_PORT");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
    authMethod,
  });
}

export async function sendContactEmails(payload: ContactPayload): Promise<void> {
  const transporter = createTransport();
  const from = getRequiredEnv("ZOHO_SMTP_USER");
  const to = process.env.CONTACT_EMAIL_TO || "Dhanushkodi@dkretails.com";

  const safeName = payload.name.trim();
  const safeEmail = payload.email.trim();
  const safeSubject = payload.subject.trim();
  const safeMessage = payload.message.trim();

  await transporter.sendMail({
    from,
    to,
    replyTo: safeEmail,
    subject: `[DK RETAIL] ${safeSubject}`,
    text: `New contact form submission\n\nName: ${safeName}\nEmail: ${safeEmail}\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`,
    html: `<h2>New contact form submission</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><p><strong>Message:</strong></p><p>${safeMessage.replace(/\n/g, "<br />")}</p>`,
  });

  await transporter.sendMail({
    from,
    to: safeEmail,
    subject: "We received your message | DK RETAIL",
    text: `Hi ${safeName},\n\nThanks for contacting DK RETAIL. We received your message and our team will get back to you soon.\n\nSubject: ${safeSubject}\n\nRegards,\nDK RETAIL`,
    html: `<p>Hi ${safeName},</p><p>Thanks for contacting <strong>DK RETAIL</strong>. We received your message and our team will get back to you soon.</p><p><strong>Subject:</strong> ${safeSubject}</p><p>Regards,<br />DK RETAIL</p>`,
  });
}
