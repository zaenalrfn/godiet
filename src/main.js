import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoadScript from "vue-plugin-load-script";
import vue3GoogleLogin from "vue3-google-login";
import VueNumber from "vue-number-animation";
// import GAuth from "vue3-google-oauth2";

import "./assets/main.css";
const app = createApp(App);

const gauthOption = {
  clientId:
    "668623305900-0bg6r1ip10cgscn6rvoq04odugj3o5f9.apps.googleusercontent.com",
};
app.use(vue3GoogleLogin, gauthOption);
app.use(router);
app.use(LoadScript);
app.use(VueNumber);

app.mount("#app");
