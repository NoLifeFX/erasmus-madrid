import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://erasmus-madrid.fr"),
  openGraph: {
    siteName: "Erasmus Madrid",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
    // Ajoute cette ligne ↓
    verification: {
      google: 'dn134I9q0b6lYNTfF9wpE1Y2GO109hI17uJa6KP0XVU',
  
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full`}>
      <meta name="google-site-verification" content="dn134I9q0b6lYNTfF9wpE1Y2GO109hI17uJa6KP0XVU" />
      <body className="min-h-full flex flex-col font-sans text-ink antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

