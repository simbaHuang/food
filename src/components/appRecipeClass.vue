<template>
  <div class="recipe-class">
    <div class="recipe-class-tab">
      <ul class="recipe-class-tab-list">
        <li>家常菜谱</li>
      </ul>
    </div>
    <div class="recipe-class-con">
      <ul class="recipe-class-con-list">
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recipeClass'
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
      &:hover{
        color: #ff3232;
        background: rgba(255, 255, 255, .5);
      }
    }
  }
</style>
