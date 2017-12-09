<template>
  <div class="recipe-class">
    <!-- 菜品分类 -->
    <div class="recipe-class-tab">
      <ul class="recipe-class-tab-list">
        <li v-for="list in nav" :class="{active: list.active}" @click="switchNav(list, nav)">{{ list.name }}</li>
      </ul>
    </div>
    <!-- 当前分类内容 -->
    <div class="recipe-class-con">
      <div class="recipe-class-box">
        <p class="recipe-class-tit">{{ activeMenu.name }}</p>
        <ul class="recipe-class-list">
          <li v-for="list in activeMenu.children">{{ list.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recipeClass',
    data () {
      return {
        nav: [
          {
            name: '家常菜谱',
            active: true,
            children: [
              { name: '家常菜' },
              { name: '凉菜' },
              { name: '素食' },
              { name: '晚餐' }
            ]
          },
          {
            name: '中华菜系',
            active: false,
            children: [
              { name: '川菜' },
              { name: '粤菜' },
              { name: '湘菜' },
              { name: '鲁菜' }
            ]
          },
          {
            name: '各地小吃',
            active: false,
            children: [
              { name: '四川小吃' },
              { name: '广东小吃' },
              { name: '北京小吃' },
              { name: '陕西小吃' }
            ]
          }
        ]
      }
    },
    created () {
      this.activeMenu = this.nav[0]
    },
    methods: {
      switchNav (thsNav, listNav) {
        let len = listNav.length
        for (let i = 0; i < len; i++) {
          listNav[i].active = false
        }
        thsNav.active = true
        this.activeMenu = thsNav
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .recipe-class{
    margin-top: 20px;
    @include con-auto;
  }
  .recipe-class-tab-list{
    width: 100%;
    font-size: 0;
    background-color: rgba(255, 255, 255, .5);
    li{
      padding: 0 24px;
      line-height: 50px;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      cursor: pointer;
      @include in-block;
      &:hover,
      &.active{
        color: #ff3232;
        background-color: rgba(255, 255, 255, .5);
      }
      &.active{
        background-color: #fff;
      }
    }
  }

  .recipe-class-box{
    padding: 10px 16px;
    background: #fff;
    .recipe-class-tit{
      line-height: 42px;
      font-size: 24px;
      color: #333;
    }
    .recipe-class-list{
      li{
        padding: 0 8px;
        line-height: 28px;
        color: #666;
        cursor: pointer;
        @include in-block;
        &:hover,
        &.active{
          background-color: #ff3232;
          color: #fff;
        }
      }
    }
  }
</style>
