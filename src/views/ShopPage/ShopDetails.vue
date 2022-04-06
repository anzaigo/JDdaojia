<template>
    <div class="ShopDetails">
        <div class="ShopDetails__left">
            <div
            v-for="item in goodsNav" :key="item.name"
            :class="{'ShopDetails__left__item': true, 'ShopDetails__left__item--active': data.currentTab === item.tab}"
            @click="() => handleMenuNav(item.tab)">
                {{item.name}}
            </div>
        </div>
        <div class="ShopDetails__right">
            <div class="ShopDetails__right__item" v-for="obj in data.contentList" :key="obj._id">
                <img class="ShopDetails__right__item__img" :src="obj.imgUrl" alt="">
                <div class="ShopDetails__right__item__detail">
                    <h4 class="detail__title">{{obj.name}}</h4>
                    <p class="detail__num">月售{{obj.sales}}件</p>
                    <p class="detail__price">
                        <span class="detail__price__yen">&yen;</span>
                        <span class="detail__current">{{obj.price}}</span>
                        <span class="detail__past">¥{{obj.oldPrice}}</span>
                    </p>
                </div>
                <div class="ShopDetails__item__num">
                    <span class="hopDetails__item__num__dec">-</span>
                    0
                    <span class="hopDetails__item__num__add">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { get } from '../../utils/request'
export default {
  name: 'ShopDetails',
  setup () {
    const goodsNav = [
      {
        name: '全部商品',
        tab: 'all'
      },
      {
        name: '秒杀',
        tab: 'seckill'
      },
      {
        name: '新鲜水果',
        tab: 'fruit'
      }
    ]
    const data = reactive({
      contentList: [],
      currentTab: goodsNav[0].tab
    })
    const getContentData = async () => {
      const result = await get('/api/shop/:id/products', { tab: 'all' })
      if (result?.errno === 0 && result?.data.length) {
        data.contentList = result.data
      }
    }
    const handleMenuNav = (tab) => {
      getContentData() // 获取新导航上的商品数据
      data.currentTab = tab
    }
    getContentData()
    return { data, getContentData, goodsNav, handleMenuNav }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.ShopDetails{
    display: flex;
    position: absolute;
    top: 1.5rem;
    bottom: .5rem;
    left: 0;
    right: 0;
    &__left{
        width: .76rem;
        overflow-y: scroll;
        &__item{
            height: .4rem;
            line-height: .4rem;
            background-color: $search-bgColor;
            text-align: center;
            font-size: .14rem;
            color: $content-fontcolor;
            &--active{
                background-color: $bgColor;
            }
        }
    }
    &__right{
        flex: 1;
        padding: 0 .18rem 0 .16rem;
        overflow-y: scroll;
        &__item{
            position: relative;
            display: flex;
            border-bottom: 1px solid $content-bgColor;
            padding: .12rem 0;
            &__img{
                width: .68rem;
                height: .68rem;
                margin-right: .16rem;
            }
            &__detail{
                flex: 1;
                overflow: hidden;
                .detail__title{
                    font-size: .14rem;
                    color: $content-fontcolor;
                    margin: 0;
                    line-height: .2rem;
                    @include ellipsis;
                }
                .detail__num{
                    color: $content-fontcolor;
                    font-size: .12rem;
                    margin: .07rem 0 .08rem 0;
                }
                .detail__price{
                    font-size: .1rem;
                    color: $hightlight-fontColor;
                    margin: 0;
                    .detail__current{
                        font-size: .14rem;
                        margin-right: .06rem;
                    }
                    .detail__past{
                        color: $light-fontColor;
                        text-decoration: line-through;
                    }
                }
            }
            .ShopDetails__item__num{
                position: absolute;
                right: 0;
                bottom: .12rem;
                font-size: .14rem;
                .hopDetails__item__num__dec,.hopDetails__item__num__add{
                    display: inline-block;
                    width: .2rem;
                    height: .2rem;
                    box-sizing: border-box;
                    line-height: .2rem;
                    border-radius: 50%;
                    font-size: .2rem;
                    text-align: center;
                }
                .hopDetails__item__num__dec{
                    border: .01rem solid $medium-fontColor;
                    line-height: .16rem;
                    margin-right: .05rem;
                }
                .hopDetails__item__num__add{
                    border: none;
                    background: $btn-bgColor;
                    color: $bgColor;
                    line-height: .19rem;
                    margin-left: .05rem;
                }
            }
        }
    }
}
</style>
