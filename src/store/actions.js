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
// const ITEMS_CACHE = Object.create(null)
// const STORIES_PER_PAGE = store.storiesPerPage = 30
// const STORIES_PER_PAGE = 30
// const SCRAPE_URL = API_URL + 'scrape'
// let topStoryIds = []

// Vue.http.options.emulateJSON = true
// Vue.http.headers.common['Accept'] = 'application/json'
// Vue.http.headers.common['Content-Type'] = 'application/json'

export default {
    topStories (store) {
        API.child('topstories').on('value', snapshot => {
            store.commit('TOPSTORIES', snapshot.val())
        })
            // 'value', snapshot => {
            // console.log(snapshot)
            // topStoryIds = snapshot.val()

        // })
        // return Vue.http.post(SCRAPE_URL, { 'url': key })
        //     .then(
        //         res => res.json(),
        //         res => {
        //             console.error('error: ', res.status, res.body.data.message)
        //             return res.json()
        //         }
        //     )
    }
}

// export default {
//     topStories (store) {
//         HackerNews.topStories().then(data => {
//             // if (data.status === 200) {
//                 // data['url'] = key
//             store.commit('TOPSTORIES', data)
//             // } else {
//                 // store.commit('ERROROBJ', data)
//             // }
//         })
//     }
// }
