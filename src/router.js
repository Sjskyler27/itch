//import route specific components
import ExamplePage from './pages/ExamplePage';
import HomePage from './pages/HomePage';

// add routing
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes: [
    { path: '/', component: HomePage },
    { path: '/examples', component: ExamplePage },
    { path: '/learn', component: ExamplePage },
    { path: '/about', component: ExamplePage },
  ],
});
export default router;
