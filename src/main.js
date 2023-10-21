// create the app
import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
const app = createApp(App);
const store = createStore({
  state() {
    return {
      isRunning: false,
    };
  },
  mutations: {
    setFalse(state) {
      console.log('set running false');
      state.isRunning = false;
    },
    setTrue(state) {
      console.log('set running true');
      state.isRunning = true;
    },
  },
  getters: {
    getIsRunning(state) {
      return state.isRunning;
    },
  },
});
// get the created router
import router from './router';
app.use(router);
app.use(store);

// Add Global components
import BaseCard from './components/UI/BaseCard.vue';
import TheHeader from './components/layouts/TheHeader';
import BaseButton from './components/UI/BaseButton';
import BaseUl from './components/UI/BaseUl';
import FaqCard from './components/UI/FaqCard';
app.component('BaseUl', BaseUl);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('TheHeader', TheHeader);
app.component('FaqCard', FaqCard);

app.mount('#app');
