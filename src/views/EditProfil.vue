<template>
  <div class="container">
    <div class="row" id="edit-profil">
      <div class="profil">
        <div class="btn-edit-profil d-flex justify-content-between">
          <RouterLink to="/profil">
            <a href="#">Batal</a>
          </RouterLink>
          <h2>Edit Profil</h2>
          <RouterLink to="/profil">
            <a href="#">selesai</a>
          </RouterLink>
        </div>
        <div class="img-edit-profil text-center">
          <img
            src="/img/profilUser.png"
            alt="profil"
            width="125"
            height="125"
          />
          <h3>
            <a href="#">Ganti Foto Profil</a>
          </h3>
        </div>
      </div>
      <div class="col">
        <form action="" class="form">
          <h5>Nama</h5>
          <input type="text" />
          <h5>Status</h5>
          <input type="text" />
          <h5>Berat Badan</h5>
          <input type="text" />
          <h5>Tinggi Badan</h5>
          <input type="text" />
        </form>
      </div>
      <div class="logout d-flex gap-2">
        <h4><i class="bi bi-box-arrow-right"></i></h4>
        <p id="popup-logout" onclick="Logout(true)">
          <a href="#">Log Out</a>
        </p>
      </div>
    </div>
  </div>
</template>
