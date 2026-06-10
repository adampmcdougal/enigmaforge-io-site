import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | EnigmaForge",
  description: "Terms and Conditions for enigmaforge.io",
  robots: { index: true, follow: true },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#020817] px-6 py-16 text-slate-300">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
        >
          ← Back to home
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-white">Terms &amp; Conditions</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 9, 2025</p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the website enigmaforge.io (the &ldquo;Site&rdquo;), you agree
            to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please
            do not use the Site.
          </p>
        </Section>

        <Section title="2. About EnigmaForge">
          <p>
            EnigmaForge provides data and supply chain technology consulting services. The Site is
            currently in a pre-launch phase. Information on the Site is subject to change without
            notice.
          </p>
        </Section>

        <Section title="3. Use of the Site">
          <p>You agree to use the Site only for lawful purposes. You must not:</p>
          <ul>
            <li>Submit false, misleading, or fraudulent information through any form on the Site</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
            <li>Use automated tools to scrape, crawl, or overload the Site</li>
            <li>Use the Site in any way that violates applicable local, national, or international laws</li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          <p>
            All content on the Site — including text, graphics, logos, and design — is the
            property of EnigmaForge and is protected by applicable intellectual property laws. You
            may not reproduce, distribute, or create derivative works from any content on the Site
            without prior written permission.
          </p>
        </Section>

        <Section title="5. Contact Form and Communications">
          <p>
            By submitting a contact or meeting request form, you consent to EnigmaForge using the
            information you provide to respond to your inquiry and communicate with you about our
            services. You may opt out of further communication at any time by replying to any email
            from us with an unsubscribe request.
          </p>
        </Section>

        <Section title="6. Disclaimer of Warranties">
          <p>
            The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
            without warranties of any kind, either express or implied, including but not limited to
            warranties of merchantability, fitness for a particular purpose, or non-infringement.
            EnigmaForge does not warrant that the Site will be uninterrupted, error-free, or free
            of harmful components.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, EnigmaForge shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your
            use of, or inability to use, the Site or its content. Our total liability for any
            claim arising from these Terms shall not exceed the amount you paid to us, if any, in
            the twelve months preceding the claim.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            The Site may contain links to third-party websites. These links are provided for
            convenience only. EnigmaForge has no control over the content of those sites and
            accepts no responsibility for them or for any loss or damage that may arise from your
            use of them.
          </p>
        </Section>

        <Section title="9. Changes to These Terms">
          <p>
            We reserve the right to modify these Terms &amp; Conditions at any time. Changes will
            be posted on this page with an updated date. Your continued use of the Site after any
            changes constitutes acceptance of the new terms.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with applicable law. Any
            disputes arising under these Terms shall be subject to the exclusive jurisdiction of
            the courts in the jurisdiction in which EnigmaForge operates.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have any questions about these Terms &amp; Conditions, please contact us at:{" "}
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
          <Link href="/privacy" className="hover:text-slate-400">
            Privacy Policy
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
