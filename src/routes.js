import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user-store/user-store";
import Home from "./views/Home/Home.vue";
import Login from "./views/login/Login.vue";
import { storeToRefs } from "pinia";
import Forgot from "./views/login/Forgot.vue";

const requireAuth = async (to, from, next) => {
  // cuando es fuera de compoenntes el store se declara dentro de alguna funcion
  const useUser = useUserStore();
  const { user } =  storeToRefs(useUser);
   

  if (user.value === null || user.value === {} || user.value == undefined) {
    console.log("user es nulo", );
    next("/login");
  } else {
    console.log("user no es nulo");
    next();
  }
};

const routes = [
  {
    
    path: "/login",
    component: Login,
  },
  {
    
    path: "/forgot",
    component: Forgot,
  },
  {
    path: "/home",
    component: Home,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
