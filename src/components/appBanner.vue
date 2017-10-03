<template>
  <div class="banner">
    <!-- 轮播图容器 -->
    <div class="banner-container">
      <!-- 单屏内容 -->
      <div class="banner-box" v-for="banner in simul.banner">
        <p class="con-tit">{{ banner.title }}</p>
        <div class="banner-con">
           <ul class="banner-con-list">
             <li v-for="food in banner.food">
              <img width="100%" height="100%" :src="food.imgUrl" :alt="food.name">
              <div class="banner-con-info">
                <p class="banner-con-info-name">{{ food.name }}</p>   
                <p class="banner-con-info-intro">{{ food.introduce }}</p>
                <span class="banner-con-info-tit">{{ food.title }}</span>   
              </div>
             </li>
           </ul>
        </div>
      </div>
    </div>
    <!-- 两侧的遮罩层 -->
    <div class="banner-mask banner-mask-left"></div>
    <div class="banner-mask banner-mask-right"></div>
    <!-- 左右箭头 -->
    <div class="banner-btn banner-btn-prev" @click="switchPage('prev')"></div>
    <div class="banner-btn banner-btn-next" @click="switchPage('next')"></div>
    <!-- 底部标注 -->
    <div class="banner-mark">
      <!-- 每屏对应的标注列表 -->
      <ul class="banner-mark-list">
        <li v-for="mark in simul.banner"></li>
      </ul>
      <!-- 标注的遮罩层 -->
      <div class="banner-mark-mask banner-mark-mask-left"></div>
      <div class="banner-mark-mask banner-mark-mask-right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
      return {
        simul: {
          banner: [
            {
              title: '今日早餐推荐：早安周一，起床吃早饭啦',
              name: '早餐',
              time: '4:00-10:00',
              food: [
                {
                  name: '土豆丝鸡蛋饼',
                  introduce: '美味营养又好做，全家都爱吃',
                  title: '营养丰富',
                  imgUrl: 'http://images.meishij.net/p/20170922/373f461f83027cb156351a556faa4ffe.jpg'
                },
                {
                  name: '南瓜红枣汤',
                  introduce: '秋天干燥，来碗甜汤好好滋润一下',
                  title: '补血养颜',
                  imgUrl: 'http://images.meishij.net/p/20170922/09f6726387e4b635e59fd2957412a346.jpg'
                },
                {
                  name: '韩式萝卜泡菜',
                  introduce: '消食化滞、开胃健脾，味道也非常浓郁',
                  title: '开胃下饭',
                  imgUrl: 'http://images.meishij.net/p/20170922/345a0160bd4a94320012917c2a81ed28.jpg'
                }
              ]
            },
            {
              title: '今日午餐推荐：下饭好菜，香的邻居来敲门',
              name: '午餐',
              time: '10:00-14:00',
              food: [
                {
                  name: '酱烧肉',
                  introduce: '酱香浓郁，吃上一口就深深爱上的味道',
                  title: '补充体力',
                  imgUrl: 'http://images.meishij.net/p/20170922/9ec0b635d87a1abba025005548e3d503.jpg'
                },
                {
                  name: '下饭扁豆',
                  introduce: '下饭神器，秋天没吃它，可就白过了',
                  title: '营养丰富',
                  imgUrl: 'http://images.meishij.net/p/20170922/f2ae42e732d246f826399b2514baf3f8.jpg'
                },
                {
                  name: '杂鱼炖小豆饼',
                  introduce: '美味营养一锅出，吃过的人都称赞',
                  title: '营养全面',
                  imgUrl: 'http://images.meishij.net/p/20170922/9e67e471096449294461fe3a5c8419a3.jpg'
                }
              ]
            },
            {
              title: '今日下午茶推荐：美味下午茶，遇见好心情',
              name: '下午茶',
              time: '14:00-16:00',
              food: [
                {
                  name: '香葱吐司卷',
                  introduce: '味道真的一点不比市售肉松卷差',
                  title: '补充能量',
                  imgUrl: 'http://images.meishij.net/p/20170922/c499d71b6f426aa08ac8f552b7fd577f.jpg'
                },
                {
                  name: '酸奶土豆泥',
                  introduce: '简单好吃，减肥，还能保持营养健康',
                  title: '营养全面',
                  imgUrl: 'http://images.meishij.net/p/20170922/8ffc93e383c4353234552ceef479d020.jpg'
                },
                {
                  name: '苹果酥',
                  introduce: '用苹果做馅，酸甜可口，深受欢迎',
                  title: '补充热量',
                  imgUrl: 'http://images.meishij.net/p/20170922/5f0ac4d369149daaeb2edfd1a9c6bbcf.jpg'
                }
              ]
            },
            {
              title: '今日晚餐推荐：吃肉啦，满足吃货的味蕾',
              name: '晚餐',
              time: '16:00-21:00',
              food: [
                {
                  name: '豆瓣鸡',
                  introduce: '小白也能轻轻松松做出好吃的豆瓣鸡',
                  title: '优质蛋白',
                  imgUrl: 'http://images.meishij.net/p/20170922/423265f8bd8801f515f0a58cd3035ba0.jpg'
                },
                {
                  name: '香辣烤兔腿',
                  introduce: '干香迷人，欲罢不能，吃一口就会爱上',
                  title: '营养全面',
                  imgUrl: 'http://images.meishij.net/p/20170922/d437a9ceba882f76cb9e5f9a3341b25d.jpg'
                },
                {
                  name: '干锅秋刀鱼',
                  introduce: '营养丰富，香味浓郁，超级下饭',
                  title: '补钙',
                  imgUrl: 'http://images.meishij.net/p/20170922/0cf9c75571a6b2944a83127ff3086ac9.jpg'
                }
              ]
            },
            {
              title: '今日夜宵推荐：创新夜宵小食，给生活加点乐趣',
              name: '夜宵',
              time: '21:00-4:00',
              food: [
                {
                  name: '椒盐馒头丁',
                  introduce: '简单炒一炒，煎一煎，就成就了一顿简餐',
                  title: '补充体力',
                  imgUrl: 'http://images.meishij.net/p/20170922/29f09f639bc60fcffff492654b0c002f.jpg'
                },
                {
                  name: '红薯丸子',
                  introduce: '香软可口，一口一个吃着真过瘾',
                  title: '补充热量',
                  imgUrl: 'http://images.meishij.net/p/20170922/1c406b7875688fb6bbb9ba68167f5c78.jpg'
                },
                {
                  name: '米饭鸡蛋饼',
                  introduce: '剩米饭的华丽变身，几分钟就能轻松搞定',
                  title: '营养丰富',
                  imgUrl: 'http://images.meishij.net/p/20170922/a46573114e5ca60fd1b634d1182fe80c.jpg'
                }
              ]
            }
          ]
        }
      }
    },
    mounted () {
    },
    methods: {
      switchPage (type) {
        console.log(type)
      }
    }
  }
