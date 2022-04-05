<template>
  <div class="home">
    <!-- first viewport/ -->
    <div class="first">
      <div class="first-text">
        <h1><span class="red-text">X</span>LAM <span class="red-text">M</span>ultimedia</h1>
        <p>Your surest audio visual equipments plug</p>
      </div>
      <div class="first-btn">
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
.first-text {
  text-align: center;
  color: #fff;
  padding-top: 180px;
}
.first-text h1{
  font-size: 130px;
  font-family: 'Kaushan Script', cursive;
}
.first-text p{
  font-size: 20px;
  font-style: italic;
}
.red-text {
  color: #F21137;
}
.first-btn{
  margin: 70px auto 0;
}
.first-btn a{
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: #fff;
  border: .5px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}
.first-btn a span{
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  transition: 0.5s;
}
.first-btn a:hover span{
  width: 100%;
}
.first-btn a:hover{
  color: #000;
}
</style>