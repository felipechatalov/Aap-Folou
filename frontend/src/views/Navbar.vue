<template>
  <header>
    <div id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link> 
      <a id="router1" href="" @click.prevent="mudarotaHome()">Home</a>
      <a id="router2" href="" @click.prevent="mudarotaPedidos()">Pedidos</a>
      <a id="router3" href="" @click.prevent="mudarotaLogin()">Login</a>
      <!-- <router-link to="/" id="router1">Home</router-link>
      <router-link to="/about" id="router2">Pedidos</router-link>
      <router-link to="/login" id="router3">Login</router-link> -->
    </div>
  </header>   
</template>

<script>
  export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
    props: ["logo", "alt"],

    methods:{
      mudarotaHome() {
            this.$router.push("/");
        },
        mudarotaPedidos() {
            this.$router.push("/about");
        },
        mudarotaLogin() {
            this.$router.push("/login");
        }
    }
  }
</script>
