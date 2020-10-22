import './scss/index.scss';

import App from './vue/App.vue';
import Vue from 'vue';
import Router from './router.js';
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, Axios);

new Vue({
   components: { App },
   el: '#app',
   router: Router,
   template: '<App></App>' 
});