<template>
    <div class="shopWrappr">
        <div class="search">
            <span class="iconfont search__back" @click="handleBackClick">&#xe601;</span>
            <div class="search__content">
                <label class="iconfont search__content__icon" for="search--input">&#xe600;</label>
                <input type="text" id="search--input" class="search__content__input" placeholder="请输入商品名称搜索">
            </div>
        </div>
        <!-- v-show="data.item.imgUrl" 是解决刚加载时图片没有获取到，浏览器会默认用裂图代替&也可以在获取数据是就设置一个默人图片来代替 -->
        <ShopInfo :item='data.item' :hideBorder="true" v-show="data.item.imgUrl" :index="false" :nearbyList="false"/>
    </div>
    <ShopDetails/>
</template>

<script>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import ShopDetails from '../ShopPage/ShopDetails.vue'

// 获取商家数据
const useShopInfoPack = () => {
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const route = useRoute()
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  return { data, getItemData }
}

// 返回上一级
const handleBackPack = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return handleBackClick
}
export default {
  name: 'ShopPage',
  components: { ShopInfo, ShopDetails },
  setup () {
    const { data, getItemData } = useShopInfoPack() // 获取商家数据
    getItemData() // 调用获取商家数据
    const handleBackClick = handleBackPack() // 返回上一级
    return { data, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.shopWrappr{
    padding: 0 .18rem;
    .search{
        display: flex;
        margin: .16rem .18rem .18rem 0;
        &__back{
            display: block;
            color: #B6B6B6;
            font-size: .24rem;
            line-height: .32rem;
            margin-right: .06rem;
        }
        &__content{
            flex: 1;
            display: flex;
            line-height: .32rem;
            background-color: $search-bgColor;
            border-radius: .16rem;
            &__icon{
                margin-left: .16rem;
                color: $search-bgColor;
            }
            &__input{
                width: 100%;
                outline: none;
                border: none;
                background: none;
                padding-left: .12rem;
                font-size: .14rem;
                color: $content-fontcolor;
            }
        }
    }
}
</style>
