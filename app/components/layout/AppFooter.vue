<script setup lang="ts">
import FacebookIcon from '@/components/shared/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/shared/icons/InstagramIcon.vue';
import LinkedinIcon from '@/components/shared/icons/LinkedinIcon.vue';

const localePath = useLocalePath()
</script>

<template>
  <footer class="rounded-t-[80px] bg-[#1364B3] text-white ">
    <div class="mx-auto px-4 sm:px-6 lg:px-44">
      <!-- Top Section: Logo and Tagline -->
      <div class="pt-8 pb-3 text-center sm:py-12">
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

      <!-- Main Content: Responsive Grid -->
      <div class="py-4 sm:py-12">
        <!-- Mobile: Single Column -->
        <div class="grid grid-cols-1 gap-6 md:hidden">
          <!-- Company Section -->
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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
                  to="/app/pages/referralProgram"
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

          <!-- Resources Section -->
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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

          <!-- Legal Section -->
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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

          <!-- Non-resident tax Spain Section -->
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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

        <!-- Tablet: Two Columns (md to lg) -->
        <div class="hidden grid-cols-2 gap-8 md:grid lg:hidden">
          <!-- Left Column: Company + Resources -->
          <div class="space-y-8">
            <!-- Company Section -->
            <div>
              <h3
                class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
              >
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
                    to="/app/pages/referralProgram"
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

            <!-- Resources Section -->
            <div>
              <h3
                class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
              >
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
          </div>

          <!-- Right Column: Legal + Non-resident tax -->
          <div class="space-y-8">
            <!-- Legal Section -->
            <div>
              <h3
                class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
              >
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

            <!-- Non-resident tax Spain Section -->
            <div>
              <h3
                class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
              >
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
        </div>

        <!-- Desktop: Four Columns (lg and up) -->
        <div class="hidden grid-cols-4 gap-8 lg:grid">
          <!-- Company Column -->
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
              Company
            </h3>
            <ul class="space-y-1 sm:space-y-2">
              <li>
                <NuxtLink
                  to="/about"
                  class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base hover:underline"
                >
                  About
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base hover:underline"
                >
                  Contact
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/app/pages/referralProgram"
                  class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base hover:underline"
                >
                  Partners
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                    :to="localePath({ name: 'referralProgram' })"
                  class="text-xs text-white transition-colors duration-200 hover:text-neutral-200 sm:text-base"
                >
                  Referral program
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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
          <div>
            <h3
              class="mb-3 text-sm font-medium leading-6 text-white sm:mb-4 sm:text-lg sm:leading-8"
            >
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
      </div>

      <!-- Bottom Section: Legal Text and Social Media -->
      <div class=" py-6 sm:py-8">
        <div class="space-y-6">
          <!-- Recognition Statement -->
          <div class="text-left">
            <p class="text-xs text-white/90 sm:text-sm">
              IberianTax is recognised by the Agencia Tributaria as a collaborator and member of the
              AEDAF.
            </p>
          </div>

          <!-- Copyright and Social Media Row -->
          <div
            class="flex flex-col items-start justify-between space-y-4 sm:flex-row sm:space-y-0"
          >
            <!-- Copyright -->
            <p class="text-left text-xs text-white/80 sm:text-sm">
              © 2025 IberianTax. All rights reserved.
            </p>

            <!-- Social Media Icons -->
            <div class="flex flex-row space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/80 transition-colors duration-200 hover:text-white"
              >
                <FacebookIcon width="18" height="18" class="sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/80 transition-colors duration-200 hover:text-white"
              >
                <InstagramIcon width="18" height="18" class="sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/80 transition-colors duration-200 hover:text-white"
              >
                <LinkedinIcon width="18" height="18" class="sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
