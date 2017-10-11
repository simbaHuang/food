<template>
  <div class="home-swiper-col-four">
    <!-- tit -->
    <p class="con-tit">
      <span>最新菜谱</span>
      <a class="con-tit-btn" target="_blank" href="javascript:">更多菜单 &gt;</a>
    </p>
    <!-- 容器 -->
    <div class="swiper-container">
      <!-- 内容盒子 -->
      <div class="swiper-box">
        <!-- 单屏内容 -->
        <div class="swiper-single">
          <ul class="swiper-col-four-list">
            <li v-for="swiper in latestList">
              <a class="swiper-col-four-con" href="javascript:">
                <img class="swiper-col-four-img" width="100%" height="100%" :src="swiper.imgUrl" :alt="swiper.name">
                <!-- 显示信息 -->
                <div class="swiper-col-four-info">
                  <div class="swiper-col-four-info-top">
                    <p class="swiper-col-four-name">{{ swiper.name }}</p>
                    <p class="swiper-col-four-txt">{{ swiper.comments }} 评论 {{ swiper.sentiment }} 人气</p>
                    <p class="swiper-col-four-author">{{ swiper.author }}</p>
                  </div>
                  <div class="swiper-col-four-info-bottom">
                    <p class="swiper-col-four-text bg-1">{{ swiper.step }} 步 / 大概 {{ swiper.time }} 分钟</p>
                    <p class="swiper-col-four-text bg-2">{{ swiper.practice }} / {{ swiper.taste }}</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 左右按钮 -->
      <a class="swiper-btn swiper-btn-prev" href="javascript:"></a>
      <a class="swiper-btn swiper-btn-next" href="javascript:"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'boxDefault',
    data () {
      return {
        latestList: [
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
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  /* 最新菜谱 */
  .swiper-container{
    position: relative;
    @include con-auto;
  }
  .home-latest-recipes{
    @include con-auto;
  }
  .swiper-col-four-list{
    li{
      width: 232.5px;
      margin-right: 20px;
      margin-bottom: 20px;
      @include in-block;
    }
    li:nth-child(4n){
      margin-right: 0;
    }
    .swiper-col-four-con{
      width: 100%;
      height: 100%;
      @include in-block;
      &:hover{
        .swiper-col-four-info-top{
          top: -100px;
        }
        .swiper-col-four-info-bottom{
          top: 0;
        }
      }
    }
    .swiper-col-four-img{
      width: 232.5px;
      height: 232.5px;
    }
    .swiper-col-four-info{
      position: relative;
      height: 100px;
      overflow: hidden;
      background-color: #fff;
    }
    .swiper-col-four-info-top,
    .swiper-col-four-info-bottom{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 0 15px;
      height: 100%;
      overflow: hidden;
      @include transition;
    }
    .swiper-col-four-info-bottom{
      top: 100px;
      background-color: #eee;
      color: #666;
      .swiper-col-four-text{
        margin-top: 20px;
        padding-left: 40px;
        height: 20px;
        line-height: 20px;
        background: url(../images/list-icon.png) no-repeat scroll;
      }
      .bg-1{
        background-position: 0 -130px;
      }
      .bg-2{
        background-position: 0 -50px;
      }
    }
    .swiper-col-four-name,
    .swiper-col-four-txt,
    .swiper-col-four-author{
      height: 25px;
      line-height: 25px;
      font-size: 10px;
      @include ellipsis;
    }
    .swiper-col-four-author{
      color: #ff3232;
    }
    .swiper-col-four-name{
      margin-top: 10px;
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
  }
  .swiper-btn{
    position: absolute;
    top: 50%;
    margin-top: -65px;
    width: 130px;
    height: 130px;
    background: url(../images/index-arrow.gif) no-repeat scroll 0 0;
  }
  .swiper-btn-prev{
    left: -130px;
    background-position: 0 0;
    &:hover{
      background-position: -130px 0;
    }
  }
  .swiper-btn-next{
    right: -130px;
    background-position: 0 -130px;
    &:hover{
      background-position: -130px -130px;
    }
  }
</style>
