<script setup>
import { ref, onMounted } from 'vue';
import { useClienteStore } from '../../stores/cliente-store/cliente-store';
// import { computed, ref } from 'vue';
// import fondoLogin from  `../../assets/${clienteStore.currentCss.replace('.css','')}/img-login.svg`
const clienteStore = useClienteStore()
const fondo = ref('')
const fondofoto = ref('')

fondo.value = clienteStore.currentCss.replace('.css', '')
fondofoto.value = `../../assets/${fondo.value}/img-login.svg`


</script>
<template>
    <div class="container">
        <div class="columna-izquierda">


            {{ fondofoto }}
            <img :src=fondofoto alt="">

        </div>
        <div class="columna-derecha">Contenido de la columna derecha</div>
    </div>
</template>


<style></style>