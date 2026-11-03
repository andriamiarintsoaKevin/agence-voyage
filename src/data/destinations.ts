import type { Destination } from '../types'
import { img } from './images'

export const REGIONS = ['Toutes', 'Europe', 'Asie', 'Afrique', 'Îles', 'Amériques'] as const

export const DESTINATIONS: Destination[] = [
  { id: 'santorin', name: 'Santorin', country: 'Grèce', region: 'Europe', tagline: 'Villages blancs, dômes bleus et couchers de soleil inoubliables.', image: img('santorin', 800, 1000), priceFrom: 1490 },
  { id: 'lisbonne', name: 'Lisbonne', country: 'Portugal', region: 'Europe', tagline: 'Tramways, azulejos et douceur de vivre au bord du Tage.', image: img('lisbonne', 800, 1000), priceFrom: 790 },
  { id: 'bali', name: 'Bali', country: 'Indonésie', region: 'Asie', tagline: 'Rizières, temples et plages pour se ressourcer.', image: img('bali', 800, 1000), priceFrom: 1890 },
  { id: 'kyoto', name: 'Kyoto', country: 'Japon', region: 'Asie', tagline: 'Temples millénaires, jardins zen et cerisiers en fleurs.', image: img('kyoto', 800, 1000), priceFrom: 3190 },
  { id: 'marrakech', name: 'Marrakech', country: 'Maroc', region: 'Afrique', tagline: 'Souks colorés, riads secrets et saveurs épicées.', image: img('marrakech', 800, 1000), priceFrom: 690 },
  { id: 'zanzibar', name: 'Zanzibar', country: 'Tanzanie', region: 'Afrique', tagline: 'Sable blanc, eau turquoise et safari à portée de main.', image: img('zanzibar', 800, 1000), priceFrom: 1790 },
  { id: 'maldives', name: 'Maldives', country: 'Océan Indien', region: 'Îles', tagline: 'Villas sur pilotis et lagons cristallins.', image: img('maldives', 800, 1000), priceFrom: 2990 },
  { id: 'costa-rica', name: 'Costa Rica', country: 'Amérique centrale', region: 'Amériques', tagline: 'Jungle luxuriante, volcans et faune extraordinaire.', image: img('costarica', 800, 1000), priceFrom: 2290 },
]
