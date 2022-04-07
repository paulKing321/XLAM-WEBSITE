<template>
  <div class="w-full min-h-screen">
   <NavBar/>
   <FirstViewport/>
   <SecondViewport/>
   <!-- <TheFooter/> -->
  </div>
</template>

<!-- <script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FirstViewport from '../components/home/FirstViewport.vue'; // @ is an alias to /src
import SecondViewport from '../components/home/SecondViewport.vue'; // @ is an alias to /src
@Options({
  components: {
    FirstViewport,
    SecondViewport,
  }
})
export default class HomeView extends Vue {
}
</script> -->
<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
// import TheFooter from '../components/TheFooter.vue';
import FirstViewport from '../components/home/FirstViewport.vue'; // @ is an alias to /src
import SecondViewport from '../components/home/SecondViewport.vue'; // @ is an alias to /src


export default defineComponent({
  // setup() {
    
  // },
  components: {
    NavBar,
    // TheFooter,
    FirstViewport,
    SecondViewport,
  }
})
</script>



<style scoped>

</style>