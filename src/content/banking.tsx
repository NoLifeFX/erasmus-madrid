import AffiliateBox from "@/components/AffiliateBox";
import ComparisonTable from "@/components/ComparisonTable";

export default function BankingContent() {
  return (
    <div className="article-content">
      <section id="probleme-nie">
        <h2>Le problème du NIE pour les étudiants Erasmus</h2>
        <p>
          Le NIE (Número de Identificación de Extranjero) est le numéro d&apos;identification fiscal
          attribué aux étrangers résidant en Espagne. En théorie, les banques espagnoles traditionnelles
          comme BBVA, CaixaBank ou Banco Sabadell exigent un NIE pour ouvrir un compte courant complet.
          En pratique, obtenir son NIE prend souvent plusieurs semaines — voire plusieurs mois selon les
          files d&apos;attente à la préfecture — et c&apos;est la première galère administrative de tout
          étudiant Erasmus fraîchement débarqué à Madrid.
        </p>
        <p>
          Résultat : sans compte bancaire local, vous êtes coincés avec votre carte bancaire française,
          qui facture des frais de change sur chaque transaction en euros (oui, même dans la zone euro,
          certains établissements prélèvent des commissions) et qui peut poser problème pour les virements
          de bourse ou le paiement du loyer en Espagne.
        </p>
        <p>
          Heureusement, il existe des solutions concrètes et immédiates. Nous allons vous les présenter
          dans l&apos;ordre de ce que nous recommandons.
        </p>
      </section>

      <section id="neobanques">
        <h2>La solution : les néobanques européennes</h2>
        <p>
          Les néobanques comme Revolut, N26 et Wise ont révolutionné la finance pour les jeunes en
          mobilité. Elles proposent des comptes bancaires ouverts entièrement en ligne, en quelques
          minutes, avec simplement une pièce d&apos;identité. <strong>Aucun NIE requis, aucune adresse
          espagnole nécessaire.</strong> Vous pouvez ouvrir votre compte depuis votre canapé en France
          avant même de partir, et recevoir votre carte physique à votre adresse française.
        </p>
        <p>
          Ces banques sont pleinement légales et réglementées par des autorités financières européennes.
          Elles offrent des IBAN valides pour les virements SEPA, ce qui les rend compatibles avec les
          paiements de bourse Erasmus+.
        </p>

        <h3 id="revolut">Revolut — L&apos;incontournable des étudiants en mobilité</h3>
        <p>
          <strong>Revolut</strong> est la néobanque la plus populaire auprès des étudiants Erasmus, et
          ce n&apos;est pas un hasard. Fondée en 2015 à Londres et agréée comme banque en Europe depuis
          2021, elle compte plus de 50 millions de clients dans le monde. Son offre gratuite (plan
          Standard) est particulièrement généreuse :
        </p>
        <ul>
          <li>Compte en euros avec IBAN européen (LT pour la Lituanie)</li>
          <li>Carte bancaire Visa gratuite (physique + virtuelle)</li>
          <li>Change de devises au taux interbancaire jusqu&apos;à 1 000€/mois sans frais</li>
          <li>Retraits gratuits aux distributeurs jusqu&apos;à 200€/mois</li>
          <li>Envoi d&apos;argent gratuit vers d&apos;autres utilisateurs Revolut (instantané)</li>
          <li>Notifications en temps réel pour chaque transaction</li>
          <li>Outils de gestion du budget intégrés</li>
        </ul>
        <p>
          Pour les étudiants Erasmus qui voyagent dans plusieurs pays pendant leur séjour, Revolut est
          imbattable : vous pouvez détenir et convertir plus de 30 devises différentes, payer partout
          dans le monde sans frais, et recevoir votre bourse Erasmus+ sur votre IBAN Revolut.
        </p>
        <div className="tip-box">
          <strong>Bon à savoir :</strong> Le plan Revolut Ultra étudiant (moins cher pour les moins de
          29 ans) inclut un cashback de 0,1% sur toutes vos dépenses et des retraits ATM illimités. À
          partir d&apos;un usage régulier, il s&apos;autofinance rapidement.
        </div>
      </section>

      <AffiliateBox
        icon="💳"
        badge="Recommandé pour les Erasmus"
        provider="Revolut"
        title="Ouvrez votre compte Revolut gratuitement en 10 minutes"
        description="Sans NIE · Sans frais d'ouverture · IBAN européen · Carte gratuite · Retraits jusqu'à 200€/mois sans frais · Compatible bourse Erasmus+"
        ctaText="Ouvrir mon compte Revolut"
        ctaHref="[LIEN_REVOLUT]"
        savings="Compte 100% gratuit, carte livrée en France"
      />

      <section>
        <h3 id="n26">N26 — La banque allemande au design épuré</h3>
        <p>
          <strong>N26</strong> est une banque en ligne allemande agréée par la BaFin (l&apos;équivalent
          de l&apos;AMF en Allemagne), avec plus de 8 millions de clients en Europe. Son compte standard
          est gratuit et s&apos;ouvre en ligne en moins de 20 minutes avec votre pièce d&apos;identité
          française. Vous obtenez un IBAN allemand (DE...) valide pour tous les virements SEPA.
        </p>
        <p>
          Ce qui distingue N26 de Revolut, c&apos;est sa simplicité : une application ultra-épurée, un
          compte courant classique avec toutes les fonctionnalités de base, et une carte Mastercard
          gratuite. Les retraits en distributeur sont gratuits sans limite, une différence notable par
          rapport à Revolut. Les dépôts sont protégés par le Fonds de Garantie des Dépôts allemand
          jusqu&apos;à 100 000€.
        </p>
        <p>
          Inconvénient : N26 est moins performant que Revolut pour les conversions de devises (taux moins
          avantageux) et ne dispose pas d&apos;autant de fonctionnalités de voyage. Pour un usage
          quotidien en zone euro, c&apos;est néanmoins une excellente option.
        </p>
      </section>

      <AffiliateBox
        icon="🏦"
        badge="Top banque en ligne"
        provider="N26"
        title="Ouvrez votre compte N26 en 5 minutes, sans NIE"
        description="Sans NIE · IBAN allemand · Carte Mastercard gratuite · Retraits ATM sans frais · Dépôts garantis jusqu'à 100 000€"
        ctaText="Ouvrir mon compte N26"
        ctaHref="[LIEN_N26]"
        savings="Aucun frais mensuel sur le compte Standard"
      />

      <section>
        <h3 id="wise">Wise (ex-TransferWise) — Pour les virements internationaux</h3>
        <p>
          <strong>Wise</strong> n&apos;est pas à proprement parler une banque, mais un compte de paiement
          multi-devises. Si vous avez besoin d&apos;envoyer de l&apos;argent entre votre compte français
          et votre compte espagnol, ou si vous recevez des fonds en dehors de la zone euro, Wise offre
          les meilleurs taux de change du marché, sans commission cachée.
        </p>
        <p>
          Pour les Erasmus, Wise est surtout utile comme complément : vous pouvez y ouvrir un compte
          multi-devises (EUR, GBP, USD, etc.) et envoyer ou recevoir de l&apos;argent dans plus de 50
          devises au taux interbancaire réel, avec une commission de transfert transparente et très
          compétitive (souvent inférieure à 1%).
        </p>

        <h3 id="banques-espagnoles">Les banques espagnoles traditionnelles</h3>
        <p>
          Si vous avez obtenu votre NIE ou si vous restez plus de 6 mois en Espagne, ouvrir un compte
          dans une banque espagnole peut être avantageux pour certaines démarches administratives (paiement
          de certains loyers, abonnements locaux, etc.).
        </p>
        <h3 id="santander">Santander — Le compte étudiant le plus accessible</h3>
        <p>
          <strong>Banco Santander</strong> propose une <em>Cuenta Universitaria</em> (compte universitaire)
          accessible aux étudiants internationaux, sans frais de tenue de compte, sous condition de présenter
          votre attestation d&apos;inscription universitaire. Dans certaines agences, un passeport européen
          suffit sans NIE, notamment pour les étudiants Erasmus avec attestation de l&apos;université.
        </p>
        <p>
          L&apos;avantage d&apos;un compte Santander : vous avez un IBAN espagnol (ES...) ce que
          certains propriétaires exigent pour les paiements de loyer automatiques. Le réseau
          d&apos;agences et de DAB est très dense à Madrid.
        </p>
      </section>

      <section id="comparatif-banques">
        <h2>Tableau comparatif : quelle banque choisir pour votre Erasmus ?</h2>
        <ComparisonTable
          headers={["Banque", "NIE requis", "Frais/mois", "IBAN", "Temps d'ouverture", "Carte incluse"]}
          rows={[
            {
              cells: ["Revolut", "Non", "0€ (gratuit)", "Lituanien (LT)", "10-20 min", "✓ Visa"],
              recommended: true,
            },
            {
              cells: ["N26", "Non", "0€ (gratuit)", "Allemand (DE)", "15-20 min", "✓ Mastercard"],
            },
            {
              cells: ["Wise", "Non", "0€ (ouverture)", "Multi-devises", "10 min", "✓ Visa (payante)"],
            },
            {
              cells: ["Santander ES", "Selon agence", "0€ (étudiant)", "Espagnol (ES)", "1-3 jours", "✓ Visa"],
            },
          ]}
          caption="Comparatif indicatif. Vérifiez les conditions actuelles sur les sites officiels."
        />
      </section>

      <section id="nos-recommandations">
        <h2>Nos recommandations selon votre profil</h2>
        <p>
          Il n&apos;existe pas de solution universelle. Voici nos recommandations selon votre situation :
        </p>
        <ul>
          <li>
            <strong>Vous partez pour moins de 6 mois :</strong> Revolut + N26 en combinaison. Revolut
            pour les voyages et les gros achats (meilleur taux de change), N26 comme compte principal
            pour le quotidien et les retraits ATM illimités.
          </li>
          <li>
            <strong>Vous restez plus de 6 mois :</strong> Ouvrez un compte Santander en plus pour avoir
            un IBAN espagnol. Certains propriétaires et certaines administrations l&apos;exigent.
          </li>
          <li>
            <strong>Votre bourse Erasmus est importante :</strong> Utilisez N26 ou Revolut pour la
            recevoir (SEPA compatible). Sage ouvrir aussi un compte Wise si vous devez envoyer de
            l&apos;argent vers la France.
          </li>
          <li>
            <strong>Budget serré :</strong> Revolut Standard est entièrement gratuit et couvre tous vos
            besoins. Ne payez pas pour une offre premium sauf si vous voyagez très fréquemment.
          </li>
        </ul>
      </section>

      <section id="etapes-ouverture">
        <h2>Ouvrir votre compte Revolut étape par étape</h2>
        <p>
          Voici la procédure complète pour ouvrir votre compte Revolut, la solution que nous
          recommandons en premier :
        </p>
        <ol>
          <li>
            <strong>Téléchargez l&apos;application Revolut</strong> sur l&apos;App Store ou Google
            Play. Elle est disponible en français.
          </li>
          <li>
            <strong>Créez votre compte</strong> en renseignant votre numéro de téléphone français, votre
            prénom, nom et date de naissance. Choisissez le plan Standard (gratuit).
          </li>
          <li>
            <strong>Vérifiez votre identité</strong> : photographiez votre carte d&apos;identité
            française (recto-verso) ou votre passeport. Prenez ensuite un selfie pour la reconnaissance
            faciale. La vérification est généralement validée en moins de 24h.
          </li>
          <li>
            <strong>Renseignez votre adresse</strong> : votre adresse française suffit à cette étape.
            Vous pourrez mettre à jour votre adresse espagnole ultérieurement.
          </li>
          <li>
            <strong>Activez votre carte</strong> : une fois validé, vous pouvez utiliser la carte
            virtuelle immédiatement. Commandez la carte physique (livraison en 5-7 jours).
          </li>
          <li>
            <strong>Alimentez votre compte</strong> : faites un virement depuis votre compte bancaire
            français vers votre IBAN Revolut pour créditer votre compte.
          </li>
        </ol>
        <div className="tip-box">
          <strong>Conseil :</strong> Ouvrez votre compte Revolut et N26 au moins deux semaines avant
          votre départ pour recevoir vos cartes physiques en France. Une fois à Madrid, vous
          n&apos;aurez plus de délai d&apos;attente.
        </div>
      </section>
    </div>
  );
}
