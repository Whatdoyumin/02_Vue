import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 메인 메뉴 구성 정보
    {
      title: '가전',
      url: '/electronics',
    },
  ],
});

export default router;
