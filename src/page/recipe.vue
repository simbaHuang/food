<template>
  <div class="recipe">
    <!-- 菜谱分类 -->
    <AppRecipeClass></AppRecipeClass>
    <!-- tit -->
    <p class="con-tit">
      <span>印象中的那些妈妈的味道</span>
      <a class="con-tit-btn" target="_blank" href="javascript:">最新</a>
      <a class="con-tit-btn" target="_blank" href="javascript:">最热</a>
    </p>
    <!-- 具体分类内容 -->
    <div class="recipe-con">
      <!-- 左侧筛选 -->
      <div class="recipe-con-left"></div>
      <!-- 右侧内容 -->
      <div class="recipe-con-right">
        <AppBlockContent v-for="swiper in latestList" :content="swiper" :type="'four'"></AppBlockContent>
      </div>
    </div>
  </div>
</template>

<script>
  import AppRecipeClass from '../components/appRecipeClass.vue'
  import AppBlockContent from '../components/appBlockContent.vue'
  export default {
    name: 'recipe',
    components: { AppRecipeClass, AppBlockContent },
    data () {
      return {
        latestList: [
          {
            name: '法式紫薯派',
            author: '余甘果蜜',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炸',
            taste: '甜味',
            imgUrl: 'http://site.meishij.net/r/174/213/2303424/a2303424_150737235953308.jpg'
          },
          {
            name: '无蛋可可螺旋吐司',
            author: '喜爱豆子',
            comments: 5,
            sentiment: 2394,
            step: 9,
            time: 15,
            practice: '烘培',
            taste: '其他口味',
            imgUrl: 'http://site.meishij.net/r/75/127/4906825/a4906825_150737187413411.jpg'
          },
          {
            name: '大闸蟹溜蛋',
            author: '柔蓝水晶',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炒',
            taste: '家常味',
            imgUrl: 'http://site.meishij.net/r/83/142/410583/a410583_150737118116813.jpg'
          },
          {
            name: '苦瓜苹果饮',
            author: '余甘果蜜',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '其他工艺',
            taste: '其他口味',
            imgUrl: 'http://site.meishij.net/r/174/213/2303424/a2303424_150737068931194.jpg'
          },
          {
            name: '辣椒木耳炒蛋',
            author: '心随彧动',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炒',
            taste: '香辣味',
            imgUrl: 'http://site.meishij.net/r/216/197/6174466/a6174466_150736713955415.jpg'
          },
          {
            name: '豉香蟹',
            author: '飘雪的季节(来自腾讯的网友)',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '炒',
            taste: '香辣味',
            imgUrl: 'http://site.meishij.net/r/134/61/5140384/a5140384_150736675971749.jpg'
          },
          {
            name: '麻酱佛手瓜丝莲藕卷',
            author: '上海五香豆',
            comments: 5,
            sentiment: 16221,
            step: 8,
            time: 15,
            practice: '煮',
            taste: '家常味',
            imgUrl: 'http://site.meishij.net/r/178/57/3764428/a3764428_150736514942427.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .recipe-con-right{
    @include con-auto;
  }
  .con-tit{
    position: relative;
    height: 120px;
    line-height: 120px;
    text-align: center;
    font-size: 24px;
    color: #222;
    @include con-auto;
  }
</style>
