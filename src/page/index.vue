<template>
  	<div class="container">
  		<!-- banner -->
      <AppBanner></AppBanner>
			<!-- 首页的广告 -->
			<div class="home-advertise">
				<!-- tit -->
        <p class="con-tit">
        	<span>9月，中秋时节缓秋乏</span>
        	<a class="con-tit-btn" target="_blank" href="javascript:">更多菜单 &gt;</a>
        </p>
        <!-- 容器 -->
        <div class="home-advertise-container">
        	<!-- 内容盒子 -->
        	<div class="home-advertise-box">
	        	<!-- 单屏内容 -->
	        	<div class="home-advertise-single">
		        	<ul class="home-advertise-list">
		        		<li>
		        			
		        		</li>
		        	</ul>
	        	</div>
        	</div>
        	<!-- 左右按钮 -->
        	<a class="home-advertise-btn home-advertise-btn-prev" href="javascript:"></a>
        	<a class="home-advertise-btn home-advertise-btn-next" href="javascript:"></a>
        </div>
			</div>
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
	  },
	  data () {
	  }
	}
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .container{
    background: #fae8c8;
  }
  .con-tit-btn{
    position: absolute;
    right: 0px;
    top: 36px;
    height: 48px;
    line-height: 48px;
    font-size: 12px;
    font-family: 宋体;
    display: inline-block;
  	color: #666;
  	&:hover{
  		color: #ff3232;
  	}
  }

  .home-advertise-container{
  	position: relative;
    @include con-auto;
  }
</style>