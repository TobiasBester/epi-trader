import Vue from 'vue';
import VueRotuer from 'vue-router';

// TODO: 2 - Import and add VueRouter to the Vue application

import App from './App.vue';
import routes from './routes';

Vue.use(VueRotuer);

const router = new VueRotuer({
    mode: 'history',
    routes,
});

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
