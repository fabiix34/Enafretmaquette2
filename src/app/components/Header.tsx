import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/baa9451616b1b045473e272ca1ff972eb90f2556.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="ENA Fret" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                isActive('/services') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              Services
            </Link>
            <Link
              to="/a-propos"
              className={`transition-colors ${
                isActive('/a-propos') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              Contact
            </Link>
            <Link to="/devis">
              <Button className="bg-[#F39C12] hover:bg-[#E67E22] text-white">
                Demander un devis
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left transition-colors py-2 ${
                isActive('/') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left transition-colors py-2 ${
                isActive('/services') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              Services
            </Link>
            <Link
              to="/a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left transition-colors py-2 ${
                isActive('/a-propos') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left transition-colors py-2 ${
                isActive('/contact') ? 'text-[#F39C12]' : 'text-gray-700 hover:text-[#F39C12]'
              }`}
            >
              Contact
            </Link>
            <Link to="/devis" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white">
                Demander un devis
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
