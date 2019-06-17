// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/flexble'
import './static/common.scss'
import './static/fonts/iconfont.css'
// import elmentui from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import store from './store';

// Vue.use(elmentui);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})