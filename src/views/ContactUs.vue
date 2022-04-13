<template>
  <div class="w-full min-h-screen bg-[#F21137]">
    <TheLogo/>
    <NavBar/>
    <ContactFirstViewport/>
    <div class="contact">
      <h1>Contact Us</h1>
      <ul>
        <li v-for="icon in icons" :key="icon.name">
          <span class="material-icons">{{ icon.name }}</span>
          <div>{{ icon.text }}</div>
        </li>
      </ul>
    </div>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import TheLogo from "@/components/TheLogo.vue";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import ContactFirstViewport from "@/components/others/ContactFirstViewport.vue";

export default {
    setup() {
        const icons = ref([
            { name: "local_phone", text: "phone"  },
            { name: "whatsapp", text: "whatsapp" },
            { name: "alternate_email", text: "email" },
            { name: "facebook", text: "facebook" }
        ]);
        return { icons };
    },
    components: { TheLogo, NavBar, TheFooter, ContactFirstViewport }
}
</script>

<style scoped>
.contact {
}
.contact ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
}
.contact li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px #030303;
  cursor: pointer;
  line-height: 1.5rem;
}
</style>
