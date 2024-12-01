<template>
  <div class="ai-background">
    <div v-for="n in particleCount" :key="n" class="particle" :style="particleStyle(n)"></div>
    <div v-for="n in connectionCount" :key="`connection-${n}`" class="connection" :style="connectionStyle(n)"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const particleCount = 50;
const connectionCount = 20;

const particleStyle = (n: number) => ({
  '--x': `${Math.random() * 100}vw`,
  '--y': `${Math.random() * 100}vh`,
  '--size': `${3 + Math.random() * 10}px`, // Smaller size
  '--speed': `${5 + Math.random() * 5}s`, // Increased speed
  '--delay': `${Math.random() * 5}s`,
  '--opacity': `${0.1 + Math.random() * 0.2}`, // Lower opacity
  '--color': n % 3 === 0 ? '#60a5fa' : n % 3 === 1 ? '#818cf8' : '#a78bfa'
});

const connectionStyle = (n: number) => ({
  '--x1': `${Math.random() * 100}vw`,
  '--y1': `${Math.random() * 100}vh`,
  '--x2': `${Math.random() * 100}vw`,
  '--y2': `${Math.random() * 100}vh`,
  '--opacity': `${0.05 + Math.random() * 0.3}`, // Lower opacity
  '--speed': `${80 + Math.random() * 100}s`, // Much slower speed
  '--delay': `${Math.random() * 5}s`,
});
</script>

<style scoped>
.ai-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom right, #f0f4f8, #e2e8f0);
  z-index: -1;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background-color: var(--color);
  width: var(--size);
  height: var(--size);
  opacity: var(--opacity);
  left: var(--x);
  top: var(--y);
  animation: float var(--speed) infinite alternate, breathe 5s infinite alternate;
  animation-delay: var(--delay);
}

.connection {
  position: absolute;
  width: 1px;
  height: 1px;
  background: transparent;
  opacity: var(--opacity);
  animation: connect var(--speed) infinite alternate, breathe 7s infinite alternate;
  animation-delay: var(--delay);
}

.connection::before {
  content: '';
  position: absolute;
  width: 100vmax;
  height: 1px;
  background: linear-gradient(90deg, transparent, #4f46e5, transparent);
  transform-origin: 0 0;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(15px, -15px); }
}

@keyframes connect {
  0% {
    left: var(--x1);
    top: var(--y1);
    transform: rotate(0deg);
  }
  100% {
    left: var(--x2);
    top: var(--y2);
    transform: rotate(360deg);
  }
}

@keyframes breathe {
  0%, 100% { opacity: var(--opacity); }
  50% { opacity: calc(var(--opacity) * 0.6); }
}
</style>