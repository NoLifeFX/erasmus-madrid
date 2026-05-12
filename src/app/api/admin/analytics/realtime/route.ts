import { NextResponse } from "next/server";

// Returns mock real-time visitor data (replace with real Vercel Analytics API call in production)
export async function GET() {
  const visitors = Math.floor(Math.random() * 4) + 1; // 1-4

  const pages = [
    { page: "/articles/meilleure-carte-sim-espagne-erasmus", label: "SIM Espagne" },
    { page: "/articles/compte-bancaire-espagne-sans-nie", label: "Compte bancaire" },
    { page: "/articles/assurance-erasmus-espagne", label: "Assurance" },
    { page: "/", label: "Accueil" },
    { page: "/articles", label: "Articles" },
  ];

  // Randomly assign visitors to pages
  const activePagesCount = Math.min(visitors, pages.length);
  const activePages = pages.slice(0, activePagesCount).map((p, i) => ({
    ...p,
    visitors: i === 0 ? Math.max(1, Math.floor(visitors / 2)) : 1,
  }));

  return NextResponse.json({ visitors, activePages });
}
