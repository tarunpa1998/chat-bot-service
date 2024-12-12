<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p class="mt-4 text-lg text-gray-500">
        Get in touch with our team for any inquiries or support.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Contact US</h2>
        <LiveChatDemo :showHeading="false" initialMessage="Hello! How can we assist you today?" />
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">Address</h3>
            <p class="text-gray-600">123 AI Street, Tech City, TC 12345</p>
          </div>
          <div>
            <h3 class="font-medium">Email</h3>
            <p class="text-gray-600">support@aichatbot.com</p>
          </div>
          <div>
            <h3 class="font-medium">Phone</h3>
            <p class="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div class="mt-6 h-64" ref="mapContainer"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LiveChatDemo from '../components/LiveChatDemo.vue'; 

const mapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (mapContainer.value) {
    const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([51.505, -0.09]).addTo(map);
  }
});
</script>