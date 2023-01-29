<template>
  <div class="container">
    <div class="row" id="cek-ideal-tubuh">
      <div class="title-ideal d-flex align-items-center">
        <RouterLink to="/idealTubuh">
          <a href="#">
            <!-- <h3 class="fs-1"><i class="bi bi-arrow-left"></i></h3> -->
            <img
              src="/img/icon-kembali.png"
              alt="kembali"
              width="8"
              height="17"
            />
          </a>
        </RouterLink>
        <h2 class="text-center">Kebutuhan Kalori</h2>
      </div>
      <div class="col cek-input">
        <h5>Berat Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2">
          <input type="text" id="berat-badan" v-model="bB_bmr" required />
          <p>kg</p>
        </div>
        <h5>Tinggi Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="tinggi-badan" v-model="tB_bmr" required />
          <p>cm</p>
        </div>
        <h5>Umur</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input type="text" id="umur" v-model="u_bmr" required />
        </div>
        <div class="input-ideal d-flex align-items-center mt-4">
          <select class="form-select" required id="form-aktivitas">
            <option selected value="Sedikit/tidak ada olahraga">
              Sedikit/tidak ada olahraga
            </option>
            <option value="Latihan ringan">Latihan ringan</option>
            <option value="Olahraga sedang (3-5 hari/minggu)">
              Olahraga sedang (3-5 hari/minggu)
            </option>
            <option value="Sangat aktif (6-7 hari/minggu)">
              Sangat aktif (6-7 hari/minggu)
            </option>
            <option value="Ekstra aktif (pekerjaan sangat aktif & fisik)">
              Ekstra aktif (pekerjaan sangat aktif & fisik)
            </option>
          </select>
        </div>
        <div class="cek text-center border-bottom pb-5">
          <a href="#" class="btn text-white" @click.prevent="kalkulatorBmr"
            >CEK</a
          >
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
          <div class="bmr-ideal text-start">
            <h4>
              BMR Anda adalah :
              <span id="bmi" class="hasil-bmr">{{ bmr }}</span>
            </h4>
            <h4>
              Anda membutuhkan :
              <span id="bmr-hari" class="mt-2">{{ bmrPerHari }}</span>
              kalori/hari
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bB_bmr: "",
      tB_bmr: "",
      u_bmr: "",
      bmr: "",
      bmrPerHari: "",
    };
  },
  methods: {
    kalkulatorBmr() {
      let hasilBmr = null,
        InputBb = document.getElementById("berat-badan"),
        InputTb = document.getElementById("tinggi-badan"),
        InputU = document.getElementById("umur"),
        bmrOption = document.querySelector("#form-aktivitas").value,
        beratBadanBmr = 9.6 * this.bB_bmr,
        tinggiBadanBmr = 1.8 * this.tB_bmr,
        umurBmr = 4.7 * this.u_bmr;

      if (this.bB_bmr === "" || this.tB_bmr === "" || this.u_bmr === "") {
        InputBb.classList.add("input-alert");
        InputTb.classList.add("input-alert");
        InputU.classList.add("input-alert");
      } else {
        hasilBmr = 655 + beratBadanBmr + tinggiBadanBmr - umurBmr;
        this.bmr = Math.round(hasilBmr * 100) / 100.0;

        if (bmrOption == "Sedikit/tidak ada olahraga") {
          this.bmrPerHari = Math.round(this.bmr * 1.2);
        } else if (bmrOption == "Latihan ringan") {
          this.bmrPerHari = Math.round(this.bmr * 1.375);
        } else if (bmrOption == "Olahraga sedang (3-5 hari/minggu)") {
          this.bmrPerHari = Math.round(this.bmr * 1.55);
        } else if (bmrOption == "Sangat aktif (6-7 hari/minggu)") {
          this.bmrPerHari = Math.round(this.bmr * 1.725);
        } else if (
          bmrOption == "Ekstra aktif (pekerjaan sangat aktif & fisik)"
        ) {
          this.bmrPerHari = Math.round(this.bmr * 1.9);
        }
        // localStorage.setItem("histori-bmr", this.bmr);
        InputBb.classList.remove("input-alert");
        InputTb.classList.remove("input-alert");
        InputU.classList.remove("input-alert");
      }
    },
  },
  mounted() {
    if (localStorage.bmr || localStorage.bmrPerHari) {
      this.bmr = localStorage.bmr;
      this.bmrPerHari = localStorage.bmrPerHari;
    }
  },
  watch: {
    bmr(newBmr) {
      localStorage.bmr = newBmr;
    },
    bmrPerHari(newBmrPerHari) {
      localStorage.bmrPerHari = newBmrPerHari;
    },
  },
};
</script>

<!-- 
BMR Wanita = 655 + (9,6 × berat badan) + (1,8 × tinggi badan) – (4,7 × usia)
655.1 + (9.563 * weight [kg]) + (1.85 * size [cm]) − (4.676 * age

  Little/no exercise: BMR * 1.2 = Total Calorie Need
Light exercise: BMR * 1.375 = Total Calorie Need
Moderate exercise (3-5 days/wk): BMR * 1.55 = Total Calorie Need
Very active (6-7 days/wk): BMR * 1.725 = Total Calorie Need
Extra active (very active & physical job): BMR * 1.9 = Total Calorie Need
 -->
