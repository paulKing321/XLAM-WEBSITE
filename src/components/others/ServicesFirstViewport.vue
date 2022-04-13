<template>
  <div class="first">
    <div class="w-4/5 pt-56 mx-auto custom-padding first-text md:pt-60">
      <h1 class="my-4 text-4xl font-bold md:text-7xl lg:text-8xl xl:text-9xl"><span class="red-text">O</span>ur <span class="red-text">S</span>ervices</h1>
      <p>Your surest audio visual equipments plug</p>
      <p class="mt-24 text-white">Do you need high definition projectors or Led Screen or Led Tv to make your events come to life or you need just for your presentation or for your wedding slideshow then look no further, at Xlam Multimedia Services we've got you covered. We are here to add colors to your events. </p>
    </div>
    </div>
</template>

// <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // setup() {
  //   const
  // },
})
</script>

<style scoped>
.first {
  background: linear-gradient(rgba(0,0,0,0.5),#68020F), url(../../assets/images/picture-8.jpg);
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
  font-size: 16px;
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
@media screen and (max-width: 321px) {
  .custom-padding {
  padding-top: 8rem;
  }
}
</style>
