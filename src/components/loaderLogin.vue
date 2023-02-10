<template>
  <div class="container">
    <div id="fiturMenu-aktivitas">
      <div class="row justify-content-center gap-3 text-center">
        <div class="col-md-3">
          <img src="/img/healt.gif" :width="358" />
        </div>

        <div class="col-md-3">
          <h4>Selamat datang di</h4>
        </div>

        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loaderLogin",
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "home" });
    }, 2000);
  },
};
</script>
