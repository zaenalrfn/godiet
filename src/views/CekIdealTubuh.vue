<template>
  <div class="container">
    <div class="row" id="cek-ideal-tubuh">
      <div class="title-ideal d-flex align-items-center">
        <RouterLink to="/">
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
        <h2 class="text-center">Cek ideal tubuh</h2>
      </div>
      <div class="col cek-input border-bottom pb-2">
        <h5>Berat Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2">
          <input v-model="beratBadan" type="number" id="berat-badan" />
          <p>kg</p>
        </div>
        <h5>Tinggi Badan</h5>
        <div class="input-ideal d-flex align-items-center gap-2 mt-2">
          <input v-model="tinggiBadan" type="number" id="tinggi-badan" />
          <p>cm</p>
        </div>
        <div class="cek text-center">
          <a href="#" @click.prevent="kalkulatorBmi" class="btn text-white"
            >CEK</a
          >
        </div>
        <div class="bmi-ideal mt-5">
          <h4>
            BMI(kg/m2): <span id="bmi">{{ hasilBmi }}</span>
          </h4>
          <div class="img-bmi position-relative">
            <div class="indikator-img-bmi position-absolute"></div>
          </div>
          <p id="bmi-deskripsi" class="text-center mt-3">
            {{ bmiTextD }}
          </p>
        </div>
      </div>
      <div class="col grafik-ideal-tubuh">
        <div class="grafik mt-4">
          <!-- bagian chart js -->
          <canvas id="myChart"></canvas>
          <div class="d-flex gap-3 align-items-center">
            <div class="d-flex align-items-center gap-3">
              <div class="Bb-icon"></div>
              <p>Berat Badan</p>
            </div>
            <div class="d-flex align-items-center gap-3">
              <div class="Tb-icon"></div>
              <p>Per Minggu</p>
            </div>
          </div>
        </div>
        <div class="cek-kebutuhan-kalori text-center mb-4">
          <RouterLink to="/kebutuhanKalori">
            <a href="#" class="btn text-white">MENGECEK BMR</a>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// bagian chart js
import Chart from "chart.js/auto";
export default {
  data() {
    return {
      beratBadan: "",
      tinggiBadan: "",
      hasilBmi: "",
      bmiHistory: [],
      bmiMp: [],
      bmiCek: null,
      bmi: null,
      bmiTextD: "",
    };
  },
  methods: {
    kalkulatorBmi() {
      let InputBb = document.getElementById("berat-badan"),
        InputTb = document.getElementById("tinggi-badan"),
        indikatorBmi = document.querySelector(".indikator-img-bmi"),
        textBmiD = document.getElementById("bmi-deskripsi");
      this.bmi = (
        this.beratBadan / Math.pow(this.tinggiBadan / 100, 2)
      ).toFixed(2);
      if (this.beratBadan === "" || this.tinggiBadan === "") {
        InputBb.classList.add("input-alert");
        InputTb.classList.add("input-alert");
      } else if (this.beratBadan <= 0 || this.tinggiBadan <= 0) {
        alert("Inputs can not be negative");
      } else {
        InputBb.classList.remove("input-alert");
        InputTb.classList.remove("input-alert");

        if (this.bmi < 18.5 && this.bmi > 0) {
          this.bmiTextD = "Berat badan kurang";
          textBmiD.style.color = "#3f51b5";
        } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
          this.bmiTextD = "Normal";
          textBmiD.style.color = "#74dd78";
        } else if (this.bmi >= 24.9 && this.bmi < 29.9) {
          this.bmiTextD = "Kegemukan";
          textBmiD.style.color = "#f44336";
        } else if (this.bmi >= 29.9) {
          this.bmiTextD = "Obesitas";
          textBmiD.style.color = "#b71c1c";
        }
        if (this.bmi <= 15) {
          indikatorBmi.style.width = "0%";
        } else if (this.bmi >= 29.9) {
          indikatorBmi.style.width = "100%";
        } else {
          indikatorBmi.style.width = ((this.bmi - 15) * 100) / 35 + "%";
        }
        this.hasilBmi = this.bmi;
        // bagian history bmi
        this.bmiHistory.push(this.beratBadan);
        if (this.bmiHistory.length > 7) {
          this.bmiHistory.pop();
        }
      }

      const parsedBbHistory = JSON.stringify(this.bmiHistory);
      const parsedBmiPr = JSON.stringify(this.beratBadan);
      const parsedBmiTb = JSON.stringify(this.tinggiBadan);
      localStorage.setItem("history-bb", parsedBbHistory);
      localStorage.setItem("Bb-profil", parsedBmiPr);
      localStorage.setItem("Tb-profil", parsedBmiTb);
    },
  },
  mounted() {
    let gr = null;
    if (localStorage.getItem("history-bb")) {
      this.bmiMp = JSON.parse(localStorage.getItem("history-bb"));
      gr = this.bmiMp;
    }
    if (localStorage.hasilBmi && localStorage.bmiTextD) {
      this.hasilBmi = localStorage.hasilBmi;
      this.bmiTextD = localStorage.bmiTextD;
    }
    let mchart = document.getElementById("myChart");
    const chart = new Chart(mchart, {
      type: "bar",
      data: {
        labels: [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [],
            borderWidth: 1,
            backgroundColor: "rgba(250,184,62,56%)",
            borderColor: "#fab83e",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    chart.data.datasets[0].data = gr;
    chart.update();
  },
  watch: {
    hasilBmi(newHasil) {
      localStorage.hasilBmi = newHasil;
    },
    bmiTextD(newBmiTextD) {
      localStorage.bmiTextD = newBmiTextD;
    },
  },
};
</script>
