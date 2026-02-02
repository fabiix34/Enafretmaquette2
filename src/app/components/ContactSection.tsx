import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600">
            Notre équipe est à votre disposition pour répondre à vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#F39C12]" />
            </div>
            <h3 className="text-xl mb-2">Téléphone</h3>
            <p className="text-gray-600">
              <a href="tel:+33123456789" className="hover:text-[#F39C12] transition-colors">
                +33 1 23 45 67 89
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">Lun-Ven : 9h-18h</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#F39C12]" />
            </div>
            <h3 className="text-xl mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:contact@enafret.com"
                className="hover:text-[#F39C12] transition-colors"
              >
                contact@enafret.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#F39C12]" />
            </div>
            <h3 className="text-xl mb-2">Adresse</h3>
            <p className="text-gray-600">France</p>
            <p className="text-sm text-gray-500 mt-2">Couverture nationale et internationale</p>
          </div>
        </div>
      </div>
    </section>
  );
}
