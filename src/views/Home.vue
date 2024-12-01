<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <ScrollReveal>
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          AI-Powered Customer Support
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Get instant answers to your questions with our advanced AI chatbot. Available 24/7 to assist you.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <button @click="startChat" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">Compare with New Interaction Tool</h2>
        <InteractionTool />
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">Easy Building Experience</h2>
        <div class="bg-white rounded-lg shadow-lg p-8 text-center">
          <p class="text-lg text-gray-600">
            All you have to do is drag and drop blocks to create your app. 
            Even if you have custom needs, you can always add custom code.
          </p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">Integrate Everywhere</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="platform in platforms" :key="platform" class="bg-white p-4 rounded-lg shadow text-center">
            {{ platform }}
          </div>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">Supported Platforms</h2>
        <ScrollingPlatformIcons />
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">And Many More Features...</h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service, index) in services" :key="index" class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">They've tried, they never looked back</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-lg">
            <p class="text-gray-600 mb-4">"{{ testimonial.comment }}"</p>
            <div class="flex items-center">
              <div class="h-10 w-10 rounded-full bg-gray-200"></div>
              <div class="ml-3">
                <p class="font-semibold">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InteractionTool from './InteractionTool.vue';
import ScrollingPlatformIcons from '../components/ScrollingPlatformIcons.vue';
import ScrollReveal from '../components/ScrollReveal.vue';

const services = ref([
  { title: '24/7 Support', description: 'Get help anytime, anywhere with our AI-powered chatbot.' },
  { title: 'Smart Solutions', description: 'Intelligent responses based on your specific needs and questions.' },
  { title: 'Human Backup', description: 'Seamless escalation to human agents when needed.' }
]);

const platforms = [
  'WordPress', 'Instagram', 'WhatsApp', 'Shopify', 'Facebook', 'Twitter', 'Slack', 'Discord'
];

const testimonials = ref([
  { name: 'Sarah Johnson', position: 'CEO at TechCorp', comment: 'This chatbot has transformed our customer support. Response times are down 80%!' },
  { name: 'Mike Chen', position: 'CTO at StartupX', comment: 'The AI capabilities are impressive. Setup was a breeze.' },
  { name: 'Emily Brown', position: 'Support Lead at ScaleUp', comment: 'Our team loves it. The automation has freed up so much time.' }
]);

const startChat = () => {
  // This function would trigger the chat widget
  // For now, it's just a placeholder
};
</script>

<style scoped>
:deep(.scrolling-platform-icons) {
  max-width: 100vw;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>