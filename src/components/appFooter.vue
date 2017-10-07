<template>
  <div class="foot">
    <div class="foot-con">
      <div class="foot-info">
        <!-- 左侧介绍信息 -->
        <div class="foot-left">
          中国，最大的菜谱库 <strong>800,000 篇</strong><br>
          每月，用户访问数量 <strong>20,000,000 次</strong><br>
          每年，菜谱被浏览量 <strong>36,000,000,000 次</strong><br>
          现在，这些数字还在不断的增长着，欢迎您来一起使用美食杰<br>
        </div>
        <!-- 右侧二维码 -->
        <div class="foot-right">
          <ul class="foot-right-list">
            <li>
              <a class="foot-right-img" href="javascript:"><img width="105" height="105" src="" alt=""></a>
              <p><a class="foot-right-link" href="javascript:">点击进入<br>美食杰官方微博</a></p>
            </li>
            <li>
              <a class="foot-right-img" href="javascript:"><img width="105" height="105" src="" alt=""></a>
              <p><a class="foot-right-link" href="javascript:">扫描二维码添加<br>美食杰为微信好友</a></p>
            </li>
            <li>
              <a class="foot-right-img" href="javascript:"><img width="105" height="105" src="" alt=""></a>
              <p><a class="foot-right-link" href="javascript:">扫描二维码下载<br>美食杰手机客户端</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .foot{
    margin-top: 40px;
    padding-bottom: 60px;
    background-color: rgba(0, 0, 0, .75);
    overflow: hidden;
  }
  .foot-con{
    @include con-auto;
  }
  .foot-info{
    height: 200px;
    .foot-left,
    .foot-right{
      float: left;
      width: 50%;
      height: 100%;
    }
    .foot-left{
      padding-top: 80px;
      color: #fff;
      line-height: 24px;
      font-size: 12px;
      strong{
        font-size: 16px;
        padding: 0px 4px;
        color: #ff3232;
        font-weight: bold;
        font-family: arial;
      }
    }
    .foot-right-list{
      margin-top: 30px;
      li{
        margin-left: 20px;
        text-align: center;
        @include in-block;
      }
    }
    .foot-right-img{
      width: 105px;
      height: 105px;
      @include in-block;
      background-color: #fff;
    }
    .foot-right-link{
      margin: 10px 0;
      @include in-block;
      &:hover{
        color: #fff;
        text-decoration: underline;
      }
    }
  }
</style>
