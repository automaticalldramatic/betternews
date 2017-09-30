import Vue from 'vue'

export default {
    TOPSTORIES (state, ids) {
        state.topStories['ids'] = ids
        // @note2Self: can improve resetting error state by extending an object on mutation constructor - find out how
        state.error.data = {'message': ''}
        state.error.status = ''
    },

    SET_STORIES: (state, { stories }) => {
        stories.forEach(story => {
            if (story) {
                Vue.set(state.stories, story.id, story)
            }
        })
    },

    reset (state, payload) {
        state.topStories = {}
    }
}
