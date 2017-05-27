<template>
<header>
   <mu-appbar title="vip简历">
    <mu-icon-button icon="menu" slot="left"/>
    <mu-flat-button label="您的简历" slot="right"/>
    <mu-flat-button href="333" label="编写简历" slot="right"/>
    <mu-icon-button icon="expand_more" slot="right"/>
  </mu-appbar>
</header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang='less' scoped>
header{
  position: fixed; top: 0px; left: 0px; width: 100%; z-index: 1
}
</style>
