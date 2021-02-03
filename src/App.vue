<template>
  <div id="app">
    <keep-alive :include="keepAliveViews">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keepAliveViews: []
    }
  }
}
</script>

<style lang="less">
</style>
