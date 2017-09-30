import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        'topStories': {
            'ids': []
        },
        'stories': {/* [id: number]: Story */},
        'storiesPerPage': 20,
        'currentPage': 1,
        'error': {
            'data': {},
            'status': ''
        }
    },
    mutations,
    actions,
    getters: {
        pageStoryIds (state) {
            const { storiesPerPage, topStories } = state

            const page = Number(state.route.params.page) || 1
            const start = (page - 1) * storiesPerPage
            const end = page * storiesPerPage
            console.log(start, end)

            let storyIds = topStories.ids.slice(start, end)
            return storyIds
        },

        // items that should be currently displayed.
        // this Array may not be fully fetched.
        pageStories (state, getters) {
            console.log('strs', getters.pageStoryIds.map(id => state.stories[id]).filter(_ => _))
            return getters.pageStoryIds.map(id => state.stories[id]).filter(_ => _)
        }
    }
})
