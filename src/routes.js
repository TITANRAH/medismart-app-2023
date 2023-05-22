import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/login/Login.vue";
import Home from "./views/Home/Home.vue";




const routes = [
    {
      path: "/",
      component: Login,
    //   beforeEnter: Login,
      
    },
    {
      path: "/home",
      component: Home,
    //   beforeEnter: Login,
      
    },
   
 
  ];
  
  const router = createRouter({
    routes,
    history: createWebHistory(),
  });
  
  export default router;
  