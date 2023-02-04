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
          <h1 class="titleHU text-center">Aktivitas Kalori</h1>
        </div>
        <div class="col-2" id="title">
          <!-- <img src="asset/img/Frame 14.png" /> -->
        </div>
      </div>
    </div>

    <div id="fiturMenu-aktivitas">
      <div class="row justify-content-center">
        <!-- <div
          class="col-md-6"
          v-for="aktivi in aktivitas"
          v-bind:key="aktivi.id"
        >
          <div class="card aktivitas">
            <img
              :src="aktivi.gifUrl"
              class="card-img-top"
              alt="..."
              :width="103"
              :height="146"
            />
            <div class="card-body">
              <h5 class="card-title">
                {{ aktivi.name }} <span class="text-warning">Detik x 3</span>
              </h5>
            </div>
          </div>
        </div> -->
        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center mb-4" id="satu">
            <div class="card-body text-center">
              <RouterLink to="/aktivitasGerak">
                <h4 class="text-white">latihan rumahan</h4>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-aktivitas d-flex align-items-center mb-4" id="satu">
            <div class="card-body text-center">
              <RouterLink to="/aktivitasGerak">
                <h4 class="text-white">latihan rumahan</h4>
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-4">
          <div
            v-for="aktivi in aktivitas"
            v-bind:key="aktivi.id"
            class="card-aktivitas d-flex align-items-center mb-4"
            id="satu"
          >
            <div class="card-body text-center">
              <RouterLink v-bind:to="/aktivitasGerak/ + aktivi.id">
                <h4 class="text-white">{{ aktivi.name }}</h4>
              </RouterLink>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      aktivitas: [],
    };
  },
  mounted() {
    // let self = this;
    // const options = {
    //   method: "GET",
    //   url: `https://zylalabs.com/api/392/exercise+database+api/310/list+exercise+by+body+part?bodypart=cardio`,
    //   headers: {
    //     Authorization: "Bearer 639|dwzLZuBqnS0ZgiGLjMBa1VTPpHoFYnVBlgxwpLQa",
    //   },
    // };
    // axios(options)
    //   .then(function (response) {
    //     if (response.data.length > 14) {
    //       response.data.pop();
    //       self.aktivitas = response.data;
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  },
};
</script>
