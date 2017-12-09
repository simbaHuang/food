<template>
  <div>
    <!-- tit -->
    <p class="con-tit">
      <span>{{ params.title }}</span>
      <a class="con-tit-btn" target="_blank" href="javascript:">更多菜单 &gt;</a>
    </p>
    <!-- 容器 -->
    <div class="swiper-container">
      <!-- 内容盒子 -->
      <div class="swiper-box">
        <!-- 单屏内容 -->
        <div class="swiper-single">
          <AppBlockContent v-for="swiper in params.data" :content="swiper" :type="params.type"></AppBlockContent>
        </div>
      </div>
      <!-- 左右按钮 -->
      <a class="swiper-btn swiper-btn-prev" href="javascript:"></a>
      <a class="swiper-btn swiper-btn-next" href="javascript:"></a>
    </div>
  </div>
</template>

<script>
  import AppBlockContent from '../components/appBlockContent.vue'
  export default {
    name: 'boxDefault',
    components: { AppBlockContent },
    props: ['params']
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
