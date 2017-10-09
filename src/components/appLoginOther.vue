<template>
  <div class="login-other">
    <!-- 标题 -->
    <p class="login-other-tit">登录美食节</p>
    <!-- 最火登录 -->
    <div class="login-other-con">
      <a class="login-other-btn login-other-btn-green" href="javascript:"></a>
      <a class="login-other-btn login-other-btn-blue" href="javascript:"></a>
      <a class="login-other-btn login-other-btn-red" href="javascript:"></a>
    </div>
    <!-- 更多第三方 -->
    <p class="login-other-dividing"></p>
  </div>
</template>

<script>
  export default {
    name: 'loginOther'
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .login-other{
    width: 100%;
    .login-other-tit{
      position: relative;
      margin: 40px 0;
      height: 44px;
      line-height: 44px;
      font-size: 22px;
      color: #333;
      text-align: center;
      &:before,
      &:after{
        content: "";
        position: absolute;
        top: 22px;
        width: 90px;
        height: 1px;
        background-color: #ddd;
      }
      &:before{
        left: 330px;
      }
      &:after{
        right: 330px;
      }
    }
    .login-other-con{
      text-align: center;
    }
    .login-other-btn{
      margin: 0 20px;
      width: 108px;
      height: 108px;
      background: url(https://css.meishij.net/web1/images/nl_dsficon1.png) no-repeat scroll;
      @include in-block;
    }
    .login-other-btn-green{
      background-position: 0px 0px;
      &:hover{
        background-position: 0px -108px;
      }
    }
    .login-other-btn-blue{
      background-position: -108px 0px;
      &:hover{
        background-position: -108px -108px;
      }
    }
    .login-other-btn-red{
      background-position: -216px 0px;
      &:hover{
        background-position: -216px -108px;
      }
    }
    .login-other-dividing{
      margin-top: 20px;
      height: 69px;
      text-align: center;
      width: 100%;
      background: url(https://css.meishij.net/web1/images/nl_or.png) center no-repeat;
    }
  }
</style>
