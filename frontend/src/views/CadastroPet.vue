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
                <label for="address">Endereço:</label>
                <input type="text" v-model="cadastro.address">
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
                    name: this.cadastro.name,
                    password: this.cadastro.password,
                    email: this.cadastro.email,
                    cnpj: this.cadastro.cnpj,
                    phone: this.cadastro.phone,
                    address: this.cadastro.address
                };
                const json = JSON.stringify(dados);
                console.log(json);
                const headers = {
                    'Content-Type': 'application/json'
                };
                axios.post('http://localhost:6969/cadastro/pet', json, {headers})
                    .then(response => {
                        console.log('Cadastro do petshop realizado com sucesso', response);
                    })
                    .catch(error => {
                        console.log('Ocorreu um erro ao realizar o cadastro:', error);
                    });
            }          
            else {
                console.log("ERRO ! senhas não batem");
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
                cnpj: "",
                phone: "",
                adress: ""
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