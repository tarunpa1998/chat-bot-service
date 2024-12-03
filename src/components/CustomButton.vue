<template>
  <a 
    :href="href" 
    :class="[
      'relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group twisted-corner',
      customClass
    ]"
    @click="handleClick"
    style="background-color: #e8edf3;"
  >
    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
      <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
      <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
      <slot>{{ text }}</slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '#_'
  },
  text: {
    type: String,
    default: 'Button'
  },
  customClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  if (props.href === '#_') {
    event.preventDefault();
  }
  emit('click', event);
};
</script>

<style scoped>
.twisted-corner {
  position: relative;
  overflow: hidden;
}

.twisted-corner::before {
  content: '';
  position: absolute;
  top: -30px;
  right: -30px;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  transform: rotate(45deg);
  z-index: 1;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.twisted-corner::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: #e8edf3;
  z-index: 2;
  transition: all 0.3s ease;
}

.twisted-corner:hover::before,
.twisted-corner:hover::after {
  transform: translate(50px, -50px) rotate(45deg);
  opacity: 0;
}
</style>