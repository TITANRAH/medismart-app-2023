<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';


const loadStyles = async () => {
    // Obtener el nombre del cliente desde el backend
    const cliente = 'copeuch';
  
    // Cargar el archivo de estilo correspondiente al cliente
    const estilo = document.createElement('link');
    estilo.setAttribute('rel', 'stylesheet');
    estilo.setAttribute('href', `./src/styles/${cliente}.css`);
    document.head.appendChild(estilo);
  
    console.log('estilos cargados')
  };
  // ./src/styles/oncologico.css
  onMounted(() => {
    loadStyles()
  });


</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
