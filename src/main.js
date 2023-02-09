import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoadScript from "vue-plugin-load-script";
import VueNumber from "vue-number-animation";

import "./assets/main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClTD6Ryts_EPSk3RUNrsecwpYLdtyPTzI",
  authDomain: "authgodiet.firebaseapp.com",
  projectId: "authgodiet",
  storageBucket: "authgodiet.appspot.com",
  messagingSenderId: "668623305900",
  appId: "1:668623305900:web:5f0075ba725ac22cc13309",
  measurementId: "G-RC6HP8DYEZ",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

// const gauthOption = {
//   clientId:
//     "668623305900-0bg6r1ip10cgscn6rvoq04odugj3o5f9.apps.googleusercontent.com",
// };
// app.use(vue3GoogleLogin, gauthOption);
app.use(router);
app.use(LoadScript);
app.use(VueNumber);

app.mount("#app");
