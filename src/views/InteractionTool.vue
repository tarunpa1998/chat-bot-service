<template>
  <div class="interaction-tool grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
    <!-- Form Section with Wrong Sign -->
    <div class="form-section relative bg-white rounded-xl shadow-md overflow-hidden p-8 border border-transparent">
      <FormSection />
      <div class="icon-overlay">
        <div class="wrong-sign">
          <div class="circle red">
            <span class="icon">✕</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Live Chat Demo with Right Sign -->
    <div class="live-chat-demo relative bg-white rounded-xl shadow-md overflow-hidden p-8 border border-transparent">
      <LiveChatDemo />
      <div class="icon-overlay">
        <div class="right-sign">
          <div class="circle green">
            <span class="icon">✔</span>
          </div>
        </div>
      </div>
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

.icon-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.red {
  background-color: #e74c3c;
}

.green {
  background-color: #27ae60;
}

.try-it-out {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  font-weight: bold;
  text-align: center;
}
</style>
