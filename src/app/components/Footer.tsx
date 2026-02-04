import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logoImage} alt="ENA Fret" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 max-w-md">
              Votre partenaire logistique de confiance depuis 2021. Solutions de transport et
              logistique sur-mesure pour tous vos besoins.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-[#F39C12] transition-colors">
                  Transport routier
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F39C12] transition-colors">
                  Transport maritime
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F39C12] transition-colors">
                  Transport aérien
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F39C12] transition-colors">
                  Conseil logistique
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/a-propos" className="hover:text-[#F39C12] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F39C12] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/devis" className="hover:text-[#F39C12] transition-colors">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ENA Fret. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#F39C12] transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-[#F39C12] transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
