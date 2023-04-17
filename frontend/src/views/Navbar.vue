<template>
  <header>
    <div id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link> 
      <a id="router1" href="" @click.prevent="mudarotaHome()">Home</a>
      <a id="router2" href="" @click.prevent="mudarotaPedidos()">Pedidos</a>
      <a id="router3" href="" @click.prevent="mudarotaLogin()">Login</a>
    </div>
  </header>   
</template>

<script>
  export default{
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
