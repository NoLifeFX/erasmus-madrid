import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import AdSenseInit from "@/components/AdSenseInit";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Erasmus Madrid — Guide complet pour étudiants français",
    template: "%s | Erasmus Madrid",
  },
  description:
    "Le guide indépendant des étudiants français en Erasmus à Madrid. SIM, banque sans NIE, assurance, logement et bons plans pour bien s'installer.",
  metadataBase: new URL("https://erasmus-madrid.vercel.app/"),
  verification: {
    google: "dn134I9q0b6lYNTfF9wpE1Y2GO109hI17uJa6KP0XVU",
  },
  openGraph: {
    siteName: "Erasmus Madrid",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7798901893667270"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink antialiased">
        <AdSenseInit />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S3KVTQ0Y2D"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S3KVTQ0Y2D');`}
        </Script>
      </body>
    </html>
  );
}
