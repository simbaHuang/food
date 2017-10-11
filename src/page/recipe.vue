<template>
  <div class="recipe">
    <!-- 菜谱分类 -->
    <AppRecipeClass></AppRecipeClass>
  </div>
</template>

<script>
  import AppRecipeClass from '../components/appRecipeClass.vue'
  export default {
    name: 'recipe',
    components: { AppRecipeClass }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

</style>
