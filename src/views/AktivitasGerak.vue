<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-4">
        <div class="col" id="title">
          <RouterLink to="/aktivitasKalori">
            <img src="/img/kembali.png" @click="ResetCounter" />
          </RouterLink>
          <div class="d-block text-center">
            <img
              :src="aktivitasId.gifUrl"
              alt="mohon tunggu"
              :width="303"
              :height="519"
            />
          </div>
          <div>
            <h2>
              {{ aktivitasId.name }} <br />
              30 Detik<span class="text-warning">x 3</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>Berat Badan</p>
      <form class="row g-4 d-flex justify-content-center">
        <div class="col-4">
          <input
            type="number"
            class="form-control"
            id="inputPassword2"
            v-model="beratBadanAktivitas"
            required
          />
        </div>
        <div class="col-8">
          <a
            href="#"
            class="btn text-white mb-3 w-100"
            id="hitung"
            @click="
              TogglePopup('buttonTrigger');
              riwayatLatihan(aktivitasId.name, menit, kaloriKeluar);
            "
          >
            Hitung
          </a>
        </div>
      </form>
    </div>
  </div>
  <!-- bagian popup aktivitas gerak -->
  <popUpAktivitasGerak
    v-if="popupTriggers.buttonTrigger"
    :TogglePopup="() => TogglePopup('buttonTrigger')"
  />
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import popUpAktivitasGerak from "../components/popUpAktivitasGerak.vue";
export default {
  components: {
    popUpAktivitasGerak,
  },
  data() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      aktivitasId: [],
      detik: 0,
      popupTriggers,
      TogglePopup,
      clear: null,
      kaloriKeluar: null,
      bbGerak: null,
      menit: null,
      detikMenit: null,
      beratBadanAktivitas: null,
      rimayatAktivitas: [],
      riwayatDurasi: null,
    };
  },
  mounted() {
    this.Counter;
    let self = this;
    let parameterId = this.$route.params.id;
    // const options = {
    //   method: "GET",
    //   url: `https://zylalabs.com/api/392/exercise+database+api/1004/exercise+by+id?id=${[
    //     parameterId,
    //   ]}`,
    //   headers: {
    //     Authorization: "Bearer 887|pmvFechj1dMyDwdT3pFysJRfjJQ46uNFRNVgqTR2",
    //   },
    // };

    // axios(options)
    //   .then(function (response) {
    //     self.aktivitasId = response.data;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    // =====================================================================
    // const options = {
    //   method: "GET",
    //   url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${parameterId}`,
    //   headers: {
    //     "X-RapidAPI-Key": "023f98117fmsh1c2705b6ac9a25fp11f719jsna2f7cf1eb86c",
    //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     self.aktivitasId = response.data;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    if (localStorage.getItem("Bb-profil")) {
      this.bbGerak = JSON.parse(localStorage.getItem("Bb-profil"));
    }
  },
  computed: {
    Counter() {
      this.clear = setInterval(() => {
        this.detik++;
        this.menit = Math.floor(this.detik / 60);
        this.detikMenit = this.detik % 60;
      }, 1000);
    },
    Hitung() {
      this.kaloriKeluar = Math.round(
        (this.menit * (6 * 3.5 * this.beratBadanAktivitas)) / 200
      );
      localStorage.setItem("kalori-keluar", this.kaloriKeluar);
      localStorage.setItem("detik", this.detikMenit);
      localStorage.setItem("menit", this.menit);
    },
    generateDay() {
      const nameMonth = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
      const d = new Date();
      let date = d.getDate();
      date = date < 10 ? "0" + date : date;
      const result =
        nameMonth[d.getMonth()] + "-" + date + "-" + d.getFullYear();
      return result;
    },
  },
  methods: {
    ResetCounter() {
      clearInterval(this.clear);
    },
    riwayatLatihan(namaLatihan, durasiLatihan, kaloriLatihan) {
      let hari = this.generateDay;
      this.Hitung;
      let latihan = {
        nama: namaLatihan,
        durasi: durasiLatihan,
        kalori: kaloriLatihan,
        waktuHari: hari,
      };
      this.rimayatAktivitas.unshift(latihan);
      if (this.rimayatAktivitas.length > 6) {
        this.rimayatAktivitas.pop();
      }
      const parsedLatihan = JSON.stringify(this.rimayatAktivitas);
      localStorage.setItem("riwayat-latihan", parsedLatihan);
    },
  },
};
</script>
