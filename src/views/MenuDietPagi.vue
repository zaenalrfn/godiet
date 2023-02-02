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
          v-for="makanan_1 in menuDietPagi_1"
          v-bind:key="makanan_1.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_1.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_1.food.label }}</h4>
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
      <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
        <div
          class="cardMenu"
          v-for="makanan_2 in menuDietPagi_2"
          v-bind:key="makanan_2.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_2.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_2.food.label }}</h4>
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
      <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
        <div
          class="cardMenu"
          v-for="makanan_3 in menuDietPagi_3"
          v-bind:key="makanan_3.idMeal"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_3.strMealThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_3.strMeal }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>{{}}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{}}</h3>
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
      <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
        <div
          class="cardMenu"
          v-for="makanan_4 in menuDietPagi_4"
          v-bind:key="makanan_4.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_4.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_4.food.label }}</h4>
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
      <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
        <div
          class="cardMenu"
          v-for="makanan_5 in menuDietPagi_5"
          v-bind:key="makanan_5.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_5.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_5.food.label }}</h4>
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
      <div class="row justify-content-center gap-4 mb-3 pb-3 pt-4 border-top">
        <div
          class="cardMenu"
          v-for="makanan_6 in menuDietPagi_6"
          v-bind:key="makanan_6.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_6.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_6.food.label }}</h4>
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
      menuDietPagi_1: [],
      menuDietPagi_2: [],
      menuDietPagi_3: [],
      menuDietPagi_4: [],
      menuDietPagi_5: [],
      menuDietPagi_6: [],
    };
  },
  mounted() {
    let self = this;
    const menuPagi_1 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: "milk" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    const menuPagi_2 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: " boiled eggs" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    const menuPagi_3 = {
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=vegan",
    };
    const menuPagi_4 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: "banana" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    const menuPagi_5 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: "boiled yams" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    const menuPagi_6 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: " cereals" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    axios
      .request(menuPagi_1)
      .then(function (response) {
        const menu = response.data.hints;
        self.menuDietPagi_1 = menu.filter((item, index) => index == 0);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuPagi_2)
      .then(function (response) {
        const menu = response.data.hints;
        self.menuDietPagi_2 = menu.filter((item, index) => index == 0);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuPagi_3)
      .then(function (response) {
        const menu = response.data.meals;
        self.menuDietPagi_3 = menu.filter((item, index) => index == 0);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuPagi_4)
      .then(function (response) {
        const menu = response.data.hints;
        self.menuDietPagi_4 = menu.filter((item, index) => index == 0);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuPagi_5)
      .then(function (response) {
        const menu = response.data.hints;
        self.menuDietPagi_5 = menu.filter((item, index) => index == 2);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuPagi_6)
      .then(function (response) {
        const menu = response.data.hints;
        self.menuDietPagi_6 = menu.filter((item, index) => index == 0);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
