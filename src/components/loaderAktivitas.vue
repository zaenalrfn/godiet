<style>
.boxAk {
  width: auto;
  height: 58px;
  background-color: #e4f3f9;
  margin: 24px;
  border-radius: 24px;
  animation: animaAk 600ms infinite;
  opacity: 50%;
}
@keyframes animaAk {
  100% {
    opacity: 100%;
  }
}
</style>
<template>
  <div class="loaderAk">
    <div class="boxAk"></div>
    <div class="boxAk"></div>
    <div class="boxAk"></div>
    <div class="boxAk"></div>
  </div>
</template>
<script>
export default {
  name: "loaderAk",
};
</script>
