<template>
  <div class="w-full min-h-screen">
    <TheLogo/>
    <NavBar/>
    <div class="services">
      <div class="projectors">
        <h1>Projectors</h1>
        <div class="grid grid-cols-2 gap-4">
          <!-- <div>
            <img src="require('@/assets/images/picture-3.jpg')" alt="">
          </div>
          <div>
            <img src="require('@/assets/images/picture-4.jpg')" alt="">
          </div>
          <div>
            <img src="require('@/assets/images/picture-10.jpg')" alt="">
          </div>
          <div>
            <img src="require('@/assets/images/picture-12.jpg')" alt="">
          </div> -->
        </div>
      </div>
      <div class="TV-screens">
        <h1>TV Screens</h1>
        <div></div>
      </div>
      <div class="projector-screens">
        <h1>Projector Screens</h1>
        <div></div>
      </div>
      <div class="sound-systems">
        <h1>Sound Systems</h1>
        <div></div>
      </div>
    </div>
    
    <!-- reach us -->
    <div class="justify-center">
      <h1>Reach Us Today</h1>
      <div class="flex gap-x-8">
        <button>Via PhoneCall</button>
        <button>Via whatsapp</button>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import TheLogo from "@/components/TheLogo.vue";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheLogo, NavBar, TheFooter }
}
</script>
<style scoped>

</style>