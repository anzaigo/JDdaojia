<template>
    <div class="login">
        <img class="login__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
        <div class="login__input">
            <input type="text" class="login__input__itself" v-model="data.username" placeholder="请输入手机号">
        </div>
        <div class="login__input">
            <input type="password" class="login__input__itself" v-model="data.password" placeholder="请输入密码">
        </div>
        <div class="login__input">
            <input type="password" class="login__input__itself" v-model="data.confirmPwd" placeholder="确认密码">
        </div>
        <div class="login__btn" @click="handleRegister">注册</div>
        <div class="login__link" @click="handleAccountLogin">已有账号去登录</div>
        <ToastUp v-if="show" :message='toastMessage'/>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import ToastUp, { userToastUpEffect } from '../../components/ToastUp'

// 注册按钮
const handleRegisterJudge = (showToasup) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    confirmPwd: ''
  })
  // 点击注册按钮
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password,
        confirmPwd: data.confirmPwd
      })
      if (result?.errno === 0) {
        router.push({ name: 'LoginPage' })
      } else {
        showToasup('注册失败')
      }
    } catch (e) {
      showToasup('请求失败')
    }
  }
  return { data, handleRegister }
}
export default {
  name: 'RegisterPage',
  components: { ToastUp },
  setup () {
    const router = useRouter()
    const { show, toastMessage, showToasup } = userToastUpEffect() // 失败提示框
    const { data, handleRegister } = handleRegisterJudge(showToasup) // 注册按钮

    // 点击 已有账号去登录 跳转到登录页
    const handleAccountLogin = () => {
      router.push({ name: 'LoginPage' })
    }

    return {
      // 注册按钮数据
      data,
      handleRegister,
      // 点击 已有账号去登录 跳转到登录页
      handleAccountLogin,
      // 失败提示框
      show,
      toastMessage,
      showToasup
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 .4rem;
    &__img{
        display: block;
        width: .66rem;
        height: .66rem;
        margin: 0 auto .4rem auto;
    }
    &__input{
        width: 100%;
        &__itself{
            box-sizing: border-box;
            width: 100%;
            height: .48rem;
            border: .01rem solid rgba(0,0,0,0.10);
            background-color: #F9F9F9;
            border-radius: .06rem;
            margin-bottom: 0.16rem;
            font-size: 0.16rem;
            text-indent: .16rem;
            color: #777;
            outline: none;
        }
    }
    &__btn{
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        text-align: center;
        border-radius: .04rem;
        font-size: .16rem;
        color: #fff;
        background-color: #0091FF;
        box-shadow: 0 .04rem .08rem rgb(0, 145, 255,.32);
    }
    &__link{
        text-align: center;
        margin-top: .16rem;
        font-size: .14rem;
        color: #aaa;
        .trunk{
            font-style: normal;
            margin: 0 .08rem;
        }
    }
}
</style>
