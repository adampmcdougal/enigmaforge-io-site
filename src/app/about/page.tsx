"use client";

import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PillarCard from "./components/PillarCard";
import CapabilityTag from "./components/CapabilityTag";

const HEADLINE =
  "The intelligence behind the world's largest manufacturers, finally built for the rest of them.";
const HEADLINE_WORDS = HEADLINE.split(" ");

const PILLARS = [
  {
    title: "Access over exclusivity",
    body: "Enterprise capability shouldn't be gated by company size. We remove that barrier, delivering the same tools and intelligence that Fortune 100 procurement and operations teams rely on, at a price structure built for the real world.",
  },
  {
    title: "Experience, not theory",
    body: "Our team has built these systems at scale, inside the organizations that defined the standard. We bring proven patterns to every engagement, not frameworks pulled from a slide deck.",
  },
  {
    title: "Actionable by design",
    body: "Insight without action is just overhead. Every tool and engagement we deliver is built to produce results you can act on immediately, not a report that sits in a folder.",
  },
  {
    title: "Built to last",
    body: "We don't hand off and disappear. We build infrastructure that grows with your business, with documentation, training, and continued support as part of the engagement, not an add-on.",
  },
];

const CAPABILITIES = [
  "Procurement Intelligence",
  "Spend Analytics",
  "Supplier Scorecarding",
  "Data Engineering",
  "ERP Integration",
  "MCP Server Development",
  "Databricks / Lakehouse Architecture",
  "Snowflake Implementation",
  "Process Automation",
  "Strategic Sourcing Advisory",
];

const SECTION_PAD = "py-[clamp(80px,10vw,120px)]";
const CONTAINER = "max-w-[1100px] mx-auto px-6";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 text-cyan-400">
      {children}
    </p>
  );
}

function HeroHeadline() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseClass =
    "font-bold leading-[1.08] tracking-[-0.03em] mb-6 text-white";
  const baseStyle = { fontSize: "clamp(40px, 6vw, 68px)" };

  if (!mounted || prefersReduced) {
    return (
      <h1 className={baseClass} style={baseStyle}>
        {HEADLINE}
      </h1>
    );
  }

  return (
    <h1 className={baseClass} style={baseStyle} aria-label={HEADLINE}>
      <AnimatePresence>
        {HEADLINE_WORDS.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
              delay: i * 0.06,
            }}
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </h1>
  );
}

