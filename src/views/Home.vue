<template>
  <div>
    <h2 class="text-decoration-underline text-center">Selamat Datang</h2>
    <div class="row mt-5">
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

const dataCard = ref(
  [
  {
    judul: "PERENCANAAN",
    deskripsi: "Target RPJMD, Sasaran, Tujuan, Renstra, Renja, RKA dan Lain sebagainya",
    link: "/perencanaan"
  },
  {
    judul: "KEPEGAWAIAN",
    deskripsi: "Jumlah Pegawai, Struktur Organisasi, DUK dan Lain sebagainya",
    link: "/kepegawaian"
  },
  {
    judul: "PELAPORAN",
    deskripsi: "LKPJ, Realisasi Fisik Keuangan, Evaluasi Renja, Magister Resiko, dan Lain sebagainya",
    link: "/laporan"
  },
  {
    judul: "KEGIATAN",
    deskripsi: "Bentuk Kegiatan, progres, tindak lanjut kegiatan dan lain-lain",
    link: "/kegiatan"
  },
  {
    judul: "PERATURAN",
    deskripsi: "Peraturan yang berkenaan dengan pelaksanaan kegiatan",
    link: "/peraturan"
  },
  {
    judul: "KEUANGAN",
    deskripsi: "Pencairan dana dalam jangka waktu tertentu",
    link: "/keuangan"
  }
]

)

</script>