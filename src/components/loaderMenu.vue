<style scoped>
.loader-img {
  width: auto;
  height: 199px;
  background-color: #e4f3f9;
  border-radius: 30px;
  margin: 10px;
  animation: animaLoader 600ms ease-in infinite;
  opacity: 50%;
}
.loader-title {
  width: 100px;
  height: 40px;
  background-color: #e4f3f9;
  border-radius: 30px;
  margin: 10px;
  animation: animaLoader 600ms ease-in infinite;
  margin-top: 20px;
  opacity: 50%;
}
.loader-info {
  display: flex;
}
.loader-box {
  width: 57.31px;
  height: 45.55px;
  background-color: #e4f3f9;
  border-radius: 15px;
  margin: 10px;
  animation: animaLoader 600ms ease-in infinite;
  opacity: 50%;
}

@keyframes animaLoader {
  100% {
    opacity: 100%;
  }
}
</style>
<template>
  <div class="loader">
    <div class="loader-img"></div>
    <div class="loader-title"></div>
    <div class="loader-info">
      <div class="loader-box"></div>
      <div class="loader-box"></div>
      <div class="loader-box"></div>
      <div class="loader-box"></div>
    </div>
  </div>
  <div class="loader">
    <div class="loader-img"></div>
    <div class="loader-title"></div>
    <div class="loader-info">
      <div class="loader-box"></div>
      <div class="loader-box"></div>
      <div class="loader-box"></div>
      <div class="loader-box"></div>
    </div>
  </div>
  <div class="loader">
    <div class="loader-img"></div>
    <div class="loader-title"></div>
    <div class="loader-info">
      <div class="loader-box"></div>
      <div class="loader-box"></div>
      <div class="loader-box"></div>
      <div class="loader-box"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loader",
};
</script>
