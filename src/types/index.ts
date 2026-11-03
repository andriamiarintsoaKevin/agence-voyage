export type Region = 'Europe' | 'Asie' | 'Afrique' | 'Îles' | 'Amériques'

export interface Destination {
  id: string
  name: string
  country: string
  region: Region
  tagline: string
  image: string
  priceFrom: number
}

export interface Offer {
  id: string
  title: string
  destinationId: string
  duration: string
  days: number
  price: number
  oldPrice?: number
  badge: string
  rating: number
  reviews: number
  image: string
  includes: string[]
}

export interface Testimonial {
  id: string
  name: string
  trip: string
  text: string
  rating: number
  avatar: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
}

export interface Feature {
  icon: 'ShieldCheck' | 'Wallet' | 'Headset' | 'Sparkles' | 'Compass' | 'Clock'
  title: string
  text: string
}

export interface Step {
  title: string
  text: string
}

export interface Stat {
  value: string
  label: string
}
