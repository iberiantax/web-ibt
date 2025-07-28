<script setup lang="ts">
import HeroSection from '~/components/hero/HeroSection.vue';
import CardsHome from '~/components/home/CardsHome.vue';
import HowItWorks from '~/components/home/HowItWorks.vue';
import SuccessCard from '~/components/home/SuccessCard.vue';

defineOptions({
  name: 'HomePage',
});

// Datos de ejemplo para las cards
const form210Cards = [
  {
    title: 'Imputed income',
    description: 'Standard income tax declaration for non-resident property owners in Spain.',
    buttonText: 'More info',
  },
  {
    title: 'Rental income',
    description: 'Rental income declaration for properties that generate rental income.',
    buttonText: 'More info',
  },
  {
    title: 'Capital Gains',
    description: 'Capital gains tax for property sales or other capital gains.',
    buttonText: 'More info',
  },
];

const handleCardClick = (index: number, event: MouseEvent) => {
  console.log('Card clicked:', index, event);
};

const handleBottomButtonClick = (event: MouseEvent) => {
  console.log('Bottom button clicked:', event);
};

const handleSuccessCardClick = (event: MouseEvent) => {
  console.log('Success card button clicked', event);
};
</script>

<template>
  <div>
    <HeroSection />
    <CardsHome
      title="Types of Form 210"
      :cards="form210Cards"
      bottom-button-text="Find your Form 210"
      bottom-button-variant="outline"
      @card-click="handleCardClick"
      @bottom-button-click="handleBottomButtonClick"
    />
    <HowItWorks />
    <SuccessCard @button-click="handleSuccessCardClick" />
  </div>
</template>
