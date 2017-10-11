<template>
  <div class="head">
    <!-- 顶部 -->
    <div class="head-top">
      <div class="head-top-con">
        <!-- logo -->
        <a class="head-logo" href="#/">

        </a>
        <!-- 顶部搜索 -->
        <div class="head-search">
          <input class="head-search-ipt" placeholder="请输入菜谱/食材/菜单/作者" type="text">
          <a class="head-search-btn" href="javascript:">搜索</a>
        </div>
        <!-- 登陆框 -->
        <div class="head-login">
          <a class="head-login-btn" href="#/register">注册</a>
          <a class="head-login-btn" href="#/login">登录</a>
        </div>
      </div>
    </div>
    <!-- 菜单导航 -->
    <div class="head-nav">
      <ul class="head-nav-list">
        <li v-for="nav in simul.nav">
          <a :href="nav.url">
            <strong>{{ nav.name }}</strong>
            <!-- 下拉子菜单 -->
            <div class="head-nav-sub" v-if="nav.children">
              <ul class="head-nav-sub-list">
                <li v-for="sub in nav.children">
                  <p class="head-nav-sub-list-name">{{ sub.name }}</p>
                  <ul class="head-nav-sub-list-list">
                    <li v-for="thr in sub.children"><a href="javascript:">{{ thr.name }}</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data () {
      return {
        simul: {
          nav: [
            { name: '首页', url: '#/' },
            {
              name: '菜谱大全',
              url: '#/recipe',
              children: [
                {
                  name: '家常菜谱',
                  children: [
                    { name: '家常菜' },
                    { name: '凉菜' },
                    { name: '素食' },
                    { name: '晚餐' }
                  ]
                },
                {
                  name: '中华菜系',
                  children: [
                    { name: '川菜' },
                    { name: '粤菜' },
                    { name: '湘菜' },
                    { name: '鲁菜' }
                  ]
                },
                {
                  name: '各地小吃',
                  children: [
                    { name: '四川小吃' },
                    { name: '广东小吃' },
                    { name: '北京小吃' },
                    { name: '陕西小吃' }
                  ]
                }
              ]
            },
            { name: '饮食健康' },
            { name: '美食菜单' },
            { name: '家居馆' },
            { name: '美食达人' },
            { name: '讨论组' }
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .head-top{
    margin: 0px auto;
    width: 100%;
    height: 130px;
    background: #c90000;
    overflow: hidden;
    .head-top-con{
      position: relative;
      height: 100%;
      overflow: hidden;
      @include con-auto;
    }
    .head-login,
    .head-logo{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: auto;
      line-height: 130px;
    }
    .head-login-btn{
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      color: #fff;
      border-radius: 5px;
      @include in-block;
      &:hover{
        background-color: rgba(0, 0, 0, .3);
      }
    }
    .head-logo{
      right: auto;
      left: 0;
      width: 200px;
      cursor: pointer;
    }
    .head-search{
      margin: 48px auto;
      width: 430px;
      border: 2px solid #fff;
      font-size: 0;
      border-radius: 3px;
    }
    .head-search-btn,
    .head-search-ipt{
      display: inline-block;
      vertical-align: middle;
      font-size: 12px;
    }
    .head-search-ipt{
      padding: 8px;
      width: 326px;
      height: 14px;
    }
    .head-search-btn{
      width: 88px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #a8000f;
      font-size: 14px;
      color: #fff;
      &:hover{
        background-color: #890511;
      }
    }
  }
  .head-nav{
    position: relative;
    width: 100%;
    background: #fff;
    box-shadow: 10px 0px 10px rgba(0,0,0,0.3);
  }
  .head-nav-list{
    margin: 0 auto;
    width: 990px;
    font-size: 0;
    li{
      display: inline-block;
      vertical-align: middle;
      &:hover{
        background-color: #fafafa;
      }
      a{
        display: block;
        padding: 0 24px;
        font-size: 0;
        strong{
          display: inline-block;
          vertical-align: middle;
          height: 76px;
          line-height: 76px;
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }
        &:hover .head-nav-sub{
          display: block;
        }
      }
    }
  }
  .head-nav-sub{
    display: none;
    position: absolute;
    left: 0;
    top: 76px;
    width: 100%;
    z-index: 101;
  }
    .head-nav-sub-list{
      position: relative;
      padding: 18px 30px 24px;
      margin: 0 auto;
      width: 930px;
      background: #fafafa;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
      li{
        margin-bottom: 10px;
        margin-right: 10px;
      }
      .head-nav-sub-list-name{
        display: inline-block;
        vertical-align: middle;
        color: #ff3232;
        font-size: 17px;
        &:hover{
          background: #ff3232;
          color: #fff;
        }
      }
    }
    .head-nav-sub-list-list{
      li{
        margin-bottom: 0;
        a{
          margin-top: 5px;
          padding: 3px;
          font-size: 12px;
          &:hover{
            background: #ff3232;
            color: #fff;
          }
        }
      }
    }
</style>
