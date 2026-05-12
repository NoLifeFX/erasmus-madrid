import AffiliateBox from "@/components/AffiliateBox";
import ComparisonTable from "@/components/ComparisonTable";

export default function SimContent() {
  return (
    <div className="article-content">
      <section id="pourquoi-sim-espagnole">
        <h2>Pourquoi prendre une SIM espagnole dès votre arrivée ?</h2>
        <p>
          Dès le premier jour à Madrid, vous allez en avoir besoin : pour trouver un appartement sur
          Idealista ou Fotocasa, donner votre numéro à un propriétaire, contacter votre université
          d&apos;accueil ou tout simplement vous repérer avec Google Maps. Et là, la mauvaise surprise :
          votre forfait français commence à puiser dans vos données roaming, souvent limitées à 15-25 Go
          par mois selon les opérateurs. Au-delà de ce plafond, les vitesses chutent à quelques dizaines de
          ko/s — inutilisable.
        </p>
        <p>
          La solution est simple : une carte SIM espagnole locale. Et c&apos;est une excellente nouvelle,
          car en Espagne, les telecoms sont <strong>bien moins chers qu&apos;en France</strong>. Pour 5 à
          15€ par mois, vous pouvez obtenir 10 à 20 Go de données à haute vitesse, des appels illimités en
          Espagne et même des minutes incluses vers la France. C&apos;est l&apos;un des meilleurs plans que
          vous ferez avant votre départ.
        </p>
        <p>
          Avoir un numéro espagnol vous crédibilise aussi auprès des interlocuteurs locaux. Les
          propriétaires préfèrent traiter avec un numéro local, les administrations espagnoles envoient
          leurs SMS de confirmation sur des numéros +34, et vos camarades Erasmus espagnols pourront vous
          appeler sans frais.
        </p>
      </section>

      <section id="top-4-sim">
        <h2>Les 4 meilleures SIM pour votre Erasmus à Madrid</h2>
        <p>
          Le marché espagnol des télécoms est concurrentiel et les prix sont régulièrement bradés.
          Voici notre analyse de terrain des quatre opérateurs qui correspondent le mieux aux besoins des
          étudiants Erasmus français.
        </p>

        <h3 id="yoigo">Yoigo — Notre coup de cœur pour les Erasmus</h3>
        <p>
          <strong>Yoigo</strong> est l&apos;opérateur qui offre le meilleur rapport qualité-prix pour les
          étudiants en Erasmus. Filiale du groupe suédois Tele2, il utilise le réseau Orange en itinérance
          nationale, ce qui lui garantit une couverture excellente dans toute l&apos;Espagne — y compris
          lorsque vous voyagez à Barcelone, Séville ou aux îles Baléares pendant les vacances.
        </p>
        <p>
          Son offre phare : le forfait à <strong>9€/mois</strong> avec 10 Go de données 4G/5G, appels
          et SMS illimités en Espagne, et des appels inclus vers les numéros fixes et mobiles en France
          et dans toute l&apos;Union européenne. La résiliation est libre et sans préavis — parfait pour
          un séjour Erasmus de durée variable. Vous pouvez activer votre SIM intégralement en ligne depuis
          le site de Yoigo, en 15 à 20 minutes, avec votre carte d&apos;identité française.
        </p>
        <p>
          Ce qui nous séduit particulièrement chez Yoigo : la transparence tarifaire totale (aucun frais
          caché, aucun surcoût surprise), un service client disponible en espagnol et en anglais, et la
          possibilité de commander depuis la France avant votre départ — la SIM arrive par courrier en 2-3
          jours.
        </p>
        <div className="tip-box">
          <strong>Astuce :</strong> Commandez votre SIM Yoigo depuis la France 5-7 jours avant votre
          départ. Vous pourrez l&apos;activer dès votre atterrissage à Barajas sans perdre de temps à
          chercher un opérateur.
        </div>
      </section>

      <AffiliateBox
        icon="⭐"
        badge="Notre recommandation N°1"
        provider="Yoigo"
        title="La meilleure SIM pour les étudiants Erasmus à Madrid"
        description="9€/mois · 10 Go 4G/5G · Appels illimités vers la France · Sans engagement · Commande en ligne possible depuis la France"
        ctaText="Obtenir ma SIM Yoigo"
        ctaHref="[LIEN_YOIGO]"
        savings="Meilleur rapport qualité-prix du marché espagnol"
      />

      <section>
        <h3 id="orange">Orange Espagne — La fiabilité premium</h3>
        <p>
          <strong>Orange Espagne</strong> est l&apos;opérateur historique, avec le réseau le plus étendu
          du pays. Si vous habitez dans un quartier excentré de Madrid (Vallecas, Hortaleza, Vicálvaro)
          ou si vous prévoyez de voyager régulièrement dans des zones rurales, Orange offre la couverture
          la plus fiable.
        </p>
        <p>
          Comptez environ <strong>15€/mois</strong> pour leur offre Prepago avec 15 Go et les appels
          illimités vers la France inclus. C&apos;est plus cher que Yoigo, mais les promotions sont
          fréquentes sur le site officiel, parfois jusqu&apos;à 50% de réduction le premier mois. Le
          service client est aussi disponible en français, ce qui peut s&apos;avérer utile en cas de
          problème technique.
        </p>
        <p>
          Inconvénient : l&apos;activation en boutique peut prendre plus de temps. Si vous choisissez
          Orange, optez pour les boutiques officielles (pas les revendeurs) pour bénéficier
          d&apos;une aide à la configuration.
        </p>

        <h3 id="lebara">Lebara Mobile — Le meilleur rapport budget</h3>
        <p>
          Si votre budget est serré, <strong>Lebara Mobile</strong> est votre allié. Cet opérateur
          virtuel (MVNO) utilise l&apos;infrastructure Vodafone et propose des forfaits dès{" "}
          <strong>5€/mois</strong> pour 5 Go. Lebara est historiquement spécialisé dans les appels
          internationaux — un atout pour les étudiants qui appellent régulièrement la France.
        </p>
        <p>
          L&apos;offre la plus populaire auprès des Erasmus : 8€/mois pour 10 Go, appels illimités en
          Espagne et 200 minutes vers plus de 20 pays dont la France. La couverture est très bonne à Madrid
          et dans les grandes villes espagnoles, légèrement moins performante en zone rurale.
        </p>
        <p>
          L&apos;application Lebara est moins intuitive que ses concurrentes et le service client peut être
          lent à répondre, mais pour un usage quotidien standard à Madrid, Lebara est parfaitement adapté.
        </p>

        <h3 id="lycamobile">Lycamobile — L&apos;option la moins chère</h3>
        <p>
          <strong>Lycamobile</strong> propose les tarifs les plus bas : dès <strong>3€/mois</strong> pour
          2 Go. Idéal si vous utilisez quasi-exclusivement le Wi-Fi (université, appartement, cafés) et
          avez besoin d&apos;une SIM uniquement pour les urgences ou les SMS de vérification.
        </p>
        <p>
          En revanche, les retours d&apos;expérience des étudiants sont partagés : la couverture est
          correcte mais inégale, et le service client est souvent signalé comme peu réactif. Pour un
          Erasmus de plusieurs mois, Lycamobile n&apos;est recommandable qu&apos;en option d&apos;urgence
          ou en complément d&apos;une autre SIM.
        </p>
      </section>

      <section id="comparatif">
        <h2>Tableau comparatif des cartes SIM pour Erasmus 2025</h2>
        <p>Résumé des 4 opérateurs pour prendre votre décision en un coup d&apos;œil :</p>
        <ComparisonTable
          headers={["Opérateur", "Prix/mois", "Données", "Appels France", "Couverture", "Sans engagement"]}
          rows={[
            {
              cells: ["Yoigo", "9€", "10 Go 4G/5G", "✓ Inclus", "Excellente", "✓ Oui"],
              recommended: true,
            },
            {
              cells: ["Orange", "15€", "15 Go 4G/5G", "✓ Inclus", "Excellente", "✓ Oui"],
            },
            {
              cells: ["Lebara", "8€", "10 Go 4G", "200 min/mois", "Bonne", "✓ Oui"],
            },
            {
              cells: ["Lycamobile", "3€", "2 Go 4G", "✗", "Correcte", "✓ Oui"],
            },
          ]}
          caption="Tarifs indicatifs mai 2025. Vérifiez sur les sites officiels pour les promotions en cours."
        />
      </section>

      <section id="ou-acheter">
        <h2>Où et comment acheter votre SIM en Espagne</h2>

        <h3>Commandez en ligne depuis la France (recommandé)</h3>
        <p>
          La majorité des opérateurs (Yoigo, Lebara, Orange) permettent de commander une SIM prépayée en
          ligne et de se la faire livrer directement à votre adresse française. Vous l&apos;activez dès
          votre arrivée à Madrid. C&apos;est la solution la plus pratique : pas de queue, pas de barrière
          de langue, et vous arrivez en Espagne avec votre numéro prêt à l&apos;emploi.
        </p>

        <h3>À l&apos;aéroport de Madrid-Barajas</h3>
        <p>
          Dès votre sortie d&apos;avion, des kiosques Orange et Vodafone sont présents dans les terminaux
          T1 et T4. Les tarifs sont légèrement moins avantageux qu&apos;en ligne, mais c&apos;est pratique
          pour une activation immédiate. Évitez les vendeurs itinérants (souvent des revendeurs non
          officiels) et optez pour les comptoirs de marque.
        </p>

        <h3>Dans les boutiques de Madrid</h3>
        <p>
          Madrid regorge de points de vente. Les opérateurs principaux (Orange, Movistar, Vodafone) ont
          des boutiques dans tous les centres commerciaux et rues commerçantes. Pour les MVNO comme Yoigo,
          Lebara ou Lycamobile, cherchez dans les grandes surfaces (Carrefour, El Corte Inglés) ou les
          magasins de téléphonie de Gran Vía et Callao.
        </p>
        <p>
          <strong>Documents à apporter :</strong> votre passeport ou carte d&apos;identité française suffit.
          Pas besoin de NIE, d&apos;adresse espagnole, ni d&apos;IBAN pour une SIM prépayée ou un forfait
          mensuel sans engagement.
        </p>
      </section>

      <section id="conseils">
        <h2>Conseils pratiques pour bien utiliser votre SIM espagnole</h2>
        <ul>
          <li>
            <strong>Téléphone débloqué :</strong> Vérifiez que votre smartphone est débloqué
            opérateur avant de partir. Si vous avez votre téléphone depuis moins de 12 mois avec
            SFR, Orange ou Bouygues, vous pouvez demander le déverrouillage gratuitement auprès de votre
            opérateur français.
          </li>
          <li>
            <strong>Dual SIM :</strong> La quasi-totalité des smartphones Android depuis 2020 et tous les
            iPhone depuis le 13 supportent la double SIM (physique + eSIM ou deux SIM physiques). Vous
            pouvez garder votre SIM française pour les urgences et utiliser la SIM espagnole au quotidien.
          </li>
          <li>
            <strong>Recharges automatiques :</strong> Paramétrez le renouvellement automatique de votre
            forfait mensuel pour éviter toute interruption de service. La plupart des opérateurs le
            font via prélèvement sur une carte bancaire française ou espagnole.
          </li>
          <li>
            <strong>Transférez WhatsApp :</strong> Dès que vous avez votre numéro espagnol, transférez
            votre compte WhatsApp dessus. Vos groupes Erasmus utilisent WhatsApp pour tout — logement,
            sorties, organisation des cours.
          </li>
          <li>
            <strong>Conservez votre numéro français :</strong> Ne résiliez pas votre abonnement
            français. Gardez-le en mode économie (passage sur une offre moins chère pendant votre
            séjour) pour pouvoir récupérer votre numéro à votre retour en France.
          </li>
        </ul>
      </section>
    </div>
  );
}
