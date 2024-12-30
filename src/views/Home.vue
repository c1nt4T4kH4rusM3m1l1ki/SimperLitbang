<template>
  <div>
    <h1 class="text-decoration-underline">Selamat Datang</h1>
    <div class="row mt-4">
      <div class="col-12 col-md-4 mb-4 text-center" v-for="data in dataCard" :key="data.judul">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fs-4">{{ data.judul }}</h5>
            <p class="card-text">{{ data.deskripsi }}</p>
            <RouterLink :to="data.link" class="btn btn-success d-block mx-auto"> Lihat </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dataCard = ref([
  {
    judul:'Perencanaan',
    deskripsi:'Target RPJMD, Sasaran, Tujuan, Renstra, Renja, RKA dan Lain sebagainya',
    link:'/perencanaan',
  }
])

</script>