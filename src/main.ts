import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from '@/App.vue'
import router from '@/router';

import './assets/css/style.css';

const app = createApp(App);
// Add routes
app.use(router)
// Add store
app.use(createPinia());
// Mount app
app.mount('#app');
