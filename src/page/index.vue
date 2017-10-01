<template>
  	<div class="container">
      <AppBanner></AppBanner>
  	</div>
</template>

<script>
	import AppBanner from '../components/appBanner.vue'
	export default {
	  components: { AppBanner },
	  created () {
	    this.$api.get('topics', null, r => {
	      console.log(r)
	    })
	  }
	}
</script>

<style>
  .container{
    background: #fae8c8;
  }
</style>