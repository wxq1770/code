<template>
  <div id="app">
    <headerTmp></headerTmp>
      <main >
        	<sidebarTmp></sidebarTmp>
    	    <router-view></router-view>
    	</main>
	  <footerTmp></footerTmp>
  </div>
</template>

<script>
import headerTmp from '@components/header'
import footerTmp from '@components/footer'
import sidebarTmp from '@components/sidebar'

export default {
  name: 'app',
  data() {
    return {
      dialogVisible: false
    };
  },
  created(){
    
  },
  components : {headerTmp,footerTmp,sidebarTmp}
}
</script>

<style lang='less'>
  main{ margin-bottom: 70px; margin-top: 70px;}
</style>
