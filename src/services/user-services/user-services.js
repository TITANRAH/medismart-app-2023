import axios from "axios";

export default {
  async getUser(userName, password) {
    const url = "https://api-auth-ms-prod.azurewebsites.net/api/Login";
    const dataUser = {
      userName: userName,
      password: password,
    };

    try {
      const response = await axios.post(url, dataUser);

      console.log('response', response)

      if (response.status != 200) return null;

      return response.data;
    } catch (error) {
      console.log("No se pudo obtener el usuario desde servicio", error);
    }
  },
};
