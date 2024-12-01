<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-center mb-12">Pricing Plans</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="plan in plans" :key="plan.name" 
        class="bg-white rounded-lg shadow-md p-6 flex flex-col">
        <h2 class="text-xl font-semibold mb-2">{{ plan.name }}</h2>
        <p class="text-4xl font-bold mb-4">${{ plan.price }}<span class="text-sm text-gray-500">/mo</span></p>
        <ul class="space-y-3 mb-8 flex-grow">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center">
            <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ feature }}
          </li>
        </ul>
        <button class="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>