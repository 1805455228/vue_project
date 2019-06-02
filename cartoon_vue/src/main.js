// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import globalVue from '@/global/global.vue'
import router from './router'
import VueResource from 'vue-resource'
import YDUI from 'vue-ydui';
import {PullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh';
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';


import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';

import 'vue-ydui/dist/ydui.flexible.js';

Vue.prototype.global = globalVue
Vue.use(VueResource)
Vue.use(YDUI);
Vue.component(PullRefresh.name, PullRefresh);
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
