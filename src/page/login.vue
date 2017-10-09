<template>
  <div class="login">
    <!-- 第三方登录信息 -->
    <AppLoginOther></AppLoginOther>
    <!-- 登录表单 -->
    <div class="login-form">
      <ul class="login-form-list">
        <li>
          <input class="ipt" type="text" placeholder="请输入手机号/邮箱/昵称">
        </li>
        <li>
          <input class="ipt" type="password" placeholder="请输入密码">
        </li>
        <li>
          <label for="loginAuto">
            <input id="loginAuto" type="checkbox">
            <span>下次自动登录</span>
          </label>
        </li>
        <li class="tc">
          <a class="login-btn" href="javascript:">登录</a>
        </li>
      </ul>
    </div>

    <a class="login-swicth" href="#/register">还没有账号？免费注册</a>
  </div>
</template>

<script>
  import AppLoginOther from '../components/appLoginOther.vue'
  export default {
    name: 'login',
    components: { AppLoginOther }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .login{
    overflow: hidden;
    margin-top: 40px;
    background-color: #fff;
    @include con-auto;
    .login-btn{
      height: 42px;
      border: 1px solid #db432e;
      border-radius: 4px;
      line-height: 40px;
      font-size: 15px;
      color: #fff;
      padding: 0px 24px;
      font-family: "Hiragino Sans GB", "冬青黑体", "Microsoft Yahei", "微软雅黑";
      background: #ec5541;
      @include in-block;
      &:hover{
        background-color: #db432e;
      }
    }
    .login-swicth{
      margin: 50px 0;
      width: 100%;
      text-align: center;
      color: #333;
      font-size: 15px;
      @include in-block; 
    }
  }
  .login-form-list{
    margin: 0 auto;
    width: 320px;
    li{
      margin-bottom: 10px;
      min-height: 30px;
      &.tc{
        text-align: center;
      }
    }
    .ipt{
      height: 22px;
      border: 1px solid #ddd;
      border-radius: 4px;
      line-height: 22px;
      font-size: 14px;
      color: #333;
      padding: 11px;
      width: 296px;
      font-family: "Hiragino Sans GB", "冬青黑体", "Microsoft Yahei", "微软雅黑";
      &:focus{
        border-color: #60a531;
      }
    }
  }
</style>
