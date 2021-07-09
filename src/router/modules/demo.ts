import { RouteRecordRaw } from 'vue-router'
import { RouterTransition } from '@/components/transition'

const routeName = 'demos'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demos',
    name: routeName,
    redirect: '/demos/demo1',
    component: RouterTransition,
    meta: {
      title: 'demo演示',
      icon: 'icon-zhuomian',
    },
    children: [
      {
        path: 'custom-a-custom-modal',
        name: `${routeName}-custom-modal`,
        meta: {
          title: '自定义模态框',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/custom-modal.vue'),
      },
      {
        path: 'button',
        name: `${routeName}-button`,
        meta: {
          title: '按钮的扩展',
          icon: 'icon-zhuomian',
          keepAlive: true,
        },
        component: () => import('@/views/demos/button.vue'),
      },
    ],
  },
]

export default routes
