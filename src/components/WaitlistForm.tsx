"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
      setMessage("Thanks! We'll be in touch within 1 business day to confirm your meeting.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="glow-border flex flex-col items-center gap-3 rounded-xl bg-cyan-500/5 px-6 py-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
          <CheckIcon />
        </span>
        <p className="text-sm font-medium text-cyan-300">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="name"
          required
          maxLength={100}
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          disabled={status === "loading"}
          className="glow-border flex-1 rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500/50 focus:bg-white/8 disabled:opacity-50"
          aria-label="Your name"
        />
        <input
          type="text"
          name="company"
          maxLength={200}
          placeholder="Company (optional)"
          value={form.company}
          onChange={handleChange}
          disabled={status === "loading"}
          className="glow-border flex-1 rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500/50 focus:bg-white/8 disabled:opacity-50"
          aria-label="Company name"
        />
      </div>

      <input
        type="email"
        name="email"
        required
        maxLength={254}
        placeholder="Email address"
        value={form.email}
        onChange={handleChange}
        disabled={status === "loading"}
        className="glow-border w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500/50 focus:bg-white/8 disabled:opacity-50"
        aria-label="Email address"
      />

      <textarea
        name="message"
        required
        maxLength={2000}
        placeholder="What would you like to discuss?"
        value={form.message}
        onChange={handleChange}
        disabled={status === "loading"}
        rows={3}
        className="glow-border w-full resize-none rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500/50 focus:bg-white/8 disabled:opacity-50"
        aria-label="Message"
      />

      <button
        type="submit"
        disabled={status === "loading" || !form.name || !form.email || !form.message}
        className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-[#020817] transition-all hover:bg-cyan-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <SpinnerIcon />
            Sending…
          </span>
        ) : (
          "Request a Meeting"
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-xs text-red-400">{message}</p>
      )}

      <p className="text-xs text-slate-600">
        We&apos;ll respond within 1 business day to schedule a time that works for you.
      </p>
    </form>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10l4.5 4.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7"
        cy="7"
        r="5"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <path
        d="M7 2a5 5 0 015 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
