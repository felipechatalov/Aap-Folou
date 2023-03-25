<template>
    <div>
        <h1 class="titulo">Cadastro Pet<img src="../components/icons/petshop.png" alt=""></h1>
        <form>
                <label for="name">Nome:</label>
                <input type="text" v-model="cadastro.name">
                <label for="password">Senha:</label>
                <input type="text" v-model="cadastro.password">
                <label for="confirmPassword">Confirmar Senha:</label>
                <input type="text" v-model="cadastro.confirmPassword">
                <span v-if="cadastro.confirmPassword !== cadastro.password"> As Senhas não conferem</span>
                <label for="email">E-mail:</label>
                <input type="email" v-model="cadastro.email">
                <label for="CNPJ">CNPJ:</label>
                <input type="text" v-model="cadastro.cpf">
                <label for="phone">Telefone:</label>
                <input type="text" v-model="cadastro.phone">
                <button type="submit" @click.prevent="enviarCadastro()">Cadastrar</button>
        </form>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 5px;
        width: 300px;
        border-radius: 10px;
    }
    label{
        font-size: medium;
        color: black;
        font-weight: bold;
    }
    span{
        color: red;
    }
</style>

<script>
import axios from 'axios';
import Auxiliar from './Auxiliar.vue';


export default{
    name: "CadastroPet",
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
                        console.log('Cadastro realizado com sucesso');
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