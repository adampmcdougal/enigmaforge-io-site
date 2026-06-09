import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = "adampmcdougal@gmail.com";

const MAX_LEN = { name: 100, email: 254, company: 200, message: 2000 };

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip).allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const name: string = (body?.name ?? "").trim();
    const email: string = (body?.email ?? "").trim().toLowerCase();
    const company: string = (body?.company ?? "").trim();
    const message: string = (body?.message ?? "").trim();

    if (!name || name.length > MAX_LEN.name) {
      return NextResponse.json({ error: "Please enter your name (max 100 characters)." }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email) || email.length > MAX_LEN.email) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (company.length > MAX_LEN.company) {
      return NextResponse.json({ error: "Company name is too long (max 200 characters)." }, { status: 400 });
    }
    if (!message || message.length > MAX_LEN.message) {
      return NextResponse.json({ error: "Please enter a message (max 2000 characters)." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "EnigmaForge <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Meeting Request from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Meeting Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #64748b;">Company</td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="color: #64748b; margin: 0 0 8px;">Message:</p>
          <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Request sent." }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
