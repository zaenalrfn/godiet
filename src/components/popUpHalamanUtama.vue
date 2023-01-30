<template>
  <!-- bagian popup-cek-halaman-utama -->
  <div class="popup-cek fixed-top justify-content-center align-items-center">
    <div class="popup-hu">
      <div>
        <h3>Status</h3>
        <input type="text" id="popup-input-hu" class="mt-1" v-model="status" />
      </div>
      <div class="mt-4">
        <h3>Cek Alergi</h3>
        <div class="btn-radio d-flex mt-3">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              width="14"
              height="14"
            />
            <label class="form-check-label" for="inlineRadio1">Ya</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">Tidak</label>
          </div>
        </div>
        <div class="mt-4 text-center">
          <a href="#" class="btn pop-ya text-white" id="cekHu" @click="cekHu"
            >Ya</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "popUpHU",
  data() {
    return {
      status: "",
    };
  },
  mounted() {
    let popupCek = document.querySelector(".popup-cek");
    function popUpCek() {
      setTimeout(function () {
        popupCek.style.top = "0";
      }, 1000);
    }
    popUpCek();
    this.NotifyCek;
    if (localStorage.status) {
      this.status = localStorage.status;
    }
  },
  watch: {
    status(newStatus) {
      localStorage.status = newStatus;
    },
  },
  methods: {
    cekHu() {
      localStorage.setItem("notifyCek", "true");
      this.NotifyCek;
      window.location.reload();
    },
  },
  computed: {
    NotifyCek() {
      let popupCek = document.querySelector(".popup-cek");
      if (localStorage.getItem("notifyCek")) {
        popupCek.style.display = "none";
      }
    },
  },
};
</script>
