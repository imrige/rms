import Vue from 'vue';
import Lodash from 'lodash';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import request from "@/utils/request";
import storage from "@/utils/storage";

import AntDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';
import Components from '@/components';

Vue.config.productionTip = false;
Vue.use(AntDesign);
Vue.use(Components);

Vue.prototype.$_ = Lodash;
Vue.prototype.$request = request;
Vue.prototype.$storage = storage;

new Vue({router, store, render: h => h(App)}).$mount('#app');
