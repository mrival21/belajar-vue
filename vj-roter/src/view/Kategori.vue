<template>
    <h1>Kategori</h1>
    <div class="flex-container">
        <div v-for="Kategori in state" :key="Kategori.id" class="card"> 
          <img :src="getImgSrc(Kategori.img)" alt="">
            <router-link class="container" :to="{name: 'DetailKategori', params: {id_kategori: Kategori.id}}">
                <h4>{{ Kategori.nama1 }}</h4>
            </router-link>
        </div>
    </div>
</template>

<script>
  import { onMounted, reactive } from 'vue';
import { Kategori } from '../assets/Kategori';

  export default{
    setup(props, Context){
        const state = reactive(Kategori["Kategori"]);

        const getImgSrc = (imgFileName) => {
        return '../src/assets/img/' + imgFileName + ''
      }

      onMounted(() => {
        Context.emit("id-menu", 5);
      });
      return {
        state,
        getImgSrc
      }
    }
  }
</script>
<style scoped>

.card{
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2) ;
}
.container{
    padding: 2px 16px;
}

img {
  width: 100px;
}
</style>