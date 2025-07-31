import { Clock, Star, Calculator, CreditCard, Locate, ShieldCheck } from 'lucide-vue-next';

export interface Feature {
  icon: any;
  title: string;
  description: string;
}

export const useFeatures = () => {
  const features: Feature[] = [
    {
      icon: Clock,
      title: 'Quick',
      description:
        'Create an account for free and start right away. File your Form 210 online within less than 10 minutes.',
    },
    {
      icon: Star,
      title: 'Simple',
      description:
        'Questionnaire based, data entry form, with step-by-step guidance. No tax knowledge required.',
    },
    {
      icon: Calculator,
      title: 'Low cost',
      description:
        "Cheaper than any Tax Consultant or Accountant, who's prices can cost around 120€. Our service costs from only 34.95€!",
    },
    {
      icon: CreditCard,
      title: 'Online payment',
      description:
        'No need to be in Spain. You can file your 210 Form online anywhere, anytime. We also offer 3 different payment methods to finish you tax returns.',
    },
    {
      icon: Locate,
      title: 'Accurate',
      description:
        'Our software has been developed by tax experts with years of experience filing non-resident taxes in Spain and has in-built checkers to ensure 100% accuracy.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure',
      description:
        'We use data encryption to ensure the highest level of security. All of your private information is securely saved and we also offer secure payment options.',
    },
  ];

  return {
    features,
  };
};
