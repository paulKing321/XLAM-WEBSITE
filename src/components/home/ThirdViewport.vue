<template>
  <div class="min-h-screen py-8 mx-auto mt-8 w-5/5 third md:mt-12 md:py-12">
   <h1 class="w-4/5 mx-auto my-6 text-2xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">Why You Should Choose Us</h1>
   
    <div class="flex flex-col w-11/12 py-12 mx-auto mt-8 md:flex-row custom-space">
      <div class="flex flex-col w-2/5 left gap">
        <div class="flex feature">
          <i class="fa fa-shield"></i>
          <p class=" feature-text">We have the best sets of projector and projector screen in town, we are available to meet your need for any kind of events. Our projectors are very bright and we can assure you you're getting value for your money.  
          Call us now.</p>
        </div>
        <div class="flex mb-8 feature md:mb-0">
          <i class="fa fa-shield"></i>
          <p class="">We have led TV with crystal clear images,  our TV screens are without match, we have in various sizes that you want. We are just a phone call away. </p>
        </div>
        <div class="flex feature">
          <i class="fa fa-shield"></i>
          <p class="">We have rechargeable public address systems, you need not worry about how to get a sound system for your presentation. Just call us.</p>
        </div>
      </div>
      <div class="mx-auto mt-8 right md:mt-0 basis-1/2 w-60">
        <img class="flex items-center justify-center mx-auto rounded-xl" :src="require('@/assets/images/picture-6.jpg')" alt="">
      </div>
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
.third {
  background: #f38b78;
  /* background: linear-gradient(#f21137,#68020F); */
}
.feature .fa{
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    border-radius: 8px;
    color: #f21137;
    border: 1px solid #f21137;
}
img {
  width: 730px;
  height: 416px;
}
@media screen and (max-width: 768px) {
  img {
    height: 370px;
  }
}
@media screen and (max-width: 1280px) and (min-width: 768px) {
  img {
    width: 500px;
  }
}
@media screen and (min-width: 1280px) {
  img {
    width: 550px;
  }
}
@media screen and (min-width: 1440px) {
  img {
    width: 600px;
  }
}
.left {
  justify-content: center;
  text-align: left;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature {
  column-gap: 8px;
}
.gap {
  row-gap: 40px;
}
@media screen and (min-width: 1024px) {
  .gap {
    row-gap: 60px;
  }
}
@media screen and (min-width: 1280px) {
  .gap {
    row-gap: 80px;
  }
}
@media screen and (min-width: 1440px) {
  .gap {
    row-gap: 100px;
  }
}
.custom-space {
  column-gap: 32px;
}
</style>
