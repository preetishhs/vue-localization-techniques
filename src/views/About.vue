<template>
  <div class="about">
    {{ $t('about') }}
    <lang-dropdown />
  </div>
</template>
<script>
import LangDropdown from '@/components/LangDropdown.vue'
export default {
  name: 'HelloWorld',
  components: {
    LangDropdown
  }
}
</script>
