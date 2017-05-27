<template>
  <div class="index">
    ccc
    <banner></banner>
  </div>
</template>

<script>
import banner from '@components/banner'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : { banner }
}
</script>