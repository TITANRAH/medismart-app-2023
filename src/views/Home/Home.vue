<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '../../stores/user-store/auth-store';
import { storeToRefs } from 'pinia';


const authStore = useAuthStore()
const {userServices, userDataRes} = storeToRefs(authStore)




</script>

<template>
    <p v-if="userServices.length === 0">Sin Servicios</p>
    <div v-else>

        <h1>Hola {{ userDataRes.userData.name }}</h1>

        <ul>
            <li v-for="(service, index) in userServices" :key="index">
                {{ service.cod }}
            </li>
        </ul>
       
    </div>
</template>

