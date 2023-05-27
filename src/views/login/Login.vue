<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user-store/user-store';
import Accesibility from '../../components/accessibility/Accesibility.vue';


// import { computed, ref } from 'vue';
// import fondoLogin from  `../../assets/${clienteStore.currentCss.replace('.css','')}/img-login.svg`

const router = useRouter()
const userStore = useUserStore()
const userName = ref('16724918-3')
const password = ref('Aa123456')

const handleSubmit = async () => {
    console.log('userName', userName.value)
    console.log('password', password.value)
    //  firebase pide pass mayor a 5
    if (!userName.value || !password.value) {
        return alert('llena los campos')
    }
    await userStore.fetchUser(userName.value, password.value);
    router.push("/home");

}

</script>
<template>
    <div class="container">
        <div class="columna-izquierda">
            <img src="../../assets/cardiff/960x978.jpg" alt="">
        </div>
        <div class="columna-derecha">
            <!-- LOGIN -->
            <form type="submit" @submit.prevent="handleSubmit" class="form-login">
                <div class="caja-login">
                    <img src="./../../assets/cardiff/logo-cardiff.png" alt="">

                    <h1>¿Olvidaste tu clave?</h1>
                    <label for="">INGRESA TU RUT</label>
                    <input type="text" v-model.trim="userName">
                    <br>
                    <label for="">CLAVE</label>
                    <input type="password" v-model.trim="password">
                    <router-link to="/forgot">
                        <div class="olvidaste-clave">
                            <p @click="router">¿Olvidaste tu clave?</p>
                        </div>
                    </router-link>
                    <div class="boton-ingresar">
                        <button type="submit">Ingresar</button>
                    </div>
                    <div class="linea"></div>
                    <div class="registrate-aca">

                        <p>¿No tienes una cuenta?</p>
                        <p>Registrate acá</p>

                    </div>

                    <Accesibility></Accesibility>
                   

                    <div class="logos-colaboradores">
                        <img src="./../../assets/cardiff/logo-paribas.png" alt="">
                        <img src="./../../assets/cardiff/logo-medismart.png" alt="">
                    </div>
                </div>
            </form>
            <!-- FIN LOGIN -->
        </div>
    </div>
</template>


<style></style>