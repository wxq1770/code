<template>
  <footer class="footer">
  	尾部
    <img :src='imgUrl'>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data : function(){
    return {
      imgUrl : '/assets/logo.png'
    } 
  }
}
</script>

<style scoped>
.footer{
	width: 100%;
	background: #5fc2e9;
  background-image: url('/assets/logo.png');
}
</style>

