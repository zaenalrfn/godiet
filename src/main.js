import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoadScript from "vue-plugin-load-script";
import vue3GoogleLogin from "vue3-google-login";
// import GAuth from "vue3-google-oauth2";

import "./assets/main.css";
const app = createApp(App);

const gauthOption = {
  clientId:
    "668623305900-0bg6r1ip10cgscn6rvoq04odugj3o5f9.apps.googleusercontent.com",
  //   scope: "email",
  //   prompt: "select_account",
  //   fetch_basic_profile: false,
};

// app.use(vue3GoogleLogin, {
//   clientId:
//     "668623305900-0bg6r1ip10cgscn6rvoq04odugj3o5f9.apps.googleusercontent.com",
// });
app.use(vue3GoogleLogin, gauthOption);
app.use(router);
app.use(LoadScript);

app.mount("#app");
