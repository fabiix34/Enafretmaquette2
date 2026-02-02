import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { Truck, Ship, Plane, Package, Users, Globe } from 'lucide-react';

interface ServiceDetail {
  icon: any;
  title: string;
  image: string;
  description: string;
  features: string[];
}

const transportServices: ServiceDetail[] = [
  {
    icon: Truck,
    title: 'Transport routier',
    image: 'https://images.unsplash.com/photo-1769697756411-63c1bb2d7031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGhpZ2h3YXklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzcwMDQ1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Affrètement de moyens de transport routier adaptés à tous vos besoins',
    features: [
      'Transport national et européen',
      'Tous types de marchandises',
      'Suivi en temps réel',
      'Solutions sur-mesure',
    ],
  },
  {
    icon: Ship,
    title: 'Transport maritime',
    image: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzAwNDUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Solutions de transport maritime pour vos expéditions internationales',
    features: [
      'Import & Export',
      'Conteneurs FCL & LCL',
      'Dédouanement inclus',
      'Couverture mondiale',
    ],
  },
  {
    icon: Plane,
    title: 'Transport aérien',
    image: 'https://images.unsplash.com/photo-1718365960352-6c07fc217ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBsYW5lJTIwYWlycG9ydCUyMGZyZWlnaHR8ZW58MXx8fHwxNzcwMDQ1Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Transport aérien express pour vos envois urgents et sensibles',
    features: [
      'Livraison rapide',
      'Fret sécurisé',
      'Express & Standard',
      'Toutes destinations',
    ],
  },
];

const logisticsServices: ServiceDetail[] = [
  {
    icon: Package,
    title: 'Gestion de la supply chain',
    image: 'https://images.unsplash.com/photo-1703227373720-cff89520dd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBvcGVyYXRpb258ZW58MXx8fHwxNzcwMDQ1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Optimisation complète de votre chaîne logistique de bout en bout',
    features: [
      'Analyse des flux',
      'Optimisation des coûts',
      'Gestion des stocks',
      'Reporting détaillé',
    ],
  },
  {
    icon: Users,
    title: 'Conseil logistique',
    image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5OTkyNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Accompagnement expert pour développer votre stratégie logistique',
    features: [
      'Audit logistique',
      'Recommandations sur-mesure',
      'Formation équipes',
      'Suivi & optimisation',
    ],
  },
  {
    icon: Globe,
    title: 'Solutions overseas',
    image: 'https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzAwNDUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Solutions logistiques internationales complètes et intégrées',
    features: [
      'Coordination internationale',
      'Multi-modal',
      'Douane & réglementation',
      'Traçabilité complète',
    ],
  },
];

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState('transport');
  const navigate = useNavigate();

  const currentServices = activeTab === 'transport' ? transportServices : logisticsServices;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Nos services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions de transport et logistique complètes, adaptées à vos besoins spécifiques
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110 duration-500"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg
                            className="w-5 h-5 text-[#F39C12] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => navigate('/devis')}
                        className="flex-1 bg-[#F39C12] hover:bg-[#E67E22] text-white"
                      >
                        Demander un devis
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Besoin d'une solution personnalisée ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos experts sont à votre disposition pour vous conseiller
          </p>
          <Button
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-[#F39C12] hover:bg-[#E67E22] text-white text-lg px-8 py-6"
          >
            Parler à un expert
          </Button>
        </div>
      </section>
    </div>
  );
}
