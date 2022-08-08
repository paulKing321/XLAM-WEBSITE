<template>
  <div class="w-full min-h-screen">
    <TheLogo/>
    <NavBar/>
    <FAQsFirstViewport/>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import TheLogo from "@/components/TheLogo.vue";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import FAQsFirstViewport from "@/components/others/FAQsFirstViewport.vue";

export default {
  components: { TheLogo, NavBar, TheFooter, FAQsFirstViewport }
}
</script>