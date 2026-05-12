export interface Quartier {
  id: string
  nom: string
  emoji: string
  coords: [number, number]
  couleur: string
  vibe: string
  loyer_min: number
  loyer_max: number
  loyer_moyen: number
  popularite: number
  description: string
  pour: string[]
  contre: string[]
  metros: string[]
  bars_emblematiques: string[]
  article_lien: string
}

export const quartiers: Quartier[] = [
  {
    id: 'malasana',
    nom: 'Malasaña',
    emoji: '🎸',
    coords: [40.4226, -3.7056],
    couleur: '#C60B1E',
    vibe: 'Fêtard & Alternatif',
    loyer_min: 500,
    loyer_max: 750,
    loyer_moyen: 620,
    popularite: 5,
    description:
      "Le quartier le plus Erasmus de Madrid. Bars vintage, concerts, street art et une énergie folle. Parfait si tu veux vivre au cœur de la fête.",
    pour: ['Fêtards', 'Artistes', 'Amateurs de culture alternative'],
    contre: ['Bruyant la nuit', 'Plus cher que la moyenne'],
    metros: ['Tribunal', 'Bilbao', 'Noviciado'],
    bars_emblematiques: ['El Penta', 'Bar Cock', 'Tupperware'],
    article_lien: '/articles?cat=quartiers',
  },
  {
    id: 'lavapies',
    nom: 'Lavapiés',
    emoji: '🌍',
    coords: [40.408, -3.703],
    couleur: '#27500A',
    vibe: 'Multiculturel & Bohème',
    loyer_min: 400,
    loyer_max: 650,
    loyer_moyen: 500,
    popularite: 4,
    description:
      "Le quartier le plus multiculturel de Madrid. Cuisine du monde, galeries d'art, vie de quartier authentique. Idéal pour les budgets serrés.",
    pour: ['Budgets serrés', 'Amateurs de diversité', 'Artistes'],
    contre: ['Peut sembler chaotique', 'Moins de transports directs'],
    metros: ['Lavapiés', 'Embajadores'],
    bars_emblematiques: ["El Tabernero", "Bar Melo's", 'La Inquilina'],
    article_lien: '/articles?cat=quartiers',
  },
  {
    id: 'chamberi',
    nom: 'Chamberí',
    emoji: '☕',
    coords: [40.435, -3.702],
    couleur: '#0C447C',
    vibe: 'Résidentiel & Tranquille',
    loyer_min: 550,
    loyer_max: 800,
    loyer_moyen: 670,
    popularite: 3,
    description:
      "Quartier résidentiel chic et calme. Parfait pour les étudiants sérieux qui veulent un cadre de vie agréable sans le bruit de Malasaña.",
    pour: ['Studieux', 'Amateurs de calme', 'Cadre de vie agréable'],
    contre: ['Moins festif', 'Légèrement plus cher'],
    metros: ['Iglesia', 'Bilbao', 'Quevedo'],
    bars_emblematiques: ['Federal Café', 'Misión Café', 'Bar Bendito'],
    article_lien: '/articles?cat=quartiers',
  },
  {
    id: 'salamanca',
    nom: 'Salamanca',
    emoji: '💎',
    coords: [40.425, -3.682],
    couleur: '#633806',
    vibe: 'Chic & Luxueux',
    loyer_min: 700,
    loyer_max: 1200,
    loyer_moyen: 900,
    popularite: 2,
    description:
      "Le quartier le plus huppé de Madrid. Boutiques de luxe, restaurants gastronomiques, architecture haussmannienne. Pour les Erasmus avec un bon budget.",
    pour: ['Cadre luxueux', 'Très sûr', 'Proche du Retiro'],
    contre: ["Très cher", "Peu d'ambiance étudiante"],
    metros: ['Serrano', 'Velázquez', 'Goya'],
    bars_emblematiques: ['El Paraguas', 'Ten Con Ten', 'Café Gijón'],
    article_lien: '/articles?cat=quartiers',
  },
  {
    id: 'chueca',
    nom: 'Chueca',
    emoji: '🌈',
    coords: [40.425, -3.698],
    couleur: '#3C3489',
    vibe: 'Festif & Inclusif',
    loyer_min: 550,
    loyer_max: 800,
    loyer_moyen: 680,
    popularite: 5,
    description:
      "Quartier LGBTQ+ friendly, festif et très accueillant. Terrasses animées, bars tendance, excellente vie nocturne. Une communauté Erasmus très active.",
    pour: ['Très festif', 'Communauté diverse', 'Excellents restaurants'],
    contre: ['Bruyant', 'Prix en hausse'],
    metros: ['Chueca', 'Gran Vía'],
    bars_emblematiques: ['Why Not?', 'Escape', 'Café Belén'],
    article_lien: '/articles?cat=quartiers',
  },
  {
    id: 'retiro',
    nom: 'Retiro',
    emoji: '🌳',
    coords: [40.415, -3.682],
    couleur: '#085041',
    vibe: 'Calme & Nature',
    loyer_min: 600,
    loyer_max: 900,
    loyer_moyen: 730,
    popularite: 3,
    description:
      "Vivre à côté du plus beau parc de Madrid. Quartier résidentiel agréable, familles et jeunes professionnels. Idéal pour les amoureux de la nature.",
    pour: ['Proche du Retiro', 'Calme', 'Beau cadre de vie'],
    contre: ["Moins d'animation nocturne", 'Plus isolé'],
    metros: ['Retiro', 'Ibiza', 'Atocha'],
    bars_emblematiques: ['El Lateral', 'La Dolores', 'Txirimiri'],
    article_lien: '/articles?cat=quartiers',
  },
  {
    id: 'vallecas',
    nom: 'Vallecas',
    emoji: '💰',
    coords: [40.39, -3.66],
    couleur: '#72243E',
    vibe: 'Populaire & Authentique',
    loyer_min: 300,
    loyer_max: 500,
    loyer_moyen: 400,
    popularite: 3,
    description:
      "Le quartier le moins cher de Madrid. Authentique, populaire, loin des clichés touristiques. Idéal si tu veux vivre comme un vrai Madrilène avec un budget serré.",
    pour: ['Très bon marché', 'Authentique', 'Communauté locale chaleureuse'],
    contre: ['Loin du centre', 'Moins de transports'],
    metros: ['Vallecas', 'Buenos Aires', 'Portazgo'],
    bars_emblematiques: ['Bar La Lechuga', 'El Rincón de Vallecas'],
    article_lien: '/articles?cat=quartiers',
  },
]
