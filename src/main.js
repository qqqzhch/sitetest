import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'

import store from './store'
import Antdesign from './Ant-design.js'
import I18n from './I18n.js'

import './less/index.less';

Antdesign(Vue);
var i18n = I18n(Vue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
