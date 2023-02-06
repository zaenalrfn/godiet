<template>
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="col mt-5">
        <img src="/img/img-login.png" alt="" :height="313" :width="313" />
      </div>
      <div class="col mt-4">
        <img src="/img/godiet.png" alt="" :width="122" :height="36" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col text-center">
        <p>
          GoDiet adalah sebuah aplikasi yang memudahkan untuk para wanita
          memulai program diet harian sebagai sarana memulai pola hidup sehat
        </p>
      </div>
    </div>
  </div>
  <GoogleLogin :callback="login" />
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { GoogleLogin } from "vue3-google-login";
export default {
  name: "Login",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      getProfilImg: null,
      namaP: null,
    };
  },
  methods: {
    login(response) {
      // decodeCredential will retrive the JWT payload from the credential
      let res = response;
      const userData = decodeCredential(res.credential);
      console.log("Handle the userData", userData);
      this.getProfilImg = userData.name;
      this.namaP = userData.picture;
      localStorage.setItem("picture", this.namaP);
      localStorage.setItem("name", this.getProfilImg);
      localStorage.setItem("auth-login", true);
      this.$router.push({ name: "home" });
    },
  },
};
</script>
