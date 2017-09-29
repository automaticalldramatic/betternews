import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        'topStories': {
            'data': {},
            'fromFireBase': false
        },
        'error': {
            'data': {},
            'status': ''
        }
    },
    mutations,
    actions,
    getters: {
        topStories (state) {
            return state.topStories
        }
    }
})
