import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/theme-provider";
import StickyFooter from "@/components/common/footer";
import { AppLayout } from "@/components/common/app-layout";

const instrumentSans = Instrument_Sans({ 
  variable: "--font-instrument-sans", 
  subsets: ["latin"],
  display: "swap"
});

const instrumentSerif = Instrument_Serif({ 
  variable: "--font-instrument-serif", 
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Helixque",
  description:
    "Professional networking for builders, learners, and mentors. Match instantly by skills, industry, and language. Learn, mentor, and collaborate through text or video without the awkwardness.",
  keywords: [
    "professional networking",
    "skill matching",
    "mentoring",
    "mock interviews",
    "career growth",
    "builders",
    "learners",
    "collaboration",
  ],
  authors: [{ name: "Helixque Team" }],
  openGraph: {
    title: "Helixque - Professional Networking Platform",
    description:
      "Professional networking for builders, learners, and mentors. Match instantly by skills, industry, and language through our platform.",
    type: "website",
    siteName: "Helixque",
    url: "https://helixque.com",
    images: [
      {
        url: "/Logo (2).png",
        width: 1200,
        height: 630,
        alt: "Helixque - Professional Networking Platform",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@helixque",
    creator: "@helixque",
    title: "Helixque - Professional Networking Platform",
    description:
      "Professional networking for builders, learners, and mentors. Match instantly by skills, industry, and language through our platform.",
    images: {
      url: "/Logo (2).png",
      alt: "Helixque - Professional Networking Platform",
    },
  },
  robots: "index, follow",
  alternates: { canonical: "https://helixque.com" },

  // ✅ Favicon setup using SVG + PNG (no .ico)
  icons: {
    // Modern browsers will use the SVG; older/strict ones will take PNGs
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    // iOS home screen — must be PNG
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    // Safari pinned tab (monochrome) — SVG mask is optional but nice to have
    other: [
      { rel: "mask-icon", url: "/logo.svg", color: "#0b0b0b" }
    ],
  },

  // Android home screen support
  manifest: "/site.webmanifest",

  // Browser UI color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AppLayout>{children}</AppLayout>
          <StickyFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
