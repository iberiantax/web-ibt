<script setup lang="ts">
import HeroHome from '~/components/hero/HeroHome.vue';
import CallToAction from '~/components/shared/ui/cta/CallToAction.vue';
import PricingPlans from '~/components/pricing/PricingPlans.vue';
import HappyClients from '~/components/home/HappyClients.vue';
import BaseCard from '~/components/shared/ui/cards/BaseCard.vue';
import SectionTitle from '~/components/shared/ui/sections/SectionTitle.vue';
import { ArrowRight } from 'lucide-vue-next';
import { BaseFeatureCard, BaseLink, BaseStepper } from '~/components/shared/ui';
import BaseSection from '~/components/shared/ui/sections/BaseSection.vue';
import FAQ from '~/components/home/FAQ.vue';

// Importar datos y composables
import { homeSteps, homeFaqs, homeReviews } from '~/data';
import { useFormTypes, useFeatures, useTrustFeatures } from '~/composables';

// Usar composables
const { formTypes } = useFormTypes();
const { features } = useFeatures();
const { trustFeatures } = useTrustFeatures();

defineOptions({
  name: 'HomePage',
});
</script>

<template>
  <div>
    <hero-home />

    <base-section>
      <section-title title="Types of Form 210" />
      <div class="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <base-card
          v-for="formType in formTypes"
          :key="formType.title"
          :icon="formType.icon"
          :title="formType.title"
          :description="formType.description"
          :button-text="formType.buttonText"
        />
      </div>
      <div class="text-center">
        <base-link
          text="Find your Form 210"
          :icon="ArrowRight"
          href="#"
          variant="primary-outline"
          :external="false"
        >
          Find your Form 210
        </base-link>
      </div>
    </base-section>

    <base-section classes="py-8 mx-auto px-4 sm:px-6 lg:px-8">
      <section-title title="How it works?" />

      <BaseStepper :steps="homeSteps" :show-checkmark="true" />
    </base-section>

    <base-section>
      <call-to-action
        title="You've successfully filed your taxes!"
        description="It takes less than 10 minutes to file your declaration with Spanish tax authorities"
        button-text="Get started"
        button-link="#"
        :icon="ArrowRight"
      />
    </base-section>

    <base-section>
      <section-title title="Why us?" />
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BaseFeatureCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </base-section>

    <base-section classes="-mx-6 bg-blue-700 py-16 md:-mx-36 bg-blue-700">
      <div class="mx-auto px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <div class="mx-auto px-6 md:px-36">
          <section-title title="Which plan is right for you?" title-variant="white" />
        </div>
        <div class="mx-auto px-6 md:px-36">
          <pricing-plans />
        </div>
      </div>
    </base-section>

    <base-section classes="pt-20 pb-20 mx-auto px-4 sm:px-6 lg:px-8">
      <section-title title="Trust that your non-resident taxes are accurate" />
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-2">
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <BaseFeatureCard
            v-for="trustFeature in trustFeatures"
            :key="trustFeature.title"
            :icon="trustFeature.icon"
            :title="trustFeature.title"
            :description="trustFeature.description"
          />
        </div>
        <div class="flex items-center justify-center">
          <div class="relative h-[350px] w-full">
            <img
              src="/images/hero/FrameHero.png"
              alt="Modern living room interior with warm tones, plants, and contemporary furniture"
              class="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </base-section>

    <base-section>
      <section-title title="Happy Clients" />
      <happy-clients :reviews="homeReviews" />
    </base-section>

    <base-section>
      <section-title title="Frequently Asked Questions" />
      <FAQ :faqs="homeFaqs" />
    </base-section>
  </div>
</template>
