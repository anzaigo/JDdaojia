<template>
  <!-- 附近店铺 -->
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="(item, index) in nearbyList" :key="item._id">
      <ShopInfo :item="item" :nearbyList='nearbyList' :index='index'/>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

// 动态获取首页商家数据
const getnearbyListPack = () => {
  const nearbyList = ref([])
  const getnearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getnearbyList }
}
export default {
  name: 'NearbyPage',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getnearbyList } = getnearbyListPack() // 动态获取首页商家数据
    getnearbyList() // 调用获取首页商家数据
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
/* 附近店铺 */
.nearby {
  color: $content-fontcolor;
  &__title {
    margin-top: 0.16rem;
    font-size: 0.18rem;
  }
}

</style>
