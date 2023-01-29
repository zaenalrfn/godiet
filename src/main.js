import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoadScript from "vue-plugin-load-script";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(LoadScript);

app.mount("#app");
