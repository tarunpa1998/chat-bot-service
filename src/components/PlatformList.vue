<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
    <div v-for="platform in platforms" :key="platform" 
      class="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <font-awesome-icon 
        :icon="['fab', platformIcons[platform.toLowerCase()]]" 
        class="h-8 w-8 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
      />
      <span class="text-sm font-medium text-gray-700">{{ platform }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const platforms = [
  'WordPress',
  'Instagram',
  'WhatsApp',
  'Facebook',
  'Twitter',
  'Slack',
  'Discord',
  'Shopify'
];

const platformIcons: Record<string, string> = {
  wordpress: 'wordpress',
  instagram: 'instagram',
  whatsapp: 'whatsapp',
  facebook: 'facebook',
  twitter: 'twitter',
  slack: 'slack',
  discord: 'discord',
  shopify: 'shopify'
};
</script>