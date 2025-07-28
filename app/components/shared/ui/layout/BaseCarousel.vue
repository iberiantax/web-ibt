<script setup lang="ts">
interface Props {
  items: unknown[];
  showItems?: number;
  gap?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showItems: 1.5,
  gap: 16,
  showArrows: true,
  showDots: false,
});

const currentIndex = ref(0);
const containerRef = ref<HTMLElement>();

const maxIndex = computed(() => {
  return Math.max(0, props.items.length - Math.floor(props.showItems));
});

const canGoNext = computed(() => currentIndex.value < maxIndex.value);
const canGoPrev = computed(() => currentIndex.value > 0);

const goNext = () => {
  if (canGoNext.value) {
    currentIndex.value++;
  }
};

const goPrev = () => {
  if (canGoPrev.value) {
    currentIndex.value--;
  }
};

const goToIndex = (index: number) => {
  currentIndex.value = Math.max(0, Math.min(index, maxIndex.value));
};

// Auto-scroll to current index when it changes
watch(currentIndex, () => {
  if (containerRef.value) {
    const itemWidth = containerRef.value.scrollWidth / props.items.length;
    const scrollAmount = currentIndex.value * itemWidth;
    containerRef.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
});
</script>

<template>
  <div class="relative">
    <!-- Carrusel container -->
    <div
      ref="containerRef"
      class="scrollbar-hide flex overflow-x-auto"
      :class="showItems <= 1 ? 'w-full' : ''"
      :style="{
        gap: `${gap}px`,
        scrollSnapType: 'x mandatory',
        justifyContent: 'flex-start',
      }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="showItems <= 1 ? 'w-full' : 'w-1/2'"
        style="scroll-snap-align: start"
      >
        <slot :item="item" :index="index" />
      </div>
    </div>

    <!-- Navigation buttons -->
    <div v-if="showArrows" class="absolute inset-y-0 left-0 flex items-center">
      <button
        v-if="canGoPrev"
        @click="goPrev"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50 disabled:opacity-50"
        :disabled="!canGoPrev"
      >
        <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>

    <div v-if="showArrows" class="absolute inset-y-0 right-0 flex items-center">
      <button
        v-if="canGoNext"
        @click="goNext"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50 disabled:opacity-50"
        :disabled="!canGoNext"
      >
        <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Dots indicator -->
    <div v-if="showDots && maxIndex > 0" class="mt-4 flex justify-center space-x-2">
      <button
        v-for="index in maxIndex + 1"
        :key="index"
        @click="goToIndex(index - 1)"
        class="h-2 w-2 rounded-full transition-all"
        :class="index - 1 === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
      />
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
