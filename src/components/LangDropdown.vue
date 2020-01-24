<template>
  <div class="lang-dropdown">
    <select v-model="lang">
      <option
        v-for="(lang, i) in languageArray"
        :key="`lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>
<script>
import { languages } from '@/plugins/i18n'
export default {
  name: 'langDropdown',
  data() {
    return {
      languageArray: languages
    }
  },
  computed: {
    lang: {
      get: function() {
        return this.$store.state.locale
      },
      set: function(newVal) {
        this.$store.dispatch('changeLocale', newVal)
      }
    }
  }
}
</script>
