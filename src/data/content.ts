import type { FaqItem, Feature, Stat, Step, TeamMember, Testimonial } from '../types'
import { img } from './images'

export const FEATURES: Feature[] = [
  { icon: 'Sparkles', title: 'Voyages 100 % sur mesure', text: 'Chaque itinéraire est construit selon vos envies, votre rythme et votre budget. Pas de circuit standard.' },
  { icon: 'Headset', title: 'Un conseiller dédié', text: 'Un expert unique vous accompagne avant, pendant et après votre voyage, par téléphone ou WhatsApp.' },
  { icon: 'Wallet', title: 'Prix transparents', text: 'Vous connaissez le prix final dès le devis. Aucun frais caché, aucune mauvaise surprise.' },
  { icon: 'ShieldCheck', title: 'Réservation sécurisée', text: 'Paiement en plusieurs fois, garantie financière et assistance en cas d’imprévu.' },
  { icon: 'Compass', title: 'Adresses testées', text: 'Nous sélectionnons chaque hôtel, guide et activité après l’avoir testé sur place.' },
  { icon: 'Clock', title: 'Assistance 24h/24', text: 'Un problème à l’étranger ? Notre équipe vous répond à toute heure, tous les jours.' },
]

export const STEPS: Step[] = [
  { title: 'Parlez-nous de votre rêve', text: 'Remplissez notre formulaire ou appelez-nous. Dites-nous où, quand et avec qui vous voulez partir.' },
  { title: 'Recevez votre devis gratuit', text: 'Sous 24 heures, votre conseiller vous envoie un programme détaillé et un prix clair.' },
  { title: 'Ajustez et réservez', text: 'Modifiez chaque détail jusqu’à ce que le voyage soit parfait, puis réservez en toute sécurité.' },
  { title: 'Partez l’esprit léger', text: 'Recevez votre carnet de voyage et profitez. Nous restons joignables pendant tout votre séjour.' },
]

export const STATS: Stat[] = [
  { value: '12 000+', label: 'voyageurs heureux' },
  { value: '15 ans', label: 'd’expérience' },
  { value: '60+', label: 'destinations' },
  { value: '98 %', label: 'de clients satisfaits' },
]

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Camille & Thomas', trip: 'Escapade à Santorin', rating: 5, avatar: img('avatar1', 120, 120), text: 'Un voyage de noces parfait. Chaque détail était pensé, de l’hôtel au dîner face au coucher du soleil. Nous reviendrons !' },
  { id: 't2', name: 'Sophie Martin', trip: 'Évasion zen à Bali', rating: 5, avatar: img('avatar2', 120, 120), text: 'Mon conseiller a compris mes envies dès le premier appel. Bali était exactement le voyage dont j’avais besoin.' },
  { id: 't3', name: 'Karim Benali', trip: 'Week-end à Marrakech', rating: 5, avatar: img('avatar3', 120, 120), text: 'Réservation simple, prix honnête et un riad magnifique. Une équipe réactive et très professionnelle.' },
  { id: 't4', name: 'Famille Dupont', trip: 'Plages et safari à Zanzibar', rating: 5, avatar: img('avatar4', 120, 120), text: 'Les enfants ont adoré le safari et les plages. Tout était organisé, nous n’avons eu à penser à rien.' },
]

export const FAQS: FaqItem[] = [
  { question: 'Comment obtenir un devis ?', answer: 'Remplissez le formulaire de la page Contact ou écrivez-nous sur WhatsApp. Vous recevez votre devis gratuit et sans engagement sous 24 heures.' },
  { question: 'Puis-je modifier mon voyage après la réservation ?', answer: 'Oui. Selon les conditions de chaque prestataire, vous pouvez modifier les dates ou les services. Votre conseiller vous indique les options et les éventuels frais avant toute modification.' },
  { question: 'Comment puis-je payer ?', answer: 'Vous payez par carte bancaire ou par virement. Un acompte confirme la réservation, et le solde se règle plus tard, en une ou plusieurs fois.' },
  { question: 'Mon voyage est-il garanti ?', answer: 'Oui. Nous protégeons vos paiements grâce à une garantie financière, et nous vous accompagnons en cas d’imprévu.' },
  { question: 'Organisez-vous des voyages en groupe ou en famille ?', answer: 'Oui. Nous créons des voyages pour les couples, les familles, les groupes d’amis et les entreprises, avec des activités adaptées à chacun.' },
  { question: 'Que faire si j’ai un problème pendant mon voyage ?', answer: 'Contactez notre assistance, disponible 24h/24. Nous trouvons une solution rapidement, où que vous soyez.' },
]

export const TEAM: TeamMember[] = [
  { name: 'Léa Fontaine', role: 'Fondatrice & directrice', bio: 'Passionnée de voyages depuis 20 ans, elle a créé Horizon Voyages pour rendre l’aventure accessible à tous.', photo: img('team1', 400, 400) },
  { name: 'Mehdi Rahal', role: 'Conseiller Afrique & Moyen-Orient', bio: 'Il connaît chaque riad, chaque désert et chaque marché du continent.', photo: img('team2', 400, 400) },
  { name: 'Aiko Tanaka', role: 'Conseillère Asie', bio: 'Elle compose des itinéraires authentiques entre traditions et modernité.', photo: img('team3', 400, 400) },
  { name: 'Lucas Perrin', role: 'Conseiller Europe & Îles', bio: 'Spécialiste des escapades et des séjours en bord de mer.', photo: img('team4', 400, 400) },
]
