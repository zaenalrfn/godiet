<template>
  <div class="background" id="tipsDiet"></div>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="slide in dataTips" :key="slide">
      <div class="carousel__item">
        <div
          class="carousel-item active shadow p-3 mb-5 bg-body-tertiary rounded"
        >
          <div class="slide ps-4 pe-4 bg-white">
            <div class="d-block w-100">
              <div class="header">
                <div class="row justify-content-between mt-4 pt-4">
                  <div class="col-2" id="title">
                    <RouterLink to="/">
                      <img src="/img/kembali.png" />
                    </RouterLink>
                  </div>
                  <div class="col-8" id="title">
                    <h1 class="titleHU text-center">Tips Diet</h1>
                  </div>
                  <div class="col-2" id="title">
                    <!-- <img src="asset/img/Frame 14.png" /> -->
                  </div>
                  <div class="text">
                    <div class="textHU">
                      <p class="text-center lh-1 pt-2 pb-2">
                        Berikut tips - tips yang dapat memprelancar program diet
                        mu :)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-block text-center">
                <img :src="slide.img" alt="" :width="254" :height="156.07" />
              </div>
              <h5 class="fw-bolder mt-5">{{ slide.title }}</h5>
              <p class="des-tips">{{ slide.des }}</p>
            </div>
          </div>
        </div>
      </div>
    </slide>

    <!-- <template #addons>
      <navigation />
    </template> -->
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      dataTips: [
        {
          img: "img/tips1.jpg",
          title: "1. Konsumsi Sarapan Kaya Protein",
          des: "Mengonsumsi makanan kaya protein seperti telur untuk sarapan telah terbukti bermanfaat menurunkan berat badan",
        },
        {
          img: "img/tips2.jpg",
          title: "2. Banyak Minum Air Mineral",
          des: "Minum cukup air sepanjang hari baik untuk kesehatan secara keseluruhan dan juga dapat membantu kamu mempertahankan berat badan yang sehat. Pada suatu penelitian yang dilakukan pada lebih dari 9.500 orang menemukan bahwa mereka yang tidak mengonsumsi cukup air putih memiliki indeks",
        },
        {
          img: "img/tips3.jpg",
          title: "3. Kurangi Konsumsi Karbohidrat (Refined Carbs)",
          des: " Karbohidrat olahan seperti termasuk tepung putih, pasta, dan roti rendah akan serat dan dicerna dengan cepat oleh tubuh. Sehingga kamu akan kenyang untuk waktu yang sebentar.Kurangi Konsumsi Karbohidrat (Refined Carbs)Karbohidrat olahan seperti termasuk tepung putih,",
        },
        {
          img: "img/tips4.jpg",
          title: "4. Batasi Konsumsi Gula Tambahan (Added Sugar)",
          des: "Gula tambahan, terutama dari minuman manis, adalah alasan utama kenaikan berat badan yang tidak sehat dan masalah kesehatan seperti diabetes dan penyakit jantung,Batasi Konsumsi Gula Tambahan (Added Sugar)Gula tambahan, terutama dari minuman manis, adalah alasan utama kenaikan berat badan ",
        },
        {
          img: "img/tips5.jpg",
          title: "5. Konsumsi Makanan Kaya Serat",
          des: "Serat ditemukan dalam makanan sehat termasuk sayuran, buah-buahan, kacang-kacangan, dan biji-bijian. Konsumsi Makanan Kaya Serat ditemukan dalam makanan sehat termasuk sayuran, buah-buahan, kacang-kacangan, dan biji-bijian.",
        },
      ],
    };
  },
  setup() {
    return {
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style>
.carousel-item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
