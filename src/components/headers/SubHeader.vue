<script setup>

import {useUserStore} from '../../stores/user-store/user-store'
import { storeToRefs } from 'pinia';


const useUser = useUserStore()
const { user } = storeToRefs(useUser)



</script>
<template>
   
    <div class="sub-header-uno">
        <p>Tu mundo seguro para cada momento de tu vida</p>
    </div>

    <div class="sub-header-dos">
        <h1 v-if="user">Hola {{user.userData.name}}, ¿En que podemos ayudarte?</h1>
        <p>Aprovecha nuestros servicios para prevenir y mantener un estilo de vida sano</p>
    </div>
</template>


<style></style>