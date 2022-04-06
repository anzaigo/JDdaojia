<template>
    <div class="login">
        <img class="login__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
        <div class="login__input">
            <input type="text" class="login__input__itself" v-model="username" placeholder="用户名">
        </div>
        <div class="login__input">
            <input type="password" class="login__input__itself" v-model="password" placeholder="请输入密码">
        </div>
        <div class="login__btn" @click="handleLogin">登录</div>
        <div class="login__link" @click="handleRegister"><span>立即注册</span><i class="trunk">|</i><span>忘记密码</span></div>
        <ToastUp v-if="show" :message='toastMessage'/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import ToastUp, { userToastUpEffect } from '../../components/ToastUp'

// 处理登录逻辑
const useLoginJudge = (showToasup) => {
  const router = useRouter() // 引入路由
  // 定义数据
  const data = reactive({
    username: '', // 用户名
    password: '' // 密码
  })
  // 点击登录按钮
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'HomeView' })
      } else {
        showToasup('登录失败')
      }
    } catch (e) {
      showToasup('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
export default {
  name: 'LoginPage',
  components: { ToastUp },

  setup () {
    const router = useRouter() // 引入路由
    const { show, toastMessage, showToasup } = userToastUpEffect() // 失败提示框
    const { username, password, handleLogin } = useLoginJudge(showToasup) // 登录按钮

    // 点击注册
    const handleRegister = () => {
      router.push({ name: 'RegisterPage' })
    }

    return {
      // 登录按钮
      username,
      password,
      handleLogin,

      // 失败提示框
      show,
      toastMessage,
      showToasup,

      // 点击注册
      handleRegister
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
