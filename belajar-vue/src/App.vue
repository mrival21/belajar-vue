<template>
  <div id="tugas">
    <h2>Formulir Siswa</h2>
    <form @submit.prevent="submitForm">
      <label for="nama">Nama : </label>
      <input type="text" id="nama" v-model="kontak.nama" required/>
      <br>
      <label for="kelas">Kelas :</label>
      <input type="kelas" id="kelas" v-model="kontak.kelas" required />
      <br>
      <label for="alamat">Alamat :</label>
      <input type="alamat" id="alamat" v-model="kontak.alamat" required />
      <br>
      <label for="matematika">Nilai Matematika :</label>
      <input type="matematika" id="matematika" v-model="kontak.matematika" required />
      <br>
      <label for="indonesia">nilai Bahasa Indonesia :</label>
      <input type="indonesia" id="indonesia" v-model="kontak.indonesia" required />
      <br>
      <label for="ipa">Nilai Ipa :</label>
      <input type="ipa" id="ipa" v-model="kontak.ipa" required />
      <br>
      <button type="submit">Kirim</button>
    </form>
    <div v-if="showResult">
      nama : {{ name }} <br>
      kelas : {{ kelas }} <br>
      alamat : {{ alamat }} <br>
      matematika : {{ matematika }} <br>
      indonesia : {{ indonesia }} <br>
      ipa : {{ ipa }} <br>
      total : {{ total }} <br>
      keterangan : {{ keterangan }}
    </div>
</div>  
</template>

<script>

import { ref } from 'vue';

export default {
  data() {
    return {
      kontak: {
        nama: ref(''),
        kelas: ref(''),
        alamat: ref(''),
        matematika: ref(''),
        indonesia: ref(''),
        ipa: ref(''),
        total: ref(''),
        keterangan: ref(''),
      },
      showResult: ref(false),
      name: ref(''),
      kelas: ref(''),
      alamat: ref(''),
      matematika: ref(''),
      indonesia: ref(''),
      ipa: ref(''),
      total: 0,
      keterangan: ref(''),
    };

  },
  methods: {
    submitForm() {
      this.name = this.kontak.nama;
      this.kelas = this.kontak.kelas;
      this.alamat = this.kontak.alamat;
      this.matematika = this.kontak.matematika;
      this.indonesia = this.kontak.indonesia;
      this.ipa = this.kontak.ipa;
      this.total = parseInt(this.matematika) + parseInt(this.indonesia) + parseInt(this.ipa);
      if (this.total > 240){
        this.keterangan = "lulus"
      } else {
        this.keterangan = "tidak lulus"
      }
      this.showResult = true;
    },
  },
};
</script>