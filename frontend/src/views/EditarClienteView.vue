<template>
    <div>
        <ConsultaView/>
        <v-btn variant="outlined" color="error">Editar</v-btn>
    </div>
</template>

<script>

import ConsultaView from './ConsultaView.vue';
export default{
    components:{
        ConsultaView
    }
}
</script>

<style scoped>
    button{
        display: flex;
        margin: auto;
        padding: 5px;
        width: 300px;
        justify-content: center;
        background-color: #7a653ee8;
        border-radius: 10px;
    }
</style>