import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: () => import('@/views/mainView/mainView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  next()
})
export default router