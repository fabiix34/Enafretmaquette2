import { Hero } from '@/app/components/Hero';

export function HomePage() {
  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Pourquoi choisir ENA Fret ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue au service de votre logistique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Expertise de 15+ ans</h3>
              <p className="text-gray-600">
                Notre fondateur possède plus de 15 ans d'expérience dans les grands groupes
                logistiques
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Client au centre</h3>
              <p className="text-gray-600">
                Nous plaçons le client au cœur de nos préoccupations pour des solutions
                personnalisées
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Couverture internationale</h3>
              <p className="text-gray-600">
                Solutions de transport routier, maritime et aérien partout dans le monde
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F39C12] to-[#E67E22] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Prêt à optimiser votre logistique ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en transport et logistique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/devis"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Obtenir un devis gratuit
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
