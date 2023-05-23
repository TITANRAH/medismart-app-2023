import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const url = "https://api-auth-ms-prod.azurewebsites.net/api/Login";

    const userDataRes = ref({});
    const userToken = ref('');
    const userServices = ref([])

    const getUser = async (userName, password) => {
      const dataUser = {
        userName: userName,
        password: password,
      };

      //   const headers = {"Accept": "application/json", "Content-Type": "application/json"};
      try {
        const {data} = await axios.post(url, dataUser);

        userDataRes.value = data;
        userToken.value = data.token;
        userServices.value = data.userData.homeServices;





        console.log("hizo login userData: ", userDataRes.value);
        console.log("hizo login userToken: ", userToken.value);
        console.log("hizo login userServices: ", userServices.value);
      } catch (e) {
        console.log("cayo en el error", e);
      } finally {
        console.log("cayo en el finalluy");
      }
    };

    return {
      userDataRes,
      getUser,
      userServices
    };
  });
