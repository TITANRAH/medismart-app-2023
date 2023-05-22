<script setup>
import { useClienteStore } from '../../stores/cliente-store/cliente-store';
// import fondoLogin from  `../../assets/${clienteStore.currentCss.replace('.css','')}/img-login.svg`
import fondoLogin from  `../../assets/copeuch/img-login.svg`


const clienteStore = useClienteStore()


</script>
<template>
    <div class="container">
    <div class="columna-izquierda">

        {{ clienteStore.currentCss.replace('.css','') }}

        <img src={{fondoLogin}} alt="">
       
    </div>
    <div class="columna-derecha">Contenido de la columna derecha</div>
</div>
</template>


<style></style>