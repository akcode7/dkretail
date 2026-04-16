"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to send message right now.");
      }

      setFeedback(
        payload.message ?? "Message sent successfully. Check your inbox for confirmation."
      );
      setForm(initialState);
    } catch (submitError) {
      setError(true);
      setFeedback(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send message right now."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        value={form.website}
        onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-lg border border-transparent bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-outline-variant transition focus:border-primary/35 focus:bg-surface-container-lowest focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-transparent bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-outline-variant transition focus:border-primary/35 focus:bg-surface-container-lowest focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Subject"
          value={form.subject}
          onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
          className="w-full rounded-lg border border-transparent bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-outline-variant transition focus:border-primary/35 focus:bg-surface-container-lowest focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Your Message"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full resize-none rounded-lg border border-transparent bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-outline-variant transition focus:border-primary/35 focus:bg-surface-container-lowest focus:outline-none"
        ></textarea>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="cta-gradient rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-on-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <p className={`text-sm ${error ? "text-red-700" : "text-on-surface-variant"}`}>
          {feedback}
        </p>
      </div>
    </form>
  );
}
