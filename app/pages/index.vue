<script setup lang="ts">
import HeroHome from '~/components/hero/HeroHome.vue';
import CallToAction from '~/components/shared/ui/cta/CallToAction.vue';
import PricingPlans from '~/components/pricing/PricingPlans.vue';
import HappyClients from '~/components/home/HappyClients.vue';
import BaseCard from "~/components/shared/ui/cards/BaseCard.vue";
import SectionTitle from "~/components/shared/ui/sections/SectionTitle.vue";
import {
  Home,
  KeyRound,
  Building,
  ArrowRight,
  Clock,
  Star,
  Calculator,
  CreditCard,
  Locate,
  ShieldCheck,
  Check,
  Save,
  Landmark
} from "lucide-vue-next";
import {BaseFeatureCard, BaseLink, BaseStepper} from "~/components/shared/ui";
import BaseSection from "~/components/shared/ui/sections/BaseSection.vue";
import type {Faq} from "~/interfaces/faq.interface";
import FAQ from "~/components/home/FAQ.vue";
import type {Step} from "~/interfaces/step.interface";
import type {Review} from "~/interfaces/review.interface";

const steps: Step[] = [
  {
    number: 1,
    time: '10 seconds',
    title: 'Register for free',
    description:
        'Create an account in seconds. No credit card required. Fill in your personal details.',
  },
  {
    number: 2,
    time: '10 seconds',
    title: 'Fill out your information',
    description: 'Answer a few simple questions about your property and ownership details.',
  },
  {
    number: 3,
    time: '10 seconds',
    title: 'Choose filing and payment method',
    description: 'Answer a few simple questions about your property and ownership details.',
  },
];
const faqs: Faq[] = [
  {
    question: 'Do I need to pay non-resident tax?',
    answer:
        'Yes, if you own property in Spain but are not a resident, you are required to pay non-resident tax (Form 210) annually. This applies to both rental income and imputed income from your property.',
  },
  {
    question: 'Do I need to pay tax on my Spanish property?',
    answer:
        'Yes, Spanish property owners who are non-residents must pay annual property taxes. This includes imputed income tax (even if the property is not rented) and rental income tax if the property generates rental income.',
  },
  {
    question: 'Can I file my non-resident tax online?',
    answer:
        'Yes! IberianTax allows you to file your non-resident tax completely online. Our platform guides you through the process step-by-step, making it simple and secure.',
  },
  {
    question: 'What do I need to get started?',
    answer:
        'To get started, you need your property details, personal information, and any rental income documentation if applicable. Our platform will guide you through all the required information.',
  },
  {
    question: 'Can I pay my non-resident tax online?',
    answer:
        'Yes, IberianTax offers secure online payment options. You can pay using credit card, bank transfer, or other digital payment methods directly through our platform.',
  },
  {
    question: 'Do I have to pay tax on my Spanish property?',
    answer:
        'Yes, as a non-resident property owner in Spain, you are legally required to pay annual taxes on your property. This includes both imputed income tax and rental income tax if applicable.',
  },
];
const reviews: Review[] = [
  {
    rating: 4.5,
    description:
        'I have previously used other people to file my taxes in Spain, however they have made errors and I have had to pay penalties. IberianTax was very professional and accurate.',
    author: 'Sarah Johnson',
  },
  {
    rating: 5.0,
    description:
        'Excellent service! The process was very simple and straightforward. I saved a lot of money compared to hiring a local accountant.',
    author: 'Michael Chen',
  },
  {
    rating: 2.8,
    description:
        'Very reliable and professional service. They helped me understand the tax process and everything was completed on time.',
    author: 'Emma Rodriguez',
  },
  {
    rating: 4.7,
    description:
        'Great experience with IberianTax. The online platform is easy to use and their customer support is very helpful.',
    author: 'David Thompson',
  },
  {
    rating: 4.9,
    description:
        'I was worried about filing taxes as a non-resident, but IberianTax made it very simple and stress-free.',
    author: 'Lisa Anderson',
  },
  {
    rating: 4.6,
    description:
        'Highly recommend! The service is affordable and the team is very knowledgeable about Spanish tax regulations.',
    author: 'Robert Wilson',
  },
];

