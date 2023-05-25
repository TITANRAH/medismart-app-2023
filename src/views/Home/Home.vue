<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../../stores/user-store/user-store';

const useUser = useUserStore()
const { user } = storeToRefs(useUser)
useUser.getUserLocal()

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

        <button @click="useUser.Logout">Logout</button>
    </div>
</template>

