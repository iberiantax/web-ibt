<script setup lang="ts">
// Iconos personalizados para redes sociales
import FacebookIcon from '@/components/shared/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/shared/icons/InstagramIcon.vue';
import LinkedinIcon from '@/components/shared/icons/LinkedinIcon.vue';
</script>

<template>
  <footer class="rounded-t-[80px] bg-[#1364B3] text-white">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Section: Logo and Tagline -->
      <div class="py-8 text-center sm:py-12">
        <div class="mb-3 flex items-center justify-center sm:mb-4">
          <img
            src="/images/png/Logo.png"
            alt="IberianTax Logo"
            width="150"
            height="42"
            class="sm:w-[250px]"
          />
        </div>
        <p class="text-xs text-white sm:text-base">Easy tax returns for non-residents in Spain</p>
      </div>

      <!-- Main Content: Four Columns -->
      <div class="grid grid-cols-2 gap-6 py-4 sm:gap-8 sm:py-12 md:grid-cols-4">
        <!-- Company Column -->
        <div class="col-span-1">
          <h3 class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8">
            Company
          </h3>
          <ul class="space-y-1 sm:space-y-2">
            <li>
              <NuxtLink
                to="/about"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/partners"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Partners
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/referral-program"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Referral program
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div class="col-span-1">
          <h3 class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8">
            Resources
          </h3>
          <ul class="space-y-1 sm:space-y-2">
            <li>
              <NuxtLink
                to="/faq"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/glossary"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Glossary
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/tax-guides"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Tax guides
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div class="col-span-1">
          <h3 class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8">
            Legal
          </h3>
          <ul class="space-y-1 sm:space-y-2">
            <li>
              <NuxtLink
                to="/terms"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Terms and Conditions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/privacy"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/cookies"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Cookie Policy
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Non-resident tax Spain Column -->
        <div class="col-span-1">
          <h3 class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8">
            Non-resident tax Spain
          </h3>
          <ul class="space-y-1 sm:space-y-2">
            <li>
              <NuxtLink
                to="/non-resident-tax-2024"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Non-resident tax 2024
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/non-resident-tax-2023"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Non-resident tax 2023
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/non-resident-tax-2022"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Non-resident tax 2022
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/non-resident-tax-2021"
                class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
              >
                Non-resident tax 2021
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section: Legal Text and Social Media -->
      <div class="py-6 sm:py-8">
        <div class="space-y-4">
          <!-- First Legal Text -->
          <div class="text-center sm:text-left">
            <p class="text-start text-xs text-white sm:text-sm">
              IberianTax is recognised by the Agencia Tributaria as a collaborator and member of the
              AEDAF.
            </p>
          </div>

          <!-- Copyright and Social Media Row -->
          <div class="flex flex-row items-center justify-between">
            <p class="text-start text-xs text-white sm:text-sm">
              © 2025 IberianTax. All rights reserved.
            </p>

            <!-- Social Media Icons -->
            <div class="flex flex-row space-x-4 sm:space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white transition-colors duration-200 hover:text-neutral-200"
              >
                <FacebookIcon width="16" height="16" class="sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white transition-colors duration-200 hover:text-neutral-200"
              >
                <InstagramIcon width="16" height="16" class="sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white transition-colors duration-200 hover:text-neutral-200"
              >
                <LinkedinIcon width="16" height="16" class="sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
