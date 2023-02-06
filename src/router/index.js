import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Profil from "../views/Profil.vue";
import EditProfil from "../views/EditProfil.vue";
import IdealTubuh from "../views/CekIdealTubuh.vue";
import KebutuhanKalori from "../views/KebutuhanKalori.vue";
import AktivitasKalori from "../views/AktivitasKalori.vue";
import AktivitasGerak from "../views/AktivitasGerak.vue";
import MenuDiet from "../views/MenuDiet.vue";
import MenuDietPagi from "../views/MenuDietPagi.vue";
import TipsDiet from "../views/TipsDiet.vue";
import MenuDietSiang from "../views/MenuDietSiang.vue";
import MenuDietMalam from "../views/MenuDietMalam.vue";
import Login from "../views/LoginGodiet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profil",
      name: "profil",
      component: Profil,
    },
    {
      path: "/editProfil",
      name: "editProfil",
      component: EditProfil,
    },
    {
      path: "/idealTubuh",
      name: "idealtubuh",
      component: IdealTubuh,
    },
    {
      path: "/kebutuhanKalori",
      name: "kebutuhanKalori",
      component: KebutuhanKalori,
    },
    {
      path: "/aktivitasKalori",
      name: "aktivitasKalori",
      component: AktivitasKalori,
    },
    {
      path: "/aktivitasGerak", // /:id
      name: "aktivitasGerak",
      component: AktivitasGerak,
      // props: true,
    },
    {
      path: "/menuDiet",
      name: "menuDiet",
      component: MenuDiet,
    },
    {
      path: "/menuDietPagi",
      name: "menuDietPagi",
      component: MenuDietPagi,
    },
    {
      path: "/menuDietSiang",
      name: "menuDietSiang",
      component: MenuDietSiang,
    },
    {
      path: "/menuDietMalam",
      name: "menuDietMalam",
      component: MenuDietMalam,
    },
    {
      path: "/tipsDiet",
      name: "tipsDiet",
      component: TipsDiet,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuth = JSON.parse(localStorage.getItem("auth-login"));
  if (to.name !== "login" && !isAuth) next({ name: "login" });
  if (to.name === "login" && isAuth) next({ name: "home" });
  else next();
});

export default router;
