import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://raden.ni"),
  title: {
    default: "RADEN.NI — Technology Laboratory for Modern Businesses",
    template: "%s | RADEN.NI",
  },
  description:
    "RADEN.NI is an applied technology laboratory engineering practical software products for modern businesses across commerce monitoring, analytics, workflow automation, and AI.",
  keywords: [
    "RADEN.NI",
    "Raden Nitenin",
    "e-commerce monitoring",
    "business analytics",
    "workflow automation",
    "applied AI",
    "SaaS",
    "technology laboratory",
    "Blibli monitoring",
    "Nico Revaldo Putra",
  ],
  authors: [{ name: "Nico Revaldo Putra E.A, S.Kom", url: "https://raden.ni" }],
  creator: "Nico Revaldo Putra E.A, S.Kom",
  publisher: "RADEN.NI Technology Laboratory",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RADEN.NI — Technology Laboratory for Modern Businesses",
    description:
      "RADEN.NI is an applied technology laboratory engineering practical software products for modern businesses across commerce monitoring, analytics, workflow automation, and AI.",
    url: "https://raden.ni",
    siteName: "RADEN.NI Technology Laboratory",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "RADEN.NI Monogram Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RADEN.NI — Technology Laboratory for Modern Businesses",
    description:
      "RADEN.NI is an applied technology laboratory engineering practical software products for modern businesses across commerce monitoring, analytics, workflow automation, and AI.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://raden.ni/#organization",
      name: "RADEN.NI",
      alternateName: "RADEN.NI Technology Laboratory",
      url: "https://raden.ni",
      logo: "https://raden.ni/logo.png",
      founder: {
        "@type": "Person",
        name: "Nico Revaldo Putra E.A, S.Kom",
        jobTitle: "Lab Author & CO Manager",
      },
      description:
        "Applied technology laboratory engineering practical software products for modern businesses across commerce monitoring, analytics, workflow automation, and AI.",
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://raden.ni/#nitenin",
      name: "Raden Nitenin",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web-based",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
      description:
        "Continuous e-commerce surveillance and storefront intelligence platform for marketplace operators.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased bg-white text-[#0D0E12]`}
      >
        {children}
      </body>
    </html>
  );
}
