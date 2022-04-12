<template>
  <div class="min-h-screen py-8 mx-auto mt-8 w-5/5 third md:mt-12 md:py-12">
   <h1 class="my-6 text-2xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">Why You Should Choose Us</h1>
   
    <div class="flex flex-col w-11/12 mx-auto mt-8 text-left md:flex-row gap-x-8">
      <div class="w-2/5">
        <div class="flex feature gap-x-2">
          <i class="fa fa-check-square-o"></i>
          <p class="feature-text">We are trusted for our quality delivery. We deliver the best.</p>
        </div>
        <div class="flex feature">
          <i class="fa-solid fa-alien-8bit"></i>
          <p>We take customer satisfaction very serious. Serving You is our priority </p>
        </div>
        <div class="flex feature">
          <i class="fa fa-shield"></i>
          <p>Swift response is our hall mark. No delays.</p>
        </div>
      </div>
      <div class="m-auto basis-1/2 w-60">
        <img class="w-60 lg:w-80 rounded-xl" :src="require('@/assets/images/picture-6.jpg')" alt="">
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
  background: linear-gradient(#f21137,#68020F);
}
.feature .fa{
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    border-radius: 8px;
    color: #009688;
    border: 1px solid #009688;
}
</style>
