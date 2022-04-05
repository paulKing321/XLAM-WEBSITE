<template>
  <div class="home">
    <!-- first viewport/ -->
    <div class="first">
      <h1>XLAM Multimedia</h1>
      <p>Your surest audio visual equipments plug</p>
      <div class="banner-btn">
        <a href="#"><span></span>Find Out</a>
        <a href="#"><span></span>Read More</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import  from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
  }
})
export default class HomeView extends Vue {}
</script>

<style scoped>
.first {
  background: linear-gradient(rgba(0,0,0,0.5),#68020F), url(../assets/images/picture-8.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
}

</style>