import '../scss/style.scss';
import '../img/favicon.png';

import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './vue/App.vue';
import router from './router'

window.addEventListener('load', () => {
    Vue.use(VueRouter);

    new Vue({
        render: h => h(App),
        router
    }).$mount('#app');
});

