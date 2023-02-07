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
          <h1 class="titleHU text-center">MENU MALAM</h1>
        </div>
        <div class="col-2" id="title">
          <!-- <img src="/img/Frame 14.png" /> -->
        </div>
      </div>
    </div>

    <!-- bagianalergi -->
    <div class="opsiMenu" v-if="menuAlergi">
      <div class="row justify-content-center gap-4 mb-3 pb-3">
        <div
          class="cardMenu"
          v-for="alergi1 in menuAlergi_1"
          v-bind:key="alergi1.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="alergi1.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ alergi1.food.label }}</h4>
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
      </div>
      <div class="row justify-content-center gap-4 mb-3 pb-3 border-top pt-4">
        <div
          class="cardMenu"
          v-for="alergi2 in menuAlergi_2"
          v-bind:key="alergi2.food.foodId"
        >
          <div class="d-flex justify-content-center">
            <img :src="alergi2.food.image" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ alergi2.food.label }}</h4>
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
      </div>
      <div class="row justify-content-center gap-4 mb-3 pb-3 border-top pt-4">
        <div
          class="cardMenu"
          v-for="alergi_3 in menuAlergi_3"
          v-bind:key="alergi_3.idDrink"
        >
          <div class="d-flex justify-content-center">
            <img :src="alergi_3.strDrinkThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ alergi_3.strDrink }}</h4>
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
      </div>
    </div>
    <!-- bagian alergi -->

    <div class="opsiMenu" v-else>
      <div class="row justify-content-center gap-4 mb-3 pb-3">
        <div
          class="cardMenu"
          v-for="makanan_1 in menuDietMalam_1"
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
      </div>
      <div class="row justify-content-center gap-4 mb-3 pt-4 pb-3 border-top">
        <div
          class="cardMenu"
          v-for="makanan_2 in menuDietMalam_2"
          v-bind:key="makanan_2.idMeal"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_2.strMealThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_2.strMeal }}</h4>
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
              <h3>{{ nutrisiMenu[0].menu_2.protein }}</h3>
              <p>Protein</p>
            </div>
            <div class="col-3">
              <h3>1</h3>
              <p>Porsi</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center gap-4 mb-3 pt-4 pb-3 border-top">
        <div
          class="cardMenu"
          v-for="makanan_3 in menuDietMalam_3"
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
      </div>
      <div class="row justify-content-center gap-4 mb-3 pt-4 pb-3 border-top">
        <div
          class="cardMenu"
          v-for="makanan_4 in menuDietMalam_4"
          v-bind:key="makanan_4.idMeal"
        >
          <div class="d-flex justify-content-center">
            <img :src="makanan_4.strMealThumb" />
          </div>
          <div class="lh-sm" id="text">
            <h4 class="mt-2">{{ makanan_4.strMeal }}</h4>
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
      <div class="row justify-content-center gap-4 mb-3 pt-4 pb-3 border-top">
        <div
          class="cardMenu"
          v-for="makanan_5 in menuDietMalam_5"
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
              <h3>{{ nutrisiMenu[0].menu_5.calories }}</h3>
              <p>Kalori</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_5.carbo }}</h3>
              <p>Karbo</p>
            </div>
            <div class="col-3">
              <h3>{{ nutrisiMenu[0].menu_5.protein }}</h3>
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
      menuAlergi: localStorage.getItem("menu-alergi"),
      // bagian menu alergi
      menuAlergi_1: [],
      menuAlergi_2: [],
      menuAlergi_3: [],
      // bagian menu alergi
      menuDietMalam_1: [],
      menuDietMalam_2: [],
      menuDietMalam_3: [],
      menuDietMalam_4: [],
      menuDietMalam_5: [],
      nutrisiMenu: [
        {
          menu_1: {
            carbo: "1",
            calories: "78",
            protein: "6",
          },
          menu_2: {
            carbo: "39.6",
            calories: "321",
            protein: "16.5",
          },
          menu_3: {
            carbo: "47.4",
            calories: "269",
            protein: "9.6",
          },
          menu_4: {
            carbo: "33",
            calories: "282",
            protein: "13",
          },
          menu_5: {
            carbo: "16",
            calories: "62",
            protein: "0.7",
          },
        },
      ],
    };
  },
  mounted() {
    let self = this;
    if (this.menuAlergi) {
      // bagian api alergi
      const alergi_1 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: "apple" },
        headers: {
          "X-RapidAPI-Key":
            "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      const alergi_2 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: "boiled yams" },
        headers: {
          "X-RapidAPI-Key":
            "023f98117fmsh1c2705b6ac9a25fp11f719jsna2f7cf1eb86c",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      const alergi_3 = {
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ginger",
      };
      axios
        .request(alergi_1)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuAlergi_1 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(alergi_2)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuAlergi_2 = menu.filter((item, index) => index == 2);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(alergi_3)
        .then(function (response) {
          const menu = response.data.drinks;
          self.menuAlergi_3 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      // bagian api alergi
    } else {
      const menuMalam_1 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: " boiled eggs" },
        headers: {
          "X-RapidAPI-Key":
            "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      const menuMalam_2 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=soup",
      };
      const menuMalam_3 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=potatoes",
      };
      const menuMalam_4 = {
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=bean",
      };
      const menuMalam_5 = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
        params: { ingr: "papaya salad" },
        headers: {
          "X-RapidAPI-Key":
            "3586c6245bmsh597c24e5b8b4725p17fd36jsne5acb64e2ce1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };
      axios
        .request(menuMalam_1)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuDietMalam_1 = menu.filter((item, index) => index < 1);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuMalam_2)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietMalam_2 = menu.filter((item, index) => index == 11);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuMalam_3)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietMalam_3 = menu.filter((item, index) => index == 1);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuMalam_4)
        .then(function (response) {
          const menu = response.data.meals;
          self.menuDietMalam_4 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
      axios
        .request(menuMalam_5)
        .then(function (response) {
          const menu = response.data.hints;
          self.menuDietMalam_5 = menu.filter((item, index) => index == 0);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
};
</script>
