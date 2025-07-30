<script setup lang="ts">
import AboutValues from "~/components/about/AboutValues.vue";
import MediaPresence from "~/components/about/MediaPresence.vue";
import OurNumbers from "~/components/about/OurNumbers.vue";
import TeamSection from "~/components/about/TeamSection.vue";
import CertificationsAffiliations from "~/components/about/CertificationsAffiliations.vue";
import FileNowCard from "~/components/home/FileNowCard.vue";


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
  <about-header-simple-image></about-header-simple-image>
  <about-values></about-values>
  <certifications-affiliations></certifications-affiliations>
  <our-numbers></our-numbers>
  <team-section></team-section>
  <media-presence></media-presence>
  <file-now-card></file-now-card>
</template>