<template>
  <div class="login">
    <!-- 第三方登录信息 -->
    <AppLoginOther></AppLoginOther>
    <!-- 登录表单 -->
    <div class="login-form">
      <ul class="login-form-list">
        <li>
          <input class="ipt" type="text" placeholder="请输入手机号">
        </li>
        <li>
          <input class="ipt ipt-min" type="text" placeholder="请输入密码">
          <a class="btn-send" href="javascript:">免费获取验证码</a>
        </li>
        <li>
          <input class="ipt" type="password" placeholder="请输入密码">
        </li>
        <li>
          <label for="loginAuto">
            <input id="loginAuto" type="checkbox">
            <span>我已阅读并且同意<a href="javascript:">美食杰用户使用协议</a></span>
          </label>
        </li>
        <li class="tc">
          <a class="login-btn" href="javascript:">注册</a>
        </li>
      </ul>
    </div>

    <a class="login-swicth" href="#/login">已有账号？马上登录</a>
  </div>
</template>

<script>
  import AppLoginOther from '../components/appLoginOther.vue'
  export default {
    name: 'register',
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
    	position: relative;
      margin-bottom: 10px;
      min-height: 30px;
      &.tc{
        text-align: center;
      }
    }
    .btn-send{
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			width: 136px;
			line-height: 46px;
			text-align: center;
	    background: #ddd;
	    border: 1px solid #ccc;
    	border-radius: 4px;
    	font-size: 15px;
	    color: #999;
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
	    &.ipt-min{
	    	width: 150px;
	    }
    }
  }
</style>
