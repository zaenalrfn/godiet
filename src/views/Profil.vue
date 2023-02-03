<template>
  <div class="container">
    <div class="row" id="profil">
      <div class="col">
        <div class="arrow-left-setting d-flex justify-content-between">
          <div class="arrow-left">
            <RouterLink to="/">
              <a href="#">
                <h3 class="fs-1"><i class="bi bi-arrow-left"></i></h3>
              </a>
            </RouterLink>
          </div>
          <div class="setting">
            <RouterLink to="/editProfil">
              <a href="#">
                <h3 class="fs-1"><i class="bi bi-gear"></i></h3>
              </a>
            </RouterLink>
          </div>
        </div>
        <div class="img-profil text-center">
          <div class="img-p">
            <img
              :src="gambarProfil"
              alt="img profil"
              width="158"
              height="158"
              class="rounded-circle"
            />
          </div>
          <h3 class="title-profil">{{ namaProfil }}</h3>
          <h5 class="status-user">{{ statusUP }}</h5>
        </div>
      </div>
    </div>
    <div class="row justify-content-center text-center" id="info">
      <div class="col-3">
        <h3>{{ bbProfil }}</h3>
        <p>Berat</p>
      </div>
      <div class="col-3">
        <h3>{{ tbProfil }}</h3>
        <p>Tinggi</p>
      </div>
      <div class="col-3">
        <h3>{{ bmiProfil }}</h3>
        <p>BMI</p>
      </div>
      <div class="col-3">
        <h3>{{ bmrProfil }}</h3>
        <p>BMR</p>
      </div>
    </div>
    <div class="row" id="riwayat">
      <div class="title-riwayat d-flex gap-3 border-bottom">
        <h3 class="icon-history"><i class="bi bi-clock-history"></i></h3>
        <div class="title-r">
          <h2>Riwayat Latihan</h2>
          <p class="minggu">24 okt - 29 okt</p>
        </div>
      </div>
      <div class="col-md border-bottom">
        <div class="img-riwayat d-flex gap-3 align-items-center">
          <img
            src="/img/img-riwayat.png"
            alt="img-riwayat"
            width="36"
            height="38"
          />
          <div class="title-riwayat-akti">
            <h3>Lompat Tali</h3>
            <div class="riwayat-waktu-kkal d-flex gap-4">
              <div class="d-flex gap-2">
                <h4 class="text-primary"><i class="bi bi-stopwatch"></i></h4>
                <p>10.00</p>
              </div>
              <div class="d-flex gap-2">
                <h4 class="text-danger"><i class="bi bi-fire"></i></h4>
                <p>6 Kkal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md border-bottom">
        <div class="img-riwayat d-flex gap-3 align-items-center">
          <img
            src="/img/img-riwayat.png"
            alt="img-riwayat"
            width="36"
            height="38"
          />
          <div class="title-riwayat-akti">
            <h3>High Kness</h3>
            <div class="riwayat-waktu-kkal d-flex gap-4">
              <div class="d-flex gap-2">
                <h4 class="text-primary"><i class="bi bi-stopwatch"></i></h4>
                <p>10.00</p>
              </div>
              <div class="d-flex gap-2">
                <h4 class="text-danger"><i class="bi bi-fire"></i></h4>
                <p>6 Kkal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md border-bottom">
        <div class="img-riwayat d-flex gap-3">
          <img
            src="/img/img-riwayat.png"
            alt="img-riwayat"
            width="36"
            height="38"
          />
          <div class="title-riwayat-akti">
            <h3>Butt Kicks</h3>
            <div class="riwayat-waktu-kkal d-flex gap-4">
              <div class="d-flex gap-2">
                <h4 class="text-primary"><i class="bi bi-stopwatch"></i></h4>
                <p>10.00</p>
              </div>
              <div class="d-flex gap-2">
                <h4 class="text-danger"><i class="bi bi-fire"></i></h4>
                <p>6 Kkal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import namaUpdate from "../views/EditProfil.vue";
export default {
  data() {
    return {
      bmiProfil: null,
      bmrProfil: null,
      bbProfil: null,
      tbProfil: null,
      namaProfil: null,
      statusUP: null,
      gambarProfil: null,
    };
  },
  mounted() {
    // console.log(this.stProfil);
    if (
      localStorage.getItem("hasilBmi") ||
      localStorage.getItem("bmr") ||
      localStorage.getItem("Bb-profil") ||
      localStorage.getItem("Tb-profil") ||
      localStorage.getItem("nama-update") ||
      localStorage.getItem("url-gambar")
    ) {
      try {
        this.bmiProfil = JSON.parse(localStorage.getItem("hasilBmi"));
        this.bmrProfil = JSON.parse(localStorage.getItem("bmr"));
        this.bbProfil = JSON.parse(localStorage.getItem("Bb-profil"));
        this.tbProfil = JSON.parse(localStorage.getItem("Tb-profil"));
        this.namaProfil = localStorage.getItem("nama-update");
        this.statusUP = localStorage.getItem("status-update");
        this.gambarProfil = localStorage.getItem("url-gambar");
      } catch (e) {
        localStorage.removeItem("hasilBmi");
        localStorage.removeItem("bmr");
        localStorage.removeItem("Bb-profil");
        localStorage.removeItem("Tb-profil");
        localStorage.removeItem("nama-update");
        localStorage.removeItem("status-update");
        localStorage.removeItem("url-gambar");
      }
    }
  },
};
</script>
