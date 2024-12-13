<template>
  <div class="min-h-screen relative">
    <BreathingBackground />
    <nav class="bg-transparent backdrop-blur-sm shadow sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <span class="text-xl font-bold text-primary-600">AI Support</span>
            </router-link>
          </div>
          <div class="flex-1 flex justify-center">
            <NavigationMenu />
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/auth" class="sign-in-button">Sign In</router-link>
            <router-link to="/auth">
              <CustomButton 
                text="Create Chat Bot" 
                hoverText="Start For Free"
                class="fixed-width-button"
                 @click="navigateToAuth"
              />
            </router-link>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToAuth = () => {
  router.push('/auth');
};
const showChat = ref(true);
</script>

<style>
.nav-link {
  display: inline-flex;
  align-items: center;
  padding-left: 0.25rem; 
  padding-right: 0.25rem; 
  padding-top: 0.25rem; 
  font-size: 0.875rem; 
  font-weight: 500; 
  color: #6b7280; 
  border-bottom-width: 2px; 
  border-color: transparent; 
  transition-property: color, border-color; 
  transition-duration: 200ms;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sign-in-button {
  color: #0d9488; 
  padding-left: 1rem; 
  padding-right: 1rem; 
  padding-top: 0.5rem; 
  padding-bottom: 0.5rem; 
  border-radius: 0.375rem; 
  transition-property: color, background-color;
  transition-duration: 200ms; 
}

.sign-in-button:hover {
  color: white;
  background-color: #11b9a6;
}

.fixed-width-button {
  width: 200px; /* Set a fixed width to prevent shifting */
}
</style>