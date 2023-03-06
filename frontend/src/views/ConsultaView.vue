<template>
    <div class="container">
      <h2>Dados do usuário</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Nome:</label>
          <p>{{ user.nome }}</p>
          <label for="email">Email:</label>
          <p>{{ user.email }}</p>
          <label for="cpf">CPF:</label>
          <p>{{ user.cpf }}</p>
          <label for="phone">Telefone:</label>
          <p>{{ user.telefone }}</p>
        </div>
        <button type="submit">Editar</button>
      </form>
    </div>
  </template>

<script>
import dados from "@/assets/dados.json";

export default {
  data() {''
    return {
      user: {}
    }
  },
  created() {
    this.user = dados;
  },
};
</script>

