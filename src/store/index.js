import { createStore } from 'vuex';

const store = createStore ({
    state: {
     
        appName: 'lol',

        navStuff: {
            navOpen: false,
        }
    },

    mutations: {
        toggleNav(state) {
          state.navStuff.navOpen = !state.navStuff.navOpen
        }
      },
})

export default store