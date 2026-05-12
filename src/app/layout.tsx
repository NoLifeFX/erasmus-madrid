import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Erasmus Madrid — Guide pour étudiants français",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://erasmus-madrid.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans text-ink antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
