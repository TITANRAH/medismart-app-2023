<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user-store/user-store';

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
            <form type="submit" @submit.prevent="handleSubmit" class="form-login">
                <div class="caja-login">
                    <img src="./../../assets/cardiff/logo-cardiff.png" alt="">
                    <h1>¿Olvidaste tu clave?</h1>
                    <label for="">Ingresa tu EMAIL o RUT</label>
                    <input type="text" v-model.trim="userName">
                    <br>
                    <label for="">Clave</label>
                    <input type="password" v-model.trim="password">
                    <div class="olvidaste-clave">
                        <p>¿Olvidaste tu clave?</p>
                    </div>
                    <div class="boton-ingresar">
                        <button type="submit">Ingresar</button>
                    </div>
                    <div class="linea"></div>
                    <div class="registrate-aca">

                        <p>¿No tienes una cuenta?</p>
                        <p>Registrate acá</p>

                    </div>

                    <div class="discapacidad">

                        <div>+A</div>
                        <div>A</div>
                        <div>-A</div>
                    </div>

                    <div class="logos-colaboradores">
                        <img src="./../../assets/cardiff/logo-paribas.png" alt="">
                        <img src="./../../assets/cardiff/logo-medismart.png" alt="">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<style></style>