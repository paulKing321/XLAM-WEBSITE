<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <CookiesPolicy/> -->
  <router-view/>
</template>

<script lang="ts">
// import CookiesPolicy from '@/components/others/CookiesPolicy.vue';

export default ({
  components: {
    // CookiesPolicy
  }
})
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Kaushan Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
