<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/appHeader.vue'
  export default {
    name: 'app',
    components: { AppHeader },
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
