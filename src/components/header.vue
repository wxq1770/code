<template>
  <header class="header">
  	<span class="logo"></span>
  	<div class="nav">
  		<router-link :to="{ path: '/index'}">首页</router-link>
    	<router-link :to="{ path: '/resume'}">简历</router-link>
    	<router-link :to="{ path: '/myBlog'}">我的主页</router-link>
    	<router-link :to="{ path: '/about'}">关于我们</router-link>
    	<router-link :to="{ path: '/employ'}">招聘</router-link>
  	</div>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang='less' scoped>
@import '../../static/css/common.less';
.header{
	width: 100%;
	background: #5fc2e9;
	.logo{}
	.nav{
		a{ 
      color: #fff; 
      .px2px(font-size, 32);
    }
	}
}
</style>
