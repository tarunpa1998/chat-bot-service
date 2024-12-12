
<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2">
            <li><router-link to="/about" class="hover:text-primary-500">About Us</router-link></li>
            <li><router-link to="/contact" class="hover:text-primary-500">Contact</router-link></li>
            <li><router-link to="/pricing" class="hover:text-primary-500">Pricing</router-link></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li><router-link to="/resources/docs" class="hover:text-primary-500">Documentation</router-link></li>
            <li><router-link to="/resources/blog" class="hover:text-primary-500">Blog</router-link></li>
            <li><router-link to="/resources/community" class="hover:text-primary-500">Community</router-link></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Made with ❤️ <br>
            by <span class="text-white">@Tarun</span></h3>
        </div>
        
        <div>
          <CustomButton 
              text="Create Chat Bot" 
              hoverText="Start For Free"
              @click="handleCreateChatBot"
          />
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-500 text-center">
        <p>&copy; 2024 AI Chatbot. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import CustomButton from './CustomButton.vue';
const handleCreateBot = () => {
  // Add logic for creating a bot here
  console.log('Create Your Bot clicked');
};
</script>
