<template>
  <div class="scrolling-platform-icons" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
    <div class="scroll-row scroll-left" :class="{ 'paused': isPaused }">
      <div class="icon-container" v-for="platform in platformsLeft" :key="platform">
        <PlatformIcons :platform="platform" />
      </div>
    </div>
    <ScrollReveal class="mt-16"> 
      </ScrollReveal>
    <div class="scroll-row scroll-right" :class="{ 'paused': isPaused }">
      <div class="icon-container" v-for="platform in platformsRight" :key="platform">
        <PlatformIcons :platform="platform" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlatformIcons from './icons/PlatformIcons.vue';

const platformsLeft = [
  'WordPress', 'Instagram', 'WhatsApp', 'Facebook', 'Twitter', 'Slack', 'Discord', 'Shopify'
];

const platformsRight = [
  'LinkedIn', 'YouTube', 'TikTok', 'Pinterest', 'Reddit', 'Telegram', 'Twitch', 'Snapchat'
];

const isPaused = ref(false);

const pauseScroll = () => {
  isPaused.value = true;
};

const resumeScroll = () => {
  isPaused.value = false;
};
</script>

<style scoped>
.scrolling-platform-icons {
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.scroll-row {
  display: flex;
  animation-duration: 50s; /* Slower scrolling speed */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  width: 200%;
}

.scroll-left {
  animation-name: scroll-left;
}

.scroll-right {
  animation-name: scroll-right;
}

.icon-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.paused {
  animation-play-state: paused;
}
</style>