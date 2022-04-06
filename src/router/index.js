import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/HomeView/HomeView.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import(/* webpackChunkName: "LoginPage" */'../views/LoginPage/LoginPage.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'HomeView' }) : next()
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import(/* webpackChunkName: "RegisterPage" */'../views/RegisterPage/RegisterPage.vue')
  },
  {
    path: '/shop/:id',
    name: 'ShopPage',
    component: () => import(/* webpackChunkName: "ShopPage" */'../views/ShopPage/ShopPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 路由校验
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginRegister = (name === 'LoginPage' || name === 'RegisterPage');
  (isLogin || isLoginRegister) ? next() : next({ name: 'LoginPage' })
})
export default router
