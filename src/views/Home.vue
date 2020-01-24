<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="$t('hello')" />
    <div class="link">
      <router-link :to="{ name: 'about' }"> About </router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
.link {
  padding-top: 20px;
}
a {
  text-decoration: underline;
}
</style>
