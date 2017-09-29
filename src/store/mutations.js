export default {
    TOPSTORIES (state, data) {
        state.topStories['data'] = data
        state.topStories['fromFireBase'] = true
        console.log('mutation', state.topStories.data)
        // @note2Self: can improve resetting error state by extending an object on mutation constructor - find out how
        state.error.data = {'message': ''}
        state.error.status = ''
    },

    reset (state, payload) {
        state.topStories = {}
        state.topStories['fromFireBase'] = false
    }
}
