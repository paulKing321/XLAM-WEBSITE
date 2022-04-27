<template>
  <div class="w-full min-h-screen">
    <TheLogo/>
    <NavBar/>
    <TestimonialsFirstViewport/>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import TheLogo from "@/components/TheLogo.vue";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TestimonialsFirstViewport from "@/components/others/TestimonialsFirstViewport.vue";

export default {
  components: { TheLogo, NavBar, TheFooter, TestimonialsFirstViewport }
}
</script>