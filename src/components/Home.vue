<template>
    <div>
        <h3>
            <center v-if="this.$store.topStories.fromFireBase">Loading ...</center>
        </h3>
        <transition name="fade-out-left">
            <div class="row">
                <ul id="example-2">
                    <li v-for="(stories, index) in this.$store.topStories.data">
                        {{ index }} - {{ stories }}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            loadingMsg: false
        }
    },
    methods: {
        getTopStories () {
            this.loadingMsg = false
            return this.$store.getters.topStories
        }
    },
    computed: {
        topStories: {
            // getter
            get: function () {
                console.log('getter', this.$store.topStories)
                return this.$store.dispatch('topStories')
            }
        }

    },
    watch: {
        topStories (newObj) {
            console.log('from watcheer', this.$store.topStories)
            // this.loadingMsg = true
            // this.getTopStories()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
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
    transition: transform .6s ease;
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
