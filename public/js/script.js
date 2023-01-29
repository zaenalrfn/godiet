// BAGIAN POPUP LOGOUT
let popup = document.querySelector(".popup");

const Logout = () => {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
};
const Tidak = () => {
  popup.style.display = "";
  document.body.style.overflow = "";
};
// BAGIAN GERAK AKTIVITAS
// let gerakKembali = document.getElementById("gerak-kembali"),
//   popGerak = document.querySelector(".popGerak");
// gerakKembali.onclick = () => {
//   popGerak.style.display = "none";
//   document.body.style.overflow = "";
// };
const HitungKalori = () => {
  popGerak.style.display = "flex";
  document.body.style.overflow = "hidden";
};
// BAGIAN ALERT INPUT
let InputBb = document.getElementById("berat-badan"),
  InputTb = document.getElementById("tinggi-badan"),
  InputUmur = document.getElementById("umur");

const Cek = () => {
  if (InputBb.value == "" && InputTb.value == "") {
    InputBb.classList.add("input-alert");
    InputTb.classList.add("input-alert");
    InputUmur.classList.add("input-alert");
  } else {
    InputBb.classList.remove("input-alert");
    InputTb.classList.remove("input-alert");
    InputUmur.classList.remove("input-alert");
  }
};

// BAGIAN POPUP CEK HALAMAN UTAMA
const notifyCek = "notifyCek";
let popupCek = document.querySelector(".popup-cek"),
  cekHu = document.getElementById("cekHu");
setTimeout(function () {
  popupCek.style.top = "0";
  document.body.style.overflow = "hidden";
}, 1000);
cekHu.onclick = () => {
  localStorage.setItem(notifyCek, "true");
  NotifyCek();
};
function NotifyCek() {
  if (localStorage.getItem(notifyCek)) {
    popupCek.style.display = "none";
    document.body.style.overflow = "none";
  }
}
NotifyCek();

// API
// aktivitas kalori : https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb
// menu diet : https://rapidapi.com/spoonacular/api/recipe-food-nutrition
