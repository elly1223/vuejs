import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)  // h = createElement
}).$mount('#app');

// 풀어서 표현
// render: function (createElement) {
//   return createElement(App);
// }