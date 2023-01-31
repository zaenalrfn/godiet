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
          v-for="makanan in menuDietSiang_1"
          v-bind:key="makanan.idMeal"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan.strMealThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan.strMeal }}</h4>
            <p>Informasi Nutrisi</p>
          </div>
          <div class="row justify-content-center text-center" id="info">
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_1.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_1.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_1.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
        <div
          class="cardMenu"
          v-for="makanan_2 in menuDietSiang_2"
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
              <h3>{{ nutrisiMenu[0].menu_2.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_2.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_1.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
        <div
          class="cardMenu"
          v-for="makanan_3 in menuDietSiang_3"
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
              <h3>{{ nutrisiMenu[0].menu_3.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_3.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_3.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
        <div
          class="cardMenu"
          v-for="makanan_4 in menuDietSiang_4"
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
              <h3>{{ nutrisiMenu[0].menu_4.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_4.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_4.protein }}</h3>
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
      menuDietSiang_1: [],
      menuDietSiang_2: [],
      menuDietSiang_3: [],
      menuDietSiang_4: [],
      nutrisiMenu: [
        {
          menu_1: {
            carbo: "9.4",
            calories: "65",
            protein: "2.8",
          },
          menu_2: {
            carbo: "21",
            calories: "105",
            protein: "3.4",
          },
          menu_3: {
            carbo: "10",
            calories: "78",
            protein: "1.7",
          },
          menu_4: {
            carbo: "12",
            calories: "122",
            protein: "8.1",
          },
        },
      ],
    };
  },

  mounted() {
    let self = this;
    const menuSiang_1 = {
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=egg",
    };
    const menuSiang_2 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: " cereals" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    const menuSiang_3 = {
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s=banana",
    };
    const menuSiang_4 = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: "milk" },
      headers: {
        "X-RapidAPI-Key": "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    axios
      .request(menuSiang_1)
      .then(function (response) {
        self.menuDietSiang_1 = response.data.meals;
        self.menuDietSiang_1.splice(1, 4);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuSiang_2)
      .then(function (response) {
        self.menuDietSiang_2 = response.data.hints;
        self.menuDietSiang_2.splice(1, 21);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuSiang_3)
      .then(function (response) {
        self.menuDietSiang_3 = response.data.meals;
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(menuSiang_4)
      .then(function (response) {
        self.menuDietSiang_4 = response.data.hints;
        self.menuDietSiang_4.splice(1, 21);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>
