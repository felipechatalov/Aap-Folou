<template>
    <div class="cadastro">
        <img class="aafolou" src="../components/icons/aafolou.png" alt="Cachorro aa folou">
        <div class="logar">
            <form action="logar">
                <label for="email">Email:</label>
                <input type="email" v-model="login.email">
                <label for="password">Senha:</label>
                <input type="text" v-model="login.password">
                <div class="links">
                    <a href="" @click.prevent="mudarotaEsqueci()">Esqueci minha senha</a>
                    <a href="" @click.prevent="mudarotaCadastro()">Registrar-se</a>
                </div>
                <button class="btn_login" @click.prevent="verifica_login()">Login <img src="../components/icons/patinha.png" alt="Patinha de cachorro"></button>
            </form>
            <div class="registro_pet">
                <a href="" @click.prevent="mudarotaCadastroPet()">Registrar meu Pet Shop</a>
            </div>
        </div>
        <Rodape/>
    </div>
    
</template>

<script>
import Rodape from './Rodape.vue';
import axios from 'axios';

export default{
    methods: {
        mudarotaEsqueci() {
            this.$router.push("/esqueci/senha");
        },
        mudarotaCadastro() {
            this.$router.push("/cadastro/cliente");
        },
        mudarotaCadastroPet() {
            this.$router.push("/cadastro/pet");
        },
        verifica_login() {
            const dados = {
                email: this.login.email,
                password: this.login.password,
            };
            const json = JSON.stringify(dados);
            const headers = {
                'Content-Type': 'application/json'
            };
            console.log('Dados do login:', dados);
            console.log(json);
            axios.post('http://localhost:6969/login/cliente', json, {headers})
                .then(response => {
                    console.log('Login realizado com sucesso',response);
                    const dados = response.data;
                    this.dados = dados;
                    localStorage.setItem('login', JSON.stringify(dados));
                    const elementoAEsconder = document.getElementById('router3');
                    const elementoAMostrar = document.getElementById('logado');
                    elementoAEsconder.style.display = 'none';
                    elementoAMostrar.style.display = 'block';
                    this.$router.push("/inicio");
                })
                .catch(error => {
                    console.log('Ocorreu um erro ao realizar o login:', error);
                });
        }
    },
    data() {
        return {
            login: {
                email: "",
                password: ""
            },
            dados: {}
        };
    },
    components: { Rodape }
}
</script>