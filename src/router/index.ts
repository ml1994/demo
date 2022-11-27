/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2022-11-21 15:21:46
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-27 17:03:26
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { startLoadingBar, endLoadingBar } from '@/utils/loadingBar'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savedPosition) => {
    return {
      top: savedPosition?.top, // 记录路由滚动
    }
    // 可支持异步
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       top: 200,
    //     })
    //   }, 1500)
    // })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about/:p',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/trans',
      name: 'trans',
      component: () => import('../views/TransView.vue'),
    },
    {
      path: '/abc',
      redirect(to) {
        console.log(to)
        return {
          path: '/child',
        }
      },
      children: [
        {
          path: '/child',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
  ],
})

// 路由权限
// 路由在白名单或者拥有token时才可以进入
const whiteList = ['/']
router.beforeEach((to, from, next) => {
  startLoadingBar()
  if (whiteList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/')
  }
})

router.afterEach((to, from) => {
  endLoadingBar()
})

export default router
