import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

store.dispatch('FETCH_TOP_STORIES')

sync(store, router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
