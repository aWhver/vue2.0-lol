// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '../static/theme/material-icons.css'
import '../static/css/app.css'
import store from './store/index'

Vue.use(MuseUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
