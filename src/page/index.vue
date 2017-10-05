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
		        		<li v-for="advert in advertiseList">
                  <!-- img -->
		        			<a href="javascript:"><img :src="advert.imgUrl" :alt="advert.tit"></a>
                  <!-- info -->
                  <div class="home-advertise-info">
                    <p class="home-advertise-name">{{ advert.name }}</p>
                    <p class="home-advertise-tit">{{ advert.tit }}</p>
                  </div>
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
  data () {
    return {
      advertiseList: [
        {
          name: '这里有一份超详尽的假期派对攻略',
          tit: '超详尽的派对攻略',
          imgUrl: 'http://images.meishij.net/p/20170927/eb45ef48e2be5d6b9fd6942a3046861a.jpg'
        },
        {
          name: '中秋就要到了，然而',
          tit: '小编们却为月饼掐了一场架',
          imgUrl: 'http://images.meishij.net/p/20170925/6ac39c5f33030ec9d1d5d678d72fd3ec.jpg'
        },
        {
          name: '一学即会的水煮肉片',
          tit: '水煮肉片一学即会',
          imgUrl: 'http://site.meishij.net/p2/20170928/20170928102723_514.jpg'
        }
      ]
    }
  },
  created () {
    this.$api.get('topics', null, r => {
      console.log(r)
    })
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
  .home-advertise-list{
    font-size: 0;
    li{
      width: 316px;
      @include in-block;
    }
    .home-advertise-info{
      position: relative;
      padding: 10px 20px;
      background-color: #fff;
      &:before{
        content: '';
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        height: 10px;
        background: url(../images/index-adver-bg.gif) no-repeat scroll center top;
      }
      .home-advertise-name{
        color: #333;
        font-size: 24px;
        @include ellipsis;
      }
      .home-advertise-tit{
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
</style>