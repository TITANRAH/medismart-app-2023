<script setup>
import { RouterView } from 'vue-router'

import { onMounted, ref } from 'vue';
import { useClienteStore } from './stores/cliente-store/cliente-store';


const clienteStore = useClienteStore()
const selectedCss = ref('')

const loadStyles = async () => {
    await clienteStore.fetchData();
    selectedCss.value = clienteStore.currentCss;
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `./src/styles/${selectedCss.value}`;
    document.head.appendChild(linkElement);
};

onMounted(() => {
    loadStyles();
});


</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
