<template>
  <div class="popGerak fixed-top justify-content-center align-items-center">
    <div class="boxGerak position-relative p-3">
      <h2 class="mt-3">Log Out?</h2>
      <h5 class="fs-6 mt-3 text-secondary">Apakah anda ingin log out?</h5>
      <div class="d-flex justify-content-center gap-5 mt-4">
        <div>
          <button class="btn bg-light" @click="LogoutPopup()">Tidak</button>
        </div>
        <div>
          <button class="btn bg-danger text-white" @click="logout()">Ya</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "PopupLogout",
  props: ["LogoutPopup"],
  methods: {
    async logout() {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem("notifyCek");
      localStorage.removeItem("menu-alergi");
      localStorage.removeItem("status-update");
      localStorage.setItem("auth-login", false);
      this.$router.push({ name: "login" });
    },
  },
};
</script>
