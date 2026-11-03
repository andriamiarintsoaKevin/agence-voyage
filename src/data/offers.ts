import type { Offer } from '../types'
import { img } from './images'

export const OFFERS: Offer[] = [
  {
    id: 'santorin-romantique', title: 'Escapade romantique à Santorin', destinationId: 'santorin',
    duration: '7 jours / 6 nuits', days: 7, price: 1490, oldPrice: 1790, badge: 'Coup de cœur', rating: 4.9, reviews: 312,
    image: img('offre-santorin', 900, 640),
    includes: ['Vols aller-retour', 'Hôtel 4 étoiles vue mer', 'Petits-déjeuners', 'Dîner romantique au coucher du soleil'],
  },
  {
    id: 'bali-zen', title: 'Évasion zen à Bali', destinationId: 'bali',
    duration: '10 jours / 9 nuits', days: 10, price: 1890, badge: 'Populaire', rating: 4.8, reviews: 428,
    image: img('offre-bali', 900, 640),
    includes: ['Vols aller-retour', 'Villa avec piscine privée', 'Transferts privés', 'Cours de yoga et massage balinais'],
  },
  {
    id: 'marrakech-weekend', title: 'Week-end à Marrakech', destinationId: 'marrakech',
    duration: '5 jours / 4 nuits', days: 5, price: 690, oldPrice: 840, badge: 'Petit prix', rating: 4.7, reviews: 265,
    image: img('offre-marrakech', 900, 640),
    includes: ['Vols aller-retour', 'Riad de charme en médina', 'Petits-déjeuners', 'Visite guidée des souks'],
  },
  {
    id: 'maldives-luxe', title: 'Séjour de rêve aux Maldives', destinationId: 'maldives',
    duration: '8 jours / 7 nuits', days: 8, price: 2990, badge: 'Luxe', rating: 5.0, reviews: 189,
    image: img('offre-maldives', 900, 640),
    includes: ['Vols aller-retour', 'Villa sur pilotis', 'Demi-pension', 'Transfert en hydravion'],
  },
  {
    id: 'zanzibar-safari', title: 'Plages et safari à Zanzibar', destinationId: 'zanzibar',
    duration: '9 jours / 8 nuits', days: 9, price: 1790, badge: 'Aventure', rating: 4.8, reviews: 154,
    image: img('offre-zanzibar', 900, 640),
    includes: ['Vols aller-retour', 'Hôtel en bord de plage', 'Excursion à Stone Town', 'Sortie en dhow au coucher du soleil'],
  },
  {
    id: 'kyoto-cerisiers', title: 'Kyoto au temps des cerisiers', destinationId: 'kyoto',
    duration: '12 jours / 11 nuits', days: 12, price: 3190, badge: 'Printemps', rating: 4.9, reviews: 207,
    image: img('offre-kyoto', 900, 640),
    includes: ['Vols aller-retour', 'Ryokan traditionnel', 'Cérémonie du thé', 'Pass transport JR'],
  },
]
