import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE:', import.meta.env.MODE);
// console.log('MODE:', import.meta.env.BASE_URL);
// console.log('MODE:', import.meta.env.PROD);
// console.log('MODE:', import.meta.env.DEV);
