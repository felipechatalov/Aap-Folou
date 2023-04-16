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
import Rodape from './Rodape.vue'

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
            axios.get("/cliente/")
                .then(response => {
                const aux = response;
                this.dados = aux;
                this.$router.push("/");  
            })
                .catch(error => {
                console.log("ERRO !", error);
                location.reload();
            });
            axios.get("/petshop/")
                .then(response => {
                const aux = response;
                return this.dados = aux;
            })
                .catch(error => {
                console.log("ERRO !", error);
                location.reload();
            });
        }
    },
    data() {
        return {
            login: {
                email: "",
                password: ""
            }
        };
    },
    components: { Rodape }
}
</script>