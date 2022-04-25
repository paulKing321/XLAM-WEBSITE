<template>
  <div class="w-full min-h-screen bg-[#F21137]">
    <TheLogo/>
    <NavBar/>
    <ContactFirstViewport/>
    <div class="contact">
      <ul>
        <li v-for="icon in icons" :key="icon.name">
          <span class="material-icons">{{ icon.name }}</span>
          <a :href="icon.link" target="blank">{{ icon.text }}</a>
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
            { name: "local_phone", text: "phone",  link: "tel:08128482617"},
            { name: "whatsapp", text: "whatsapp", link: "https://wa.me/<+2348128482617>" },
            { name: "alternate_email", text: "email", link: "mailto:XlamMultimedia@gmail.com" },
            { name: "facebook", text: "facebook", link: "http://www.facebook.com/X-lam Media" }
        ]);
        return { icons };
    },
    components: { TheLogo, NavBar, TheFooter, ContactFirstViewport }
}
</script>

<style scoped>
.contact span {
  margin-right: 10px;
  color: #F21137;
}
.contact ul {
  padding: 0 20px;
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
