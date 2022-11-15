import { createApp } from 'vue'

import 'uno.css'; // unoCSS
import '@/assets/css/style.css'; // Main styles
import App from './App.vue'

import { createPinia } from 'pinia';

const app = createApp(App);
// Add store
app.use(createPinia());
// Mount app
app.mount('#app');
