<script setup lang="ts">
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-vue-next';
import BaseButton from '~/components/shared/ui/buttons/BaseButton.vue';
import Logo from '~/components/shared/logos/logo.vue';

// Estado para dropdowns y menú móvil
const isServicesOpen = ref(false);
const isResourcesOpen = ref(false);
const isLanguageOpen = ref(false);
const isMobileMenuOpen = ref(false);

// Estados para dropdowns móviles
const isMobileServicesOpen = ref(false);
const isMobileResourcesOpen = ref(false);
const isMobileLanguageOpen = ref(false);

// Función para cerrar todos los dropdowns excepto el especificado
const closeOtherDropdowns = (dropdownToKeep: string) => {
  if (dropdownToKeep !== 'services') isServicesOpen.value = false;
  if (dropdownToKeep !== 'resources') isResourcesOpen.value = false;
  if (dropdownToKeep !== 'language') isLanguageOpen.value = false;
};

// Función para cerrar todos los dropdowns móviles excepto el especificado
const closeOtherMobileDropdowns = (dropdownToKeep: string) => {
  if (dropdownToKeep !== 'services') isMobileServicesOpen.value = false;
  if (dropdownToKeep !== 'resources') isMobileResourcesOpen.value = false;
  if (dropdownToKeep !== 'language') isMobileLanguageOpen.value = false;
};

// Toggle menú móvil
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Resetear dropdowns móviles al cerrar el menú
  if (!isMobileMenuOpen.value) {
    isMobileServicesOpen.value = false;
    isMobileResourcesOpen.value = false;
    isMobileLanguageOpen.value = false;
  }
};

// Cerrar todos los dropdowns cuando se hace click fuera
const closeAllDropdowns = () => {
  isServicesOpen.value = false;
  isResourcesOpen.value = false;
  isLanguageOpen.value = false;
};

// Cerrar todos los dropdowns móviles
const closeAllMobileDropdowns = () => {
  isMobileServicesOpen.value = false;
  isMobileResourcesOpen.value = false;
  isMobileLanguageOpen.value = false;
};

