<template>
  <button 
    class="px-3 py-1 rounded bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-200"
    @click="$emit('select')"
  >
    {{ service }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  service: string;
}>();

defineEmits<{
  (e: 'select'): void;
}>();
</script>