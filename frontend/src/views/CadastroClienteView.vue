<template>
    <div class="formulario">
        <form>
            <Auxiliar :cadastro="cadastro"/>
            <button type="submit" @click.prevent="atualizarBanco()">Cadastrar</button>
        </form>
    </div>
</template>c

<script>
import Auxiliar from './Auxiliar.vue';


export default{
    name: "CadastroCliente",
    components: { Auxiliar },
    methods: {
        atualizarBanco() {
            if (this.cadastro.password == this.cadastro.confirmPassword) {
                console.log(this.cadastro.name);
            }
            else {
                console.log("ERRO !");
            }
            console.log(this.cadastro);
        }
    },
    data() {
        return {
            cadastro: {
                name: "",
                password: "",
                confirmPassword: "",
                email: "",
                cpf: "",
                phone: ""
            }
        }
    },
}
</script>

<style scoped>

    label{
        font-size: medium;
        color: black;
    }
    
    span{
        color: red;
    }
</style>