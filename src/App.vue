<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: mapState(['locale']),
  watch: {
    locale() {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {})
    }
  },
  created() {
    this.$store.dispatch('changeLocale', this.$store.state.locale)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
