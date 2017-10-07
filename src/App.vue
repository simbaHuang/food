<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from './components/appHeader.vue'
  import AppFooter from './components/appFooter.vue'
  export default {
    name: 'app',
    components: { AppHeader, AppFooter },
    created () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
    }
  }
</script>

<style lang="scss">
  @import './style/base/base.scss';
</style>
