<script setup lang="ts">

import FAQ from "~/components/home/FAQ.vue";
import {BaseSearch} from "~/components/shared/ui";
</script>

<template>
  <div class="mx-auto max-w-4xl text-center pt-16 pb-16">
    <h1 class="text-h1-m font-semibold text-blue-500">Frequently Asked Questions</h1>
    <p class="mb-8 leading-relaxed font-bold pt-3">
      Got a question? We've got the answer! If you have another questions, please contact us and on of our tax experts
      will be in touch.
    </p>
    <BaseSearch
        placeholder="Search"
        variant="white"
        v-model="search1Value"
        :search-results="searchResults1"
        :loading="searchLoading1"
        @search="handleSearch1"
    />
  </div>
  <f-a-q></f-a-q>
</template>