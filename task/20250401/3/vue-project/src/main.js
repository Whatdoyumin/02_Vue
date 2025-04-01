import { createApp } from 'vue';
import App from './App1.vue';
import './assets/main.css';

import VueLazyload from 'vue-lazyload';

const app = createApp(App);
app.use(VueLazyload);
app.mount('#app');
