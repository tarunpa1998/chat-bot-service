import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faWordpress, 
  faInstagram, 
  faWhatsapp, 
  faFacebook, 
  faTwitter, 
  faSlack, 
  faDiscord 
} from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import './style.css';

// Import ScrollReveal component
import ScrollReveal from './components/ScrollReveal.vue';

// Routes
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Resources from './views/Resources.vue';
import Pricing from './views/Pricing.vue';

// Add icons to library
library.add(
  faWordpress,
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTwitter,
  faSlack,
  faDiscord
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/resources', component: Resources },
    { path: '/pricing', component: Pricing },
    { path: '/resources/blog', component: Resources },
    { path: '/resources/docs', component: Resources },
    { path: '/resources/community', component: Resources }
  ]
});

const pinia = createPinia();
const app = createApp(App);


app.component('ScrollReveal', ScrollReveal);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount('#app');