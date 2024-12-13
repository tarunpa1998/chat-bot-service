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
        <h2 class="text-xl font-semibold mb-4"><span class="text-black">Contact</span> US</h2>
        <LiveChatDemo :showHeading="false" initialMessage="Hello! How can we assist you today?" />
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4"><span class="text-black">Contact</span> Information</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">Address</h3>
            <p class="text-gray-600">Luegerstrasse 12, Klagenfurt, Austria 9020</p>
          </div>
          <div>
            <h3 class="font-medium">Email</h3>
            <a href="mailto:mailme2tarun@gmail.com" class="text-gray-600 hover:underline">mailme2tarun@gmail.com</a>
          </div>
          <div>
            <h3 class="font-medium">Phone</h3>
            <a href="tel:+436609601119" class="text-gray-600 hover:underline">+43-6609601119</a>
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
    const map = L.map(mapContainer.value).setView([46.61954269617561, 14.282333797026151], 13); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([46.61954269617561, 14.282333797026151]).addTo(map); 
  }
});
</script>