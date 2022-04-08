<template>
  <div class="contact">
    <h1>Contact</h1>
    <ul>
      <li v-for="icon in icons" :key="icon.name">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const icons = ref ([
      {name: 'local_phone', text: 'phone'},
      {name: 'whatsapp', text: 'whatsapp'},
      {name: 'alternate_email', text: 'email'},
      {name: 'facebook', text: 'facebook'}
    ])

    return { icons }
  }
}
</script>

<style scoped>
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
