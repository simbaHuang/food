<template>
  	<div class="container">
  		<!-- banner -->
      <!-- <AppBanner></AppBanner> -->

      <!-- banner -->
      <Banner></Banner>

			<!-- 首页的广告 -->
      <AppSwiperBlock :params="conThree"></AppSwiperBlock>

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

      <!-- 最新菜谱 -->
      <AppSwiperBlock :params="conFour"></AppSwiperBlock>

      <!-- 健康新闻 -->
      <div class="home-news">
      	<!-- tit -->
        <p class="con-tit">
        	<span>健康新闻</span>
        	<a class="con-tit-btn" target="_blank" href="javascript:">更多健康资讯 &gt;</a>
        </p>
        <ul class="home-news-list">
        	<li v-for="news in newsList">
        		<a class="news-img" href="javascript:"><img width="160" height="160"></a>
        		<div class="news-con">
        			<p v-for="con in news.data" class="news-name"><a href="javscript:">{{ con.title }}</a></p>
        		</div>
        		<span class="new-type">{{ news.type }}</span>
        	</li>
        </ul>
      </div>
  	</div>
</template>

<script>
// import AppBanner from '../components/appBanner.vue'
import AppSwiperBlock from '../components/appSwiperBlock.vue'
import Banner from '../components/banner.vue'
export default {
  components: { AppSwiperBlock, Banner },
  data () {
    return {
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
      ],
      newsList: [
        {
          type: '食品安全',
          data: [
            {
              title: '冻鱼保鲜保营养吗?',
              imgUrl: 'http://images.meishij.net/p/20170123/b43be469069cab07d99b486cc326a6bf_150x150.jpg'
            },
            {
              title: '哪些啤酒谣言还在飞?',
              imgUrl: 'http://images.meishij.net/p/20170122/c6073156c81757ec3a7757371242be19_150x150.jpg'
            },
            {
              title: '凉拌或油炸四季豆易中毒',
              imgUrl: 'http://images.meishij.net/p/20170111/2345a423207f6ec91011ef9b71ada0c3_150x150.jpg'
            }
          ]
        },
        {
          type: '文化典故',
          data: [
            {
              title: '南方春节食物的寓意?',
              imgUrl: 'http://images.meishij.net/p/20170122/0066c212db9fe02c82a1f3906ff0d40c_150x150.jpg'
            },
            {
              title: '轻食主义到底是什么呢?',
              imgUrl: 'http://images.meishij.net/p/20170110/127fc7851fb456fce224e948ae5d36ff_150x150.jpg'
            },
            {
              title: '腊八除了吃腊八粥还吃什么？',
              imgUrl: 'http://images.meishij.net/p/20170104/41cc4e226b54d1f7d210b4c81229c70e_150x150.jpg'
            }
          ]
        },
        {
          type: '健康指南',
          data: [
            {
              title: '为什么网红们都爱丘比沙拉汁',
              imgUrl: 'http://images.meishij.net/p/20170713/213df5fb8faa20d77cdc6f96798e17fc_150x150.jpg'
            },
            {
              title: '考前饮食三大忌，这些坑你不要踩',
              imgUrl: 'http://images.meishij.net/p/20170605/54aad9503158cf80a783eb13657079ff_150x150.jpg'
            },
            {
              title: '年末应酬多，喝酒前后饮食有讲究',
              imgUrl: 'http://images.meishij.net/p/20170122/8e00d6a823a08798d3592bdb3597c49d_150x150.jpg'
            }
          ]
        },
        {
          type: '新鲜资讯',
          data: [
            {
              title: '2016年食品抽检合格率96.8%',
              imgUrl: 'http://images.meishij.net/p/20170122/39ebc5c8da45601eb70dce1cc3bf1ec3_150x150.jpg'
            },
            {
              title: '【探索·发现】格鲁吉亚',
              imgUrl: 'http://images.meishij.net/p/20161230/d1447a05af4e8ee1f55250af50ee69f5_150x150.jpg'
            },
            {
              title: '扫码获得的减肥代餐品靠谱吗?',
              imgUrl: 'http://images.meishij.net/p/20161206/17d854c44361daafe31651f67cd32b0a_150x150.jpg'
            }
          ]
        }
      ],
      conThree: {
        title: '10月，晚秋时节润燥滋阴',
        data: [
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
        type: 'three'
      },
      conFour: {
        title: '最新菜谱',
        data: [
          {
            name: '法式紫薯派',
            author: '余甘果蜜',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炸',
            taste: '甜味',
            imgUrl: 'http://site.meishij.net/r/174/213/2303424/a2303424_150737235953308.jpg'
          },
          {
            name: '无蛋可可螺旋吐司',
            author: '喜爱豆子',
            comments: 5,
            sentiment: 2394,
            step: 9,
            time: 15,
            practice: '烘培',
            taste: '其他口味',
            imgUrl: 'http://site.meishij.net/r/75/127/4906825/a4906825_150737187413411.jpg'
          },
          {
            name: '大闸蟹溜蛋',
            author: '柔蓝水晶',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炒',
            taste: '家常味',
            imgUrl: 'http://site.meishij.net/r/83/142/410583/a410583_150737118116813.jpg'
          },
          {
            name: '苦瓜苹果饮',
            author: '余甘果蜜',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '其他工艺',
            taste: '其他口味',
            imgUrl: 'http://site.meishij.net/r/174/213/2303424/a2303424_150737068931194.jpg'
          },
          {
            name: '辣椒木耳炒蛋',
            author: '心随彧动',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炒',
            taste: '香辣味',
            imgUrl: 'http://site.meishij.net/r/216/197/6174466/a6174466_150736713955415.jpg'
          },
          {
            name: '豉香蟹',
            author: '飘雪的季节(来自腾讯的网友)',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炒',
            taste: '香辣味',
            imgUrl: 'http://site.meishij.net/r/134/61/5140384/a5140384_150736675971749.jpg'
          },
          {
            name: '麻酱佛手瓜丝莲藕卷',
            author: '上海五香豆',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '煮',
            taste: '家常味',
            imgUrl: 'http://site.meishij.net/r/178/57/3764428/a3764428_150736514942427.jpg'
          }
        ],
        type: 'four'
      }
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

	/* 健康新闻 */
	.home-news{
    @include con-auto;
	}
	.home-news-list{
		li{
			position: relative;
			margin-right: 20px;
			margin-bottom: 20px;
			width: 485px;
			height: 160px;
			background-color: #fff;
			@include in-block;
			.new-type{
				position: absolute;
		    right: 10px;
		    top: -6px;
		    padding: 0 15px;
		    height: 30px;
		    line-height: 30px;
		    background: #60a531;
		    font-size: 12px;
		    color: #fff;
			}
			.news-img{
				float: left;
			}
			.news-con{
				margin-left: 160px;
			}
			.news-name{
				padding-left: 15px;
				height: 49px;
				line-height: 49px;
				border-bottom: 1px solid #eee;
				@include ellipsis;
			}
			.news-name.active{
				height: 59px;
				line-height: 59px;
			}
		}
		li:nth-child(2n){
			margin-right: 0;
		}
	}

</style>