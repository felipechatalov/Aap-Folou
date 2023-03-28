<template>
  <header>
    <div id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link> 
      <router-link to="/">Home</router-link>
      <router-link to="/about">Pedidos</router-link>
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

<style scoped>
  #nav{
    background-color:#6d553c;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    border: 0 auto;
    padding: 0 auto;
  }
  #logo-url{
    margin: auto;
    margin-left: 0;
  }

  body{
    min-height: 1000vh;
  }
</style>