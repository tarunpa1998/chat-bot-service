<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2">
            <li><router-link to="/about" class="hover:text-indigo-400">About Us</router-link></li>
            <li><router-link to="/contact" class="hover:text-indigo-400">Contact</router-link></li>
            <li><router-link to="/pricing" class="hover:text-indigo-400">Pricing</router-link></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li><router-link to="/resources/docs" class="hover:text-indigo-400">Documentation</router-link></li>
            <li><router-link to="/resources/blog" class="hover:text-indigo-400">Blog</router-link></li>
            <li><router-link to="/resources/community" class="hover:text-indigo-400">Community</router-link></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-indigo-400"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-indigo-400"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="hover:text-indigo-400"><i class="fab fa-github"></i></a>
          </div>
        </div>
        
        <div>
          <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Create Your Bot
          </button>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 text-center">
        <p>&copy; 2024 AI Chatbot. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>