import Vue from 'vue'
import VueResource from 'vue-resource'
import HackerNews from '@/api/hn'

Vue.use(VueResource)

// const ITEMS_CACHE = Object.create(null)

export default {
    FETCH_TOP_STORIES: ({ commit, dispatch, state }) => {
        return HackerNews.topStories()
            .then(topStories => {
                commit('TOPSTORIES', topStories)
            })
            .then(() =>
                dispatch('GET_PAGE_STORY_IDS')
            )
    },

    // ensure all active items are fetched
    GET_PAGE_STORY_IDS: ({ dispatch, getters }) => {
        return dispatch('FETCH_STORIES', {
            ids: getters.pageStoryIds
        })
    },

    FETCH_STORIES: ({ commit, state }, { ids }) => {
        // on the client, the store itself serves as a cache.
        // only fetch items that we do not already have, or has expired (3 minutes)
        const now = Date.now()
        ids = ids.filter(id => {
            const story = state.stories[id]
            if (!story) {
                return true
            }
            if (now - story.__lastUpdated > 1000 * 60 * 3) {
                return true
            }
            return false
        })
        if (ids.length) {
            return HackerNews.fetchStories(ids).then(stories => commit('SET_STORIES', { stories }))
        } else {
            return Promise.resolve()
        }
    }
}
