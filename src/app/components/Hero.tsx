import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {

  const navToDevis = () => {
    window.location.href = '/devis';
  }

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1769697756411-63c1bb2d7031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzcwMDQ1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Votre partenaire logistique de confiance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            ENA Fret : Expert en transport et solutions logistiques sur-mesure depuis 2021.
            Nous plaçons nos clients au cœur de nos priorités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={navToDevis}
              size="lg"
              className="bg-[#F39C12] hover:bg-[#E67E22] text-white text-lg px-8 py-6"
            >
              Demander un devis
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
