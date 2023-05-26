<script setup>
import { RouterLink } from 'vue-router';

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
                    <label for="">INGRESA TU RUT</label>
                    <input type="text" v-model.trim="userName">
                    <br>
                    <div class="boton-forgot">
                        <div class="boton-ingresar">
                            <router-link to="/login">
                                <button type="submit">Cancelar</button>
                            </router-link>
                        </div>
                        <div class="boton-ingresar">
                            <button type="submit">Ingresar</button>
                        </div>
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


<style lang="scss" scoped></style>