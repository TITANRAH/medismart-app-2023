import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../../routes";
import { useRouter } from "vue-router";




export const useAuthStore = defineStore("auth", () => {
  const url = "https://api-auth-ms-prod.azurewebsites.net/api/Login";
  const user = ref(null);
  const router = useRouter()

  const getUser = async (userName, password) => {
    const dataUser = {
      userName: userName,
      password: password,
    };

    try {
      const { data } = await axios.post(url, dataUser);

      user.value = data;

      localStorage.setItem("user", JSON.stringify(user.value));

      console.log("user: ", user.value);
      router.push('/home')
    } catch (e) {
      console.log("cayo en el error", e);
    } finally {
      console.log("cayo en el finalluy");
    }
  };

  const getUserLocal = () => {
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
    getUser,
    getUserLocal,
    Logout,
  };
},{

  persist: true

});
