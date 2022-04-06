<template>
  <div class="home">
    <!-- 定位 -->
    <div class="position">
      <span class="iconfont position__icon">&#xe604;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe7e5;</span>
    </div>
    <!-- 搜索框 -->
    <div class='search-wrapper'>
      <span class="iconfont">&#xe600;</span>
      <input type="text" class="search" placeholder="山姆会员商店优惠商品">
    </div>
    <!-- banner -->
    <div class="banner-wraper">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
    </div>
    <!-- icons -->
    <div class="icons">
      <div class="icons__item" v-for="item in iconsList" :key="item.desc">
        <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`">
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
    <!-- 中间空格条 -->
    <div class="gap"></div>
    <NearbyPage />
  </div>
  <!-- 底部菜单栏 -->
  <DockerPage />
</template>

<script>
import DockerPage from '../../components/DockerPage.vue'
import NearbyPage from './NearbyPage.vue'
export default {
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  },
  components: {
    DockerPage,
    NearbyPage
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.home{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .5rem;
  padding: 0 .18rem;
  overflow-y: auto;
  // 定位
  .position{
    position: relative;
    box-sizing: border-box;
    padding: 0 .2rem 0 .25rem;
    margin: .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipsis;
    .iconfont{
      font-size: .19rem;
    }
    .position__icon{
      position: absolute;
      top: 0.01rem;
      left: 0;
    }
    .position_notice{
      position: absolute;
      top: 0.01rem;
      right: 0;
    }
  }
  // 搜索框
  .search-wrapper{
    position: relative;
    padding-bottom: 0.12rem;
    .iconfont{
      position: absolute;
      left: .16rem;
      top: 0.08rem;
      color: #B7B7B7;
    }
    .search{
      width: 100%;
      height: 0.32rem;
      border-radius: .16rem;
      border: none;
      background-color: #F5F5F5 ;
      text-indent: .44rem;
      &::placeholder{
        color: #B7B7B7;
      }
    }
  }
  // banner
  .banner-wraper{
    // 解决刷新或加载慢时banner的下方内容会跳动的原因
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    .banner__img{
      width: 100%;
    }
  }
  // icons
  .icons{
    display: flex;
    flex-flow: row wrap;
    padding-top: .16rem;
    &__item{
      width: 20%;
      margin-bottom: .16rem;
      &__img{
        display: block;
        width: 0.4rem;
        height: .4rem;
        margin: 0 auto;
      }
      &__desc{
        text-align: center;
        margin: .06rem 0 0 0;
        color: $content-fontcolor;
      }
    }
  }
  // 中间空格条
  .gap{
    height: .1rem;
    background-color: $content-bgColor;
    margin: 0 -.18rem;
  }
}
</style>
