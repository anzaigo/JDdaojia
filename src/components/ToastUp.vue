<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['message']
}
export const userToastUpEffect = () => {
  const toastData = reactive({
    show: false, // 提示弹窗
    toastMessage: '' // 提示内容
  })
  const showToasup = (message) => { // 触发显示
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => { // 两秒后隐藏
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)
  return { show, toastMessage, showToasup }
}
</script>

<style lang="scss" scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background-color: rgba(0, 0, 0,.5);
  border-radius: .05rem;
  color: #fff;
}
</style>
