<script setup>
import { computed, onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Header from './components/headers/Header.vue';
import SubHeader from './components/headers/SubHeader.vue';
import Footer from './components/footer/Footer.vue';



const router = useRoute()


const loadStyles = async () => {
  // Obtener el nombre del cliente desde el backend
  const cliente = 'cardiff';

  // Cargar el archivo de estilo correspondiente al cliente
  const estilo = document.createElement('link');
  estilo.setAttribute('rel', 'stylesheet');
  estilo.setAttribute('href', `./src/styles/${cliente}.css`);
  document.head.appendChild(estilo);

  console.log('estilos cargados', estilo)
};
// ./src/styles/oncologico.css
onMounted(() => {
  loadStyles()
});

const isLoginPage = computed(() => router.path === '/login' || router.path === '/forgot' )

</script>

<template>
  <Header v-if="!isLoginPage"></Header>
  <SubHeader v-if="!isLoginPage"></SubHeader>

  
  <router-view></router-view>
  <Footer v-if="!isLoginPage"></Footer>
</template>

<style></style>
