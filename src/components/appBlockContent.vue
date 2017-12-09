<template>
  <div class="swiper-col-con" :class="{'swiper-col-con-three': type === 'three', 'swiper-col-con-four': type === 'four'}">
    <!-- 三分屏 -->
    <div class="swiper-col-three-con" href="javascript:" v-if="type === 'three'">
      <!-- img -->
      <a href="javascript:"><img :src="content.imgUrl" :alt="content.tit"></a>
      <!-- info -->
      <div class="swiper-col-three-info">
        <a class="swiper-col-three-name">{{ content.name }}</a>
        <p class="swiper-col-three-tit">{{ content.tit }}</p>
      </div>
    </div>
    <!-- 四分屏 -->
    <a class="swiper-col-four-con" href="javascript:" v-if="type === 'four'">
      <img class="swiper-col-four-img" width="100%" height="100%" :src="content.imgUrl" :alt="content.name">
      <!-- 显示信息 -->
      <div class="swiper-col-four-info">
        <div class="swiper-col-four-info-top">
          <p class="swiper-col-four-name">{{ content.name }}</p>
          <p class="swiper-col-four-txt">{{ content.comments }} 评论 {{ content.sentiment }} 人气</p>
          <p class="swiper-col-four-author">{{ content.author }}</p>
        </div>
        <div class="swiper-col-four-info-bottom">
          <p class="swiper-col-four-text bg-1">{{ content.step }} 步 / 大概 {{ content.time }} 分钟</p>
          <p class="swiper-col-four-text bg-2">{{ content.practice }} / {{ content.taste }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'blockContent',
    props: ['content', 'type']
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .swiper-col-con{
    @include in-block;
  }
  .swiper-col-con-three{
    margin-right: 21px;
    margin-bottom: 20px;
    width: 316px;
    @include in-block;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
  .swiper-col-con-four{
    width: 232.5px;
    margin-right: 20px;
    margin-bottom: 20px;
    @include in-block;
    &:hover{
      .swiper-col-four-info-top{
        top: -100px;
      }
      .swiper-col-four-info-bottom{
        top: 0;
      }
    }
    &:nth-child(4n){
      margin-right: 0;
    }
  }
  .swiper-col-three-con,
  .swiper-col-four-con{
    width: 100%;
    @include in-block;
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
</style>
