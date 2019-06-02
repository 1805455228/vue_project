<template>
  <yd-tabbar fixed="true">
    <yd-tabbar-item title="首页" link="#">
      <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="漫画" link="/booklist" dot>
      <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="个人中心" link="#" active>
      <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
      <yd-badge slot="badge" type="danger">2</yd-badge>
    </yd-tabbar-item>
  </yd-tabbar>
</template>

<script>
    export default {
        name: "booklist"
    }
</script>

<style scoped>

</style>
