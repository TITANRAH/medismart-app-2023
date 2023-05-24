import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./stores/user-store/auth-store";
import Home from "./views/Home/Home.vue";
import Login from "./views/login/Login.vue";
import { storeToRefs } from "pinia";

const requireAuth = async (to, from, next) => {
  // cuando es fuera de compoenntes el store se declara dentro de alguna funcion
  const useAuth = useAuthStore();
  const { user } =  storeToRefs(useAuth);
   

  if (user.value === null) {
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
