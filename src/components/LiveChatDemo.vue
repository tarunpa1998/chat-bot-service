<template>
  <div class="form-section bg-none rounded-xl shadow-none overflow-hidden">
    <h2 class="text-xl font-bold mb-4">Live Chat Demo</h2>
    <div class="chat-messages mb-4" ref="chatContainer">
      <div v-for="(message, index) in messages" :key="index" class="mb-2">
        <div :class="message.type === 'bot' ? 'text-left' : 'text-right'">
          <span :class="[
            message.type === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white',
            {'animate-fade-in': message.type === 'user'}
          ]" class="inline-block px-4 py-2 rounded-lg">
            <template v-if="message.text.toLowerCase().includes('hi') || message.text.toLowerCase().includes('hello')">
              <span class="waving-hand">👋</span> {{ message.text }}
            </template>
            <template v-else>
              {{ message.text }}
            </template>
          </span>
        </div>
      </div>
      <div v-if="isTyping" class="text-left mb-2">
        <span class="inline-block px-4 py-2 rounded-lg bg-gray-200">
          <span class="typing-dots"></span>
        </span>
      </div>
    </div>
    <div v-if="currentStep === 0">
      <button @click="sendHello" class="bg-blue-500 text-white px-4 py-2 rounded-md w-full animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-105">Say Hi 👋</button>
    </div>
    <div v-else-if="currentStep < steps.length">
      <p class="mb-2">{{ steps[currentStep].prompt }}</p>
      <input 
        v-model="userInput" 
        @keyup.enter="handleInput"
        :placeholder="steps[currentStep].placeholder"
        class="w-full px-3 py-2 border rounded-md mb-2"
      />
      <button @click="handleInput" class="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue';

const userInput = ref('');
const messages = ref([
  { type: 'bot', text: 'Hi there! Welcome to our live chat demo.' }
]);

const steps = [
  { prompt: "Click 'Say Hi 👋' to start the conversation!", placeholder: "" },
  { prompt: "Great! May I know your name please?", placeholder: "Enter your name..." },
  { prompt: "What's your email address?", placeholder: "Enter your email..." },
  { prompt: "What service do you need?", placeholder: "e.g., Sales, Support, Marketing" },
  { prompt: "Can you tell me more about your specific needs?", placeholder: "Describe your needs..." },
];

const currentStep = ref(0);
const userData = reactive({
  name: '',
  email: '',
  service: '',
  needs: ''
});

const isTyping = ref(false);
const chatContainer = ref<HTMLElement | null>(null);

function scrollToBottom() {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
}

function sendHello() {
  messages.value.push({ type: 'user', text: 'Hello' });
  scrollToBottom();
  handleInput();
}

function handleInput() {
  if (currentStep.value === 0 || userInput.value.trim() !== '') {
    if (currentStep.value < steps.length) {
      // Add user message to the chat for all steps except the first one
      if (currentStep.value > 0) {
        messages.value.push({ type: 'user', text: userInput.value });
      }
      
      isTyping.value = true;
      scrollToBottom();

      setTimeout(() => {
        let botResponse = '';
        switch (currentStep.value) {
          case 0:
            botResponse = steps[1].prompt;
            break;
          case 1:
            userData.name = userInput.value;
            botResponse = `Nice to meet you, ${userData.name}! What's your email address?`;
            break;
          case 2:
            userData.email = userInput.value;
            botResponse = `Thank you for providing your email, ${userData.name}. ${steps[3].prompt}`;
            break;
          case 3:
            userData.service = userInput.value;
            botResponse = `Great, I can help you with ${userData.service}, ${userData.name}. ${steps[4].prompt}`;
            break;
          case 4:
            userData.needs = userInput.value;
            botResponse = `Thank you for providing that information, ${userData.name}. One of our representatives will be in touch with you at ${userData.email} to discuss your ${userData.service} needs regarding: "${userData.needs}".`;
            break;
        }
        
        isTyping.value = false;
        messages.value.push({ type: 'bot', text: botResponse });
        currentStep.value++;
        userInput.value = '';
        scrollToBottom();
      }, 2000);
    }
  }
}
</script>

<style scoped>

.chat-messages {
  max-height: 300px;
  overflow-y: auto;
  max-width: 500px;
}

.typing-dots::after {
  content: '...';
  animation: typing 1s infinite;
  display: inline-block;
  width: 20px;
  text-align: left;
}

@keyframes typing {
  0% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
  100% { content: ''; }
}

.waving-hand {
  display: inline-block;
  animation: wave 0.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(14deg); }
  100% { transform: rotate(0deg); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>