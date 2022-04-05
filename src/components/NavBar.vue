<template>
    <div class="sideNav">
      <!-- <div class="logo">
        <h2 class="text-white italic"><span class="text-[#f21137] font-bold font-mono">X</span>LAM</h2>
      </div> -->
      <router-link>Home</router-link>
      <router-link>Services</router-link>
      <router-link>Contact Us</router-link>
      <router-link>FAQs</router-link>
      <router-link>Testimonials</router-link>
    </div>
</template>

// <script lang="ts">
// import { defineComponent } from 'vue'

// export default defineComponent({
  // name: 'NavBar',
//   setup() {
//     const
//   },
// })
// </script>

<style scoped>
.sideNav {
  width: 250px;
  height: 100vh;
  position: fixed;
  right: -250px;
  top: 0;
  background: #f21137;
  z-index: 2;
  transition: 0.5s;
}
</style>
