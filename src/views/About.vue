<template>
  <ScrollReveal>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900">About Us</h1>
          <p class="mt-4 text-lg text-gray-500">
            We're dedicated to providing the best AI-powered customer support solutions.
          </p>
        </div>
      </ScrollReveal>

      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-8">Our Team</h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(member, index) in sortedTeam" :key="member.name">
            <transition name="fade" @after-enter="revealNext(index)">
              <div v-if="revealedCount > index" 
                   class="bg-white rounded-lg shadow p-6 transform transition-all duration-500 hover:scale-105">
                <div class="text-center">
                  <div class="h-32 w-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                  <p class="text-gray-600">{{ member.position }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <ScrollReveal>
        <div class="mt-16">
          <h2 class="text-2xl font-bold mb-8">Our Mission</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-600">
              Our mission is to revolutionize customer support through artificial intelligence,
              making it more efficient, accessible, and helpful for businesses and their customers.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </ScrollReveal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ScrollReveal from '../components/ScrollReveal.vue';

const team = ref([
  {
    name: 'Elif Toraman',
    position: 'Head of AI',
    order: 1
  },
  {
    name: 'Tarun Patel',
    position: 'CTO',
    order: 2
  },
  {
    name: 'Simran Gupta',
    position: 'CEO',
    order: 3
  }
]);

const sortedTeam = computed(() => {
  return team.value.sort((a, b) => a.order - b.order);
});

const revealedCount = ref(0);

const revealNext = (index: number) => {
  setTimeout(() => {
    revealedCount.value = index + 2;
  }, 100); // Adjust this delay as needed
};

onMounted(() => {
  setTimeout(() => {
    revealedCount.value = 1;
  }, 100); // Initial delay before revealing the first member
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.grid {
  overflow: hidden;
}
</style>