export type FaqCategory =
  | 'avant-depart'
  | 'logement'
  | 'admin'
  | 'vie-quotidienne'
  | 'transport'
  | 'sorties'
  | 'urgences'

export interface FaqItem {
  id: string
  question: string
  reponse: string
  categorie: FaqCategory
  popularite: 1 | 2 | 3 | 4 | 5
  lien_article?: string
}

export const categoryLabels: Record<FaqCategory, string> = {
  'avant-depart': 'Avant le départ',
  logement: 'Logement',
  admin: 'Admin & Paperasse',
  'vie-quotidienne': 'Vie quotidienne',
  transport: 'Transport',
  sorties: 'Sorties & Culture',
  urgences: 'Urgences',
}

export const faq: FaqItem[] = [
  // ── AVANT LE DÉPART (q1–q20) ──────────────────────────────────────────────
  {
    id: 'q1',
    question: 'Quand faut-il commencer à chercher un logement à Madrid ?',
    reponse:
      "Idéalement 3 à 4 mois avant ton arrivée. Le marché immobilier madrilène est très tendu, surtout en septembre pour la rentrée. Les meilleures colocations partent en quelques heures sur Idealista et les groupes Facebook — ne tarde pas.",
    categorie: 'avant-depart',
    popularite: 5,
    lien_article: '/articles?cat=logement',
  },
  {
    id: 'q2',
    question: "Faut-il apprendre l'espagnol avant de partir en Erasmus à Madrid ?",
    reponse:
      "Ce n'est pas obligatoire mais fortement recommandé. Un niveau A2-B1 te permettra de gérer les démarches administratives et de te faire des amis locaux. Les universités madrilènes proposent souvent des cours de langue en arrivant.",
    categorie: 'avant-depart',
    popularite: 4,
  },
  {
    id: 'q3',
    question: "Quelle assurance prendre pour un Erasmus en Espagne ?",
    reponse:
      "La Carte Européenne d'Assurance Maladie (CEAM) est gratuite et couvre les soins de base. Pour une couverture complète (rapatriement, responsabilité civile, bagages), ajoute une assurance complémentaire comme Chapka ou AVA à partir de 25€/mois.",
    categorie: 'avant-depart',
    popularite: 5,
    lien_article: '/articles/assurance-erasmus-espagne',
  },
  {
    id: 'q4',
    question: "Combien d'argent faut-il prévoir pour le premier mois à Madrid ?",
    reponse:
      "Prévois 1 500 à 2 000€ pour le premier mois. Tu devras souvent payer 2 mois de caution + 1 mois de loyer à l'avance, soit 1 200 à 1 800€ rien que pour le logement. Ajoute les frais d'installation, de nourriture et de transport.",
    categorie: 'avant-depart',
    popularite: 5,
    lien_article: '/calculateur-budget',
  },
  {
    id: 'q5',
    question: "Peut-on vivre à Madrid avec 600€ par mois en Erasmus ?",
    reponse:
      "C'est très serré mais possible si tu choisis un quartier économique comme Vallecas ou Lavapiés, que tu cuisines la plupart du temps et que tu limites les sorties. La plupart des Erasmus français ont un budget de 700 à 900€ par mois.",
    categorie: 'avant-depart',
    popularite: 5,
    lien_article: '/calculateur-budget',
  },
  {
    id: 'q6',
    question: "Faut-il ouvrir un compte bancaire espagnol pour son Erasmus ?",
    reponse:
      "Ce n'est pas obligatoire grâce aux néobanques comme Revolut ou N26 qui fonctionnent partout sans frais. Un compte espagnol est utile uniquement si ton université paie ta bourse dessus ou si ton propriétaire l'exige pour le loyer.",
    categorie: 'avant-depart',
    popularite: 4,
    lien_article: '/articles/compte-bancaire-espagne-sans-nie',
  },
  {
    id: 'q7',
    question: "Comment transférer de l'argent depuis la France vers l'Espagne sans frais ?",
    reponse:
      "Utilise Wise (anciennement TransferWise) pour des virements au taux de change réel sans frais cachés, ou Revolut qui permet des transferts instantanés entre comptes. Évite les virements SWIFT classiques qui prennent des frais.",
    categorie: 'avant-depart',
    popularite: 3,
    lien_article: '/articles/compte-bancaire-espagne-sans-nie',
  },
  {
    id: 'q8',
    question: "Quelle carte SIM prendre en Espagne pour son Erasmus ?",
    reponse:
      "Yoigo et Lebara offrent le meilleur rapport qualité-prix pour les Erasmus, à partir de 12-15€/mois pour data illimitée. Évite Orange et Movistar qui sont plus chers pour des services équivalents.",
    categorie: 'avant-depart',
    popularite: 5,
    lien_article: '/articles/meilleure-carte-sim-espagne-erasmus',
  },
  {
    id: 'q9',
    question: "Les cours sont-ils en espagnol dans les universités madrilènes ?",
    reponse:
      "La plupart des cours sont en espagnol, mais beaucoup d'universités proposent des cours en anglais pour les Erasmus. La UAM, l'UC3M et l'UPM ont notamment de bonnes offres en anglais. Vérifie le catalogue de cours avant de choisir.",
    categorie: 'avant-depart',
    popularite: 4,
  },
  {
    id: 'q10',
    question: "Doit-on s'inscrire au consulat français de Madrid ?",
    reponse:
      "Ce n'est pas obligatoire mais fortement recommandé. L'inscription sur le registre des Français établis hors de France (via Mon Consulat) te permet de voter depuis Madrid et d'obtenir des documents officiels plus facilement.",
    categorie: 'avant-depart',
    popularite: 3,
  },
  {
    id: 'q11',
    question: "Comment choisir son université à Madrid pour l'Erasmus ?",
    reponse:
      "Les plus populaires auprès des Français sont la UAM (Autónoma), la UCM (Complutense) et l'UC3M. Choisis selon ta filière, le nombre de cours disponibles en français ou anglais, et la localisation sur la carte de Madrid.",
    categorie: 'avant-depart',
    popularite: 4,
  },
  {
    id: 'q12',
    question: "Faut-il faire une procuration pour voter depuis l'Espagne ?",
    reponse:
      "Oui, si tu veux voter aux élections françaises depuis Madrid, tu dois établir une procuration avant de partir, ou t'inscrire sur les listes consulaires pour voter au consulat.",
    categorie: 'avant-depart',
    popularite: 2,
  },
  {
    id: 'q13',
    question: "Peut-on travailler pendant son Erasmus à Madrid ?",
    reponse:
      "Oui, les étudiants européens peuvent travailler légalement en Espagne. Des petits boulots en restauration, babysitting ou cours particuliers de français sont courants. Fais attention à ne pas dépasser les seuils qui affectent ta bourse Erasmus.",
    categorie: 'avant-depart',
    popularite: 4,
  },
  {
    id: 'q14',
    question: "Comment obtenir la bourse Erasmus+ et quel est son montant ?",
    reponse:
      "La bourse Erasmus+ est attribuée par ton université française. Le montant varie de 250 à 500€/mois selon le pays et ta situation sociale. Contacte le bureau des relations internationales de ton université pour la demande.",
    categorie: 'avant-depart',
    popularite: 5,
  },
  {
    id: 'q15',
    question: "Faut-il un VPN pour utiliser des services français depuis l'Espagne ?",
    reponse:
      "Pour Netflix France, TF1+ et certains services bancaires qui bloquent les IP étrangères, un VPN est utile. ExpressVPN et NordVPN fonctionnent bien. La plupart des services européens fonctionnent cependant sans VPN.",
    categorie: 'avant-depart',
    popularite: 3,
  },
  {
    id: 'q16',
    question: "Comment envoyer ses affaires à Madrid depuis la France ?",
    reponse:
      "Pour les colis lourds, Chronopost et Mondial Relay vers l'Espagne sont les moins chers. Pour les bagages en avion, Vueling et Iberia offrent souvent des tarifs compétitifs. Si vous êtes plusieurs à partir, louer un van ensemble est souvent la meilleure option.",
    categorie: 'avant-depart',
    popularite: 3,
  },
  {
    id: 'q17',
    question: "Quelle est la meilleure période pour arriver à Madrid pour son Erasmus ?",
    reponse:
      "Arrive au moins 1 semaine avant le début des cours pour te repérer, ouvrir un compte bancaire, activer ta SIM et rencontrer les autres Erasmus. Septembre et janvier sont les deux rentrées principales.",
    categorie: 'avant-depart',
    popularite: 4,
  },
  {
    id: 'q18',
    question: "Peut-on garder sa mutuelle française pendant son Erasmus en Espagne ?",
    reponse:
      "Oui, ta mutuelle française continue de fonctionner en complément de la CEAM. Préviens-la de ton départ pour connaître exactement ce qui est couvert à l'étranger. Certaines mutuelles proposent une extension internationale.",
    categorie: 'avant-depart',
    popularite: 3,
    lien_article: '/articles/assurance-erasmus-espagne',
  },
  {
    id: 'q19',
    question: "Madrid est-elle une ville dangereuse pour les Erasmus ?",
    reponse:
      "Madrid est globalement sûre pour les étudiants. Les zones à éviter la nuit sont certaines parties de Lavapiés et les abords de la gare d'Atocha. Reste vigilant comme dans toute grande ville, surtout contre les pickpockets dans le métro.",
    categorie: 'avant-depart',
    popularite: 4,
  },
  {
    id: 'q20',
    question: "Faut-il apporter des médicaments de France pour son Erasmus ?",
    reponse:
      "Apporte tes médicaments sur ordonnance pour les 3 premiers mois. Les pharmacies madrilènes sont excellentes, mais certains médicaments français n'ont pas d'équivalent exact en Espagne. L'ordonnance française est reconnue dans toute l'UE.",
    categorie: 'avant-depart',
    popularite: 3,
  },

  // ── LOGEMENT (q21–q35) ────────────────────────────────────────────────────
  {
    id: 'q21',
    question: "Quelle est la différence entre Idealista et Badi pour trouver un appart à Madrid ?",
    reponse:
      "Idealista est le plus grand portail immobilier d'Espagne avec toutes les offres du marché, idéal pour les appartements entiers et les colocations classiques. Badi est une application spécialisée dans les colocations pour jeunes, avec un processus 100% digital et souvent sans besoin de NIE.",
    categorie: 'logement',
    popularite: 4,
    lien_article: '/articles?cat=logement',
  },
  {
    id: 'q22',
    question: "Combien de mois de caution faut-il verser à Madrid ?",
    reponse:
      "Légalement, le propriétaire ne peut demander qu'un mois de caution (fianza) pour les locations meublées. En pratique, beaucoup demandent 2 mois de caution + 1 mois de loyer en avance. Négocie si le montant te semble excessif.",
    categorie: 'logement',
    popularite: 5,
    lien_article: '/articles?cat=logement',
  },
  {
    id: 'q23',
    question: "Comment signer un contrat de location en espagnol sans le comprendre ?",
    reponse:
      "Utilise DeepL pour traduire le contrat intégralement avant de signer. Vérifie la durée, le montant, ce qui est inclus (charges, Internet), et les conditions de résiliation. En cas de doute sur des clauses, demande à l'association Erasmus locale.",
    categorie: 'logement',
    popularite: 4,
  },
  {
    id: 'q24',
    question: "Y a-t-il des résidences universitaires pour les Erasmus à Madrid ?",
    reponse:
      "Oui, plusieurs universités proposent des résidences pour Erasmus, mais les places sont limitées et souvent plus chères que les colocations privées. La UAM et la UCM ont leurs propres résidences. Postule dès que tu reçois ta confirmation d'Erasmus.",
    categorie: 'logement',
    popularite: 3,
  },
  {
    id: 'q25',
    question: "Peut-on louer sans NIE à Madrid ?",
    reponse:
      "Oui, techniquement on peut louer avec son passeport français. Le NIE n'est pas légalement obligatoire pour signer un contrat de location. Certains propriétaires l'exigent toutefois — dans ce cas, signale que tu l'as demandé et que tu le recevras dans les semaines suivantes.",
    categorie: 'logement',
    popularite: 5,
  },
  {
    id: 'q26',
    question: "Comment éviter les arnaques immobilières à Madrid ?",
    reponse:
      "Ne verse jamais d'acompte sans avoir visité le logement en personne ou en visio avec quelqu'un sur place. Méfie-toi des prix anormalement bas pour Madrid. Utilise les groupes Facebook des Erasmus pour vérifier la réputation du propriétaire.",
    categorie: 'logement',
    popularite: 5,
  },
  {
    id: 'q27',
    question: "Quelle est la différence entre un loyer CC et SC à Madrid ?",
    reponse:
      "CC (con comunidad) signifie que les charges de copropriété sont incluses dans le loyer. SC (sin comunidad) signifie qu'elles sont en plus, en général 50 à 100€/mois. Demande toujours ce qui est inclus avant de signer.",
    categorie: 'logement',
    popularite: 3,
  },
  {
    id: 'q28',
    question: "Peut-on sous-louer son logement pendant les vacances de Noël à Madrid ?",
    reponse:
      "La sous-location n'est possible que si ton contrat l'autorise explicitement et avec l'accord du propriétaire. Dans la pratique, beaucoup d'Erasmus trouvent un remplaçant informellement pour les vacances. Communique toujours avec ton bailleur.",
    categorie: 'logement',
    popularite: 3,
  },
  {
    id: 'q29',
    question: "Mieux vaut habiter avec des Espagnols ou d'autres Erasmus à Madrid ?",
    reponse:
      "Avec des Espagnols pour progresser en langue et t'immerger dans la culture locale. Avec des Erasmus pour avoir une vie sociale plus intense et une meilleure compréhension mutuelle. L'idéal est un mix : 1-2 Espagnols et 1-2 Erasmus.",
    categorie: 'logement',
    popularite: 4,
  },
  {
    id: 'q30',
    question: "Peut-on amener son animal de compagnie dans une colocation à Madrid ?",
    reponse:
      "La plupart des contrats de colocation l'interdisent explicitement. Si tu veux venir avec un animal, filtre les annonces avec la mention 'se admiten mascotas'. C'est plus rare et souvent plus cher.",
    categorie: 'logement',
    popularite: 2,
  },
  {
    id: 'q31',
    question: "Comment récupérer son dépôt de garantie (fianza) en fin de colocation ?",
    reponse:
      "La fianza doit être restituée dans les 30 jours suivant la fin du contrat si le logement est rendu en bon état. Fais un état des lieux de sortie avec photos. Si le propriétaire refuse de rembourser sans justification valable, contacte un service de médiation.",
    categorie: 'logement',
    popularite: 5,
  },
  {
    id: 'q32',
    question: "Les logements Erasmus à Madrid sont-ils meublés ?",
    reponse:
      "La très grande majorité des colocations pour Erasmus sont meublées (amueblado). Vérifie que le lit, bureau, armoire et équipements de cuisine sont présents. Un appartement vide (sin amueblar) est rare dans le marché étudiant.",
    categorie: 'logement',
    popularite: 3,
  },
  {
    id: 'q33',
    question: "Quelle est la durée minimale d'un contrat de location à Madrid ?",
    reponse:
      "Pour les contrats de résidence habituelle, la durée légale est de 5 ans. Mais pour les Erasmus, les propriétaires font souvent des contrats courts de 6 à 12 mois sur des baux spécifiques. Négocie la durée qui correspond à ton séjour.",
    categorie: 'logement',
    popularite: 3,
  },
  {
    id: 'q34',
    question: "Mon propriétaire me harcèle ou refuse de faire les réparations, que faire ?",
    reponse:
      "Documente tout par écrit (e-mail ou WhatsApp). Les services sociaux de ta mairie (Junta Municipal) peuvent te conseiller gratuitement. En dernier recours, l'Office de Médiation de la Communauté de Madrid offre une médiation gratuite.",
    categorie: 'logement',
    popularite: 3,
  },
  {
    id: 'q35',
    question: "Peut-on utiliser Airbnb pour les premiers jours à Madrid en attendant son logement ?",
    reponse:
      "Oui, c'est une bonne solution de transition. Prévois 1 à 2 semaines d'Airbnb pour te donner le temps de visiter des appartements en vrai. Les quartiers Chueca et Malasaña sont idéalement placés pour les visites.",
    categorie: 'logement',
    popularite: 4,
  },

  // ── ADMIN & PAPERASSE (q36–q50) ───────────────────────────────────────────
  {
    id: 'q36',
    question: "C'est quoi le NIE et comment l'obtenir à Madrid ?",
    reponse:
      "Le NIE (Número de Identidad de Extranjero) est ton numéro d'identification fiscal en Espagne. Pour l'obtenir, prends rendez-vous sur le site de la Police Nationale (extranjeros.gob.es) avec ton passeport, ta lettre d'acceptation Erasmus et le formulaire EX-15. Il est délivré sur place.",
    categorie: 'admin',
    popularite: 5,
  },
  {
    id: 'q37',
    question: "Combien de temps faut-il pour obtenir le NIE à Madrid ?",
    reponse:
      "Le délai pour un rendez-vous varie de 2 à 8 semaines selon les périodes. Prends ton rendez-vous dès ton arrivée à Madrid. Si tous les créneaux sont pris, consulte le site plusieurs fois par jour — des annulations apparaissent régulièrement.",
    categorie: 'admin',
    popularite: 5,
  },
  {
    id: 'q38',
    question: "C'est quoi l'empadronamiento et est-ce obligatoire pour les Erasmus ?",
    reponse:
      "L'empadronamiento est l'inscription sur le registre municipal de ta commune. En théorie obligatoire pour tout résident de plus de 6 mois, il te donne accès aux services publics locaux et simplifie certaines démarches comme l'obtention du NIE.",
    categorie: 'admin',
    popularite: 4,
  },
  {
    id: 'q39',
    question: "Dois-je m'inscrire à la sécurité sociale espagnole en tant qu'Erasmus ?",
    reponse:
      "Non, la CEAM (Carte Européenne d'Assurance Maladie) te permet d'accéder aux soins en Espagne sans t'inscrire à la Seguridad Social. Tu as les mêmes droits qu'un citoyen espagnol pour les soins d'urgence et les consultations chez le médecin de famille.",
    categorie: 'admin',
    popularite: 4,
  },
  {
    id: 'q40',
    question: "Comment trouver un médecin de famille (médico de familia) à Madrid ?",
    reponse:
      "Avec ta CEAM, tu peux t'inscrire au Centro de Salud (centre de santé) le plus proche de ton domicile. Apporte ta CEAM, ton passeport et ton justificatif de domicile. La consultation est gratuite.",
    categorie: 'admin',
    popularite: 4,
  },
  {
    id: 'q41',
    question: "Comment obtenir une attestation de scolarité de mon université madrilène ?",
    reponse:
      "Demande un 'certificado de matrícula' auprès de la Secretaría de tu université, en personne ou via le portail étudiant. Le document est généralement prêt sous 24-48h et peut être demandé en anglais.",
    categorie: 'admin',
    popularite: 3,
  },
  {
    id: 'q42',
    question: "Comment faire reconnaître ses cours Erasmus en France après le retour ?",
    reponse:
      "La reconnaissance est garantie par le Learning Agreement (accord pédagogique) signé avant le départ. Remets ton relevé de notes officiel (Transcript of Records) à ton université française à ton retour. En cas de litige, le bureau des relations internationales est ton interlocuteur.",
    categorie: 'admin',
    popularite: 5,
  },
  {
    id: 'q43',
    question: "Faut-il faire une déclaration d'impôts en Espagne pour un Erasmus ?",
    reponse:
      "Non, en tant qu'Erasmus tu restes résident fiscal en France. Si tu travailles en Espagne et gagnes plus de 22 000€ sur l'année (seuil 2025), une déclaration espagnole pourrait être nécessaire. Ce cas est extrêmement rare pour un étudiant.",
    categorie: 'admin',
    popularite: 3,
  },
  {
    id: 'q44',
    question: "Qu'est-ce que la carte étudiante internationale ISIC ?",
    reponse:
      "La carte ISIC (International Student Identity Card) prouve ton statut d'étudiant à l'international et te donne accès à des réductions dans les musées, transports et commerces à Madrid. Elle coûte 15€ et se commande en ligne sur isic.org.",
    categorie: 'admin',
    popularite: 2,
  },
  {
    id: 'q45',
    question: "Comment obtenir le numéro de sécurité sociale espagnol (NSS) si je travaille ?",
    reponse:
      "Si tu travailles en Espagne, ton employeur doit te demander ton NSS. Pour l'obtenir, rends-toi au bureau de la Tesorería General de la Seguridad Social avec ton passeport, ton NIE et ton contrat de travail.",
    categorie: 'admin',
    popularite: 3,
  },
  {
    id: 'q46',
    question: "Mon université espagnole refuse de signer mon Learning Agreement, que faire ?",
    reponse:
      "Contacte immédiatement le coordinateur Erasmus de l'université espagnole et de ton université française. Si le blocage persiste, l'Agence Erasmus+ nationale peut intervenir. Garde toutes les communications par écrit.",
    categorie: 'admin',
    popularite: 3,
  },
  {
    id: 'q47',
    question: "Comment obtenir mon relevé de notes officiel en fin d'Erasmus à Madrid ?",
    reponse:
      "Contacte la Secretaría de ta faculté 2 semaines avant ton départ pour demander un 'Transcript of Records'. Il doit être envoyé directement à ton université française et inclure toutes les notes obtenues avec leurs équivalents ECTS.",
    categorie: 'admin',
    popularite: 4,
  },
  {
    id: 'q48',
    question: "Comment résilier mon contrat de location en fin d'Erasmus ?",
    reponse:
      "Consulte ton contrat pour la clause de résiliation (generalmente 30 jours de préavis). Envoie ta lettre de résiliation par e-mail avec accusé de lecture ou par courrier recommandé. Fixe une date d'état des lieux de sortie avec le propriétaire.",
    categorie: 'admin',
    popularite: 4,
  },
  {
    id: 'q49',
    question: "Peut-on changer d'université en cours d'Erasmus si ça se passe mal ?",
    reponse:
      "C'est possible mais très compliqué et rare. Il faut l'accord des deux universités et un nouveau Learning Agreement. Essaie d'abord de résoudre le problème avec le coordinateur Erasmus avant d'envisager cette option.",
    categorie: 'admin',
    popularite: 2,
  },
  {
    id: 'q50',
    question: "Quels documents garder après mon Erasmus pour la reconnaissance des crédits ?",
    reponse:
      "Conserve ton Learning Agreement signé, ton Transcript of Records officiel, les attestations de présence et tous les e-mails avec les coordinateurs. Garde aussi une copie numérique de ton contrat de location pour d'éventuels litiges caution.",
    categorie: 'admin',
    popularite: 3,
  },

  // ── VIE QUOTIDIENNE (q51–q70) ─────────────────────────────────────────────
  {
    id: 'q51',
    question: "À quelle heure dîne-t-on à Madrid et comment s'y adapter ?",
    reponse:
      "Les Madrilènes dînent entre 21h et 23h. Les restaurants ne servent généralement pas avant 21h. Habitue-toi au 'menu del día' le midi (entre 14h et 16h30) — c'est le meilleur rapport qualité-prix avec entrée, plat, dessert et boisson pour 10-12€.",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q52',
    question: "Peut-on boire l'eau du robinet à Madrid ?",
    reponse:
      "Oui, l'eau du robinet à Madrid est potable et de très bonne qualité. Madrid est reconnue comme ayant l'une des meilleures eaux du robinet d'Europe. Inutile d'acheter des bouteilles en plastique — une gourde filtrante te suffit.",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q53',
    question: "Faut-il donner des pourboires dans les restaurants et bars de Madrid ?",
    reponse:
      "Le pourboire n'est pas obligatoire en Espagne comme il l'est aux USA. Dans les bars et cafés, laisser la monnaie est courant. Dans les restaurants, 5 à 10% pour un bon service est apprécié mais non attendu.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },
  {
    id: 'q54',
    question: "Comment faire ses courses pas cher à Madrid en Erasmus ?",
    reponse:
      "Mercadona est ta meilleure option : qualité correcte et prix bas. Lidl et Dia sont encore moins chers pour certains produits. Évite El Corte Inglés alimentaire et les Carrefour City pour les courses quotidiennes — les prix y sont 30 à 50% plus élevés.",
    categorie: 'vie-quotidienne',
    popularite: 5,
  },
  {
    id: 'q55',
    question: "Quelles sont les meilleures applications à avoir pour vivre à Madrid ?",
    reponse:
      "Metro de Madrid (trajets en temps réel), Citymapper (navigation multimodale), Glovo (livraison), Idealista (logement), BiciMAD (vélos en libre-service), Doctoralia (prendre rendez-vous médecin) et bien sûr le groupe Telegram des Erasmus madrilènes.",
    categorie: 'vie-quotidienne',
    popularite: 5,
  },
  {
    id: 'q56',
    question: "Y a-t-il des cafés avec Wi-Fi gratuit et prises électriques à Madrid ?",
    reponse:
      "Federal Café, Toma Café, Café Comercial et les chaînes Columbus Coffeehouse sont parfaites pour travailler avec Wi-Fi stable et prises disponibles. Les McDonald's et Burger King en centre-ville ont aussi un Wi-Fi correct si tu as besoin.",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q57',
    question: "Quelles bibliothèques peuvent utiliser les Erasmus à Madrid gratuitement ?",
    reponse:
      "La Biblioteca Nacional de España est gratuite et ouverte à tous avec une pièce d'identité. La Biblioteca Regional de Madrid (Retiro) est excellente. La bibliothèque de ton université est aussi accessible avec ta carte étudiante.",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q58',
    question: "Comment fonctionne la pharmacie en Espagne pour un Erasmus ?",
    reponse:
      "Les pharmacies espagnoles sont très bien fournies et les pharmaciens peuvent délivrer beaucoup de médicaments sans ordonnance. Avec ta CEAM, les médicaments sur ordonnance sont partiellement remboursés. Les pharmacies de garde (farmacia de guardia) sont indiquées par une croix verte clignotante.",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q59',
    question: "Que faire en cas d'urgence médicale à Madrid ?",
    reponse:
      "Appelle le 112 (urgences générales) ou le 061 (urgences médicales). Les urgences hospitalières (Urgencias) sont gratuites avec ta CEAM. Les hôpitaux publics les plus proches du centre sont La Paz, Gregorio Marañón et La Princesa.",
    categorie: 'vie-quotidienne',
    popularite: 5,
  },
  {
    id: 'q60',
    question: "Comment fonctionne le service de vélos en libre-service BiciMAD à Madrid ?",
    reponse:
      "BiciMAD propose des vélos électriques à Madrid. L'inscription se fait via l'appli BiciMAD Go. Le tarif est d'environ 0,05€/minute. Il y a 260 stations dans la ville. Parfait pour les petits trajets entre Malasaña, Chueca et le centre.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },
  {
    id: 'q61',
    question: "Quelle est la météo à Madrid en hiver pendant l'Erasmus ?",
    reponse:
      "Madrid a des hivers froids et secs, avec des températures de 2 à 12°C. La neige est possible mais rare (1-2 fois par an). Les appartements sont souvent mal isolés — prévoie un bon chauffage d'appoint. Le soleil est présent même en hiver (300 jours de soleil par an).",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q62',
    question: "Comment faire sa lessive en colocation ou en studio à Madrid ?",
    reponse:
      "La plupart des colocations ont une machine à laver. Si ce n'est pas le cas, les laveries automatiques (lavanderías) sont très courantes à Madrid et coûtent 4 à 6€ pour une machine. Les quartiers étudiants en ont généralement plusieurs.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },
  {
    id: 'q63',
    question: "Quelles sont les heures d'ouverture des commerces à Madrid ?",
    reponse:
      "Les commerces ouvrent généralement de 10h à 14h puis de 17h à 21h. Les grandes surfaces et centres commerciaux sont ouverts sans interruption de 10h à 22h. Le dimanche, la plupart des petits commerces sont fermés.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },
  {
    id: 'q64',
    question: "Comment trouver un coiffeur pas cher à Madrid ?",
    reponse:
      "Les coiffeurs low-cost de type Llongueras ou Toni&Guy proposent des coupes à partir de 8€. Dans les quartiers populaires comme Carabanchel ou Vallecas, tu trouveras des coiffeurs à 5-8€. Les écoles de coiffure coupent gratuitement sur rendez-vous.",
    categorie: 'vie-quotidienne',
    popularite: 2,
  },
  {
    id: 'q65',
    question: "Y a-t-il un marché alimentaire pas cher à Madrid pour Erasmus ?",
    reponse:
      "El Rastro le dimanche matin à Lavapiés est le marché le plus célèbre, plutôt pour la brocante. Pour la nourriture fraîche à bas prix, les marchés de quartier comme Mercado de Maravillas (Cuatro Caminos) ou Mercado de Vallehermoso sont parfaits.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },
  {
    id: 'q66',
    question: "Comment progresser rapidement en espagnol une fois à Madrid ?",
    reponse:
      "Force-toi à ne parler qu'espagnol avec tes colocataires espagnols. Rejoins un groupe de tandem linguistique (Meetup.com ou l'appli Tandem). Regarde les séries espagnoles avec sous-titres espagnols. L'immersion totale est la méthode la plus efficace.",
    categorie: 'vie-quotidienne',
    popularite: 5,
  },
  {
    id: 'q67',
    question: "Les Madrilènes parlent-ils anglais en général ?",
    reponse:
      "Moins bien qu'en Europe du Nord. Dans les quartiers étudiants, bars et restaurants, l'anglais passe bien. Pour les démarches administratives et chez les commerçants de quartier, l'espagnol est indispensable. Ne compte pas sur l'anglais pour tout.",
    categorie: 'vie-quotidienne',
    popularite: 4,
  },
  {
    id: 'q68',
    question: "Comment fonctionne le tri des déchets à Madrid ?",
    reponse:
      "Madrid dispose de 5 poubelles colorées : jaune (plastiques et métal), bleu (papier et carton), vert (verre), orange (organique), gris (tout le reste). Les conteneurs sont dans la rue, pas dans l'appartement en général.",
    categorie: 'vie-quotidienne',
    popularite: 2,
  },
  {
    id: 'q69',
    question: "Que faire le dimanche à Madrid quand beaucoup de commerces sont fermés ?",
    reponse:
      "Le dimanche est parfait pour El Retiro, El Rastro (marché aux puces jusqu'à 15h), les musées gratuits l'après-midi, ou un brunch tardif dans Malasaña. Les bars et restaurants sont ouverts — c'est la vie de quartier à son meilleur.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },
  {
    id: 'q70',
    question: "Quelle est la différence entre un bar, une terrasse et un chiringuito à Madrid ?",
    reponse:
      "Un bar est l'établissement intérieur. La terrasse est la partie extérieure avec tables et chaises, soumise à des horaires stricts. Un chiringuito est un bar de plage ou de parc — à Madrid, les chiringuitos du Retiro servent en été. Les Madrilènes privilégient la terrasse dès qu'il fait beau.",
    categorie: 'vie-quotidienne',
    popularite: 3,
  },

  // ── TRANSPORT (q71–q80) ───────────────────────────────────────────────────
  {
    id: 'q71',
    question: "Quel est le prix de l'abonnement mensuel de métro pour les moins de 26 ans à Madrid ?",
    reponse:
      "L'abonnement mensuel jeune (Abono Joven) pour les moins de 26 ans coûte 20€/mois pour toutes les zones A, B1, B2 et B3 à Madrid. C'est l'une des meilleures affaires d'Europe — l'abonnement adulte standard coûte 54€. Prends-le dès ton arrivée.",
    categorie: 'transport',
    popularite: 5,
  },
  {
    id: 'q72',
    question: "Comment aller de l'aéroport Barajas au centre de Madrid ?",
    reponse:
      "La ligne 8 du métro relie directement l'aéroport à Nuevos Ministerios en 15 minutes (supplément aéroport de 3€). Le bus Exprés Aeropuerto (24h/24) coûte 5€ et rejoint le centre en 40 minutes. Évite les taxis non officiels à la sortie.",
    categorie: 'transport',
    popularite: 5,
  },
  {
    id: 'q73',
    question: "Y a-t-il des bus de nuit à Madrid (Búho) ?",
    reponse:
      "Oui, le réseau Búho (hibou) de bus nocturnes fonctionne de minuit à 6h du matin avec 26 lignes depuis la Plaza de Cibeles. C'est la meilleure option pour rentrer tard si le métro est fermé. Prix normal : 1,50€.",
    categorie: 'transport',
    popularite: 4,
  },
  {
    id: 'q74',
    question: "Quelle application utiliser pour se déplacer dans les transports à Madrid ?",
    reponse:
      "Citymapper est la référence absolue pour Madrid : elle combine métro, bus, Renfe et BiciMAD avec les horaires en temps réel. L'application officielle Metro de Madrid est aussi très fiable pour les trajets en métro uniquement.",
    categorie: 'transport',
    popularite: 4,
  },
  {
    id: 'q75',
    question: "Comment aller à Paris depuis Madrid le moins cher possible ?",
    reponse:
      "Vueling et Iberia Express proposent régulièrement des vols Madrid-Paris à partir de 30-40€. Réserve 4 à 6 semaines à l'avance pour les meilleurs prix. Le bus Flixbus (15h de trajet) est encore moins cher dès 15-20€.",
    categorie: 'transport',
    popularite: 4,
  },
  {
    id: 'q76',
    question: "Y a-t-il un train à grande vitesse low cost depuis Madrid (Renfe Avlo) ?",
    reponse:
      "Oui, AVLO est le TGV low-cost de Renfe avec des billets à partir de 9€ vers Barcelone, Valence ou Séville. Les places bon marché partent vite — surveille les offres Flash sur l'appli Renfe et réserve à l'avance.",
    categorie: 'transport',
    popularite: 4,
  },
  {
    id: 'q77',
    question: "Uber ou Cabify : lequel est le moins cher à Madrid ?",
    reponse:
      "Uber et Cabify ont des prix similaires à Madrid. Cabify propose souvent des codes promo pour les nouveaux utilisateurs. FreeNow est une troisième option à comparer. Dans tous les cas, compare les 3 applis avant de commander.",
    categorie: 'transport',
    popularite: 3,
  },
  {
    id: 'q78',
    question: "Comment louer un vélo BiciMAD à Madrid en tant qu'Erasmus ?",
    reponse:
      "Télécharge l'appli BiciMAD Go, crée un compte et ajoute un moyen de paiement. Le déverrouillage coûte 1€ puis 0,05€/minute. Les vélos sont électriques et très pratiques pour les collines de Madrid. Il y a plus de 260 stations dans la ville.",
    categorie: 'transport',
    popularite: 3,
  },
  {
    id: 'q79',
    question: "Peut-on aller à la plage depuis Madrid facilement en week-end ?",
    reponse:
      "Madrid est au centre de l'Espagne, à 70 km des premières piscines naturelles (Patones, Lozoya). Pour la mer, Valencia est à 1h15 en train AVLO. Malaga en 2h15. Un bus Alsa + Flixbus te mène à Alicante ou à la Costa Brava pour 20-30€.",
    categorie: 'transport',
    popularite: 4,
    lien_article: '/articles?cat=bons-plans',
  },
  {
    id: 'q80',
    question: "Quelles sont les meilleures compagnies low cost depuis Madrid-Barajas ?",
    reponse:
      "Vueling, Ryanair (Terminal 1), Iberia Express et EasyJet couvrent l'essentiel de l'Europe depuis Barajas. Pour les destinations hors UE, Norwegian et Wizz Air proposent de bonnes offres. Active les alertes prix sur Google Flights.",
    categorie: 'transport',
    popularite: 4,
  },

  // ── SORTIES & CULTURE (q81–q90) ───────────────────────────────────────────
  {
    id: 'q81',
    question: "Quels musées sont gratuits ou à prix réduit pour les étudiants Erasmus à Madrid ?",
    reponse:
      "Le Prado, le Reina Sofía et le Thyssen sont gratuits le dimanche après-midi (17h-20h). Avec une carte étudiante, l'entrée au Prado est de 6€ au lieu de 22€. Le Museo de Historia de Madrid, le Museo Arqueológico et le Museo del Traje sont gratuits toute la semaine.",
    categorie: 'sorties',
    popularite: 5,
    lien_article: '/articles?cat=bons-plans',
  },
  {
    id: 'q82',
    question: "Comment voir un match du Real Madrid ou de l'Atletico à prix réduit ?",
    reponse:
      "Les billets se vendent sur les sites officiels (realmadrid.com et atleticodemadrid.com) et partent souvent en quelques heures pour les grands matchs. Pour les matchs de Liga standard, des places en tribune sont disponibles à 20-40€. Rejoins un groupe de revente entre Erasmus.",
    categorie: 'sorties',
    popularite: 4,
  },
  {
    id: 'q83',
    question: "Y a-t-il du flamenco gratuit à Madrid ?",
    reponse:
      "Oui ! La Casa Patas et Las Tablas organisent parfois des séances gratuites pour étudiants. Le Corral de la Morería propose des initiation gratuites certains soirs. Le marché El Rastro a parfois des performances spontanées. Cherche sur Eventbrite.",
    categorie: 'sorties',
    popularite: 3,
  },
  {
    id: 'q84',
    question: "Les tapas sont-elles vraiment gratuites à Madrid ?",
    reponse:
      "Contrairement à Grenade ou Séville, les tapas ne sont généralement pas gratuites à Madrid. Cependant, beaucoup de bars offrent une petite tapa avec ta consommation : olives, chips, petite tortilla. Cherche les bars qui affichent 'tapa con consumición'.",
    categorie: 'sorties',
    popularite: 5,
  },
  {
    id: 'q85',
    question: "Quels sont les meilleurs happy hours à Madrid pour les Erasmus ?",
    reponse:
      "La plupart des bars de Malasaña et Chueca proposent le happy hour de 18h à 21h avec des verres à 2-3€. L'Irish Rover (Bilbao) et La Vaca Argentina sont des classiques. Sur l'appli 'El Tenedor', tu trouveras aussi des restaurants avec menus Erasmus.",
    categorie: 'sorties',
    popularite: 4,
  },
  {
    id: 'q86',
    question: "Comment s'inscrire à l'ESN Madrid pour les soirées Erasmus officielles ?",
    reponse:
      "Inscris-toi sur la plateforme ESN Madrid (esnmadrid.com) dès ton arrivée. La carte ESN coûte 15€ et donne accès aux soirées officielles, aux voyages organisés et aux réductions chez de nombreux commerces madrilènes.",
    categorie: 'sorties',
    popularite: 4,
  },
  {
    id: 'q87',
    question: "Quels sont les meilleurs parcs pour se détendre à Madrid ?",
    reponse:
      "El Retiro est l'incontournable avec son lac et ses espaces verts. Casa de Campo est beaucoup plus grand et moins touristique. Pour les Erasmus des quartiers nord, l'El Capricho et Madrid Río sont d'excellentes alternatives moins connues.",
    categorie: 'sorties',
    popularite: 3,
  },
  {
    id: 'q88',
    question: "Quelles excursions faire le week-end depuis Madrid ?",
    reponse:
      "Tolède (30 min en train, 11€), Ségovie (30 min en bus, 8€), Ávila (1h30 en bus) et Aranjuez sont les classiques. Plus loin : Barcelone en AVLO (1h15), Séville (2h30) et Valence (1h15) pour les week-ends prolongés.",
    categorie: 'sorties',
    popularite: 5,
  },
  {
    id: 'q89',
    question: "Y a-t-il des concerts gratuits à Madrid pour les étudiants Erasmus ?",
    reponse:
      "Oui, Madrid propose de nombreux concerts gratuits. La Verbena de la Paloma en août, les festivals de quartier en été, et les concerts dans les parcs pendant Madrid Río. Consulte la Guía del Ocio ou le site de la Comunidad de Madrid pour le programme.",
    categorie: 'sorties',
    popularite: 3,
  },
  {
    id: 'q90',
    question: "Comment trouver les meilleurs plans gratuits et pas chers à Madrid ?",
    reponse:
      "L'agenda cultural de la Comunidad de Madrid (madrid.es) liste tous les événements gratuits. L'appli Xceed et Fever donnent les événements étudiants. Les groupes Facebook et Telegram des Erasmus madrilènes sont aussi d'excellentes sources de bons plans.",
    categorie: 'sorties',
    popularite: 4,
    lien_article: '/articles?cat=bons-plans',
  },

  // ── URGENCES & PROBLÈMES (q91–q100) ──────────────────────────────────────
  {
    id: 'q91',
    question: "Que faire si on se fait voler son téléphone ou son portefeuille à Madrid ?",
    reponse:
      "Dépose une plainte (denuncia) immédiatement au commissariat le plus proche ou en ligne sur le site de la Policía Nacional (denuncias.ses.mir.es). Pour le téléphone, contacte ton opérateur pour le bloquer. Pour les documents, contacte le consulat français.",
    categorie: 'urgences',
    popularite: 5,
  },
  {
    id: 'q92',
    question: "Comment appeler les urgences en Espagne ?",
    reponse:
      "Le 112 est le numéro d'urgence universel (pompiers, police, SAMU). Le 061 est pour les urgences médicales uniquement. Le 091 pour la police nationale et le 092 pour la police municipale. Ces numéros fonctionnent depuis tout téléphone, même sans crédit.",
    categorie: 'urgences',
    popularite: 5,
  },
  {
    id: 'q93',
    question: "Mon propriétaire refuse de me rendre ma caution à la fin du contrat, que faire ?",
    reponse:
      "Envoie une mise en demeure par e-mail et courrier recommandé. Si aucune réponse sous 30 jours, contacte le Servicio de Mediación de l'Ayuntamiento de Madrid (gratuit). En dernier recours, le Juzgado de Paz (justice de proximité) tranche les litiges inférieurs à 2 000€ sans avocat.",
    categorie: 'urgences',
    popularite: 4,
  },
  {
    id: 'q94',
    question: "Mon université espagnole ne veut pas valider mes cours Erasmus, que faire ?",
    reponse:
      "Contacte d'abord le coordinateur Erasmus de l'université espagnole par écrit. Si le problème persiste, sollicite le coordinateur de ton université française et l'Agence Erasmus+ nationale. La Charte Universitaire Erasmus oblige les universités à respecter les accords pédagogiques signés.",
    categorie: 'urgences',
    popularite: 4,
  },
  {
    id: 'q95',
    question: "Comment rentrer d'urgence en France depuis Madrid rapidement ?",
    reponse:
      "Les vols Madrid-Paris sont disponibles toutes les 2-3h avec Iberia, Air France et Vueling. En urgence absolue, le consulat français peut délivrer un laissez-passer consulaire (LPC) en quelques heures si tu n'as plus de documents d'identité.",
    categorie: 'urgences',
    popularite: 4,
  },
  {
    id: 'q96',
    question: "J'ai perdu mon passeport ou ma carte d'identité à Madrid, que faire ?",
    reponse:
      "Dépose d'abord une plainte auprès de la Policía Nacional (indispensable pour la suite). Contacte ensuite le Consulat Général de France à Madrid (28 calle del Marqués de la Ensenada) pour obtenir un document de voyage d'urgence. Délai : 24 à 48h.",
    categorie: 'urgences',
    popularite: 5,
  },
  {
    id: 'q97',
    question: "Ma carte bancaire est bloquée à Madrid, comment faire ?",
    reponse:
      "Appelle immédiatement le service d'opposition de ta banque française (numéro au dos de la carte ou sur l'appli). Avec Revolut ou N26, tu peux bloquer/débloquer ta carte depuis l'application en quelques secondes. Demande à un ami de te faire un virement PayPal en attendant.",
    categorie: 'urgences',
    popularite: 5,
    lien_article: '/articles/compte-bancaire-espagne-sans-nie',
  },
  {
    id: 'q98',
    question: "J'ai eu un accident à Madrid, comment fonctionne l'assurance ?",
    reponse:
      "Avec ta CEAM, les soins d'urgence sont pris en charge gratuitement dans les hôpitaux publics. Si tu as une assurance complémentaire Erasmus (Chapka, AVA…), contacte leur numéro d'assistance 24h/24 immédiatement pour toute hospitalisation.",
    categorie: 'urgences',
    popularite: 4,
    lien_article: '/articles/assurance-erasmus-espagne',
  },
  {
    id: 'q99',
    question: "Comment contacter le consulat ou l'ambassade de France à Madrid en urgence ?",
    reponse:
      "Le Consulat Général de France à Madrid est au 28 calle del Marqués de la Ensenada. Urgences consulaires 24h/24 : +34 91 700 78 00. Pour les non-urgences, prends rendez-vous en ligne sur le site service-public.fr.",
    categorie: 'urgences',
    popularite: 4,
  },
  {
    id: 'q100',
    question: "J'ai un problème avec mon logement (inondation, panne) en urgence à Madrid, que faire ?",
    reponse:
      "Contacte d'abord ton propriétaire ou l'agence immobilière par écrit (WhatsApp ou e-mail pour garder une trace). Pour les urgences techniques graves (coupure de gaz, inondation), contacte le 112. Si le propriétaire ne réagit pas, contacte la mairie de Madrid (010).",
    categorie: 'urgences',
    popularite: 3,
  },
]
