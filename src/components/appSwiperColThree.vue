<template>
  <div class="home-swiper-col-three">
    <!-- tit -->
    <p class="con-tit">
      <span>10月，晚秋时节润燥滋阴</span>
      <a class="con-tit-btn" target="_blank" href="javascript:">更多菜单 &gt;</a>
    </p>
    <!-- 容器 -->
    <div class="swiper-container">
      <!-- 内容盒子 -->
      <div class="swiper-box">
        <!-- 单屏内容 -->
        <div class="swiper-single">
          <ul class="swiper-col-three-list">
            <li v-for="swiper in advertiseList">
              <!-- img -->
              <a href="javascript:"><img :src="swiper.imgUrl" :alt="swiper.tit"></a>
              <!-- info -->
              <div class="swiper-col-three-info">
                <a class="swiper-col-three-name">{{ swiper.name }}</a>
                <p class="swiper-col-three-tit">{{ swiper.tit }}</p>
              </div>
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
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  /* 首页广告部分 */
  .swiper-container{
    position: relative;
    @include con-auto;
  }
  .swiper-col-three-list{
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
  }
  .swiper-col-three-info{
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
    .swiper-col-three-name{
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
    .swiper-col-three-tit{
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 12px;
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
