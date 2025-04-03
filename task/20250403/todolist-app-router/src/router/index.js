import About from '@/pages/About.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import TodoList from '@/pages/TodoList.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoList,
    },
    {
      path: 'todos/add',
      name: 'todos/add',
      component: AddTodo,
    },
    {
      path: 'todos/edit/:id',
      name: 'todos/edit',
      component: EditTodo,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});

export default router;
