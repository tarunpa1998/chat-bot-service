<template>
  <div ref="revealEl" :class="{ 'revealed': isRevealed }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const revealEl = ref<HTMLElement | null>(null);
const isRevealed = ref(false);

const checkReveal = () => {
  if (revealEl.value) {
    const rect = revealEl.value.getBoundingClientRect();
    const reveaThreshold = window.innerHeight * 0.75;
    if (rect.top < reveaThreshold) {
      isRevealed.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkReveal);
  checkReveal();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkReveal);
});
</script>

<style scoped>
div {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>