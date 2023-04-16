<template>
  <header>
    <div id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link> 
      <router-link to="/" id="router1">Home</router-link>
      <router-link to="/about" id="router2">Pedidos</router-link>
    </div>
  </header>   
</template>

<script>
  export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navbar",
    props: ["logo", "alt"]
  }
</script>
