<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-3">
        <div class="col-2" id="title">
          <RouterLink to="/menuDiet">
            <img src="/img/kembali.png" />
          </RouterLink>
        </div>
        <div class="col-8" id="title">
          <h1 class="titleHU text-center">MENU SIANG</h1>
        </div>
        <div class="col-2" id="title">
          <!-- <img src="/img/Frame 14.png" /> -->
        </div>
      </div>
    </div>

    <div class="opsiMenu">
      <div class="row justify-content-center gap-4 mb-3 pb-3">
        <div
          class="cardMenu"
          v-for="makanan in menuDietSiang"
          v-bind:key="makanan.idMeal"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan.strMealThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4>{{ makanan.strMeal }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>{{}}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>7,6</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{}}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      menuDietSiang: [],
    };
  },

  mounted() {
    let self = this;
    const options = {
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
    };

    axios
      .request(options)
      .then(function (response) {
        self.menuDietSiang = response.data.meals;
        console.log(response.data.meals);
        // self.menuDietSiang = response.data.hints;
        // if (self.menuMakanan.length > 10) {
        //   self.menuMakanan.splice(0, 15);
        //   console.log(self.menuDietSiang);
        // }
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
