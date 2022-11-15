import { createApp } from 'vue'
import { createPinia } from 'pinia';

import 'uno.css'; // unoCSS
import '@unocss/reset/tailwind.css'; // Reset styles
import '@/assets/css/style.css'; // Main styles
import App from '@/App.vue'
import router from '@/router';


const app = createApp(App);
// Add routes
app.use(router)
// Add store
app.use(createPinia());
// Mount app
app.mount('#app');
