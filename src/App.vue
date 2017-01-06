<template>
  <div id="app">
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="less" src="./app.less"></style>
<script>
export default {
  name: 'app'
}
</script>
