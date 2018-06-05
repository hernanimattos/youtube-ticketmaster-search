import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/reset.css';

Vue.filter('formatDate', (value) => {
  const theDate = new Date(value);
  const day = theDate.getDay();
  const month = theDate.getMonth() + 1;
  const year = theDate.getFullYear();
  return `${day}/${month}/${year}`;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
