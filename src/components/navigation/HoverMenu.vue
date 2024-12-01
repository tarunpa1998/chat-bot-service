<template>
  <div 
    class="relative group"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <button 
      class="flex items-center space-x-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      :class="{ 'text-indigo-600': isOpen }"
    >
      <span>{{ title }}</span>
      <svg 
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div 
      v-show="isOpen"
      class="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform opacity-100 scale-100 transition-all duration-200 origin-top-right"
    >
      <div class="py-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
}>();

const isOpen = ref(false);
</script>