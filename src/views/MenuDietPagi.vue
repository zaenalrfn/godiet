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
          <h1 class="titleHU text-center">MENU PAGI</h1>
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
          v-for="makanan in menuMakanan"
          v-bind:key="makanan.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4>{{ makanan.food.label }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>23</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>7,6</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>1,3</h3>
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
      menuMakanan: [],
    };
  },
  mounted() {
    let self = this;
    const options = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: "fish" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        self.menuMakanan = response.data.hints;
        if (self.menuMakanan.length > 10) {
          self.menuMakanan.splice(0, 15);
          console.log(self.menuMakanan);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
