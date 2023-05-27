<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../../stores/user-store/user-store';


const useUser = useUserStore()
const { user } = storeToRefs(useUser)
useUser.getUserLocal()

</script>

<template>
<div class="home">
    <div class="home-services">
        <div>
            <h2>Elige la atención que necesitas</h2>
        </div>

        <div class="services" v-if="user">
            <div v-for="servicio in user.userData.homeServices" :key=servicio.cod class="box-service">
                <img src="../../assets/cardiff/icono-oncologia.png" alt="">
                <h4>{{ servicio.texto.toUpperCase()}}</h4>
            </div>
        </div>
    </div>
</div>

    <!-- <p v-if="user === null || user === {} || user === undefined">Sin Usuario</p>
        <div v-else>
            <h1>Hola {{ user.userData.name }}</h1>
            <ul>
                <li v-for="(servicio, index) in user.userData.homeServices" :key="index">
                    {{ servicio.cod }}
                </li>
            </ul>
            <button @click="useUser.Logout">Logout</button>
        </div> -->
</template>