</script>

<style lang="scss">
  @import '../style/base/common.scss';

  .banner{
    position: relative;
    @include con-auto;
  }
  .banner-container{
    position: relative;
    width: 4950px;
    height: 450px;
  }
  .banner-box{
    display: inline-block;
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
  .banner-con-list{
    font-size: 0;
    li{
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 330px;
      height: 330px;
      cursor: pointer;
      .banner-con-info{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 78px;
        padding: 0 20px;
        background: rgba(255, 255, 255, .7);
        .banner-con-info-name{
          margin-top: 12px;
          font-size: 24px;
          color: #666;
        }
        .banner-con-info-intro{
          margin-top: 5px;
          font-size: 12px;
        }
        .banner-con-info-tit{
          position: absolute;
          right: 10px;
          top: -10px;
          padding: 0 15px;
          height: 30px;
          line-height: 30px;
          background: #60a531;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
  
  /* 两侧遮罩 */
  .banner-mask{
    display: block;
    position: absolute;
    top: 120px;
    width: 990px;
    height: 330px;
    background: #fff;
    filter: alpha(opacity=70);
    opacity: 0.7;
    z-index: 100;
  }
  .banner-mask-left{
    left: -990px;
  }
  .banner-mask-right{
    left: 990px;
  }

  /* 两侧按钮 */
  .banner-btn{
    position: absolute;
    top: 50%;
    margin-top: -35px;
    width: 170px;
    height: 70px;
    background-color: rgba(0, 0, 0, .6);
    cursor: pointer;
    z-index: 101;
  }
  .banner-btn-prev{
    left: -70px;
  }
  .banner-btn-next{
    right: -70px;
  }

  /* 标注 */
  .banner-mark{
    position: relative;
    height: 52px;
    background-color: #fff;
    @include con-auto;
    .banner-mark-mask{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 990px;
      border-top: 4px solid #aaa;
      background: url(../images/banner-mark-bg.gif) repeat-x scroll 0 0 #fff;
    }
    .banner-mark-mask-left{
      left: -990px;
    }
    .banner-mark-mask-right{
      left: 990px;
    }
  }
  .banner-mark-list{
    width: 100%;
    height: 100%;
    font-size: 0;
    li {
      display: inline-block;
      width: 198px;
      height: 100%;
      border-top: 4px solid #aaa;
      background: url(../images/banner-mark-bg.gif) no-repeat scroll 0 0;
    }
  }
</style>
