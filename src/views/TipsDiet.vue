<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in 5" :key="slide">
      <div class="carousel-item shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="slide ps-4 pe-4 bg-white">
          <div class="d-block w-100">
            <div class="header">
              <div class="row justify-content-between mt-4 pt-4">
                <div class="col-2" id="title">
                  <img src="/img/img-riwayat.png" />
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
              <img src="asset/img/tips1.png" alt="" width="100%" />
            </div>
            <div class="mt-4">
              <p class="fw-bolder">1. Konsumsi Sarapan Kaya Protein</p>
              Mengonsumsi makanan kaya protein seperti telur untuk sarapan telah
              terbukti bermanfaat menurunkan berat badansdsd
            </div>
          </div>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
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
};
</script>

<style>
.carousel-item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
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
