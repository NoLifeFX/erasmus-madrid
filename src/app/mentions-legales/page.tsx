import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Erasmus Madrid : éditeur, hébergeur, politique d'affiliation, RGPD et confidentialité.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">
          Mentions légales
        </h1>
        <p className="text-muted mb-10">Dernière mise à jour : mai 2025</p>

        <Section id="editeur" title="1. Éditeur du site">
          <p>
            Le site <strong>Erasmus Madrid</strong> (erasmus-madrid.fr) est un site d&apos;information
            indépendant édité à titre personnel. Il n&apos;est affilié à aucune université, aucun
            programme officiel Erasmus+ ou institution gouvernementale.
          </p>
          <p>
            <strong>Directeur de la publication :</strong> Site édité par un particulier.<br />
            <strong>Contact :</strong> contact@erasmus-madrid.fr
          </p>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701,
            San Francisco, California 94104, États-Unis.
          </p>
        </Section>

        <Section id="affiliation" title="2. Politique d'affiliation et transparence">
          <p>
            <strong>Ce site contient des liens affiliés.</strong> Cela signifie que lorsque vous
            cliquez sur certains liens et effectuez un achat ou une souscription, nous pouvons
            recevoir une commission de la part du prestataire concerné. Cette commission est versée
            par le prestataire et ne constitue <strong>aucun frais supplémentaire pour vous</strong> —
            le prix que vous payez reste le même que vous passiez par notre lien ou non.
          </p>
          <p>
            Les liens affiliés sont clairement identifiés dans nos articles par la mention
            &quot;Lien affilié&quot; ou dans les encadrés &quot;Notre bon plan&quot;. Une bannière
            d&apos;information est affichée en haut de chaque article contenant des liens affiliés.
          </p>
          <p>
            <strong>Notre engagement :</strong> Nous ne recommandons que des services que nous
            considérons comme genuinement utiles pour les étudiants Erasmus. L&apos;existence
            d&apos;un programme d&apos;affiliation n&apos;influence pas notre jugement éditorial.
            Si un service affilié n&apos;est pas le meilleur de sa catégorie, nous le disons
            clairement. Conformément à l&apos;article L.121-2 du Code de la Consommation, cette
            relation commerciale est divulguée de manière transparente.
          </p>
          <p>
            Partenaires affiliés actuels (liste non exhaustive) :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li>Opérateurs téléphoniques (Yoigo, Lebara, Orange Espagne)</li>
            <li>Néobanques et services financiers (Revolut, N26, Wise)</li>
            <li>Assurances voyages et expatriation (Chapka, AVA International)</li>
          </ul>
        </Section>

        <Section id="rgpd" title="3. Protection des données personnelles (RGPD)">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE
            2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez
            des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la limitation du traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : contact@erasmus-madrid.fr
          </p>
          <p>
            <strong>Données collectées :</strong> Si vous vous inscrivez à notre newsletter, nous
            collectons votre adresse email dans le seul but de vous envoyer notre newsletter. Nous
            ne vendons ni ne partageons ces données avec des tiers. Vous pouvez vous désabonner à
            tout moment via le lien présent dans chaque email.
          </p>
          <p>
            <strong>Hébergement :</strong> Les données de navigation sont traitées par Vercel Inc.
            (hébergeur) dont la politique de confidentialité est disponible sur vercel.com/legal/privacy-policy.
          </p>
        </Section>

        <Section id="cookies" title="4. Cookies et traceurs">
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies
            ne collectent pas d&apos;informations personnelles et ne sont pas utilisés à des fins
            publicitaires ou de tracking comportemental.
          </p>
          <p>
            Les liens affiliés présents sur ce site peuvent rediriger vers des sites tiers qui
            peuvent déposer leurs propres cookies. Nous vous invitons à consulter les politiques de
            confidentialité de ces sites.
          </p>
        </Section>

        <Section id="propriete-intellectuelle" title="5. Propriété intellectuelle">
          <p>
            L&apos;ensemble du contenu éditorial de ce site (textes, comparatifs, guides) est protégé
            par le droit d&apos;auteur et appartient à l&apos;éditeur du site. Toute reproduction,
            même partielle, sans autorisation expresse est interdite.
          </p>
          <p>
            Les marques citées dans nos articles (Revolut, N26, Yoigo, Chapka, etc.) sont la
            propriété de leurs détenteurs respectifs. Leur mention dans nos articles n&apos;implique
            aucune association officielle ou partenariat exclusif avec ces entreprises.
          </p>
        </Section>

        <Section id="responsabilite" title="6. Limitation de responsabilité">
          <p>
            Les informations publiées sur ce site sont fournies à titre informatif uniquement. Bien
            que nous nous efforcions de maintenir les informations à jour et exactes, les tarifs,
            conditions et offres présentés dans nos comparatifs peuvent évoluer.
          </p>
          <p>
            Erasmus Madrid ne peut être tenu responsable des décisions prises sur la base des
            informations présentes sur ce site. Nous vous recommandons de vérifier les conditions
            actuelles directement sur les sites officiels des prestataires avant toute souscription.
          </p>
          <p>
            <strong>Ce site n&apos;est pas affilié à la Commission Européenne ni au programme
            Erasmus+.</strong> Pour les informations officielles sur le programme Erasmus+,
            consultez le site officiel de l&apos;Agence Erasmus+ France.
          </p>
        </Section>

        <Section id="contact" title="7. Contact">
          <p>
            Pour toute question concernant ces mentions légales, nos contenus ou notre politique
            d&apos;affiliation, contactez-nous à :{" "}
            <a href="mailto:contact@erasmus-madrid.fr" className="text-brand underline">
              contact@erasmus-madrid.fr
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10">
      <h2 className="font-bold text-xl text-ink mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
