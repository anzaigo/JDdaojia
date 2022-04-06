<template>
  <!-- 底部菜单栏 -->
  <div class="docker">
    <div
    v-for="(item, index) in dockerList" :key="item.icon"
    :class="{'docker__item': true, 'docker__item--active': index === 0}"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockerPage.vue',
  setup () {
    const dockerList = [
      { icon: '&#xe612;', text: '首页' },
      { icon: '&#xe61d;', text: '购物车' },
      { icon: '&#xe605;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import "../style/viriables.scss";

// 底部菜单栏
.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  padding: 0 0.18rem;
  &__item {
    flex: 1;
    text-align: center;
    color: $content-fontcolor;
    .iconfont {
      font-size: 0.2rem;
      color: #000;
      margin-top: 0.07rem;
    }
    &__title {
      font-size: 0.1rem;
      // font-size: .2rem;
      // transform: scale(.5, .5);// 横向和纵向缩小一半
      // transform-origin: center top;// 以哪里为缩放中心
    }
    &--active {
      // 激活状态
      color: #1fa4fc;
      .iconfont {
        color: #1fa4fc;
      }
    }
  }
}
</style>
