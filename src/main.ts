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

import ScrollReveal from './components/ScrollReveal.vue';

import AuthContainer from './views/AuthContainer.vue';

// Routes
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Resources from './views/Resources.vue';
import Pricing from './views/Pricing.vue';


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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/pricing', name: 'pricing', component: Pricing },
    { path: '/resources', name: 'resources', component: Resources },
    { path: '/resources/blog', name: 'blog', component: Resources },
    { path: '/resources/docs', name: 'docs', component: Resources },
    { path: '/resources/community', name: 'community', component: Resources },
    { path: '/auth', name: 'auth', component: AuthContainer } // New route for AuthContainer
  ]
});

const pinia = createPinia();
const app = createApp(App);

app.component('ScrollReveal', ScrollReveal);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount('#app');