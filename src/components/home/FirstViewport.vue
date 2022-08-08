<template>
  <div class="first">
    <div class="w-4/5 pt-56 mx-auto first-text md:pt-60">
      <h1 class="animate__animated animate__zoomIn animate__fast my-4 text-4xl font-bold md:text-7xl lg:text-8xl xl:text-9xl"><span class="red-text">X</span>LAM <span class="red-text">M</span>ultimedia</h1>
      <p class="animate__animated animate__zoomInUp animate__slow">Your surest audio visual equipments plug</p>
    </div>
    <div class="first-btn">
      <router-link class="a animate__animated animate__zoomInLeft animate__delay-2s" to="/services"><span></span>Our Services</router-link>
      <router-link class="a animate__animated animate__zoomInRight animate__delay-2s" to="/contact-us"><span></span>Reach Us</router-link>
    </div>
    <div class="justify-center hidden w-4/5 mx-auto mt-20 text-base text-white xl:mt-32 xl:text-xl md:grid-cols-3 md:grid">
      <div class="flex gap-x-8">
        <i class="fa-solid fa-droplet"></i>
        <h1 class="animate__animated animate__flipInY animate__delay-3s">Quality Delivery</h1>
      </div>
      <div class="flex gap-x-8">
        <i class="fa-solid fa-droplet"></i>
        <h1 class="animate__animated animate__flipInY animate__delay-3s">Customer Satisfaction</h1>
      </div>
      <div class="flex gap-x-8">
        <i class="fa-solid fa-droplet"></i>
        <h1 class="animate__animated animate__flipInY animate__delay-3s">Swift Response</h1>
      </div>
    </div>
  </div>
</template>

// <script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import type { Ref } from 'vue'

// interface ShowType {
//   show: boolean;
// }
export default defineComponent({
  setup() {
    let show = ref(false);

    function showAnimation() {
      show = ref(true);
    }

    onMounted(() => {
      showAnimation()
      console.log(show.value)
    })
      return {show, showAnimation}
  },
})
</script>

<style scoped>
.first {
  background: linear-gradient(rgba(0,0,0,0.5),#68020F), url(../../assets/images/picture-5.jpg);
  
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.first-text {
  text-align: center;
  color: #fff;
  /*padding-top: 180px;*/
}
.first-text h1{
  /*font-size: 130px;*/
  font-family: 'Kaushan Script', cursive;
}
.first-text p{
  font-size: 20px;
  font-style: italic;
}
.red-text {
  color: #F21137;
}
.first-btn{
  margin: 70px auto 0;
}
.first-btn .a{
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  padding: 12px 0;
  color: #fff;
  border: .5px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}
.first-btn .a span{
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  transition: 0.5s;
}
.first-btn .a:hover span{
  width: 100%;
}
.first-btn .a:hover{
  color: #000;
}
</style>
