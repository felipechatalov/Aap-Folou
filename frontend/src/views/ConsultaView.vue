<template>
    <div class="container">
      <h1 class="aap_folou">Dados do usuário</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Nome:</label>
          <p>{{ user.name }}</p>
          <label for="password">Senha:</label>
          <p v-if="mostrar_senha">{{ user.password }}</p>
          <p v-else>*********</p>          
          <label for="email">Email:</label>
          <p>{{ user.email }}</p>
          <label for="cpf">CPF:</label>
          <p>{{ user.cpf }}</p>
          <label for="phone">Telefone:</label>
          <p>{{ user.phone }}</p>
          <button @click.prevent="mudar_rota()">Editar</button>
        </div>
      </form>
    </div>
  </template>

<script>
import dados from "@/assets/dados.json";

export default {
  data() {
    return {
      user: {},
      mostrar_senha: false
    }
  },

  mounted() {
    const userJSON = localStorage.getItem("login");
    const user = JSON.parse(userJSON);
    this.user = user
    console.log('to no consulta: ', this.user);
  },
  methods:{
    mudar_rota(){
      this.$router.push('/editar/cliente')
    }
  }
};
</script>
