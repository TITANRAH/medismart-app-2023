<script setup>

import { useUserStore } from '../../stores/user-store/user-store';

const {Logout} = useUserStore()

</script>
<template>
    <header>
        <nav class="header-nav">
            <div class="nav-circle-img">
                <img src="../../assets/cardiff/logo-cardiff.png" alt="">
                <div class="circle">CP</div>
                <p>Agendar atenciones</p>
            </div>
            <div class="alert-icons">

                <div class="button-header">
                    <button>NO TIENE ATENCIONES PRÓXIMAS</button>
                </div>

                <div class="iconos-header">
                <div class="icono">
                    <i class="fa-regular fa-bell"></i>
                    <div>ALERTAS</div>
                </div>
                <div class="icono" >
                    <i class="fa-regular fa-circle-question"></i>
                    <div>AYUDA</div>
                </div>
                <div class="icono" @click="Logout" >
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <div>SALIR</div>
                </div>
            </div>

            </div>

           
        </nav>
    </header>
</template>


<style></style>