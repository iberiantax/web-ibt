<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()

useHead({
  title: 'IberianTax - About',
  meta: [
    { name: 'description', content: 'Esta es la página de about' },
    { property: 'og:title', content: 'About Page OG' },
    { property: 'og:type', content: 'website' },
  ]
})
</script>

<template>
  <h1>{{ t('about.welcome') }}</h1>
</template>

<style scoped>

</style>