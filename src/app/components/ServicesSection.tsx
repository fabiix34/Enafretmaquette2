import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

interface ServiceCard {
  title: string;
  image: string;
  description: string;
}

const transportServices: ServiceCard[] = [
  {
    title: 'Transport maritime',
    image: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzAwNDUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Solutions de transport maritime pour vos marchandises internationales',
  },
  {
    title: 'Transport aérien',
    image: 'https://images.unsplash.com/photo-1718365960352-6c07fc217ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBsYW5lJTIwYWlycG9ydCUyMGZyZWlnaHR8ZW58MXx8fHwxNzcwMDQ1Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Transport aérien rapide et sécurisé pour vos envois urgents',
  },
  {
    title: 'Transport routier',
    image: 'https://images.unsplash.com/photo-1769697756411-63c1bb2d7031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzcwMDQ1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Affrètement routier sur-mesure pour tous vos besoins',
  },
];

const logisticsServices: ServiceCard[] = [
  {
    title: 'Gestion de la supply chain',
    image: 'https://images.unsplash.com/photo-1703227373720-cff89520dd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBvcGVyYXRpb258ZW58MXx8fHwxNzcwMDQ1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Optimisation complète de votre chaîne logistique',
  },
  {
    title: 'Conseil logistique',
    image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5OTkyNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Expertise et conseils pour vos solutions logistiques',
  },
  {
    title: 'Solutions overseas',
    image: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzAwNDUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Solutions logistiques internationales complètes',
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState('transport');

  const scrollToDevis = () => {
    const element = document.getElementById('devis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentServices = activeTab === 'transport' ? transportServices : logisticsServices;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Nos services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions logistiques complètes adaptées à vos besoins
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white border border-gray-200">
            <TabsTrigger
              value="transport"
              className="data-[state=active]:bg-[#F39C12] data-[state=active]:text-white"
            >
              Transport
            </TabsTrigger>
            <TabsTrigger
              value="logistics"
              className="data-[state=active]:bg-[#F39C12] data-[state=active]:text-white"
            >
              Logistique & Conseil
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px] transition-transform hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110 duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6 text-sm">{service.description}</p>
                <div className="flex gap-3">
                  <Button
                    onClick={scrollToDevis}
                    variant="default"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    En savoir plus
                  </Button>
                  <Button
                    onClick={scrollToDevis}
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Parlez à un expert
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
