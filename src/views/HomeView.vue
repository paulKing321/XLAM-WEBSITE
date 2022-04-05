<template>
  <div class="home">
   <FirstViewport/>
   <SecondViewport/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FirstViewport from '@/components/home/FirstViewport.vue'; // @ is an alias to /src
import SecondViewport from '@/components/home/SecondViewport.vue'; // @ is an alias to /src

@Options({
  components: {
    FirstViewport,
    SecondViewport,
  }
})
export default class HomeView extends Vue {}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;

}
</style>