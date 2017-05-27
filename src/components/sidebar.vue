<template>
  <div class="sidebar">
  	<span class="logo"></span>
  	<div class="nav">侧边栏</div>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang='less' scoped>
.sidebar{
	width: 100%;
	background: #5fc2e9;
	.logo{}
	.nav{
		a{ color: #fff; }
	}
}
</style>
