<script setup>
// import { storeToRefs } from 'pinia';

import { inject } from 'vue';

const store = inject('store');

// const {user} = storeToRefs(store)

// import { storeToRefs } from 'pinia';
// import { useAuthStore } from '../../stores/user-store/auth-store';

// const useAuth = useAuthStore()

// const { user } = storeToRefs(useAuth)


// useAuth.getUserLocal()



</script>

<template>
    <p v-if="store.useAuthStore().user === null">Sin Usuario</p>
    <div v-else>
        <h1>Hola {{ store.useAuthStore().user.userData.name }}</h1>
        <ul>
            <li v-for="(servicio, index) in store.useAuthStore().user.userData.homeServices" :key="index">
                {{ servicio.cod }}
            </li>
        </ul>

        <button @click="store.Logout">Logout</button>
    </div>
</template>

