import Vue from 'vue'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import Firebase from 'firebase'
Vue.use(VueResource)
Vue.use(VueFire)

const API_URL = 'https://hacker-news.firebaseio.com'
const VERSION = '/v0'
const FIREBASE_APP = Firebase.initializeApp({ databaseURL: API_URL })
const API = FIREBASE_APP.database().ref(VERSION)

function fetch (child) {
    console.log(`fetching ${child}...`)
    const CACHE = API.cachedItems
    if (CACHE && CACHE.has(child)) {
        console.log(`Cache hit for ${child}.`)
        return Promise.resolve(CACHE.get(child))
    } else {
        return new Promise((resolve, reject) => {
            API.child(child).once('value', snapshot => {
                const val = snapshot.val()
                // mark the timestamp when this item is CACHEd
                if (val) val.__lastUpdated = Date.now()
                CACHE && CACHE.set(child, val)
                console.log(`fetched ${child}.`)
                resolve(val)
            }, reject)
        })
    }
}

export default {
    topStories (store) {
        return API.cachedIds && API.cachedIds['top']
            ? Promise.resolve(API.cachedIds['top'])
            : fetch(`topstories`)
    },

    fetchStory (id) {
        return fetch(`item/${id}`)
    },

    fetchStories (ids) {
        return Promise.all(ids.map(id =>
            this.fetchStory(id)
        ))
    }
}
