<template>
  <div class="min-h-screen bg-gray-50=">
    <BreathingBackground />
    <nav class="bg-white/80 backdrop-blur-sm shadow sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <span class="text-xl font-bold text-indigo-600">AI Support</span>
            </router-link>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/about" class="nav-link">About</router-link>
              <router-link to="/pricing" class="nav-link">Pricing</router-link>
              <router-link to="/contact" class="nav-link">Contact</router-link>
              <NavigationMenu />
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/login" class="text-gray-600 hover:text-gray-900">Sign In</router-link>
            <CustomButton 
               text="Create Chat Bot" 
                 @click="handleCreateChatBot"
                        />
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
    <ChatWidget v-if="showChat" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatWidget from './components/ChatWidget.vue';
import NavigationMenu from './components/navigation/NavigationMenu.vue';
import BreathingBackground from './components/BreathingBackground.vue';
import Footer from './components/Footer.vue';
import CustomButton from './components/CustomButton.vue';
import HoverMenu from './components/navigation/HoverMenu.vue';

const showChat = ref(true);

const handleCreateChatBot = () => {
  // Will add my logic for creating a chat bot here
  console.log('Create Chat Bot clicked');
};
</script>

<style>
.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors duration-200;
}

.router-link-active {
  @apply border-indigo-500 text-gray-900;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>