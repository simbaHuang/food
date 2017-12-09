<template>
  <div class="login">
    <!-- 第三方登录信息 -->
    <AppLoginOther></AppLoginOther>
    <!-- 登录表单 -->
    <AppRegisterForm></AppRegisterForm>

    <a class="login-swicth" href="#/login">已有账号？马上登录</a>
  </div>
</template>

<script>
  import AppLoginOther from '../components/appLoginOther.vue'
  import AppRegisterForm from '../components/appRegisterForm.vue'
  export default {
    name: 'register',
    components: { AppLoginOther, AppRegisterForm }
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
      height: 46px;
      border: 1px solid #ddd;
      border-radius: 4px;
      line-height: 22px;
      font-size: 14px;
      color: #333;
      padding: 11px;
      width: 320px;
      font-family: "Hiragino Sans GB", "冬青黑体", "Microsoft Yahei", "微软雅黑";
      &:focus{
        border-color: #60a531;
      }
	    &.ipt-min{
	    	width: 170px;
	    }
    }
  }
</style>
