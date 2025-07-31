import { Home, KeyRound, Building } from 'lucide-vue-next';

export interface FormType {
  icon: any;
  title: string;
  description: string;
  buttonText: string;
}

export const useFormTypes = () => {
  const formTypes: FormType[] = [
    {
      icon: Home,
      title: 'Imputed Income',
      description: 'Standard income tax declaration for non-resident property owners in Spain.',
      buttonText: 'More info',
    },
    {
      icon: KeyRound,
      title: 'Rental Income',
      description: 'Rental income declaration for properties that generate rental income.',
      buttonText: 'More info',
    },
    {
      icon: Building,
      title: 'Capital Gains',
      description: 'Capital gains tax for property sales or other capital gains.',
      buttonText: 'More info',
    },
  ];

  return {
    formTypes,
  };
};
