<script setup lang="ts">
import { BaseCard } from '~/components/shared/ui';

interface Review {
  description: string;
  reviewerName: string;
  rating: number;
}

const reviews: Review[] = [
  {
    description:
      'I have previously used other people to file my taxes in Spain, however they have made errors and I have had to pay penalties. IberianTax was very professional and accurate.',
    reviewerName: 'Sarah Johnson',
    rating: 4.5,
  },
  {
    description:
      'Excellent service! The process was very simple and straightforward. I saved a lot of money compared to hiring a local accountant.',
    reviewerName: 'Michael Chen',
    rating: 5.0,
  },
  {
    description:
      'Very reliable and professional service. They helped me understand the tax process and everything was completed on time.',
    reviewerName: 'Emma Rodriguez',
    rating: 4.8,
  },
  {
    description:
      'Great experience with IberianTax. The online platform is easy to use and their customer support is very helpful.',
    reviewerName: 'David Thompson',
    rating: 4.7,
  },
  {
    description:
      'I was worried about filing taxes as a non-resident, but IberianTax made it very simple and stress-free.',
    reviewerName: 'Lisa Anderson',
    rating: 4.9,
  },
  {
    description:
      'Highly recommend! The service is affordable and the team is very knowledgeable about Spanish tax regulations.',
    reviewerName: 'Robert Wilson',
    rating: 4.6,
  },
];

const currentIndex = ref(0);
const containerRef = ref<HTMLElement>();

const emit = defineEmits<{
  cardClick: [index: number, event: MouseEvent];
  readAllReviews: [event: MouseEvent];
}>();

const handleCardClick = (index: number, event: MouseEvent) => {
  emit('cardClick', index, event);
};

const handleReadAllReviews = (event: MouseEvent) => {
  emit('readAllReviews', event);
};

const goPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    scrollToIndex();
  }
};

const goNext = () => {
  if (currentIndex.value < reviews.length - 4) {
    currentIndex.value++;
    scrollToIndex();
  }
};

const scrollToIndex = () => {
  if (containerRef.value) {
    const cardWidth = containerRef.value.scrollWidth / reviews.length;
    const scrollAmount = currentIndex.value * cardWidth;
    containerRef.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <section class="bg-neutral-100 py-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Título de la sección -->
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-[#1364B3] lg:text-4xl">Happy clients</h2>
      </div>

      <!-- Ratings -->
      <div
        class="mb-12 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0"
      >
        <div class="flex items-center space-x-2">
          <img src="/svg/google.svg" alt="Google" class="h-6 w-6" />
          <span class="text-base font-normal text-gray-900">4.9 (627 reviews) on Google </span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-base font-normal text-gray-900">4.8 (58 reviews) on Trustpilot </span>
        </div>
      </div>

      <!-- Carrusel de reviews -->
      <div class="mb-12">
        <div class="relative">
          <div
            ref="containerRef"
            class="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto"
            style="height: 220px; scrollbar-width: none; -ms-overflow-style: none"
          >
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="w-2/3 flex-shrink-0 snap-start sm:w-1/2 md:w-1/3 lg:w-1/4"
              style="scroll-snap-align: start"
            >
              <BaseCard
                type="review"
                :description="review.description"
                :reviewer-name="review.reviewerName"
                :rating="review.rating"
                class="h-full"
                @click="handleCardClick(index, $event)"
              />
            </div>
          </div>
        </div>

        <!-- Botones de navegación centrados y juntos -->
        <div class="mt-6 flex justify-end space-x-2">
          <button
            @click="goPrev"
            :disabled="currentIndex === 0"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="goNext"
            :disabled="currentIndex >= reviews.length - 4"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-black transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Botón "Read all reviews" -->
      <div class="text-center">
        <button
          @click="handleReadAllReviews"
          class="rounded-lg border border-black bg-transparent px-8 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Read all reviews
        </button>
      </div>
    </div>
  </section>
</template>
