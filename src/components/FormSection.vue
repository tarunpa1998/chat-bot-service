<template>
  <div class="form-section bg-none rounded-xl shadow-none overflow-hidden">
    <h2 class="text-xl font-bold mb-4">Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Full Name *</label>
        <input type="text" v-model="fullName" required class="w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email *</label>
        <input type="email" v-model="email" required class="w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Services</label>
        <div>
          <label><input type="checkbox" v-model="services" value="Website Dev" /> Website Dev</label>
          <label><input type="checkbox" v-model="services" value="Content Marketing" /> Content Marketing</label>
          <!-- Add more services as needed -->
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Additional Information</label>
        <textarea v-model="additionalInfo" class="w-full px-3 py-2 border rounded-md"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const services = ref<string[]>([]);
const additionalInfo = ref('');

function handleSubmit() {
  // Handle form submission logic
  console.log({ fullName: fullName.value, email: email.value, services: services.value, additionalInfo: additionalInfo.value });
}
</script>

<style scoped>

.form-section {
  max-width: 500px;
  max-height: 500px;
  outline: none;
}
</style>