<template>
  <div 
    class="chat-message"
    :class="[
      type === 'user' ? 'user' : 'bot',
      animate && 'animate-fade-in'
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'user' | 'bot';
  animate?: boolean;
}>();
</script>

<style scoped>
.chat-message {
  @apply max-w-[80%] rounded-lg p-3 mb-2;
}

.user {
  @apply ml-auto bg-indigo-100;
}

.bot {
  @apply bg-gray-100;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>