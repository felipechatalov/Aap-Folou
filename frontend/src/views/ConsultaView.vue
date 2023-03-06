<template>
    <div class="container">
      <h2>Dados do usuário</h2>
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
        </div>
        <button type="submit">Editar</button>
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
  created() {
    this.user = dados;
    console.log(this.user.name);
  },
};
</script>

