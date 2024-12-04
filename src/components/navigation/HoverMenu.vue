<template>
  <div 
    class="relative group"
    @mouseenter="openMenu"
    @mouseleave="closeMenu"                   
  >
    <component 
      :is="hasSubmenu ? 'button' : linkType"
      :href="isExternalLink ? href : undefined"
      :to="!isExternalLink ? to : undefined"
      class="menu-item flex items-center space-x-2 text-gray-600 hover:text-[#0e9485] focus:outline-none transition-all duration-300 ease-in-out button-effect"
      :class="{ 'text-[#0e9485]': isOpen }"
      @click="hasSubmenu ? toggleMenu : null"
    >
      <span>{{ title }}</span>
      <svg 
        v-if="hasSubmenu"
        class="w-4 h-4 transition-transform duration-300 ease-in-out"
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </component>
    
    <div 
      v-if="hasSubmenu"
      v-show="isOpen"
      class="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-[#0e9485] ring-opacity-5 transform opacity-100 scale-100 transition-all duration-300 ease-in-out origin-top-right"
      @mouseenter="openMenu"
      @mouseleave="closeMenu"
    >
      <div class="py-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Define component props
const props = defineProps<{
  title: string;
  href?: string; // External link
  to?: string; // Vue Router link
}>();

// Computed properties
const hasSubmenu = computed(() => !props.href && !props.to);
const isExternalLink = computed(() => !!props.href);
const linkType = computed(() => (props.href ? 'a' : props.to ? 'router-link' : 'button'));

// Reactive state
const isOpen = ref(false);
let closeTimeout: ReturnType<typeof setTimeout> | null = null;

// Event handlers
const toggleMenu = () => {
  if (hasSubmenu.value) {
    isOpen.value = !isOpen.value;
  }
};

const openMenu = () => {
  if (hasSubmenu.value) {
    if (closeTimeout) clearTimeout(closeTimeout);
    isOpen.value = true;
  }
};

const closeMenu = () => {
  if (hasSubmenu.value) {
    closeTimeout = setTimeout(() => {
      isOpen.value = false;
    }, 200);
  }
};
</script>

<style scoped>
.menu-item {
  position: relative;
  overflow: hidden;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  background-color: rgba(234, 239, 245, 0.3);
  border: 1px solid rgba(14, 148, 133, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.group:hover .menu-item {
  color: #0e9485;
  background-color: #eaeff5;
  transform: scale(1.05);
  box-shadow: 0 4px 12px #0e9485;
}

.group:hover svg {
  stroke: #0e9485;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(14, 148, 133, 0.2),
    transparent
  );
  transition: all 0.6s;
}

.group:hover .menu-item::before {
  left: 100%;
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000000;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

.menu-item:hover::after,
.menu-item:focus::after {
  transform: scaleX(1);
  transform-origin: left;
}

.menu-item:active {
  transform: scale(0.95);
  box-shadow: 0 2px 6px rgba(14, 148, 133, 0.2);
  color: #0e9485;
}

.menu-item:active svg {
  stroke: #0e9485;
}

/* Submenu styles */
.py-1 > * {
  position: relative;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
  transition: all 0.3s ease-in-out;
  background-color: rgba(234, 239, 245, 0.3);
  border-radius: 0.5rem;
  overflow: hidden;
}

.py-1 > *:last-child {
  margin-bottom: 0;
}

.py-1 > *:hover {
  color: #0e9485;
  background-color: #eaeff5;
  transform: scale(1.05);
}

.py-1 > *::after {
  content: '';
  position: absolute;
  inset: 0;
  bottom: 0;
  height: 2px;
  background-color: #000000;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
  border-radius: 0.5rem;
}

.py-1 > *:hover::after {
  transform: scaleX(1);
  transform-origin: right;
}
</style>