<script setup>

import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../stores/user-store/auth-store';

const useAuth = useAuthStore()

const { user } = storeToRefs(useAuth)


// useAuth.getUserLocal()



</script>

<template>
    <p v-if="user === null">Sin Usuario</p>
    <div v-else>
        <h1>Hola {{ user.userData.name }}</h1>
        <ul>
            <li v-for="(servicio, index) in user.userData.homeServices" :key="index">
                {{ servicio.cod }}
            </li>
        </ul>

        <button @click="useAuth.Logout">Logout</button>
    </div>
</template>

