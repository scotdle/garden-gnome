<template>

  <v-app-bar color="secondary" density="compact" flat="false">

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="toggleNav" ></v-app-bar-nav-icon>
    </template>

    <v-btn icon>
      <v-img :src="logo" height="30px" width="30px" />
    </v-btn>
  </v-app-bar>

</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  import logo from '../assets/gg-logo.svg'


  export default {

    data: () => ({
      logo,
    }),

    methods: {
      ...mapMutations([
        'toggleNav'
      ])

    },

    computed: {
      navState() {
        return this.$store.state.navStuff.navOpen
      }
    },
  }
</script>