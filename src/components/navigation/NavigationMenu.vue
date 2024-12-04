<template>
  <nav class="hidden md:flex justify-center items-center space-x-8">
    <HoverMenu title="About" to="/about" />
    <HoverMenu title="Pricing" to="/pricing" />
    <HoverMenu title="Contact" to="/contact" />
    <HoverMenu title="Resources">
      <a 
        v-for="item in menuItems" 
        :key="item.label"
        :href="item.href"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        :target="item.external ? '_blank' : undefined"
      >
        {{ item.label }}
      </a>
    </HoverMenu>
  </nav>

  <!-- Mobile Menu -->
  <div class="md:hidden">
    <button 
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isMobileMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div
      v-show="isMobileMenuOpen"
      class="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="grid grid-cols-1 gap-4">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.href"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
              :target="item.external ? '_blank' : undefined"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HoverMenu from './HoverMenu.vue';

const isMobileMenuOpen = ref(false);

const menuItems = [
  { label: 'GitHub Repository', href: 'https://github.com/your-org', external: true },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Documentation', href: '/resources/docs' },
  { label: 'Community Forum', href: '/resources/community' }
];
</script>