import { MessageCircle } from 'lucide-react'
import { SITE } from '../../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsappNumber}?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20un%20voyage.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 focus-visible:ring-4 focus-visible:ring-green-200"
    >
      <MessageCircle size={28} />
    </a>
  )
}
