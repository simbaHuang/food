<template>
  	<div class="container">
  		<!-- banner -->
      <AppBanner></AppBanner>
			<!-- 首页的广告 -->
			<div class="home-advertise">
				<!-- tit -->
        <p class="con-tit">
        	<span>10月，晚秋时节润燥滋阴</span>
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
                    <a class="home-advertise-name">{{ advert.name }}</a>
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

			<!-- 当月食材推荐 -->
			<div class="home-recommend">
				<!-- tit -->
        <p class="con-tit">
        	<span>十月，调理脾胃，适时进补</span>
        	<a class="con-tit-btn" target="_blank" href="javascript:">更多菜单 &gt;</a>
        </p>
        <!-- 容器 -->
        <div class="home-recommend-container">
        	<!-- tab 切换 -->
        	<ul class="home-recommend-tab-list">
        		<li v-for="recoTab in recommendList"><a href="javascript:">{{ recoTab.name }}</a></li>
        	</ul>
        	<!-- 内容 -->
        	<ul class="home-recommend-con-list">
        		<li v-for="recoCon in recommendCon.data">
        			<a href="javascript:">
        				<img width="100%" height="100%" :src="recoCon.imgUrl" :alt="recoCon.name">
        				<p class="home-recommend-con-name">{{ recoCon.name }}</p>
        			</a>
        		</li>
        	</ul>
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
        },
        {
          name: '秋季养生蔬菜就选这五...',
          tit: '秋季养生蔬菜就选这五种',
          imgUrl: 'http://site.meishij.net/p2/20170928/20170928102237_755.jpg'
        },
        {
          name: '盖浇饭，填饱肚子最重...',
          tit: '盖浇饭，填饱肚子最重要',
          imgUrl: 'http://site.meishij.net/p2/20170926/20170926140512_647.jpg'
        },
        {
          name: '选蟹、烹饪有何门道？...',
          tit: '60s教你吃对大闸蟹',
          imgUrl: 'http://site.meishij.net/p2/20170920/20170920134551_173.jpg'
        }
      ],
      recommendList: [
        {
          name: '水果',
          data: [
            {
              name: '西瓜',
              imgUrl: 'http://images.meishij.net/p/20110713/0ff549e81061928347d77e12fbb9edcf_150x150.jpg'
            },
            {
              name: '桃',
              imgUrl: 'http://images.meishij.net/p/20111215/c3010b5c7b4e8581e909d8b874474fb0_150x150.jpg'
            },
            {
              name: '哈密瓜',
              imgUrl: 'http://images.meishij.net/p/20110825/de95b24631ef8f0022886a5c8d8ffe31_150x150.jpg'
            },
            {
              name: '葡萄',
              imgUrl: 'http://images.meishij.net/p/20110822/b37011b5eaca0be8e20588c128af0fef_150x150.jpg'
            },
            {
              name: '芒果',
              imgUrl: 'http://images.meishij.net/p/20150228/6084dad456eff7e4de9645b0c0918462_150x150.jpg'
            },
            {
              name: '甜瓜',
              imgUrl: 'http://images.meishij.net/p/20120829/3884ebf90e667da178d1b7bd8cf62ddf_150x150.jpg'
            },
            {
              name: '李子',
              imgUrl: 'http://images.meishij.net/p/20120131/41f2b4eab3e900b734f9b424c7b39dd0_150x150.jpg'
            },
            {
              name: '香蕉',
              imgUrl: 'http://images.meishij.net/p/20170330/cbe31e4ef6176df562054b6b5297ca50_150x150.jpg'
            }
          ]
        },
        {
          name: '蔬菜',
          data: [
            {
              name: '西红柿',
              imgUrl: 'http://images.meishij.net/p/20111214/a82d115d88dd46598f4333777582469c_150x150.jpg'
            },
            {
              name: '豇豆',
              imgUrl: 'http://images.meishij.net/p/20140630/7f0d129d13145ff6c28e4cb1aec80bc8_150x150.jpg'
            },
            {
              name: '苦瓜',
              imgUrl: 'http://images.meishij.net/p/20150331/e42c1901635df0e2483221ce2a644ad9_150x150.jpg'
            },
            {
              name: '柿子椒',
              imgUrl: 'http://images.meishij.net/p/20111214/597ab1da96d8a35458b72ae7ca8ccc27_150x150.jpg'
            },
            {
              name: '茄子',
              imgUrl: 'http://images.meishij.net/p/20110706/46ff26140cddcba66a59ef101bb7a4a0_150x150.jpg'
            },
            {
              name: '莴笋',
              imgUrl: 'http://images.meishij.net/p/20170330/31900af8bf909e61f5982c91313ef665_150x150.jpg'
            },
            {
              name: '土豆',
              imgUrl: 'http://images.meishij.net/p/20170330/5ff27eba123f27615b1c0f0c406a5c27_150x150.jpg'
            },
            {
              name: '丝瓜',
              imgUrl: 'http://images.meishij.net/p/20140331/5a8562a437374217a483cd333238a72d_150x150.jpg'
            }
          ]
        },
        {
          name: '五谷',
          data: [
            {
              name: '薏米',
              imgUrl: 'http://images.meishij.net/p/20110715/1fc5bb018fadda5c7083d61e1a27ab2a_150x150.jpg'
            },
            {
              name: '赤小豆',
              imgUrl: 'http://images.meishij.net/p/20110715/8f690769e15fd26ad5184dbfd0140052_150x150.jpg'
            },
            {
              name: '燕麦',
              imgUrl: 'http://images.meishij.net/p/20150228/5bb1dda5bfa20c2772d81781c4a23f31_150x150.jpg'
            },
            {
              name: '绿豆',
              imgUrl: 'http://images.meishij.net/p/20110715/58b3095b7efe444f302b8d0a5adc870d_150x150.jpg'
            },
            {
              name: '毛豆',
              imgUrl: 'http://images.meishij.net/p/20140729/064ee845c82df1cfd19e00b8e5aeaa0c_150x150.jpg'
            },
            {
              name: '核桃',
              imgUrl: 'http://images.meishij.net/p/20170330/de64190a5636f1f8d8071f84b3dfc44b_150x150.jpg'
            },
            {
              name: '玉米',
              imgUrl: 'http://images.meishij.net/p/20111125/3eb346efc8d0a9fca2d26ae0a6715d8d_150x150.jpg'
            },
            {
              name: '花生',
              imgUrl: 'http://images.meishij.net/p/20170330/94b32e81e021d4a23d81fb0126fcf473_150x150.jpg'
            }
          ]
        },
        {
          name: '生鲜',
          data: [
            {
              name: '黄鱼',
              imgUrl: 'http://images.meishij.net/p/20110822/e58343174e46f40834c1db19aa823be1_150x150.jpg'
            },
            {
              name: '草鱼',
              imgUrl: 'http://images.meishij.net/p/20170330/96da0e84e46ee56abbedb73a5457a716_150x150.jpg'
            },
            {
              name: '小龙虾',
              imgUrl: 'http://images.meishij.net/p/20140704/0b5100453f24b68ff6ea3b5f3a39ad6a_150x150.jpg'
            },
            {
              name: '蛤蜊',
              imgUrl: 'http://images.meishij.net/p/20110930/7a10c9da814c97476b50533fb55a7540_150x150.jpg'
            },
            {
              name: '虾',
              imgUrl: 'http://images.meishij.net/p/20170330/23da49e7bb0dd02111b14d640c2a90eb_150x150.jpg'
            },
            {
              name: '鸭',
              imgUrl: 'http://images.meishij.net/p/20120703/1af59099f56158ef054e6ee5888acedf_150x150.jpg'
            },
            {
              name: '蛏子',
              imgUrl: 'http://images.meishij.net/p/20140704/d6b288ab3db707acaa04b211035c49a6_150x150.jpg'
            },
            {
              name: '皮皮虾',
              imgUrl: 'http://images.meishij.net/p/20111208/a33af27d0cb180dfb0762fc1f5386819_150x150.jpg'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.$api.get('topics', null, r => {
      console.log(r)
    })

    this.recommendCon = this.recommendList[0]
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
	
	/* 首页广告部分 */
  .home-advertise-container{
  	position: relative;
    @include con-auto;
  }
  .home-advertise-list{
    font-size: 0;
    li{
    	margin-right: 21px;
    	margin-bottom: 20px;
      width: 316px;
      @include in-block;
    }
    li:nth-child(3n){
    	margin-right: 0;
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
      	width: 100%;
        color: #333;
        font-size: 24px;
        cursor: pointer;
        @include in-block;
        @include ellipsis;
        &:hover{
          color: #ff3232;
          text-decoration: underline;
        }
      }
      .home-advertise-tit{
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 12px;
      }
    }
  }
  .home-advertise-btn{
  	position: absolute;
  	top: 50%;
  	margin-top: -65px;
  	width: 130px;
  	height: 130px;
  	background: url(../images/index-arrow.gif) no-repeat scroll 0 0;
  }
  .home-advertise-btn-prev{
  	left: -130px;
  	background-position: 0 0;
  	&:hover{
  		background-position: -130px 0;
  	}
  }
  .home-advertise-btn-next{
  	right: -130px;
  	background-position: 0 -130px;
  	&:hover{
  		background-position: -130px -130px;
  	}
  }

	/* 当月推广 */
	.home-recommend{
    @include con-auto;
    .home-recommend-container{
    	background-color: #fff;
    }
	}
	.home-recommend-tab-list{
		padding: 0 20px;
		height: 60px;
		line-height: 60px;
		font-size: 0;
		li{
			@include in-block;
			a{
				@include in-block;
				width: 58px;
				height: 30px;
				line-height: 30px;
				color: #666;
				font-size: 14px;
				text-align: center;
				&.active,
				&:hover{
					color: #fff;
					background-color: #ff3232;
				}
			}
		}
	}
	.home-recommend-con-list{
		padding-left: 20px;
		padding-bottom: 15px;
		font-size: 0;
		li{
			@include in-block;
			a{
				position: relative;
				display: block;
				margin-right: 2px;
				width: 117px;
				height: 117px;
			}
			.home-recommend-con-name{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding-left: 30px;
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        background-color: rgba(255, 255, 255, .7);
        &:hover{
			    color: #ff3232;
			    text-decoration: underline;
        }
        &:before{
        	content: "";
        	position: absolute;
        	top: 50%;
        	left: 10px;
        	margin-top: -5px;
        	width: 10px;
        	height: 10px;
        	background-color: #666;
        }
			}
		}
	}
</style>