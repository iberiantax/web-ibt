<script setup lang="ts">
interface ReportItem {
  text: string;
}

interface Props {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
  basicReports: ReportItem[];
  advancedReports: ReportItem[];
}

withDefaults(defineProps<Props>(), {
  backgroundColor: 'bg-[#D6E6F7]',
});

const emit = defineEmits<{
  basicReportClick: [item: ReportItem, index: number];
  advancedReportClick: [item: ReportItem, index: number];
}>();

const handleBasicReportClick = (item: ReportItem, index: number) => {
  emit('basicReportClick', item, index);
};

const handleAdvancedReportClick = (item: ReportItem, index: number) => {
  emit('advancedReportClick', item, index);
};
</script>

<template>
  <section class="w-full py-8 md:py-12" :class="backgroundColor">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col items-center gap-8 xl:flex-row xl:gap-12">
          <!-- Imagen -->
          <div class="w-full max-w-md flex-shrink-0">
            <div class="aspect-[4/3] w-full overflow-hidden rounded-[16px] xl:aspect-square">
              <img v-if="image" :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
              <div v-else class="flex h-full w-full items-center justify-center bg-gray-200">
                <svg
                  class="h-12 w-12 text-gray-400 sm:h-16 sm:w-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Contenido de texto -->
          <div class="w-full flex-1">
            <h2 class="mb-4 text-2xl font-bold text-[#1364B3] sm:text-3xl xl:text-4xl">
              {{ title }}
            </h2>
            <p class="mb-6 text-sm text-gray-700 sm:text-base xl:mb-8">
              {{ description }}
            </p>

            <!-- Dos columnas de reportes - responsive -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
              <!-- Reportes básicos -->
              <div>
                <h3 class="mb-2 text-base font-bold text-[#1364B3] sm:text-lg">
                  Basic reports include
                </h3>
                <p class="mb-3 text-xs text-gray-600 sm:text-sm xl:mb-4">
                  Can be exported as PDFs and include:
                </p>
                <ul class="space-y-2 sm:space-y-3">
                  <li
                    v-for="(item, index) in basicReports"
                    :key="index"
                    class="flex cursor-pointer items-center pl-2 text-sm text-gray-700 sm:text-base"
                    @click="handleBasicReportClick(item, index)"
                  >
                    <span class="mr-3 text-[#1364B3]">✓</span>
                    {{ item.text }}
                  </li>
                </ul>
              </div>

              <!-- Reportes avanzados -->
              <div>
                <h3 class="mb-2 text-base font-bold text-[#1364B3] sm:text-lg">
                  Advanced reports include
                </h3>
                <p class="mb-3 text-xs text-gray-600 sm:text-sm xl:mb-4">
                  Can also be exported as fully editable CSV files and:
                </p>
                <ul class="space-y-2 sm:space-y-3">
                  <li
                    v-for="(item, index) in advancedReports"
                    :key="index"
                    class="flex cursor-pointer items-center pl-2 text-sm text-gray-700 sm:text-base"
                    @click="handleAdvancedReportClick(item, index)"
                  >
                    <span class="mr-3 text-[#1364B3]">✓</span>
                    {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
