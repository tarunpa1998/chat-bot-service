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

.sign-in-button {
  @apply text-gray-600 px-4 py-2 rounded-md transition-colors duration-200;
}

.sign-in-button:hover {
  color: white;
  background-color: #11b9a6;
}

.fixed-width-button {
  width: 200px; /* Set a fixed width to prevent shifting */
}
</style>