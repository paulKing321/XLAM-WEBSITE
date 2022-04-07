<template>
    <div class="f">
      <div class="sideNav" v-if="isShowing">
        <div class="flex flex-col justify-center mt-24 text-white gap-y-10">
          <router-link to="/">Home</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact-us">Contact Us</router-link>
          <router-link to="/faqs">FAQs</router-link>
          <router-link to="/testimonials">Testimonials</router-link> 
        </div>
      </div>
      <div class="menuBtn" @click="isShowing ? (isShowing = false) : (isShowing = true)">
        <img src="../assets/images/menu.png" class="menu" v-if="!isShowing">
        <img src="../assets/images/close.png" class="menu" v-if="isShowing">
        
      </div> 
    </div>
</template>

// <script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    // const isShowing = ref(false)
    const state = reactive ({
      isShowing: false
    })
    return { ...toRefs(state) }
    // const toggle: string = () => {
    //   if (this.isShowing === true) {
    //     return this.isShowing === false
    //   } else
    // }
  },
})
</script>

<style scoped>
.sideNav {
  width: 250px;
  height: 100vh;
  position: fixed;
  right: 0px;
  top: 0;
  background: #030303;
  z-index: 2;
  transition: all 1.5s ease-in-out;
}
.menuBtn{
  width: 50px;
  height: 50px;
  background: #68020f;
  text-align: center;
  position: fixed;
  right: 30px;
  top: 20px;
  border-radius: 3px;
  z-index: 3;
  cursor: pointer;
  padding: 0px 14px;
}
.menuBtn img{
  width: 20px;
  margin-top: 15px;
}
@media screen and (max-width: 767px) {
  .menuBtn {
    width: 45px;
    height: 45px;
  }
  .sideNav {
    width: 190px;
  }
}
</style>
