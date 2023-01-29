<template>
  <div class="popGerak fixed-top justify-content-center align-items-center">
    <div class="boxGerak position-relative text-center">
      <h3
        class="gerak-kembali position-absolute"
        id="gerak-kembali"
        @click="TogglePopup()"
      >
        <i class="bi bi-x-lg"></i>
      </h3>
      <img
        src="/img/calories.png"
        alt="fire"
        width="65"
        height="68"
        class="mt-3"
      />
      <h2 class="mt-2 title-popgerak">Bagus Anda berhasil melakukanya!</h2>
      <div class="d-flex justify-content-center gap-5 mt-2">
        <div>
          <p class="p-gerak">Kalori</p>
          <h4 class="h4-gerak">{{ kk }} Kkal</h4>
        </div>
        <div>
          <p class="p-gerak">Durasi</p>
          <h4 class="h4-gerak">{{ menit }} : {{ detik }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popUpGerak",
  props: ["TogglePopup"],
  data() {
    return {
      kk: null,
      detik: null,
      menit: null,
    };
  },
  mounted() {
    if (
      localStorage.getItem("kalori-keluar") ||
      localStorage.getItem("detik") ||
      localStorage.getItem("menit")
    ) {
      try {
        this.kk = JSON.parse(localStorage.getItem("kalori-keluar"));
        this.detik = JSON.parse(localStorage.getItem("detik"));
        this.menit = JSON.parse(localStorage.getItem("menit"));
      } catch (e) {
        localStorage.removeItem("kalori-keluar");
        localStorage.removeItem("detik");
        localStorage.removeItem("menit");
      }
    }
  },
};
</script>
