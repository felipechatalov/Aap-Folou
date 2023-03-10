<template>
    <div class="container">
        <form>
            <Auxiliar :cadastro="cadastro"/>
            <button type="submit" @click.prevent="enviarCadastro()">Cadastrar</button>
        </form>
    </div>
</template>c

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

<style scoped>

    label{
        font-size: medium;
        color: black;
    }

    span{
        color: red;
    }

</style>