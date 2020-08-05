import Vue from 'vue'
import PortalVue from 'portal-vue'
import App from './App.vue'
// import { i18n } from './i18n'
// import router from './router'
// import { Trans } from './plugins/Translation'

// Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

import 'normalize.css'
import './main.css'

Vue.use(PortalVue)
Vue.config.productionTip = false


new Vue({
  // i18n,
  // router,
  render: h => h(App),
}).$mount('#app')
