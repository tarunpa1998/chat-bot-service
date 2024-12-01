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
        <h2 class="text-xl font-semibold mb-4">Send us a message</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
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

const mapContainer = ref<HTMLElement | null>(null);
const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value);
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  };
};

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