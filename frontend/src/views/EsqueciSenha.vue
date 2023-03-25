<template>
    <div class="pesquisar_conta">
        <h1 class="titulo">Pesquisar Conta</h1>
        <div class="esqueci">
            <label class="label" for="email">Insira seu email ou número de celular para procurar a sua conta.</label>
            <input class="input" type="text" v-model="email">
            <div class="buttons">
                <button @click.prevent="voltarLogin()">Cancelar</button>
                <button class="salvar" @click.prevent="pesquisarConta()">Pesquisar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            user: {},
            email: ''
        }
    },
    methods:{
        voltarLogin(){
            this.$router.push('/login')
        },
        async pesquisarConta(){
            const endpoint = `/users?email=${this.email}`;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            try {
                const response = await axios.get(endpoint, { headers });
                this.user = response.data;
                this.$router.push('confirmar/conta')
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>