<template>
    <div>
        <label for="name">Nome:</label>
        <input type="text" v-model="cadastro.name">
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
    </div>
 
</template>

<script>
    export default{
        props: {
            cadastro: {
            type: Object,
            default: () => ({ name: '', password: '', email: '', cpf: '', phone: '' })
            }
        },
        data() {
            return {
                compCadastro: { ...this.cadastro },
                editando: false
            }
        },
    }    
</script>

<style scoped>
    label{
        font-size: medium;
        color: black;
    }
    input{
        border-radius: 10px;
        size: 100px;
        padding: 5px;
    }
    span{
        color: red;
    }
</style>