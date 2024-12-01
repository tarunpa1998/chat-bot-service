<template>
  <div class="fixed bottom-4 right-4 z-50">
    <Transition name="slide">
      <div v-if="isOpen" class="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
        <div class="p-4 bg-indigo-600 text-white rounded-t-lg flex justify-between items-center">
          <h3 class="font-semibold">Customer Support</h3>
          <button @click="toggleChat" class="text-white hover:text-gray-200 transition-colors duration-200">
            <span class="sr-only">Close chat</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="chatContainer">
          <ChatMessage v-for="(message, index) in messages" 
            :key="index"
            :type="message.type"
          >
            {{ message.text }}
          </ChatMessage>
        </div>

        <div class="p-4 border-t">
          <form @submit.prevent="sendMessage" class="flex space-x-2">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type your message..."
              class="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Transition>
    
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import ChatMessage from './chat/ChatMessage.vue';

interface Message {
  text: string;
  type: 'user' | 'bot';
}

const isOpen = ref(false);
const newMessage = ref('');
const messages = ref<Message[]>([
  { text: 'Hello! How can I help you today?', type: 'bot' }
]);
const chatContainer = ref<HTMLElement | null>(null);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  messages.value.push({
    text: newMessage.value,
    type: 'user'
  });

  const userMessage = newMessage.value;
  newMessage.value = '';

  setTimeout(() => {
    messages.value.push({
      text: `I received your message: "${userMessage}". How can I assist you further?`,
      type: 'bot'
    });
    scrollToBottom();
  }, 1000);

  await scrollToBottom();
};

onMounted(() => {
  scrollToBottom();
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>