export default function AboutPage() {
  const prefersReduced = useReducedMotion();
  const subDelay = HEADLINE_WORDS.length * 0.06 + 0.1;

  return (
    <>
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: "rgba(2,8,23,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(6,182,212,0.1)",
        }}
        aria-label="Site"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="Enigma Forge mark"
            width={32}
            height={32}
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.18em] text-white uppercase">
              Enigma
            </span>
            <span
              className="text-[10px] font-light tracking-[0.45em] uppercase"
              style={{ color: "#06b6d4" }}
            >
              Forge
            </span>
          </div>
        </Link>
        <Link
          href="mailto:hello@enigmaforge.io"
          className="text-sm font-medium transition-colors hover:text-cyan-400"
          style={{ color: "#64748b" }}
        >
          Work With Us
        </Link>
      </nav>

      <main style={{ backgroundColor: "#020817" }}>
        {/* ── 1. Hero ───────────────────────────────────────────── */}
        <section className={`${SECTION_PAD} text-center`}>
          <div className={CONTAINER}>
            <div className="max-w-[860px] mx-auto">
              <Eyebrow>About Enigma Forge</Eyebrow>
              <HeroHeadline />
              <motion.p
                className="text-[17px] leading-[1.7] max-w-[620px] mx-auto"
                style={{ color: "#64748b" }}
                initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReduced ? 0 : subDelay,
                }}
              >
                We&apos;ve spent years building enterprise data systems from the inside.
                Now we&apos;re making them accessible to every manufacturer who deserves
                them.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── 2. Mission ────────────────────────────────────────── */}
        <section
          className={SECTION_PAD}
          style={{ borderTop: "1px solid rgba(6,182,212,0.1)" }}
        >
          <div className={CONTAINER}>
            <div className="max-w-[760px] mx-auto">
              <Eyebrow>Our Mission</Eyebrow>
              <div className="flex flex-col gap-8">
                <p className="text-[17px] leading-[1.7]" style={{ color: "#64748b" }}>
                  Enigma Forge exists to level the playing field. For too long, the data
                  platforms, procurement intelligence, and strategic tools that drive
                  operational advantage have belonged exclusively to the Fortune 100. Not
                  because smaller manufacturers lack the ambition to use them. Because no
                  one made them accessible.
                </p>
                <p className="text-[17px] leading-[1.7]" style={{ color: "#64748b" }}>
                  We&apos;re changing that. Our team has spent years building these
                  systems from the inside, at the largest companies in the world. We know
                  exactly what works, what it costs, and what it takes to make it real.
                  Enigma Forge brings that knowledge to manufacturers who are ready to
                  compete at a higher level, without the enterprise budget or the
                  enterprise timeline.
                </p>
                <p
                  className="text-[19px] leading-[1.6] font-semibold text-cyan-400"
                >
                  The future of manufacturing belongs to the operators who move fastest
                  with the best information. We&apos;re here to make sure that&apos;s you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Ethos Pillars ──────────────────────────────────── */}
        <section
          className={SECTION_PAD}
          style={{
            borderTop: "1px solid rgba(6,182,212,0.1)",
            backgroundColor: "#0a1628",
          }}
        >
          <div className={CONTAINER}>
            <Eyebrow>What We Stand For</Eyebrow>
            <h2
              className="font-bold tracking-[-0.025em] mb-12 text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Four principles behind every engagement.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PILLARS.map((p) => (
                <PillarCard key={p.title} title={p.title} body={p.body} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. The Gap We Close ───────────────────────────────── */}
        <section
          className={SECTION_PAD}
          style={{ borderTop: "1px solid rgba(6,182,212,0.1)" }}
        >
          <div className={CONTAINER}>
            <Eyebrow>The Problem We Solve</Eyebrow>
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
              <div className="md:w-[340px] shrink-0">
                <p
                  className="font-bold tracking-[-0.03em] leading-[1.05] text-white"
                  style={{ fontSize: "clamp(42px, 6vw, 64px)" }}
                >
                  Fortune 100
                  <br />
                  tools.
                </p>
                <p className="mt-4 text-[15px] leading-[1.6]" style={{ color: "#64748b" }}>
                  Now available to the manufacturers who actually build things.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[17px] leading-[1.7]" style={{ color: "#64748b" }}>
                  The gap between large enterprises and everyday manufacturers isn&apos;t
                  talent or ambition. It&apos;s access.
                </p>
                <p className="text-[17px] leading-[1.7]" style={{ color: "#64748b" }}>
                  Access to the right data platforms. The right analytics. The right
                  expertise to put it all together and make it work inside your operation.
                </p>
                <p className="text-[17px] leading-[1.7]" style={{ color: "#64748b" }}>
                  That gap has real consequences: slower decisions, missed savings, supply
                  chains you can&apos;t see clearly. Enigma Forge closes it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Capabilities ───────────────────────────────────── */}
        <section
          className={SECTION_PAD}
          style={{
            borderTop: "1px solid rgba(6,182,212,0.1)",
            backgroundColor: "#0a1628",
          }}
        >
          <div className={CONTAINER}>
            <Eyebrow>Our Capabilities</Eyebrow>
            <h2
              className="font-bold tracking-[-0.025em] mb-10 text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Built on the same stack the big players use.
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0">
              {CAPABILITIES.map((cap) => (
                <CapabilityTag key={cap} label={cap} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Closing ────────────────────────────────────────── */}
        <section
          className={`${SECTION_PAD} text-center relative overflow-hidden`}
          style={{
            borderTop: "1px solid rgba(6,182,212,0.1)",
            backgroundColor: "#020817",
          }}
        >
          <div className="radial-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className={`${CONTAINER} relative`}>
            <div className="max-w-[720px] mx-auto">
              <h2
                className="font-bold tracking-[-0.03em] leading-[1.1] mb-6 text-white"
                style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
              >
                We forge the tools. We forge the path.
                <br />
                You build what&apos;s next.
              </h2>
              <p
                className="text-[17px] leading-[1.7] mb-10"
                style={{ color: "#64748b" }}
              >
                Enigma Forge is the data and intelligence partner built for manufacturers
                who are ready to operate at the next level.
              </p>
              <a
                href="mailto:hello@enigmaforge.io"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-[15px] font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                style={{ backgroundColor: "#06b6d4", color: "#020817" }}
              >
                Work With Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer
          className="flex items-center justify-center gap-3 py-6 text-xs"
          style={{
            borderTop: "1px solid rgba(6,182,212,0.1)",
            color: "#64748b",
          }}
        >
          <span>© {new Date().getFullYear()} EnigmaForge</span>
          <span className="h-3 w-px bg-slate-700" />
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          <span className="h-3 w-px bg-slate-700" />
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            Terms &amp; Conditions
          </Link>
        </footer>
      </main>
    </>
  );
}
