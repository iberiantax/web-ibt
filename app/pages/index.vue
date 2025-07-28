<script setup lang="ts">
import HeroSection from '~/components/hero/HeroSection.vue';
import CardsHome from '~/components/home/CardsHome.vue';
import HowItWorks from '~/components/home/HowItWorks.vue';
import SuccessCard from '~/components/home/SuccessCard.vue';
import WhyUs from '~/components/home/WhyUs.vue';
import FileNowCard from '~/components/home/FileNowCard.vue';
import PricingPlans from '~/components/home/PricingPlans.vue';
import TrustSection from '~/components/home/TrustSection.vue';
import HappyClients from '~/components/home/HappyClients.vue';
import FAQ from '~/components/home/FAQ.vue';

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

const handleWhyUsCardClick = (index: number, event: MouseEvent) => {
  console.log('WhyUs card clicked:', index, event);
};

const handleFileNowClick = (event: MouseEvent) => {
  console.log('File now button clicked', event);
};

const handleOwnerChange = (index: number) => {
  console.log('Owner changed to:', index);
};

const handlePlanClick = (planIndex: number, event: MouseEvent) => {
  console.log('Plan clicked:', planIndex, event);
};

const handleTrustCardClick = (index: number, event: MouseEvent) => {
  console.log('Trust card clicked:', index, event);
};

const handleHappyClientsCardClick = (index: number, event: MouseEvent) => {
  console.log('Happy clients card clicked:', index, event);
};

const handleReadAllReviews = (event: MouseEvent) => {
  console.log('Read all reviews clicked:', event);
};

const handleFAQAccordionClick = (index: number, event: MouseEvent) => {
  console.log('FAQ accordion clicked:', index, event);
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
    <WhyUs @card-click="handleWhyUsCardClick" />
    <FileNowCard @button-click="handleFileNowClick" />
    <div class="py-8">
      <PricingPlans @owner-change="handleOwnerChange" @plan-click="handlePlanClick" />
    </div>
    <TrustSection @card-click="handleTrustCardClick" />
    <HappyClients
      @card-click="handleHappyClientsCardClick"
      @read-all-reviews="handleReadAllReviews"
    />
    <FAQ @accordion-click="handleFAQAccordionClick" />
  </div>
</template>
