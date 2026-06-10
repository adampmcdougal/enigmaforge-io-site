import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EnigmaForge",
  description: "Privacy Policy for enigmaforge.io",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020817] px-6 py-16 text-slate-300">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to home
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 9, 2025</p>

        <Section title="1. Introduction">
          <p>
            EnigmaForge (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the
            website enigmaforge.io (the &ldquo;Site&rdquo;). This Privacy Policy explains how we
            collect, use, and protect information you provide when you interact with our Site.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect information you voluntarily submit through our contact form, including:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Company name (optional)</li>
            <li>Message content</li>
          </ul>
          <p className="mt-3">
            We do not use cookies for tracking or analytics, and we do not automatically collect
            device or browsing data beyond what is inherent to standard web server operation.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Respond to your meeting or inquiry request</li>
            <li>Schedule and confirm meetings</li>
            <li>Communicate with you about EnigmaForge services</li>
          </ul>
          <p className="mt-3">
            We will not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>
            We use <strong className="text-slate-200">Resend</strong> (resend.com) to deliver
            email notifications when you submit a contact form. Your submitted information is
            transmitted to Resend&rsquo;s servers solely for the purpose of sending that email.
            Resend&rsquo;s privacy policy is available at{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              resend.com/legal/privacy-policy
            </a>
            .
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain contact form submissions only as long as necessary to respond to your inquiry
            and for a reasonable follow-up period thereafter. You may request deletion of your data
            at any time by contacting us (see Section 8).
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for us to contact you</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at the address in Section 8.
          </p>
        </Section>

        <Section title="7. Security">
          <p>
            We take reasonable technical measures to protect information transmitted through our
            Site. However, no method of transmission over the internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated date. Continued use of the Site after changes constitutes
            acceptance of the revised policy.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data rights,
            please contact us at:{" "}
            <a
              href="mailto:hello@enigmaforge.io"
              className="text-cyan-400 hover:text-cyan-300"
            >
              hello@enigmaforge.io
            </a>
          </p>
        </Section>

        <footer className="mt-16 border-t border-slate-800 pt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} EnigmaForge &middot;{" "}
          <Link href="/terms" className="hover:text-slate-400">
            Terms &amp; Conditions
          </Link>
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed text-slate-400 [&_li]:ml-4 [&_li]:list-disc [&_ul]:mt-2 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
