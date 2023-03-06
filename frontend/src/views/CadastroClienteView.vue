<template>
    <div class="formulario">
        <form @submit="formulario">
            <label for="name">Nome:</label>
            <input type="text" v-model="cadastro.name" placeholder="Digite o seu Nome">
            <label for="password">Senha:</label>
            <input type="text" v-model="cadastro.password">
            <label for="confirmPassword">Confirmar Senha:</label>
            <input type="text" v-model="cadastro.confirmPassword">
            <span v-if="cadastro.confirmPassword !== cadastro.password"> As Senhas não conferem</span>
            <label for="email">E-mail:</label>
            <input type="email" v-model="cadastro.email">
            <label for="cpf">CPF:</label>
            <input type="text" v-model="cadastro.cpf">
            <label for="phone">Telefone:</label>
            <input type="text" v-model="cadastro.phone">
            <button type="submit" @click.prevent="atualizarBanco()">Cadastrar</button>
        </form>
    </div>
</template>

<script>

export default{
    name: 'CadastroCliente',
    methods:{
        atualizarBanco(){
            if(this.cadastro.password == this.cadastro.confirmPassword){
                console.log("ERRO !");
            }
            else{
                //enviar
            }
            console.log(this.cadastro);
        }
    },
    data(){
        return{
            cadastro:{
                name: '',
                password: '',
                confirmPassword: '',
                email: '',
                cpf: '',
                phone:''
            }
        }
    }
}
</script>

<style scoped>
    label{
        color: black;
    }
    input{
        border-radius: 5%;
    }

</style>