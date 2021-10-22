<template>
  <div id="app">
    <h1>Vue Router를 사용해 봅시다.</h1>
    <div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #000;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
