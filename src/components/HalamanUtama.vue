<template>
  <div class="container">
    <div id="header">
      <div class="row justify-content-between mt-5 gap-3">
        <div class="col">
          <h1 class="titleHU">Seberapa Sehatkah Hidup Anda?</h1>
        </div>
        <div class="col-3">
          <div class="profilUser">
            <RouterLink to="/profil">
              <a href="#">
                <img src="/img/profilUser.png" height="56" width="56" />
              </a>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div id="fiturMenu">
      <div class="row justify-content-center gap-3 mb-3">
        <div class="col-md-4">
          <RouterLink to="/idealTubuh">
            <div class="card" id="idealTubuh">
              <div class="d-flex justify-content-center">
                <img src="/img/img-ideal-tubuh.png" alt="1" />
                <div class="card-body pt-4">
                  <h2 class="text-white">Idealkan Tubuh</h2>
                  <p class="card-text text-1">
                    Tinggi dan berat badan kalian masuk kategori ideal gak gaes?
                  </p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4">
          <RouterLink to="/aktivitasKalori">
            <div class="card" id="aktiKalori">
              <div class="d-flex justify-content-center">
                <img src="/img/img-ak.png" alt="2" />
                <div class="card-body pt-4">
                  <h2 class="text-white">Aktivitas Kalori</h2>
                  <p class="card-text text-2">
                    Lebih banyak kalori yang anda dapat bakar akan lebih baik
                    untuk mu!
                  </p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4">
          <RouterLink to="/menuDiet">
            <div class="card" id="menuDiet">
              <div class="d-flex justify-content-center">
                <img src="/img/img-menu-diet.png" alt="3" />
                <div class="card-body pt-4">
                  <h2 class="text-white">Menu Diet</h2>
                  <p class="card-text text-3">
                    Menu yang anda dapat pilih selama menjalankan program diet
                    ini.
                  </p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4">
          <RouterLink to="/tipsDiet">
            <div class="card" id="tipsDiet">
              <div class="d-flex justify-content-center">
                <img src="/img/img-tips.png" alt="4" />
                <div class="card-body pt-4">
                  <h2 class="text-white">Tips Diet</h2>
                  <p class="card-text text-4">
                    Berikut tips - tips yang dapat memprelancar program diet mu
                    :)
                  </p>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <!-- popup -->
  <!-- bagian popup-cek-halaman-utama -->
  <popUpHU />
</template>

<script>
import popUpHU from "../components/popUpHalamanUtama.vue";
// import popupCek from "../components/popUpHalamanUtama.vue";
// import cek from "../components/popUpHalamanUtama.vue";
export default {
  name: "HalamanUtama",
  components: {
    popUpHU,
  },
};
</script>
