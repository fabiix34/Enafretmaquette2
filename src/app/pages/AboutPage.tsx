import { AboutSection } from '@/app/components/AboutSection';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">À propos d'ENA Fret</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Votre partenaire logistique de confiance depuis 2021
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#F39C12]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl mb-4">Notre vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le partenaire logistique de référence en France et en Europe, reconnu pour
                l'excellence de nos services et notre capacité à proposer des solutions innovantes
                et personnalisées à chaque client.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#F39C12]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl mb-4">Notre mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Accompagner nos clients dans l'optimisation de leur chaîne logistique en leur
                offrant des solutions de transport fiables, flexibles et compétitives. Nous nous
                engageons à placer le client au cœur de nos préoccupations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident notre action au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-lg mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                Nous visons l'excellence dans chaque aspect de notre service
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-lg mb-2">Confiance</h3>
              <p className="text-sm text-gray-600">
                Relations durables basées sur la transparence et l'honnêteté
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-lg mb-2">Réactivité</h3>
              <p className="text-sm text-gray-600">
                Réponse rapide et adaptée à vos besoins urgents
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Solutions modernes et innovantes pour optimiser votre logistique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F39C12] to-[#E67E22] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Découvrez comment ENA Fret peut optimiser votre chaîne logistique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/devis')}
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Demander un devis
            </Button>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
