//import route specific components
import ExamplePage from './pages/ExamplePage';
import HomePage from './pages/HomePage';

// add routing
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes: [
    { path: '/', redirect: '/code' },
    { path: '/examples', component: ExamplePage },
    { path: '/Learn', component: ExamplePage },
    { path: '/About', component: ExamplePage },
    { path: '/Code', component: HomePage },
  ],
});
export default router;
