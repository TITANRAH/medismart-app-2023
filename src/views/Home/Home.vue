<script setup>

import { useAuthStore } from '../../stores/user-store/auth-store';
import { storeToRefs } from 'pinia';


const useAuth = useAuthStore()

const { user } = storeToRefs(useAuth)


useAuth.getUserLocal()



</script>

<template>
    <p v-if="user === null">Sin Usuario</p>
    <div v-else>

        <h1>Hola {{ user.userData.name }}</h1>

        <!-- <ul>
                <li v-for="(service, index) in userServices" :key="index">
                    {{ service.cod }}
                </li>
            </ul> -->

    </div>
</template>

