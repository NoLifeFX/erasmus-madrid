import Link from "next/link";
import TelegramCTA from "@/components/TelegramCTA";

const guideLinks = [
  { href: "/articles/meilleure-carte-sim-espagne-erasmus", label: "Carte SIM en Espagne" },
  { href: "/articles/compte-bancaire-espagne-sans-nie", label: "Compte bancaire sans NIE" },
  { href: "/articles/assurance-erasmus-espagne", label: "Assurance Erasmus" },
  { href: "/articles?cat=logement", label: "Logement à Madrid" },
  { href: "/articles?cat=bons-plans", label: "Bons plans Madrid" },
  { href: "/articles?cat=quartiers", label: "Quartiers de Madrid" },
];

const infoLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/mentions-legales#affiliation", label: "Politique d'affiliation" },
  { href: "/mentions-legales#rgpd", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">🇪🇸</span>
              <span className="font-bold text-lg">Erasmus Madrid</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Le guide indépendant des étudiants français en Erasmus à Madrid.
              Conseils pratiques, comparatifs honnêtes et bons plans vérifiés.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-4">
              Nos guides
            </h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-4">
              Informations
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Telegram */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-gray-400 mb-4">
              Communauté
            </h3>
            <TelegramCTA variant="inline" />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Erasmus Madrid — Site indépendant, non affilié à une université.
          </p>
          <p className="text-xs text-gray-500">
            Certains liens sont affiliés. Commission sans frais pour vous.{" "}
            <Link href="/mentions-legales#affiliation" className="underline hover:text-gray-300 transition-colors">
              En savoir plus
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
