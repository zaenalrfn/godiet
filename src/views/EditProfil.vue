<template>
  <div class="container">
    <div class="row" id="edit-profil">
      <div class="profil">
        <div class="btn-edit-profil d-flex justify-content-between">
          <RouterLink to="/profil">
            <a href="#">Batal</a>
          </RouterLink>
          <h2>Edit Profil</h2>
          <a href="#" @click="Selesai">selesai</a>
        </div>
        <div class="img-edit-profil text-center">
          <img
            :src="fileGambar"
            alt="profil"
            width="125"
            height="125"
            class="rounded-circle"
          />
          <div class="file">
            Ganti Foto Profil
            <input type="file" name="file" @change="uploadGambar" />
          </div>
        </div>
      </div>
      <div class="col">
        <form action="" class="form">
          <h5>Nama</h5>
          <input type="text" v-model="namaUpdate" class="input-edit-nama" />
          <h5>Status</h5>
          <input type="text" v-model="statusUpdate" class="input-edit-status" />
        </form>
      </div>
      <div class="logout d-flex gap-2">
        <h4><i class="bi bi-box-arrow-right"></i></h4>
        <p id="popup-logout">
          <a href="#" @click="LogoutPopup('btnTrigger')"> Log Out </a>
        </p>
      </div>
    </div>
  </div>
  <PopupLogout
    v-if="LogoutTriggers.btnTrigger"
    :LogoutPopup="() => LogoutPopup('btnTrigger')"
  />
</template>

<script>
import { ref } from "vue";
import PopupLogout from "../components/popUpLogout.vue";
export default {
  components: {
    PopupLogout,
  },
  data() {
    const LogoutTriggers = ref({
      btnTrigger: false,
    });
    const LogoutPopup = (trigger) => {
      LogoutTriggers.value[trigger] = !LogoutTriggers.value[trigger];
    };
    return {
      namaUpdate: "",
      statusUpdate: "",
      fileGambar: null,
      LogoutTriggers,
      LogoutPopup,
    };
  },
  methods: {
    Selesai() {
      let inputEditNama = document.querySelector(".input-edit-nama"),
        inputEditStatus = document.querySelector(".input-edit-status");
      if (this.namaUpdate === "" || this.statusUpdate === "") {
        inputEditNama.classList.add("input-alert");
        inputEditStatus.classList.add("input-alert");
      } else {
        inputEditNama.classList.remove("input-alert");
        inputEditStatus.classList.remove("input-alert");
        localStorage.setItem("nama-update", this.namaUpdate);
        localStorage.setItem("status-update", this.statusUpdate);
        this.$router.push({ name: "profil" });
      }
    },
    uploadGambar(e) {
      var gambar = e.target;
      if (gambar.files && gambar.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.fileGambar = e.target.result;
          localStorage.setItem("url-gambar", this.fileGambar);
        };
        reader.readAsDataURL(gambar.files[0]);
      }
    },
  },
};
</script>
