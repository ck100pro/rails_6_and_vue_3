import { createApp } from 'vue';
import router from '@/utils/router'
import store from '@/utils/store'
import App from '@/application';

document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount('#app');
})