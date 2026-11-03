import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../../data/site'
import logoImage from '../../assets/horizon-logo.png'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-page py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-xl bg-white p-2">
              <img src={logoImage} alt="Horizon Voyages" className="h-14 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm text-primary-200">
              Des voyages sur mesure, préparés avec passion. Votre conseiller dédié vous accompagne de l’idée au retour.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium text-white">
              <a href="#" className="hover:text-primary-300">Facebook</a>
              <a href="#" className="hover:text-primary-300">Instagram</a>
              <a href="#" className="hover:text-primary-300">YouTube</a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-200">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Destinations populaires</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-200">
              {['Santorin', 'Bali', 'Marrakech', 'Maldives', 'Kyoto'].map((destination) => (
                <li key={destination}>
                  <Link to="/destinations" className="hover:text-white">{destination}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm text-primary-200">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-300" />
                <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-300" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary-300" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-700 pt-6 text-center text-xs text-primary-300">
          © {SITE.year} Horizon Voyages. Tous droits réservés. · <a href="#" className="hover:text-white">Mentions légales</a> · <a href="#" className="hover:text-white">Conditions générales de vente</a> · <a href="#" className="hover:text-white">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
