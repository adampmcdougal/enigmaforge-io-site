"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
      setMessage("You're on the list! We'll be in touch when we launch.");
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
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="glow-border flex-1 rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500/50 focus:bg-white/8 disabled:opacity-50"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-[#020817] transition-all hover:bg-cyan-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ minWidth: "9rem" }}
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <SpinnerIcon />
              Submitting…
            </span>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-center text-xs text-red-400">{message}</p>
      )}

      <p className="mt-3 text-xs text-slate-600">
        No spam, ever. Unsubscribe at any time.
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