defineOptions({
  name: 'HomePage',
});

</script>

<template>
  <div>
    <hero-home/>

    <base-section>
      <section-title title="Types of Form 210"/>
      <div class="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <base-card
            :icon="Home"
            title="Imputed Income"
            description="Standard income tax declaration for non-resident property owners in Spain."
            button-text="More info"
        />
        <base-card
            :icon="KeyRound"
            title="Rental Income"
            description="Rental income declaration for properties that generate rental income."
            button-text="More info"
        />
        <base-card
            :icon="Building"
            title="Capital Gains"
            description="Capital gains tax for property sales or other capital gains."
            button-text="More info"
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
      <section-title title="How it works?"/>

      <BaseStepper
          :steps="steps"
          :show-checkmark="true"
      />
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
      <section-title title="Why us?"/>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BaseFeatureCard
            :icon="Clock"
            title="Quick"
            description="Create an account for free and start right away. File your Form 210 online within less than 10 minutes."
        />
        <BaseFeatureCard
            :icon="Star"
            title="Simple"
            description="Questionnaire based, data entry form, with step-by-step guidance. No tax knowledge required."
        />
        <BaseFeatureCard
            :icon="Calculator"
            title="Low cost"
            description="Cheaper than any Tax Consultant or Accountant, who's prices can cost around 120€. Our service costs from only 34.95€!"
        />
        <BaseFeatureCard
            :icon="CreditCard"
            title="Online payment"
            description="No need to be in Spain. You can file your 210 Form online anywhere, anytime. We also offer 3 different payment methods to finish you tax returns."
        />
        <BaseFeatureCard
            :icon="Locate"
            title="Accurate"
            description="Our software has been developed by tax experts with years of experience filing non-resident taxes in Spain and has in-built checkers to ensure 100% accuracy."
        />
        <BaseFeatureCard
            :icon="ShieldCheck"
            title="Secure"
            description="We use data encryption to ensure the highest level of security. All of your private information is securely saved and we also offer secure payment options."
        />
      </div>
    </base-section>

    <base-section classes="-mx-6 bg-blue-700 py-16 md:-mx-36 bg-blue-700">
      <div class="pt-8 pb-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto px-6 md:px-36">
          <section-title
              title="Which plan is right for you?"
              title-variant="white"
          />
        </div>
        <div class="mx-auto px-6 md:px-36">
          <pricing-plans/>
        </div>
      </div>
    </base-section>

    <base-section classes="pt-20 pb-20 mx-auto px-4 sm:px-6 lg:px-8">
      <section-title title="Trust that your non-resident taxes are accurate"/>
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-2">
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <BaseFeatureCard
              :icon="Check"
              title="Verification of the entries"
              description="We verify the accuracy and completeness of all data entered in Form 210 to ensure compliance with Spanish tax regulations."
          />
          <BaseFeatureCard
              :icon="Calculator"
              title="Verification of the entries"
              description="Automatic calculation of tax liability according to Spanish Tax Law, ensuring accurate and up-to-date calculations."
          />
          <BaseFeatureCard
              :icon="Save"
              title="Verification of the entries"
              description="Your non-resident tax progress is automatically saved, allowing you to complete your filing at your own pace."
          />
          <BaseFeatureCard
              :icon="Landmark"
              title="Verification of the entries"
              description="IberianTax is certified by Agencia Tributaria to submit taxes on behalf of users, ensuring official compliance."
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
      <section-title title="Happy Clients"/>
      <happy-clients :reviews="reviews"/>
    </base-section>

    <base-section>
      <section-title title="Frequently Asked Questions"/>
      <FAQ :faqs="faqs"/>
    </base-section>
  </div>
</template>
