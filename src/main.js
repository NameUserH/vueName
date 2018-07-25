import Vue from 'vue';
import App from './App.vue';
// 引用路由模块
import vueRouter from 'vue-router';
//引用路由
import index from './components/idnex.vue'
// 注册路由中间件
Vue.use(vueRouter);
// 注册路由规则
const router = new vueRouter({
    routes:[
      {
        path:'/index',
        component:index
      },
      {
          path:"/",
          component:index
      }
    ]
  })
  

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