// Event listener para cerrar dropdowns al hacer click fuera
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const header = document.querySelector('header');

    // Si el click no está dentro del header, cerrar todos los dropdowns
    if (header && !header.contains(target)) {
      closeAllDropdowns();
      closeAllMobileDropdowns();
    }
  });
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-neutral-100">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between py-2">
        <!-- Logo - Izquierda -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <Logo width="200" height="26" />
          </NuxtLink>
        </div>

        <!-- Navegación y Botones - Derecha -->
        <div class="flex items-center space-x-8">
          <!-- Desktop Navigation -->
          <nav class="hidden items-center space-x-8 lg:flex">
            <!-- About -->
            <NuxtLink
              to="/about"
              class="text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
            >
              About
            </NuxtLink>

            <!-- Pricing -->
            <NuxtLink
              to="/pricing"
              class="text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
            >
              Pricing
            </NuxtLink>

            <!-- Services Dropdown -->
            <div class="relative">
              <button
                @click="
                  () => {
                    closeOtherDropdowns('services');
                    isServicesOpen = !isServicesOpen;
                  }
                "
                class="flex items-center text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
              >
                Services
                <ChevronDown class="ml-1 h-4 w-4" />
              </button>

              <div
                v-if="isServicesOpen"
                class="absolute left-0 top-full mt-2 w-96 rounded-lg border border-neutral-200 bg-white py-4 shadow-elevation-2"
              >
                <div class="grid grid-cols-2 gap-6 px-4">
                  <div>
                    <h3
                      class="mb-3 border-b border-neutral-200 pb-1 text-sm font-medium text-neutral-500"
                    >
                      Por tipo
                    </h3>
                    <div class="space-y-2">
                      <NuxtLink
                        to="/services/tax-returns"
                        class="block text-base leading-6 text-neutral-700 hover:text-[#1364B3]"
                      >
                        Tax Returns
                      </NuxtLink>
                      <NuxtLink
                        to="/services/consulting"
                        class="block text-base leading-6 text-neutral-700 hover:text-[#1364B3]"
                      >
                        Consulting
                      </NuxtLink>
                      <NuxtLink
                        to="/services/planning"
                        class="block text-base leading-6 text-neutral-700 hover:text-[#1364B3]"
                      >
                        Tax Planning
                      </NuxtLink>
                    </div>
                  </div>

                  <div>
                    <h3
                      class="mb-3 border-b border-neutral-200 pb-1 text-sm font-medium text-neutral-500"
                    >
                      Por temas
                    </h3>
                    <div class="space-y-2">
                      <NuxtLink
                        to="/services/individual"
                        class="block text-base leading-6 text-neutral-700 hover:text-[#1364B3]"
                      >
                        Individual
                      </NuxtLink>
                      <NuxtLink
                        to="/services/business"
                        class="block text-base leading-6 text-neutral-700 hover:text-[#1364B3]"
                      >
                        Business
                      </NuxtLink>
                      <NuxtLink
                        to="/services/international"
                        class="block text-base leading-6 text-neutral-700 hover:text-[#1364B3]"
                      >
                        International
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Resources Dropdown -->
            <div class="relative">
              <button
                @click="
                  () => {
                    closeOtherDropdowns('resources');
                    isResourcesOpen = !isResourcesOpen;
                  }
                "
                class="flex items-center text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
              >
                Resources
                <ChevronDown class="ml-1 h-4 w-4" />
              </button>

              <div
                v-if="isResourcesOpen"
                class="absolute left-0 top-full mt-2 w-48 rounded-lg border border-neutral-200 bg-white py-2 shadow-elevation-2"
              >
                <NuxtLink
                  to="/resources/guides"
                  class="block px-4 py-2 text-base leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-[#1364B3]"
                >
                  Tax Guides
                </NuxtLink>
                <NuxtLink
                  to="/resources/calculators"
                  class="block px-4 py-2 text-base leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-[#1364B3]"
                >
                  Calculators
                </NuxtLink>
                <NuxtLink
                  to="/resources/blog"
                  class="block px-4 py-2 text-base leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-[#1364B3]"
                >
                  Blog
                </NuxtLink>
              </div>
            </div>

            <!-- Language Selector -->
            <div class="relative">
              <button
                @click="
                  () => {
                    closeOtherDropdowns('language');
                    isLanguageOpen = !isLanguageOpen;
                  }
                "
                class="flex items-center text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
              >
                EN
                <ChevronDown class="ml-1 h-4 w-4" />
              </button>

              <div
                v-if="isLanguageOpen"
                class="absolute left-0 top-full mt-2 w-24 rounded-lg border border-neutral-200 bg-white py-2 shadow-elevation-2"
              >
                <button
                  class="block w-full px-4 py-2 text-left text-base leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-[#1364B3]"
                >
                  EN
                </button>
                <button
                  class="block w-full px-4 py-2 text-left text-base leading-6 text-neutral-700 hover:bg-neutral-50 hover:text-[#1364B3]"
                >
                  ES
                </button>
              </div>
            </div>
          </nav>

          <!-- Desktop Buttons -->
          <div class="hidden items-center space-x-4 lg:flex">
            <BaseButton variant="ghost">Log in</BaseButton>
            <BaseButton variant="primary">
              Get started
              <ArrowRight class="ml-2 h-4 w-4" />
            </BaseButton>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="rounded-lg p-2 text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 hover:text-[#1364B3]"
          >
            <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation - Full Screen -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 top-20 bg-white lg:hidden">
        <div class="flex h-full flex-col">
          <!-- Mobile Navigation Content -->
          <div class="flex-1 space-y-6 overflow-y-auto px-4 py-6">
            <!-- Mobile Navigation Links -->
            <div class="space-y-4">
              <NuxtLink
                to="/about"
                class="block text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
                @click="toggleMobileMenu"
              >
                About
              </NuxtLink>
              <NuxtLink
                to="/pricing"
                class="block text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
                @click="toggleMobileMenu"
              >
                Pricing
              </NuxtLink>
            </div>

            <!-- Mobile Services -->
            <div class="space-y-3">
              <button
                @click="
                  () => {
                    closeOtherMobileDropdowns('services');
                    isMobileServicesOpen = !isMobileServicesOpen;
                  }
                "
                class="flex w-full items-center justify-between text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
              >
                <span>Services</span>
                <ChevronDown
                  class="h-4 w-4 transition-transform duration-200"
                  :class="{ 'rotate-180': isMobileServicesOpen }"
                />
              </button>
              <div v-if="isMobileServicesOpen" class="space-y-4 pl-4">
                <div class="space-y-2">
                  <h4 class="border-b border-neutral-200 pb-1 text-sm font-medium text-neutral-500">
                    Por tipo
                  </h4>
                  <div class="space-y-2">
                    <NuxtLink
                      to="/services/tax-returns"
                      class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                      @click="toggleMobileMenu"
                    >
                      Tax Returns
                    </NuxtLink>
                    <NuxtLink
                      to="/services/consulting"
                      class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                      @click="toggleMobileMenu"
                    >
                      Consulting
                    </NuxtLink>
                    <NuxtLink
                      to="/services/planning"
                      class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                      @click="toggleMobileMenu"
                    >
                      Tax Planning
                    </NuxtLink>
                  </div>
                </div>

                <div class="space-y-2">
                  <h4 class="border-b border-neutral-200 pb-1 text-sm font-medium text-neutral-500">
                    Por temas
                  </h4>
                  <div class="space-y-2">
                    <NuxtLink
                      to="/services/individual"
                      class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                      @click="toggleMobileMenu"
                    >
                      Individual
                    </NuxtLink>
                    <NuxtLink
                      to="/services/business"
                      class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                      @click="toggleMobileMenu"
                    >
                      Business
                    </NuxtLink>
                    <NuxtLink
                      to="/services/international"
                      class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                      @click="toggleMobileMenu"
                    >
                      International
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile Resources -->
            <div class="space-y-3">
              <button
                @click="
                  () => {
                    closeOtherMobileDropdowns('resources');
                    isMobileResourcesOpen = !isMobileResourcesOpen;
                  }
                "
                class="flex w-full items-center justify-between text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
              >
                <span>Resources</span>
                <ChevronDown
                  class="h-4 w-4 transition-transform duration-200"
                  :class="{ 'rotate-180': isMobileResourcesOpen }"
                />
              </button>
              <div v-if="isMobileResourcesOpen" class="space-y-2 pl-4">
                <NuxtLink
                  to="/resources/guides"
                  class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                  @click="toggleMobileMenu"
                >
                  Tax Guides
                </NuxtLink>
                <NuxtLink
                  to="/resources/calculators"
                  class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                  @click="toggleMobileMenu"
                >
                  Calculators
                </NuxtLink>
                <NuxtLink
                  to="/resources/blog"
                  class="block text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                  @click="toggleMobileMenu"
                >
                  Blog
                </NuxtLink>
              </div>
            </div>

            <!-- Mobile Language -->
            <div class="space-y-3">
              <button
                @click="
                  () => {
                    closeOtherMobileDropdowns('language');
                    isMobileLanguageOpen = !isMobileLanguageOpen;
                  }
                "
                class="flex w-full items-center justify-between text-base font-normal leading-6 text-neutral-700 transition-colors duration-200 hover:text-[#1364B3]"
              >
                <span>Language</span>
                <ChevronDown
                  class="h-4 w-4 transition-transform duration-200"
                  :class="{ 'rotate-180': isMobileLanguageOpen }"
                />
              </button>
              <div v-if="isMobileLanguageOpen" class="space-y-2 pl-4">
                <button
                  class="block w-full text-left text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                >
                  EN
                </button>
                <button
                  class="block w-full text-left text-base leading-6 text-neutral-600 transition-colors duration-200 hover:text-[#1364B3]"
                >
                  ES
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Buttons -->
          <div class="border-t border-neutral-200 px-4 py-6">
            <div class="space-y-3">
              <BaseButton variant="ghost" class="w-full justify-center">Log in</BaseButton>
              <BaseButton variant="primary" class="w-full justify-center">
                Get started
                <ArrowRight class="ml-2 h-4 w-4" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
