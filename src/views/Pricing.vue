<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-center mb-12">Pricing Plans</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <transition-group name="fade">
        <div v-for="(plan, index) in visiblePlans" :key="plan.name" 
          class="bg-white rounded-lg shadow-md p-6 flex flex-col transform transition-all duration-500 hover:scale-105">
          <h2 class="text-xl font-semibold mb-2">{{ plan.name }}</h2>
          <p class="text-4xl font-bold mb-4">${{ plan.price }}<span class="text-sm text-gray-500">/mo</span></p>
          <ul class="space-y-3 mb-8 flex-grow">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center">
              <svg class="h-5 w-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          <CustomButton 
            text="Start Free Trial" 
            hoverText="It's Free"
            class="fixed-width-button"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CustomButton from '../components/CustomButton.vue';

const plans = [
  {
    name: 'Starter',
    price: 29,
    features: [
      '1,000 messages/month',
      'Basic chatbot features',
      'Email support',
      'Basic analytics'
    ]
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      '10,000 messages/month',
      'Advanced AI features',
      'Priority support',
      'Advanced analytics',
      'Custom integrations'
    ]
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Unlimited messages',
      'Custom AI training',
      '24/7 dedicated support',
      'Advanced security',
      'Custom development'
    ]
  }
];

const visiblePlans = ref([]);

onMounted(() => {
  plans.forEach((plan, index) => {
    setTimeout(() => {
      visiblePlans.value.push(plan);
    }, index * 500);
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Maintain grid layout for transition-group */
.fade-move {
  transition: transform 0.5s ease;
}

/* Ensure consistent sizing during transitions */
.grid > * {
  transition: all 0.5s ease;
}

/* Add hover effect */
.grid > div {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.grid > div:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>