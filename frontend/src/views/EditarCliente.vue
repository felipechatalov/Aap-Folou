<template>
    <div>
        <form action="container">
            <label for="nome" >Nome:</label>
            <input type="text" v-model="novos_dados.nome" :placeholder="dados.name">
            <label for="password">Senha:</label>
            <input type="text" v-model="novos_dados.password" placeholder="**********">
            <label for="confirm_password">Confirmar Senha:</label>
            <input type="text" v-model="confirm_password">
            <span v-if="novos_dados.password !== confirm_password">As senhas não conferem</span>
            <label for="email">Email:</label>
            <input type="email" v-model="novos_dados.email"  :placeholder="dados.email">
            <label for="cpf">CPF:</label>
            <input type="text" v-model="novos_dados.cpf"  :placeholder="dados.cpf">
            <label for="phone">Telefone:</label>
            <input type="text" v-model="novos_dados.phone" :placeholder="dados.phone">
            <div class="botao">
                <button @click.prevent="cancelar()">Cancelar</button>
                <button @submit.prevent="editarDados()">Salvar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                dados: {
                    name: 'Renato Augusto',
                    password: '1231235346',
                    email: 'geniusrenato@gmail.com',
                    cpf: '0624356345',
                    phone: '4454364737'
                },
                novos_dados: {},
                confirm_password: ''
            }
        },
        mounted(){
            this.pegarDados()
        },
        methods:{
            editarDados(){
                axios.put('/api/cliente/1', this.novos_dados)
                    .then(response =>{
                        console.log("Atualizado !", response);
                        const aux = this.novos_dados
                        this.dados = aux
                        this.$router.push('/consulta/cliente')
                    })
                    .catch(error =>{
                        console.log("ERRO !"+ error);
                    })
            },
            pegarDados(){
                axios.get('/api/cliente/1')
                    .then(response =>{
                        const aux = response
                        this.dados = aux
                    })
                    .catch(error => {
                        console.log("ERRO !", error);
                    })
            },
            cancelar(){
                this.$router.push('/consulta/petshop')
            }
        }
    }
</script>

