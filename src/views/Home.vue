<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <ScrollReveal>
      <div class="text-center">
       <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
  <span class="text-[#0b6f64]">AI-Powered</span> Customer Support
</h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Our AI-Powered chatbot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your web/mobile apps and start collecting results like magic.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <CustomButton @click="startChat">Start Chat</CustomButton>
        </div>
      </div>
    </ScrollReveal>


<ScrollReveal>
      <div class="mt-16 flex justify-center">
        <div class="w-full max-w-8xl">
          <video
            class="w-full rounded-lg shadow-lg"
            autoplay
            loop
            muted
            playsinline
          >
            <source src="/assets/videos/demo_bot.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </ScrollReveal>

    <div class="h-20"></div>

    <ScrollReveal>
  <div class="mt-16">
    <h2 class="text-4xl font-bold text-center mb-8">
      Replace your old school forms with <span class="text-[#000000]">Chatbots</span>
    </h2>
    <p class="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
      AI bot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by 3 your conversion rate compared to classical forms.
    </p>
    
    <ScrollReveal class="mt-18"> 
  <InteractionTool />
</ScrollReveal>
  </div>
</ScrollReveal>

    <ScrollReveal>
  <div class="mt-20">
    <ScrollReveal class="mt-32">      
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <img src='/assets/Images/block demo.png' alt="Embed Demo" class="w-full h-auto rounded-lg">
        </div>
        
        <div class="md:w-1/2 md:pl-8 flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4 text-center md:text-left">Easy building <span class="text-black">Experience</span></h2>
          <p class="text-lg text-gray-600 text-center md:text-left mb-4">
            All you have to do is drag and drop blocks to create your app. 
            Even if you have custom needs, you can always add custom code.
          </p>
          <CustomButton 
            
            text="Try it now" 
            hoverText="Get Started"
class="mx-auto md:mx-0 text-sm py-4 px-4 w-40"
          />
        </div>
      </div>
    </ScrollReveal>
  </div>
</ScrollReveal>

<div class="h-20"></div>

<ScrollReveal>
  <div class="mt-20">
    <ScrollReveal class="mt-32">      
      <div class="flex flex-col md:flex-row-reverse items-center">
        <div class="md:w-1/2 mb-4 md:mb-0 md:pl-8">
          <img src='/assets/Images/embed demo.png' alt="Embed Demo" class="w-full h-auto rounded-lg">
        </div>
        
        <div class="md:w-1/2 md:pr-8 flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4 text-center md:text-left"><span class="text-black">Embed</span> it in a click</h2>
          <p class="text-lg text-gray-600 text-center md:text-left mb-4">
            Embedding your bot in your applications is a walk in the park. AI bot gives you several step-by-step platform-specific instructions. 
            Your bot will always feel "native"
          </p>
          <CustomButton 
            text="Try it now" 
            hoverText="Get Started"
class="mx-auto md:mx-0 text-sm py-4 px-4 w-40"
          />
        </div>
      </div>
    </ScrollReveal>
  </div>
</ScrollReveal>


    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">Integrate Everywhere</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="platform in platforms" :key="platform" class="bg-white p-4 rounded-lg shadow text-center">
            {{ platform }}
          </div>
        </div>
      </div>
    </ScrollReveal>

    <div class="h-20"></div>

<ScrollReveal>
  <div class="mt-16">
    <h2 class="text-3xl font-bold text-center mb-8">Supported <span class="text-black">Platforms</span></h2>
    <ScrollReveal class="mt-22">
    <ScrollingPlatformIcons />
  </ScrollReveal>
  </div>
</ScrollReveal>

    <ScrollReveal>
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-8">And Many More Features...</h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service, index) in services" :key="index" class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>

    <div class="h-16"></div>

<ScrollReveal>
  <div class="mt-16">
    <h2 class="text-3xl font-bold text-center mb-8"><span class="text-black">They've tried,</span> they never looked Back</h2>
    <ScrollReveal class="mt-32"> 
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-lg">
        <p class="text-gray-600 mb-4">"{{ testimonial.comment }}"</p>
        <div class="flex items-center">
          <div class="h-10 w-10 rounded-full bg-gray-200"></div>
          <div class="ml-3">
            <p class="font-semibold">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
          </div>
        </div>
      </div>
    </div>
    </ScrollReveal>
  </div>
</ScrollReveal>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import InteractionTool from './InteractionTool.vue';
import ScrollingPlatformIcons from '../components/ScrollingPlatformIcons.vue';
import ScrollReveal from '../components/ScrollReveal.vue';
import CustomButton from '../components/CustomButton.vue'; // Add this import

const services = ref([
  { title: '24/7 Support', description: 'Get help anytime, anywhere with our AI-powered chatbot.' },
  { title: 'Smart Solutions', description: 'Intelligent responses based on your specific needs and questions.' },
  { title: 'Human Backup', description: 'Seamless escalation to human agents when needed.' }
]);

const platforms = [
  'WordPress', 'Instagram', 'WhatsApp', 'Shopify', 'Facebook', 'Twitter', 'Slack', 'Discord'
];

const testimonials = ref([
  { name: 'Sarah Johnson', position: 'CEO at TechCorp', comment: 'This chatbot has transformed our customer support. Response times are down 80%!' },
  { name: 'Mike Chen', position: 'CTO at StartupX', comment: 'The AI capabilities are impressive. Setup was a breeze.' },
  { name: 'Emily Brown', position: 'Support Lead at ScaleUp', comment: 'Our team loves it. The automation has freed up so much time.' }
]);

const startChat = () => {
  // This function would trigger the chat widget
  // For now, it's just a placeholder
};
</script>

<style scoped>
:deep(.scrolling-platform-icons) {
  max-width: 100vw;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>