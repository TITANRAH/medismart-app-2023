import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import userServices from "../../services/user-services/user-services";

export const useUserStore = defineStore(
  "auth",
  () => {
    const user = ref(null);
    const router = useRouter();

    const fetchUser = async (userName, password) => {
      try {
        user.value = await userServices.getUser(userName, password);
        localStorage.setItem("user", JSON.stringify(user.value));
        router.push("/home");
      } catch (e) {
        console.log("cayo en el error", e);
      }
    };

    const getUserLocal = async () => {
      if (localStorage.getItem("user")) {
        // tomar datos del local
        user.value = JSON.parse(localStorage.getItem("user"));

        console.log("user desde validacion de get item", user.value);
      }
    };

    const Logout = async () => {
      try {
        localStorage.clear();
        user.value = null;
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    };

    return {
      user,
      fetchUser,
      getUserLocal,
      Logout,
    };
  },
  {
    persist: true,
  }
);
