import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
 * File-based storage: works for development and self-hosted deployments.
 *
 * For Vercel / serverless: the local filesystem is read-only at runtime.
 * Replace the appendToFile() logic below with your preferred email service:
 *
 *   - Resend:     https://resend.com/docs
 *   - Mailchimp:  https://mailchimp.com/developer/marketing/api/list-members/
 *   - Loops.so:   https://loops.so/docs
 *   - Supabase:   INSERT INTO waitlist (email)
 *
 * Set WAITLIST_PROVIDER=<provider> in .env.local and swap the implementation.
 */

function appendToFile(email: string): void {
  const filePath = path.join(process.cwd(), "waitlist.json");
  let entries: string[] = [];

  if (fs.existsSync(filePath)) {
    try {
      entries = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch {
      entries = [];
    }
  }

  entries.push(email);
  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body?.email ?? "").trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    appendToFile(email);

    return NextResponse.json(
      { message: "Added to waitlist." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
