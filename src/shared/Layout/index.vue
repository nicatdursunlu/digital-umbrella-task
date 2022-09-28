<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
.a-sidebar {
  max-height: 100vh;
  overflow-y: auto;
}
</style>
