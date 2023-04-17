<template>
    <div>
        <h1 class="aap_folou">Dados do Petshop</h1>
        <form>
          <div>
            <label for="name">Nome:</label>
            <p>{{ user.name }}</p>
            <label for="password">Senha:</label>
            <p v-if="mostrar_senha">{{ this.user.password }}</p>
            <p v-else>*********</p>          
            <label for="email">Email:</label>
            <p>{{ user.email }}</p>
            <label for="CNPJ">CNPJ:</label>
            <p>{{ user.cnpj }}</p>
            <label for="phone">Telefone:</label>
            <p>{{ user.phone }}</p>
          </div>
          <button @click.prevent="mudar_rota()">Editar</button>
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

  beforeMount() {
    const userJSON = localStorage.getItem("login");
    const user = JSON.parse(userJSON);
    this.user = user;
  },
  methods:{
    mudar_rota(){
      this.$router.push('/editar/petshop')
    }
  }
};

</script>