import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const url = "https://api-auth-ms-prod.azurewebsites.net/api/Login";
  const user = ref(null);

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

      console.log("user desde validacion de get item",user.value );
    }
  };

  return {
    user,
    getUser,
    getUserLocal,
  };
});
