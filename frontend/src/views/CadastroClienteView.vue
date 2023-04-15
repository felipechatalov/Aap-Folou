<template>
    <div class="container">
        <h1 class="titulo">Cadastro Cliente <img src="../components/icons/cliente.png" alt="cliente"></h1>
        <form>
            <Auxiliar :cadastro="cadastro"/>
            <button class="submit" type="submit" @click.prevent="enviarCadastro()">Cadastrar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Auxiliar from './Auxiliar.vue';


export default{
    name: "CadastroCliente",
    components: { Auxiliar },
    methods: {
        enviarCadastro() {
            if (this.cadastro.password == this.cadastro.confirmPassword) {
                const dados = {
                    nome: this.cadastro.nome,
                    password: this.cadastro.password,
                    email: this.cadastro.email,
                    cpf: this.cadastro.cpf,
                    phone: this.cadastro.phone
                };

                axios.post('/api/cadastro/cliente',dados)
                    .then(response => {
                        console.log('Cadastro realizado com sucesso',response);
                    })
                    .catch(error => {
                        console.log('Ocorreu um erro ao realizar o cadastro:', error);
                    });
            }          
            else {
                console.log("ERRO !");
            }

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

<style>
    label{
        font-size: medium;
        color: black;
    }

    span{
        color: red;
    }

</style>