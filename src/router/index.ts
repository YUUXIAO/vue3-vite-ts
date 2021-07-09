import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import common from '@/router/common'

// import { createRouterGuards } from './routerGuards'

const routes: Array<RouteRecordRaw> = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: '/',
    name: 'layout',
    redirect: '/',
    meta: {
      title: '首页',
    },
    component: () => import('@/layout/index.vue'),
    children: [...common],
  },
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: () => import('@/views/index.vue'),
  //     meta: {
  //       usePathKey: true,
  //     },
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: () => import('@/views/about.vue'),
  //     meta: {
  //       usePathKey: true,
  //     },
  //   },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404.vue') },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export function setupRouter(app: App) {
  app.use(router)
  //   createRouterGuards(router) // 创建路由守卫
}

export default setupRouter
