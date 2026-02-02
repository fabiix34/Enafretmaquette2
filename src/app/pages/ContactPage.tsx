import { ContactSection } from '@/app/components/ContactSection';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';

interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

export function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const subject = `Contact - ${data.sujet}`;
    const body = `
Nom: ${data.nom}
Email: ${data.email}
Téléphone: ${data.telephone}
Sujet: ${data.sujet}

Message:
${data.message}
    `.trim();

    const mailtoLink = `mailto:contact@enafret.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast.success('Votre message a été préparé. Votre client email va s\'ouvrir.');
    reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <ContactSection />

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Envoyez-nous un message</h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-50 rounded-2xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="nom">Nom et prénom *</Label>
                <Input
                  id="nom"
                  {...register('nom', { required: 'Ce champ est requis' })}
                  className="mt-2"
                  placeholder="Votre nom complet"
                />
                {errors.nom && (
                  <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Ce champ est requis',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email invalide',
                    },
                  })}
                  className="mt-2"
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="telephone">Téléphone *</Label>
                <Input
                  id="telephone"
                  {...register('telephone', { required: 'Ce champ est requis' })}
                  className="mt-2"
                  placeholder="+33 6 12 34 56 78"
                />
                {errors.telephone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telephone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="sujet">Sujet *</Label>
                <Input
                  id="sujet"
                  {...register('sujet', { required: 'Ce champ est requis' })}
                  className="mt-2"
                  placeholder="Sujet de votre demande"
                />
                {errors.sujet && (
                  <p className="text-red-500 text-sm mt-1">{errors.sujet.message}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                {...register('message', { required: 'Ce champ est requis' })}
                className="mt-2 min-h-[200px]"
                placeholder="Décrivez votre demande..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white text-lg py-6"
            >
              Envoyer le message
            </Button>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Champs obligatoires. Nous vous répondrons sous 24h.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
