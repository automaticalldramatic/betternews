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
const ITEMS_CACHE = Object.create(null)

export default {
    topStories (store) {
        API.child('topstories').on('value', snapshot => {
            console.log(snapshot.val())
            let arr = snapshot.val()
            let stories = []
            arr.forEach(function (id) {
                API.child('item/' + id).once('value', snapshot => {
                    const story = ITEMS_CACHE[id] = snapshot.val()
                    stories.push(story)
                })
            })
            store.commit('TOPSTORIES', stories)
        })
    }
}
