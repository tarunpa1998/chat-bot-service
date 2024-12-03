<template>
  <nav class="flex space-x-4">
    <HoverMenu title="Home">
      <router-link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</router-link>
      <router-link to="/featured" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Featured</router-link>
      <router-link to="/latest" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Latest</router-link>
    </HoverMenu>

    <HoverMenu title="About">
      <router-link to="/about" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</router-link>
      <router-link to="/team" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</router-link>
      <router-link to="/mission" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Mission</router-link>
    </HoverMenu>

    <HoverMenu title="Pricing">
      <router-link to="/pricing" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Plans</router-link>
      <router-link to="/compare" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Compare</router-link>
      <router-link to="/enterprise" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Enterprise</router-link>
    </HoverMenu>

    <HoverMenu title="Contact">
      <router-link to="/contact" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</router-link>
      <router-link to="/support" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</router-link>
      <router-link to="/locations" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Locations</router-link>
    </HoverMenu>
  </nav>
</template>

<script setup lang="ts">
import HoverMenu from './navigation/HoverMenu.vue';
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #f3f4f6;
}
</style>