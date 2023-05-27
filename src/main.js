import "./general.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import '../src/styles/cardiff.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Realizar la solicitud HTTP y obtener el nombre del cliente

const cliente = 'cardiff';

// Función para mapear el nombre del cliente a los valores de las variables CSS
function mapClienteToCSSVariables(cliente) {
  let colorPrimary, colorSecondary, colorTertiary, colorQuaternary, colorLabel

  // Lógica de mapeo basada en el nombre del cliente
  if (cliente === 'cardiff') {
    colorPrimary = '#ff7d00';
    colorSecondary = '#564b52';
    colorTertiary = '#FFFFFF';
    colorQuaternary ='#c8c8c8';
    colorLabel = '#564B52';
  } else if (cliente === 'oncologico') {
    colorPrimary = 'green';
    colorSecondary = 'yellow';
    colorTertiary = 'green';
    colorQuaternary ='#c8c8c8';
    colorLabel = '#564B52';
  } else {
    colorPrimary = 'black';
    colorSecondary = 'white';
    colorTertiary = 'green';
    colorQuaternary ='#c8c8c8';
    colorLabel = '#564B52';
  }

  // Actualizar las variables CSS en el documento
  document.documentElement.style.setProperty('--color-primary', colorPrimary);
  document.documentElement.style.setProperty('--color-secondary', colorSecondary);
  document.documentElement.style.setProperty('--color-tertiary', colorTertiary);
  document.documentElement.style.setProperty('--color-quaternary', colorQuaternary);
  document.documentElement.style.setProperty('--color-label', colorLabel);
}

// Llamar a la función de mapeo del cliente
mapClienteToCSSVariables(cliente);


const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount("#app");



