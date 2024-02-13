import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import { i18n } from './locale/i18n';
import { router } from './router/route';

createApp(App).use(i18n).use(router).mount('#app');