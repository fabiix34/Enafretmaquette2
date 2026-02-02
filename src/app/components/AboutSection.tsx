import { Truck, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Truck,
    value: '3+',
    label: "Années d'expérience",
  },
  {
    icon: Users,
    value: '15+',
    label: "Ans d'expertise du fondateur",
  },
  {
    icon: Award,
    label: 'Service de qualité',
    value: '100%',
  },
  {
    icon: TrendingUp,
    value: '2021',
    label: 'Fondation',
  },
];

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">À propos d'ENA Fret</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                ENA Fret est une entreprise commissionnaire de transport fondée en 2021 par
                Faysal Elkafil, fort de plus de 15 ans d'expérience chez de grands groupes
                logistiques.
              </p>
              <p>
                Notre mission est de placer le client au centre de nos préoccupations en proposant
                des solutions de transport et de logistique sur-mesure, adaptées à chaque besoin
                spécifique.
              </p>
              <p>
                Nous sommes spécialisés dans l'affrètement de moyens de transport routier et
                proposons également des services de conseil et la mise en place de solutions
                logistiques complètes (Overseas et logistique).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-[#F39C12] mx-auto mb-4" />
                  <div className="text-3xl mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
