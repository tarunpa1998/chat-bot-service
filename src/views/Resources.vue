<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-center mb-12">Resources</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="resource-card">
        <h2 class="text-xl font-semibold mb-4">Documentation</h2>
        <p class="text-gray-600 mb-4">Comprehensive guides and API documentation for our chatbot platform.</p>
        <router-link to="/resources/docs" class="text-indigo-600 hover:text-indigo-700">
          Browse Documentation →
        </router-link>
      </div>
      
      <div class="resource-card">
        <h2 class="text-xl font-semibold mb-4">Blog</h2>
        <p class="text-gray-600 mb-4">Latest updates, tutorials, and industry insights.</p>
        <router-link to="/resources/blog" class="text-indigo-600 hover:text-indigo-700">
          Read Blog Posts →
        </router-link>
      </div>
      
      <div class="resource-card">
        <h2 class="text-xl font-semibold mb-4">Community Forum</h2>
        <p class="text-gray-600 mb-4">Connect with other developers and share experiences.</p>
        <router-link to="/resources/community" class="text-indigo-600 hover:text-indigo-700">
          Join Discussion →
        </router-link>
      </div>
      
      <div class="resource-card">
        <h2 class="text-xl font-semibold mb-4">GitHub Repository</h2>
        <p class="text-gray-600 mb-4">Access our open-source projects and contribute.</p>
        <a href="https://github.com/your-org" target="_blank" class="text-indigo-600 hover:text-indigo-700">
          View on GitHub →
        </a>
      </div>
    </div>    
  </div>
</template>

<style scoped>
.resource-card {
  @apply bg-white p-6 rounded-lg shadow-md;
}
</style>