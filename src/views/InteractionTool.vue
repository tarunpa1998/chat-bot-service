<template>
    
    <div class="interaction-tool grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      
      <div class="form-section bg-white rounded-xl shadow-md overflow-hidden p-8 border border-transparent">
        <FormSection />
      </div>
      <div class="live-chat-demo bg-white rounded-xl shadow-md overflow-hidden p-8 border border-transparent">
        <LiveChatDemo />
      </div>
    </div>
  </template>
  
  <script setup>
  import FormSection from '../components/FormSection.vue';
  import LiveChatDemo from '../components/LiveChatDemo.vue';
  </script>
  
  <style scoped>
  
  .interaction-tool {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  </style>