<template>
  <div class="relative">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keyup.enter="$emit('submit')"
      type="text"
      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-12"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <button
      @click="$emit('submit')"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
      :disabled="disabled"
    >
      Send
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'submit'): void;
}>();
</script>