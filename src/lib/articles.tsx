import type { ComponentType } from "react";
import SimContent from "@/content/sim";
import BankingContent from "@/content/banking";
import InsuranceContent from "@/content/insurance";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  readTime: number;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  toc: Array<{ id: string; title: string; level: 2 | 3 }>;
  faqs: Array<{ question: string; answer: string }>;
  Content: ComponentType;
}

export const articles: Article[] = [
  {
    slug: "meilleure-carte-sim-espagne-erasmus",
    title: "Quelle carte SIM choisir en Espagne pour les Erasmus français ? (2025)",
    description:
      "Comparatif des meilleures cartes SIM espagnoles pour les étudiants Erasmus : Orange, Yoigo, Lebara, Lycamobile. Prix, data, appels vers la France.",
    category: "SIM & Mobile",
    categorySlug: "sim",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: 8,
    datePublished: "2025-01-15",
    dateModified: "2025-03-01",
    excerpt:
      "Arriver à Madrid sans numéro espagnol, c'est partir avec un handicap. Pour 5 à 15€/mois, trouvez la SIM parfaite pour votre Erasmus.",
    toc: [
      { id: "pourquoi-sim-espagnole", title: "Pourquoi prendre une SIM espagnole ?", level: 2 },
      { id: "top-4-sim", title: "Les 4 meilleures SIM pour Erasmus", level: 2 },
      { id: "yoigo", title: "Yoigo — Notre coup de cœur", level: 3 },
      { id: "orange", title: "Orange Espagne", level: 3 },
      { id: "lebara", title: "Lebara Mobile", level: 3 },
      { id: "lycamobile", title: "Lycamobile", level: 3 },
      { id: "comparatif", title: "Tableau comparatif", level: 2 },
      { id: "ou-acheter", title: "Où et comment acheter", level: 2 },
      { id: "conseils", title: "Conseils pratiques", level: 2 },
      { id: "faq", title: "Questions fréquentes", level: 2 },
    ],
    faqs: [
      {
        question: "Peut-on utiliser sa SIM française en Espagne sans frais supplémentaires ?",
        answer:
          "Oui, grâce au roaming européen, vous pouvez utiliser votre forfait français en Espagne. Cependant, la plupart des opérateurs imposent des limites de données en roaming (15-25 Go/mois) et la qualité peut être inférieure. Pour un séjour Erasmus de plusieurs mois, une SIM locale reste largement préférable économiquement et pratiquement.",
      },
      {
        question: "A-t-on besoin d'un NIE pour acheter une SIM en Espagne ?",
        answer:
          "Non, vous n'avez pas besoin de NIE pour acheter une carte SIM prépayée en Espagne. Votre passeport ou carte d'identité française suffit. Pour les forfaits avec engagement, certains opérateurs peuvent demander un NIE, mais les offres prépayées et sans engagement (comme Yoigo ou Lebara) sont accessibles avec tout document d'identité européen.",
      },
      {
        question: "Quelle est la différence entre une SIM prépayée et un forfait mensuel ?",
        answer:
          "La SIM prépayée se recharge à la demande, sans engagement. Le forfait mensuel se renouvelle automatiquement chaque mois. Pour un Erasmus, les forfaits mensuels sans engagement comme ceux de Yoigo ou Lebara offrent le meilleur rapport qualité-prix : beaucoup de données pour peu d'euros, sans être bloqué dans un contrat long terme.",
      },
      {
        question: "Comment activer sa carte SIM espagnole ?",
        answer:
          "L'activation varie selon l'opérateur. Pour Yoigo et Lebara, il suffit d'insérer la SIM, de visiter le site de l'opérateur depuis votre téléphone et de suivre les instructions en ligne. Vous aurez besoin de votre document d'identité (scanné ou photographié). Le processus prend en général 10 à 30 minutes.",
      },
      {
        question: "Peut-on garder son numéro français en ayant une SIM espagnole ?",
        answer:
          "Absolument. La plupart des smartphones modernes supportent la double SIM (physique + eSIM). Gardez votre SIM française et ajoutez la SIM espagnole. Vous pouvez paramétrer la SIM espagnole pour les données mobiles et la SIM française pour les appels importants. WhatsApp peut aussi être transféré sur le nouveau numéro espagnol.",
      },
    ],
    Content: SimContent,
  },
  {
    slug: "compte-bancaire-espagne-sans-nie",
    title: "Ouvrir un compte bancaire en Espagne sans NIE : le guide complet",
    description:
      "Comment ouvrir un compte bancaire en Espagne sans NIE ? N26, Revolut, Wise, Santander : comparatif complet pour étudiants Erasmus 2025.",
    category: "Banque",
    categorySlug: "banque",
    categoryColor: "bg-green-100 text-green-700",
    readTime: 9,
    datePublished: "2025-01-20",
    dateModified: "2025-03-10",
    excerpt:
      "Sans NIE, pas de compte bancaire traditionnel en Espagne. Mais N26, Revolut et Wise s'ouvrent en 10 minutes depuis votre téléphone.",
    toc: [
      { id: "probleme-nie", title: "Le problème du NIE pour les étudiants", level: 2 },
      { id: "neobanques", title: "La solution : les néobanques européennes", level: 2 },
      { id: "revolut", title: "Revolut — L'incontournable des Erasmus", level: 3 },
      { id: "n26", title: "N26 — La banque allemande", level: 3 },
      { id: "wise", title: "Wise — Pour les virements", level: 3 },
      { id: "banques-espagnoles", title: "Les banques espagnoles", level: 2 },
      { id: "santander", title: "Santander — Compte étudiant", level: 3 },
      { id: "comparatif-banques", title: "Tableau comparatif", level: 2 },
      { id: "nos-recommandations", title: "Recommandations par profil", level: 2 },
      { id: "etapes-ouverture", title: "Ouvrir Revolut étape par étape", level: 2 },
      { id: "faq-banque", title: "Questions fréquentes", level: 2 },
    ],
    faqs: [
      {
        question: "Peut-on vraiment ouvrir un compte bancaire en Espagne sans NIE ?",
        answer:
          "Avec les néobanques européennes (Revolut, N26, Wise), oui, absolument. Elles n'exigent pas de NIE et s'ouvrent entièrement en ligne avec votre pièce d'identité française. Pour les banques espagnoles traditionnelles, certains comptes étudiants sont accessibles avec votre passeport et une attestation d'études, sans NIE obligatoire.",
      },
      {
        question: "Revolut ou N26 : quelle banque choisir pour son Erasmus ?",
        answer:
          "Les deux sont excellentes. Revolut est idéal si vous voyagez beaucoup (taux de change imbattable) et pour son offre gratuite très complète. N26 est plus simple, avec des retraits ATM illimités et un IBAN allemand pratique. Beaucoup d'Erasmus utilisent les deux : N26 comme compte principal et Revolut pour les voyages et conversions de devises.",
      },
      {
        question: "Combien de temps faut-il pour ouvrir un compte en ligne ?",
        answer:
          "Avec Revolut et N26, comptez 10 à 20 minutes pour remplir le formulaire et vérifier votre identité (photo de votre pièce d'identité + selfie). La vérification est généralement validée en 24 heures. La carte physique arrive en 5 à 10 jours ouvrés. Vous pouvez utiliser la carte virtuelle immédiatement.",
      },
      {
        question: "Les néobanques sont-elles sécurisées ?",
        answer:
          "Oui. Revolut et N26 sont des banques agréées par des régulateurs européens (Revolut : BNL de Lituanie, N26 : BaFin allemande). Les dépôts N26 sont garantis jusqu'à 100 000€ par le système de garantie des dépôts allemand. Revolut offre une protection équivalente sous la réglementation lituanienne.",
      },
      {
        question: "Comment recevoir sa bourse Erasmus avec une néobanque ?",
        answer:
          "Il vous suffit de communiquer votre IBAN à votre université ou à l'agence Erasmus+. Les IBAN N26 (allemands) et Revolut (lituaniens) sont acceptés pour tous les virements SEPA dans toute l'Europe. Si votre université espagnole exige un IBAN espagnol, ouvrez en parallèle un compte Santander.",
      },
    ],
    Content: BankingContent,
  },
  {
    slug: "assurance-erasmus-espagne",
    title: "Assurance Erasmus en Espagne : laquelle choisir et comment l'obtenir ?",
    description:
      "Quelle assurance pour votre Erasmus en Espagne ? Carte européenne, Chapka, AVA, ACS : guide complet 2025 pour être bien couvert sans dépenser trop.",
    category: "Assurance",
    categorySlug: "assurance",
    categoryColor: "bg-purple-100 text-purple-700",
    readTime: 8,
    datePublished: "2025-02-01",
    dateModified: "2025-03-15",
    excerpt:
      "Carte européenne + assurance complémentaire Chapka : la combinaison parfaite pour votre Erasmus. Tout ce qu'il faut savoir en un guide.",
    toc: [
      { id: "pourquoi-assurance", title: "Pourquoi c'est indispensable", level: 2 },
      { id: "cpam-ceam", title: "La base : CPAM et Carte Européenne", level: 2 },
      { id: "limites-ceam", title: "Les limites de la carte européenne", level: 3 },
      { id: "assurances-complementaires", title: "Les assurances complémentaires", level: 2 },
      { id: "chapka", title: "Chapka — Notre recommandation", level: 3 },
      { id: "ava", title: "AVA International", level: 3 },
      { id: "acs", title: "ACS Assurances", level: 3 },
      { id: "comparatif-assurance", title: "Tableau comparatif", level: 2 },
      { id: "que-couvre", title: "Ce que doit couvrir votre assurance", level: 2 },
      { id: "comment-souscrire", title: "Comment et quand souscrire", level: 2 },
      { id: "faq-assurance", title: "Questions fréquentes", level: 2 },
    ],
    faqs: [
      {
        question: "La carte européenne d'assurance maladie suffit-elle pour un Erasmus ?",
        answer:
          "La CEAM est indispensable mais insuffisante seule. Elle couvre les soins médicaux urgents dans le système de santé public espagnol, mais ne couvre pas le rapatriement médical (très coûteux), la responsabilité civile, les accidents de sport, le vol de bagages, ni les frais en secteur privé. Une assurance complémentaire est fortement recommandée.",
      },
      {
        question: "Mon université exige-t-elle une attestation d'assurance ?",
        answer:
          "Oui, la grande majorité des universités espagnoles et françaises exigent une preuve d'assurance couvrant la responsabilité civile et les frais médicaux. La CEAM seule n'est généralement pas acceptée. Des assurances comme Chapka ou AVA délivrent une attestation officielle reconnue par les établissements d'enseignement supérieur.",
      },
      {
        question: "Quelle est la différence entre Chapka Cap Étudiant et Cap Aventure ?",
        answer:
          "Cap Étudiant est la formule de base pour les séjours académiques. Elle couvre les soins médicaux, le rapatriement, la responsabilité civile et les bagages. Cap Aventure ajoute la couverture pour les sports à risque (ski, escalade, etc.) et des plafonds plus élevés. Pour un Erasmus standard à Madrid, Cap Étudiant est généralement suffisant.",
      },
      {
        question: "Comment demander ma carte européenne d'assurance maladie ?",
        answer:
          "Sur votre espace Ameli (ameli.fr), rubrique 'Mes démarches' > 'Commander une carte européenne d'assurance maladie'. La CEAM est gratuite et valable 2 ans. Si votre départ est imminent, une attestation provisoire peut être délivrée immédiatement par votre CPAM et a la même valeur légale.",
      },
      {
        question: "Mon assurance habitation française couvre-t-elle mon logement à Madrid ?",
        answer:
          "Généralement non. La plupart des contrats d'assurance habitation français ne couvrent pas les logements à l'étranger. En Espagne, les propriétaires exigent rarement une assurance locataire, mais certaines résidences universitaires peuvent la demander. La formule Chapka Cap Étudiant inclut une responsabilité civile vie privée à l'étranger.",
      },
    ],
    Content: InsuranceContent,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
