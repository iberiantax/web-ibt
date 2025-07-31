import { Check, Calculator, Save, Landmark } from 'lucide-vue-next';

export interface TrustFeature {
  icon: any;
  title: string;
  description: string;
}

export const useTrustFeatures = () => {
  const trustFeatures: TrustFeature[] = [
    {
      icon: Check,
      title: 'Verification of the entries',
      description:
        'We verify the accuracy and completeness of all data entered in Form 210 to ensure compliance with Spanish tax regulations.',
    },
    {
      icon: Calculator,
      title: 'Automatic calculations',
      description:
        'Automatic calculation of tax liability according to Spanish Tax Law, ensuring accurate and up-to-date calculations.',
    },
    {
      icon: Save,
      title: 'Auto-save progress',
      description:
        'Your non-resident tax progress is automatically saved, allowing you to complete your filing at your own pace.',
    },
    {
      icon: Landmark,
      title: 'Certified by Agencia Tributaria',
      description:
        'IberianTax is certified by Agencia Tributaria to submit taxes on behalf of users, ensuring official compliance.',
    },
  ];

  return {
    trustFeatures,
  };
};
