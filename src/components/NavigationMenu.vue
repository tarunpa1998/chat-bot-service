<template>
  <div class="relative">
    <button @click="toggleDropdown" class="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
      <span>Resources</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div v-if="isOpen" class="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-none ring-1 ring-black ring-opacity-5">
      <div class="py-1">
        <a href="https://github.com/your-org" target="_blank" class="menu-item">
          GitHub Repository
        </a>
        <router-link to="/resources/blog" class="menu-item">Blog</router-link>
        <router-link to="/resources/docs" class="menu-item">Documentation</router-link>
        <router-link to="/resources/community" class="menu-item">Community Forum</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.menu-item {
  @apply block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900;
}
</style>