<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ $t('welcomeMessage') }}
    </p>
    <p class="date">Today's Date: {{ $d(new Date(), 'long') }}</p>
    <lang-dropdown />
  </div>
</template>

<script>
import LangDropdown from './LangDropdown.vue'
export default {
  name: 'HelloWorld',
  components: {
    LangDropdown
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
</style>
