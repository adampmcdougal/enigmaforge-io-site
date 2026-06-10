import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-[#020817]" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-40" />
      <div className="radial-glow absolute inset-0 -z-10" />

      {/* Logo */}
      <div className="animate-fade-up mb-10">
        <Image
          src="/logo.png"
          alt="EnigmaForge"
          width={220}
          height={220}
          priority
          className="mx-auto"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      {/* Badge */}
      <div className="animate-fade-up-1 mb-8">
        <span className="glow-border inline-flex items-center gap-2 rounded-full bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Coming Soon
        </span>
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up-2 mb-5 max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
        Untangling Complexity.{" "}
        <span className="text-gradient">Forging the Future.</span>
      </h1>

      {/* Subtext */}
      <p className="animate-fade-up-3 mb-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
        Data and supply chain technology and consulting, built for businesses
        that demand precision, clarity, and competitive edge.
      </p>

      {/* CTA label */}
      <p className="animate-fade-up-3 mb-8 text-sm font-medium text-slate-300">
        Ready to get started? Request a meeting below.
      </p>

      {/* Meeting request form */}
      <div className="animate-fade-up-4 w-full max-w-md">
        <WaitlistForm />
      </div>

      {/* Pillars */}
      <div className="animate-fade-up-4 mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
        <span>Data Engineering</span>
        <span className="hidden h-3 w-px bg-slate-600 sm:block" />
        <span>Supply Chain Strategy</span>
        <span className="hidden h-3 w-px bg-slate-600 sm:block" />
        <span>Technology Consulting</span>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 flex items-center gap-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} EnigmaForge</span>
        <span className="h-3 w-px bg-slate-700" />
        <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
        <span className="h-3 w-px bg-slate-700" />
        <Link href="/terms" className="hover:text-slate-300">Terms &amp; Conditions</Link>
      </footer>
    </main>
  );
}
