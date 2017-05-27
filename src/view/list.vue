<template>
  <div class="list">
    111
    <banner></banner>
  </div>
</template>

<script>
import banner from '@components/banner'
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : { banner }
}
</script>