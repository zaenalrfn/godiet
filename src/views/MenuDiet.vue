<template>
  <div class="container">
    <div class="header">
      <div class="row justify-content-between mt-5 mb-4">
        <div class="col-2" id="title">
          <RouterLink to="/">
            <img src="/img/kembali.png" />
          </RouterLink>
        </div>
        <div class="col-8" id="title">
          <h1 class="titleHU text-center">MENU DIET</h1>
        </div>
        <div class="col-2" id="title">
          <!-- <img src="asset/img/Frame 14.png" /> -->
        </div>
        <div class="text">
          <div class="textHU">
            <p class="text-center lh-1 pt-2">
              Menu yang anda dapat pilih selama menjalankan program diet ini.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="opsiMenu">
      <div class="row justify-content-center gap-4 mb-3">
        <div class="col-md-4">
          <RouterLink to="/menuDietPagi">
            <div class="card" id="tipsDiet">
              <div class="d-flex justify-content-center">
                <img src="/img/breakfast_1.png" alt="1" />
                <div class="card-body pt-4">
                  <h2 class="text-white pt-4">MENU PAGI</h2>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4">
          <div class="card" id="menuMalam">
            <div class="d-flex justify-content-center">
              <img src="/img/english-breakfast-1.png" alt="2" />
              <div class="card-body pt-4">
                <h2 class="text-white pt-4">MENU SIANG</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" id="aktiKalori">
            <div class="d-flex justify-content-center">
              <img src="/img/cutlery-1.png" alt="3" />
              <div class="card-body pt-4">
                <h2 class="text-white pt-4">MENU MALAM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
