<template>
  <div class="w-full min-h-screen">
    <TheLogo/>
    <NavBar/>
    <ServicesFirstViewport/>
    <div class="w-4/5 py-16 mx-auto services">
      <div class="custom-coat projectors">
        <h1>Projectors</h1>
        <div class="grid-class gap">
          <div class="single">
            <img src="@/assets/images/picture-12.jpg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Rent Out Projectors</h3>
              <h4>*********</h4>
              <p>First Class Projectors at pocket friendly prices</p>
            </div>
          </div>
          <div class="single">
            <img src="@/assets/images/picture-4.jpg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Sell Projectors</h3>
              <h4>*********</h4>
              <p>First Class Projectors with high durability</p>
            </div>
          </div>
          <div class="single">
            <img src="@/assets/images/picture-10.jpg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Fix Projectors</h3>
              <h4>*********</h4>
              <p>First Class Projectors with high durability</p>
            </div>
          </div>
          <div class="single">
            <img src="@/assets/images/picture-12.jpg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Install Projectors</h3>
              <h4>*********</h4>
              <p>First Class Projectors with high durability</p>
            </div>
          </div>
        </div>
      </div>
      <div class="TV-screens custom-coat">
        <h1>TV Screens</h1>
        <div class="flex flex-col items-center justify-between gap md:flex-row bg-[#F21137]">
          <div class="single">
            <img src="@/assets/images/tv.jpeg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Rent Out TV Screens</h3>
              <h4>*********</h4>
              <p>First Class TV Screens at pocket friendly prices</p>
            </div>
          </div>
          <div class="single">
            <img src="@/assets/images/tv-2.jpeg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Sell TV Screens</h3>
              <h4>*********</h4>
              <p>First Class TV Screens with high durability</p>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-coat projector-screens">
        <h1>Projector Screens</h1>
        <div class="flex flex-col items-center justify-between gap md:flex-row">
          <div class="single">
            <img src="@/assets/images/screen-on-stand.jpeg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Rent Out Projector Screens</h3>
              <h4>*********</h4>
              <p>First Class Projector Screens at pocket friendly prices</p>
            </div>
          </div>
          <div class="single">
            <img src="@/assets/images/projector-screen.jpeg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Sell Projector Screens</h3>
              <h4>*********</h4>
              <p>First Class Projector Screens with high durability</p>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-coat sound-systems">
        <h1>Sound Systems</h1>
        <div class="flex flex-col items-center justify-between gap md:flex-row">
          <div class="single">
            <img src="@/assets/images/speaker-small.jpeg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Rent Out Sound Equipments</h3>
              <h4>*********</h4>
              <p>First Class Sound Equipments at pocket friendly prices</p>
            </div>
          </div>
          <div class="single">
            <img src="@/assets/images/speaker-2.jpeg" alt="">
            <div class="overlay"></div>
            <div class="service-text">
              <h3>We Sell Sound Equipments</h3>
              <h4>*********</h4>
              <p>First Class Sound Equipments with high durability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- reach us -->
    <div class="justify-center custom-coat">
      <h1>Reach Us Today</h1>
      <div class="flex items-center justify-center custom-margin gap-x-12" >
        <button  class=""><a class="text-sm md:text-xl" href="tel:+2348128482617">Phone</a></button>
        <button><a class="text-sm md:text-xl" href="https://wa.me/<+2348128482617>" target="_blank">Whatsapp</a></button>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import TheLogo from "@/components/TheLogo.vue";
import NavBar from "@/components/NavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import ServicesFirstViewport from "@/components/others/ServicesFirstViewport.vue";

export default {
  components: { TheLogo, NavBar, TheFooter, ServicesFirstViewport }
}
</script>
<style scoped>
.single {
  flex-basis: 48%;
  border-radius: 7px;
  margin-bottom: 20px;
  color: #fff;
  position: relative;
}
img {
  width: 100%;
  border-radius: 7px;
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gap {
  column-gap: 32px;
}
.overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 7px;
  cursor: pointer;
  background: linear-gradient(rgba(0,0,0,0.5),#F21137);
  opacity: 0;
  transition: 1s;
}
.single:hover .overlay{
  opacity: 1;
}
.service-text{
  width: 80%;
  position: absolute;
  bottom: 0%;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
  transition: 1s;
}
.single:hover .service-text{
    bottom: 40%;
    opacity: 1;
}
@media screen and (max-width: 768px) {
  .single{
    flex-basis: 100%;
    margin-bottom: 30px;
  }
  .single:hover .service-text{
    bottom: 25% !important;
  }
}
.grid-class {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
h1 {
  font-size: 48px;
  font-weight: 500;
  color: linear-gradient(rgba(0,0,0,0.5),#F21137);
  margin: 50px 0;
}
@media screen and (max-width: 768px) {
  .grid-class {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  h1 {
    font-size: 24px;
    margin: 20px 0;
  }
}
.custom-coat {
  background: #f38b78;
  padding: 0px 10px;
}
.custom-margin {
padding-bottom: 15px;
}
button {
  cursor: pointer;
  border: 1px solid #f38b78;
  background-color: transparent;
  height: 50px;
  width: 200px;
  color: #030303;
  /* font-size: 1.5em; */
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
}
button:hover{
  background-color: #fff;
  animation: slidebg 5s linear infinite;
  transition: all 2s ease-in;
}
@media screen and (max-wdith: 768px) {
  .custom-font {
    font-size: 15px;
  }
}
</style>