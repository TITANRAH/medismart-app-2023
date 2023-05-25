// import { createApp } from 'vue'
import "./general.css";
// import App from './App.vue'
// import { createPinia } from 'pinia'

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// createApp(App)
// .use(router)
// .use(pinia)
// .mount('#app')
/* @vite-ignore */ 
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount("#app");
// });

// Obtener el nombre del cliente desde el backend
// let cliente = "copeuch";

// Importar el store y usarlo en la aplicación
// let store = null;

// import( /* @vite-ignore */`./stores/${cliente}/${cliente}Store`).then((module) => {
//   store = module;
//   app.use(store);
//   app.provide("store", store);
//   app.mount("#app");
// });
