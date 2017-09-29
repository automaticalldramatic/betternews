import Vue from 'vue'
import VueResource from 'vue-resource'
// import HackerNews from '@/api/hn'
import VueFire from 'vuefire'
import Firebase from 'firebase'
Vue.use(VueResource)
Vue.use(VueFire)

const API_URL = 'https://hacker-news.firebaseio.com'
const VERSION = '/v0'
const FIREBASE_APP = Firebase.initializeApp({ databaseURL: API_URL })
const API = FIREBASE_APP.database().ref(VERSION)

export default {
    topStories (store) {
        API.child('topstories').on('value', snapshot => {
            store.commit('TOPSTORIES', snapshot.val())
        })
    }
}
