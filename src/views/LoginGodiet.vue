<style scoped>
.box-login {
  width: auto;
  border-radius: 31px;
}
</style>

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
        <p class="des-login">
          GoDiet adalah sebuah aplikasi yang memudahkan untuk para wanita
          memulai program diet harian sebagai sarana memulai pola hidup sehat
        </p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col" @click="Login">
        <div
          class="box-login d-flex align-items-center justify-content-center gap-1 bg-primary me-4 ms-4"
        >
          <div class="box text-white">Lanjutkan Dengan Google</div>
          <div class="box-img p-1">
            <img src="/img/login.png" alt="" :width="53.45" :height="54.36" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { decodeCredential } from "vue3-google-login";
// import { GoogleLogin } from "vue3-google-login";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: "Login",
  // components: {
  //   GoogleLogin,
  // },
  data() {
    return {
      getProfilImg: null,
      namaP: null,
    };
  },
  methods: {
    async Login() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(), provider)
        .then((result) => {
          // console.log(result.user);
          this.getProfilImg = result.user.displayName;
          this.namaP = result.user.photoURL;
          localStorage.setItem("picture", this.namaP);
          localStorage.setItem("name", this.getProfilImg);
          localStorage.setItem("auth-login", true);
          this.$router.push({ name: "loading" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
