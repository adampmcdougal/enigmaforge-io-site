import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnigmaForge | Coming Soon",
  description:
    "Data and supply chain technology and consulting. Untangling complexity, forging the future. Launching soon at enigmaforge.io.",
  metadataBase: new URL("https://enigmaforge.io"),
  openGraph: {
    title: "EnigmaForge | Coming Soon",
    description:
      "Data and supply chain technology and consulting. Launching soon.",
    url: "https://enigmaforge.io",
    siteName: "EnigmaForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnigmaForge | Coming Soon",
    description:
      "Data and supply chain technology and consulting. Launching soon.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
