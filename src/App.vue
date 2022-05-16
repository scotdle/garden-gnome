
<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
      <topToolbar/>
      <navSidebar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navSidebar from './components/navSidebar.vue'
import topToolbar from './components/topToolbar.vue'


export default {
  name: 'App',
  components: {
    navSidebar,
    topToolbar
  },

  data: () => ({
    theme: 'light',
    //

  }),
}
</script>
