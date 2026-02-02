import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { toast } from 'sonner';

interface QuoteFormData {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  typeService: string;
  description: string;
}

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>();
  const [serviceType, setServiceType] = useState('');

  const onSubmit = (data: QuoteFormData) => {
    // In a real application, this would send the data to a backend
    // For now, we'll create a mailto link with the form data
    const subject = `Demande de devis - ${data.typeService || 'Service non spécifié'}`;
    const body = `
Nom: ${data.nom}
Entreprise: ${data.entreprise}
Email: ${data.email}
Téléphone: ${data.telephone}
Type de service: ${data.typeService}

Description:
${data.description}
    `.trim();

    const mailtoLink = `mailto:contact@enafret.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast.success('Votre demande de devis a été préparée. Votre client email va s\'ouvrir.');
    reset();
    setServiceType('');
  };

  return (
    <section id="devis" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Demander un devis</h2>
          <p className="text-xl text-gray-300">
            Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-xl p-8 text-gray-900"
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
              <Label htmlFor="entreprise">Entreprise *</Label>
              <Input
                id="entreprise"
                {...register('entreprise', { required: 'Ce champ est requis' })}
                className="mt-2"
                placeholder="Nom de votre entreprise"
              />
              {errors.entreprise && (
                <p className="text-red-500 text-sm mt-1">{errors.entreprise.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
          </div>

          <div className="mb-6">
            <Label htmlFor="typeService">Type de service *</Label>
            <Select
              value={serviceType}
              onValueChange={(value) => {
                setServiceType(value);
                register('typeService').onChange({ target: { value } });
              }}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transport-routier">Transport routier</SelectItem>
                <SelectItem value="transport-maritime">Transport maritime</SelectItem>
                <SelectItem value="transport-aerien">Transport aérien</SelectItem>
                <SelectItem value="logistique">Gestion logistique</SelectItem>
                <SelectItem value="conseil">Conseil logistique</SelectItem>
                <SelectItem value="overseas">Solutions overseas</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" {...register('typeService', { required: true })} />
            {errors.typeService && (
              <p className="text-red-500 text-sm mt-1">Veuillez sélectionner un service</p>
            )}
          </div>

          <div className="mb-6">
            <Label htmlFor="description">Description de votre besoin *</Label>
            <Textarea
              id="description"
              {...register('description', { required: 'Ce champ est requis' })}
              className="mt-2 min-h-[150px]"
              placeholder="Décrivez-nous votre besoin en détail : marchandises, origine, destination, délais..."
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white text-lg py-6"
          >
            Envoyer ma demande de devis
          </Button>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Champs obligatoires. Vos données sont traitées de manière confidentielle.
          </p>
        </form>
      </div>
    </section>
  );
}
