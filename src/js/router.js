import VueRouter from 'vue-router'
import WebWorkers from './vue/components/WebWorkers.vue';
import ServiceWorkers from './vue/components/ServiceWorkers.vue';
import PushMessages from './vue/components/PushMessages.vue';
import Home from './vue/components/Home.vue';

export default new VueRouter ({
    routes: [
        {
            path: ``,
            component: Home
        },
        {
            path: `/web-workers`,
            component: WebWorkers
        },
        {
            path: `/service-workers`,
            component: ServiceWorkers
        },
        {
            path: `/push-messages`,
            component: PushMessages
        }
    ]
})