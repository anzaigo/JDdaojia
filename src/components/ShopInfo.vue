<template>
    <div class="shop">
        <img class="shop__img" :src="item.imgUrl"/>
         <!-- :style="index===nearbyList.length-1?'border-bottom:0':''" -->
        <div :class="{'shop__content': true, 'shop__content--bordered': hideBorder ? true : false}" :style="index===nearbyList.length-1?'border-bottom:0':''">
            <h4 class="shop__content__title">{{item.name}}</h4>
            <div class="shop__content__tags">
                <span class="shop__content__tag">月送{{item.sales}}+</span>
                <span class="shop__content__tag">起送￥{{item.expressLimit}}</span>
                <span class="shop__content__tag">基础运费￥{{item.expressPrice}}</span>
            </div>
            <p class="shop__content__highlight">{{item.slogan}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder', 'nearbyList', 'index']
}
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
.shop {
    display: flex;
    margin-bottom: 0.12rem;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
    }
    &__content {
      flex: 1;
      margin-left: 0.16rem;
      box-sizing: border-box;
      border-bottom: 0.01rem solid $content-bgColor;
      color: $content-fontcolor;
      &--bordered{
          border-bottom: 0;;
      }
      // &--lastborder:last-child{
      //     border-bottom: 0;
      // }
      &__title {
        font-size: 0.16rem;
        font-weight: normal;
        margin: 0;
      }
      &__tags {
        font-size: 0.13rem;
        margin: 0.08rem 0;
        .shop__content__tag {
          margin-right: 0.16rem;
        }
      }
      .shop__content__highlight {
        font-size: 0.13rem;
        color: #e93b3b;
        margin: 0 0 0.12rem 0;
      }
    }
}
</style>
