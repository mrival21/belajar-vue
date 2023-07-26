<script setup>
import { Carousel } from 'flowbite-vue'
const pictures = [
  {
    'src': 'https://im.uniqlo.com/global-cms/spa/resdc5a032682e2cc2b151f0366df10f957fr.jpg',
    'alt': 'Picture 1',
  },
  {
    'src': 'https://s0.bukalapak.com/img/578463735/w-1000/BAJU_KAOS_KERAH_POLO_SHIRT_FASHION_PRIA_KAOS_KERAH.JPG',
    'alt': 'Picture 2',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'alt': 'Picture 3',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'alt': 'Picture 4',
  },
  {
    'src': 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'alt': 'Picture 5',
  },
]
</script>
<template>
  <Carousel :pictures="pictures" class="mb-20"></Carousel>
</template>
