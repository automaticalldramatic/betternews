<template>
    <div>
        <h3>
            <center v-show="topStories.fromFireBase == false">Loading ...</center>
        </h3>
        <div class="pure-g" v-show="topStories.fromFireBase == true">
                <transition-group name="fade-in-left" tag="ul" class="pure-g">
                    <li v-for="(stories, index) in topStories.data" :key="index" class="pure-u-1-3" :class="{ 'active': index % 5 === 0  }">
                        <h5>{{stories.title}}</h5>
                        <span>by: {{stories.by}}</span>
                    </li>
                </transition-group>
                <!-- </transition-group> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',

    data () {
        return {}
    },
    methods: {
        getTopStories () {
            this.loadingMsg = false
            return this.$store.getters.topStories
        }
    },
    computed: {

        topStories () {
            this.$store.dispatch('topStories')
            return this.$store.getters.topStories
        }

    },
    watch: {
        topStories (newObj) {
            console.log('wa', newObj)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
    overflow-y: auto;
    overflow-x: scroll;
}

li {
    // border: 1px solid;
    // height: 100vh;
    // padding: 3em 5em;
    &:nth-child(2n) {
        background: #eee;
    }
}

a {
    color: #42b983;
}
.stories-list {

}
.fade-in-left-enter,
.fade-in-left-leave-active {
    transform: translate3d(100%, 0, 0);
    box-shadow: none;
}

.fade-out-left-enter,
.fade-out-left-leave-active {
    transform: translate3d(-100%, 0, 0);
    box-shadow: none;
}

.fade-in-bottom-enter,
.fade-in-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
    box-shadow: none;
}

.fade-in-left-leave-active,
.fade-in-left-enter-active {
    transition: transform .2s ease;
}
.fade-out-left-enter-active,
.fade-in-bottom-enter-active,
.fade-in-bottom-leave-active {
    transition: transform .2s ease;
}

.fade-out-left-leave-active {
    transition: transform .1s ease;
}
</style>
