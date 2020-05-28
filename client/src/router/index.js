import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'



Vue.use(Router)



export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/page/:page",
      name: "MainPage",
      component: MainPage
    }

  ]
});
