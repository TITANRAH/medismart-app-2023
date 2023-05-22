<script setup>
import { ref, onMounted } from 'vue';
import { useClienteStore } from '../../stores/cliente-store/cliente-store';
// import { computed, ref } from 'vue';
// import fondoLogin from  `../../assets/${clienteStore.currentCss.replace('.css','')}/img-login.svg`
const clienteStore = useClienteStore()
const fondo = ref('')



onMounted(() => {

    if (clienteStore.currentCss === 'copeuch.css') {

        console.log(clienteStore.currentCss)

        fondo.value = '../assets/copeuch/img-login.svg'
    } else {

        fondo.value = '../../assets/medismart/img-login.svg'
    }
})








</script>
<template>
    <div class="container">
        <div class="columna-izquierda">

           
{{ fondo }}
            <img :src="fondo" alt="">

        </div>
        <div class="columna-derecha">Contenido de la columna derecha</div>
    </div>
</template>


<style></style>